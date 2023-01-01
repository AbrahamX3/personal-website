import "./globals.css";
import localFont from "@next/font/local";
import { VercelAnalytics } from "./components/VercelAnalytics";

const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    {
      path: "./fonts/Satoshi-Medium.woff2",
    },
  ],
});

const cabinet_grotesk = localFont({
  variable: "--font-cabinet-grotesk",
  src: [
    {
      path: "./fonts/CabinetGrotesk-Extrabold.woff2",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${cabinet_grotesk.variable} font-satoshi scroll-smooth scrollbar-track-white/20 scrollbar-thumb-rounded-md scrollbar-thin scrollbar-thumb-white/60 selection:bg-white/40 selection:text-black/50`}
    >
      <body>
        {children}
        <VercelAnalytics />
      </body>
    </html>
  );
}
