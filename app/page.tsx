import { Suspense } from "react";
import SpotifyLoading from "./components/SpotifyLoading";
import SpotifyPlaying from "./components/SpotifyPlaying";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import About from "./components/About";

export default async function HomePage() {
  return (
    <>
      <main className="w-full min-h-screen bg-gradient">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2 min-h-screen mx-auto p-4">
          <div className="flex flex-col col-span-1 justify-center space-y-6 align-middle">
            <Intro />
            <Socials />
            <Skills />
          </div>

          <div className="flex flex-col items-center col-span-1 justify-center mx-auto align-middle">
            <About />
            <div className="mx-auto w-full md:w-full lg:1/2 mt-6">
              <Suspense fallback={<SpotifyLoading />}>
                {/* @ts-expect-error Server Component */}
                <SpotifyPlaying />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
