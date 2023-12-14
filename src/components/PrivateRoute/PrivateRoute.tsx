import { type PropsWithChildren } from "react";
import { getServerUser } from "~/utils/auth";
import { PrivateRouteBase } from "./PrivateRouteBase";

export const PrivateRoute = async ({ children }: PropsWithChildren) => {
  const user = await getServerUser();

  if (!user) return null; // Prevent server side render of authorized page

  return <PrivateRouteBase>{children}</PrivateRouteBase>;
};
