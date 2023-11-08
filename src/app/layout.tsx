import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import { GeistSans } from "geist/font";
import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={clsx(
        GeistSans.variable,
        "scroll-smooth font-satoshi scrollbar-thin scrollbar-track-white/20 scrollbar-thumb-white/60 scrollbar-thumb-rounded-md selection:bg-white/40 selection:text-black/50",
      )}
    >
      <head>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/dtv26hpd7/image/upload/ar_1:1,bo_1px_solid_rgb:ffffff,c_fill,g_auto,o_100,r_max,w_1000/v1672724832/abraham_icon.png"
          type="image/x-icon"
        />
      </head>
      <body>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
