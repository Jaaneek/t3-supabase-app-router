import { Hydrate, dehydrate } from "@tanstack/react-query";
import { api as serverApi } from "~/trpc/server";
import { getServerQueryClient } from "~/utils/getQueryClient";
import { type RouterInputs } from "~/trpc/shared";

type AccessPaths<T> = {
  [K in keyof T]: {
    [L in keyof T[K]]: `${string & K}.${string & L}`;
  }[keyof T[K]];
}[keyof T];

type ValueTypeAt<T, P extends string> = P extends `${infer K}.${infer L}`
  ? K extends keyof T
    ? L extends keyof T[K]
      ? T[K][L]
      : never
    : never
  : never;

type ParamsType<T extends AccessPaths<RouterInputs>> = ValueTypeAt<
  RouterInputs,
  T
> extends void | undefined
  ? { params?: undefined }
  : { params: ValueTypeAt<RouterInputs, T> };

export const PrefetchTRPCQuery = async <T extends AccessPaths<RouterInputs>>({
  children,
  queryName,
  params = undefined,
}: {
  children: React.ReactNode;
  queryName: T;
} & ParamsType<T>) => {
  const queryClient = getServerQueryClient();
  const [router, procedure] = queryName.split(".");

  try {
    // Just let the frontend handle it if it fails
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const data = await serverApi[router][procedure].query(params);

    await queryClient.prefetchQuery(
      [[router, procedure], { input: params, type: "query" }],
      () => data,
    );
    const dehydratedState = dehydrate(queryClient);

    return <Hydrate state={dehydratedState}>{children}</Hydrate>;
  } catch (e) {
    console.error(e, "PrefetchTRPCQuery failed");

    return <>{children}</>;
  }
};
