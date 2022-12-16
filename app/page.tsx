import { Suspense } from "react";
import SpotifyLoading from "./components/SpotifyLoading";
import SpotifyPlaying from "./components/SpotifyPlaying";

export default function Home() {
  return (
    <>
      <main className="w-full min-h-screen from-slate-900 via-slate-700 to-slate-600 bg-gradient-to-b">
        <div className="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              <span className="block">Hey, my name is</span>
              <span className="block">Abraham</span>
            </h1>
          </div>

          <div>
            <p className="mt-4 text-lg text-gray-300 md:text-xl">
              I&apos;m a web developer based in Baja California, Mexico.
            </p>
          </div>
          <Suspense fallback={<SpotifyLoading />}>
            {/* @ts-expect-error Server Component */}
            <SpotifyPlaying />
          </Suspense>
        </div>
      </main>
    </>
  );
}
