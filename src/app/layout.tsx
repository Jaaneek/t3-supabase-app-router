// @TODO CHANGE THE METADATA
export const metadata = {
  title: "t3-app-dir-supabase",
  description: "Boilerplate for t3-app-dir-supabase.",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <head />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <body>{children}</body>
      </html>
    </>
  );
}
export default RootLayout;
