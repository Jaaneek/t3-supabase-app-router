import { type PropsWithChildren } from "react";
import { PrefetchTRPCQuery } from "~/components/PrefetchTRPCQuery/PrefetchTRPCQuery";
import { PrivateRoute } from "~/components/PrivateRoute/PrivateRoute";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <PrivateRoute>
      <PrefetchTRPCQuery queryName="auth.getProfile">
        {children}
      </PrefetchTRPCQuery>
    </PrivateRoute>
  );
}
