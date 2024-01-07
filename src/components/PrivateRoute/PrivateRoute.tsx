import { type PropsWithChildren } from "react";
import { getServerUser } from "~/utils/auth";
import { PrivateRouteBase } from "./PrivateRouteBase";

export const PrivateRoute = async ({ children }: PropsWithChildren) => {
  const user = await getServerUser();

  // prevent server side render of authorized page
  const view = !user ? null : children;

  return <PrivateRouteBase>{view}</PrivateRouteBase>;
};
