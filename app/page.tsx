import { Suspense } from "react";
import SpotifyLoading from "./components/SpotifyLoading";
import SpotifyPlaying from "./components/SpotifyPlaying";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main className="w-full min-h-screen bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-800 via-slate-400 to-amber-400">
        <div className="container flex space-y-4 flex-col justify-center items-center align-middle w-full min-h-screen mx-auto px-6 py-8">
          <div className="flex flex-col space-y-2 mx-auto w-full items-center align-middle justify-center">
            <Balancer>
              <span className="text-5xl text-white font-bold font-cabinet-grotesk">
                Hey, my name is Abraham!
              </span>
            </Balancer>
            <Balancer>
              <span className="text-xl text-white">
                I&apos;m a web developer based in Baja California, Mexico.
              </span>
            </Balancer>
          </div>

          <div className="mx-auto w-full md:w-1/2 lg:w-1/3">
            <Suspense fallback={<SpotifyLoading />}>
              {/* @ts-expect-error Server Component */}
              <SpotifyPlaying />
            </Suspense>
          </div>

          <div className="flex flex-col items-center align-middle">
            <div className="flex space-x-6 items-center align-middle text-white">
              <Link
                title="Github"
                target="_blank"
                href="https://github.com/AbrahamX3"
              >
                <span className="font-medium hover:text-sky-200 transition-colors ease-in duration-150">
                  Github
                </span>
              </Link>
              <Link
                title="Discord"
                target="_blank"
                href="https://discord.com/users/247971007409684480"
              >
                <span className="font-medium hover:text-sky-200 transition-colors ease-in duration-150">
                  Discord
                </span>
              </Link>
              <Link
                title="Twitter"
                target="_blank"
                href="https://twitter.com/x3_abe"
              >
                <span className="font-medium hover:text-sky-200 transition-colors ease-in duration-150">
                  Twitter
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
