import { withPrivateRoute } from "~/providers/AuthProvider/withPrivateRoute";
import { api } from "~/utils/api";

function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

const Layout = withPrivateRoute(RootLayout);

export default api.withTRPC(Layout);
