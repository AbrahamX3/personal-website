import { ArrowRight } from "lucide-react";
import localFont from "next/font/local";
import Link from "next/link";

const cabinet_grotesk = localFont({
  variable: "--font-cabinet-grotesk",
  src: [
    {
      path: "../fonts/CabinetGrotesk-Extrabold.woff2",
    },
  ],
});

const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    {
      path: "../fonts/Satoshi-Medium.woff2",
    },
  ],
});

export default function NotFound() {
  return (
    <div className={`${satoshi.variable} ${cabinet_grotesk.variable}`}>
      <div className="flex flex-col text-white font-satoshi items-center h-screen w-screen justify-center bg-gradient">
        <div className="font-bold text-8xl font-cabinet-grotesk">404</div>

        <div className="font-medium text-4xl pt-4 pb-6">
          This page does not exist
        </div>

        <Link
          href="/"
          className="rounded-lg flex gap-x-2 items-center font-satoshi align-middle border-2 border-white/10 bg-white/10 px-2 py-1 text-center text-white backdrop-blur-md transition-colors duration-150 ease-in hover:border-white/30"
        >
          <span>Go Home</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
