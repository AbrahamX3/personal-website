import { Suspense } from "react";
import SpotifyLoading from "./components/SpotifyLoading";
import SpotifyPlaying from "./components/SpotifyPlaying";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import About from "./components/About";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Abraham | Full-Stack Web Developer",
  description: "Abraham's Personal Website - Full-Stack Web Developer",
  openGraph: {
    title: "Abraham | Full-Stack Web Developer",
    description: "Abraham's Personal Website - Full-Stack Web Developer",
    url: "https://abraham-dev.tech/",
    siteName: "Abraham | Full-Stack Web Developer",
    images: [
      {
        url: "https://res.cloudinary.com/dtv26hpd7/image/upload/ar_1:1,bo_1px_solid_rgb:ffffff,c_fill,g_auto,o_100,r_max,w_1000/v1672724832/abraham_icon.png",
        width: 1002,
        height: 1002,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

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
