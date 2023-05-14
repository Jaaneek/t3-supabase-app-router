import { AuthProvider } from "~/providers/AuthProvider";

function RootLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default RootLayout;
