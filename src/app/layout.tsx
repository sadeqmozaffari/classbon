import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  adjustFontFallback: false,
});
const dana = localFont({
  src: [
    {
      path: "../../public/fonts/Dana/woff2/Dana-Hairline.woff2",
      weight: "10",
      style: "normal",
    },
    {
      path: "../../public/fonts/Dana/woff2/Dana-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Dana/woff2/Dana-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Dana/woff2/Dana-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Dana/woff2/Dana-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Dana/woff2/Dana-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Dana/woff2/Dana-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Dana/woff2/Dana-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Dana/woff2/Dana-ExtraBlack.woff2",
      weight: "930",
      style: "normal",
    },
    {
      path: "../../public/fonts/Dana/woff2/Dana-Heavy.woff2",
      weight: "960",
      style: "normal",
    },
    {
      path: "../../public/fonts/Dana/woff2/Dana-Fat.woff2",
      weight: "990",
      style: "normal",
    },
    {
      path: "../../public/fonts/Dana/woff2/Dana-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-dana",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      dir="rtl"
      className={`dark ${figtree.variable} ${dana.variable}`}>
      <body className="grid grid-rows-[80px_1fr_auto] min-h-screen font-bold uppercase dark:bg-base-100 dark:text-base-content">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
