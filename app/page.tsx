import { Suspense } from "react";
import SpotifyLoading from "./components/SpotifyLoading";
import SpotifyPlaying from "./components/SpotifyPlaying";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import About from "./components/About";
import { Metadata } from "next";

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
      <main className="bg-gradient flex h-full min-h-screen w-full flex-col justify-center align-middle">
        <div className="mx-auto my-auto flex w-full flex-col justify-center gap-y-5 p-4 align-middle">
          <Intro />
          <Socials />
          <Skills />
          <Suspense fallback={<SpotifyLoading />}>
            {/* @ts-expect-error Server Component */}
            <SpotifyPlaying />
          </Suspense>
        </div>
      </main>
    </>
  );
}
