import { type PropsWithChildren } from "react";
import { PublicRoute } from "~/components/PublicRoute/PublicRoute";

const Layout = async ({ children }: PropsWithChildren) => {
  return <PublicRoute>{children}</PublicRoute>;
};

export default Layout;
