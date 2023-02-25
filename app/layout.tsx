export const dynamic = "force-dynamic";

import "./globals.css";
import localFont from "next/font/local";
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
      className={`${satoshi.variable} ${cabinet_grotesk.variable} scroll-smooth font-satoshi scrollbar-thin scrollbar-track-white/20 scrollbar-thumb-white/60 scrollbar-thumb-rounded-md selection:bg-white/40 selection:text-black/50`}
    >
      <head>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/dtv26hpd7/image/upload/ar_1:1,bo_1px_solid_rgb:ffffff,c_fill,g_auto,o_100,r_max,w_1000/v1672724832/abraham_icon.png"
          type="image/x-icon"
        />
      </head>
      <body>
        {children}
        <VercelAnalytics />
      </body>
    </html>
  );
}
