import {
  createTRPCProxyClient,
  loggerLink,
  TRPCClientError,
} from "@trpc/client";
import { cookies, headers } from "next/headers";

import { appRouter } from "~/server/api/root";
import { transformer } from "./shared";
import { cache } from "react";
import { createTRPCContext } from "~/server/api/trpc";
import { observable } from "@trpc/server/observable";
import { callProcedure } from "@trpc/server";
import { type TRPCErrorResponse } from "@trpc/server/rpc";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a tRPC call from a React Server Component.
 */
const createContext = cache(() => {
  const heads = new Headers(headers());
  const ckies = cookies();
  const mappedCookies = new Map(ckies);
  const accessToken = mappedCookies.get("access-token")?.value;

  if (accessToken) {
    heads.set("authorization", accessToken);
  }

  heads.set("x-trpc-source", "rsc");
  heads.set("cookie", ckies.toString());

  return createTRPCContext({
    headers: heads,
  });
});

export const api = createTRPCProxyClient<typeof appRouter>({
  transformer,
  links: [
    loggerLink({
      enabled: (op) =>
        process.env.NODE_ENV === "development" ||
        (op.direction === "down" && op.result instanceof Error),
    }),
    /**
     * Custom RSC link that invokes procedures directly in the server component Don't be too afraid
     * about the complexity here, it's just wrapping `callProcedure` with an observable to make it a
     * valid ending link for tRPC.
     */
    () =>
      ({ op }) =>
        observable((observer) => {
          createContext()
            .then((ctx) => {
              return callProcedure({
                procedures: appRouter._def.procedures,
                path: op.path,
                rawInput: op.input,
                ctx,
                type: op.type,
              });
            })
            .then((data) => {
              observer.next({ result: { data } });
              observer.complete();
            })
            .catch((cause: TRPCErrorResponse) => {
              observer.error(TRPCClientError.from(cause));
            });
        }),
  ],
});
