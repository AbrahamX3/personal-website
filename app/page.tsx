import { Suspense } from "react";
import SpotifyLoading from "./components/SpotifyLoading";
import SpotifyPlaying from "./components/SpotifyPlaying";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-800 via-slate-400 to-amber-400">
        <div className="container w-full mx-auto grid grid-cols-1 md:grid-cols-2 min-h-screen px-6 py-8">
          <div className="flex flex-col space-y-2 mx-auto w-full">
            <Balancer>
              <span className="text-5xl font-bold font-cabinet-grotesk">
                Hey, my name is Abraham
              </span>
            </Balancer>
            <Balancer>
              <span className="text-xl">
                I&apos;m a web developer based in Baja California, Mexico.
              </span>
            </Balancer>
          </div>

          <div className="mx-auto w-full md:full lg:w-1/2">
            <Suspense fallback={<SpotifyLoading />}>
              {/* @ts-expect-error Server Component */}
              <SpotifyPlaying />
            </Suspense>
          </div>
        </div>
      </main>
    </>
  );
}
