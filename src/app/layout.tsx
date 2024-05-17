import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="flex flex-col min-h-screen">
        <header className="flex items-center content-center bg-gray-400">
          Header
        </header>
        <div className="flex flex-1">{children}</div>
        <footer className="flex  items-center content-center bg-gray-400">
          Footer
        </footer>
      </body>
    </html>
  );
}
