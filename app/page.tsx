import { Suspense } from "react";
import SpotifyLoading from "./components/SpotifyLoading";
import SpotifyPlaying from "./components/SpotifyPlaying";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import About from "./components/About";

export default function HomePage() {
  const gradients = [
    {
      name: "blue",
      gradient: "bg-gradient-1",
    },
    {
      name: "emerald",
      gradient: "bg-gradient-2",
    },
    {
      name: "gray",
      gradient: "bg-gradient-3",
    },
    {
      name: "sunrise",
      gradient: "bg-gradient-4",
    },
  ];

  const { gradient } = gradients[2];

  return (
    <>
      <main className={`w-full min-h-screen ${gradient}`}>
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 w-full min-h-screen mx-auto py-8 px-4 md:px-4 lg:px-2">
          <div className="flex flex-col col-span-1 justify-center space-y-6 align-middle">
            <Intro />
            <Socials />
            <Skills />
          </div>

          <div className="flex flex-col col-span-1 justify-center mx-auto space-y-6 align-middle">
            <About />
            {/* <div className="mx-auto w-full md:w-full lg:1/2">
              <Suspense fallback={<SpotifyLoading />}>
                <SpotifyPlaying />
              </Suspense>
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
}
