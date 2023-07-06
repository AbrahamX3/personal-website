import { Suspense } from "react";
import SpotifyLoading from "@/components/SpotifyLoading";
import SpotifyPlaying from "@/components/SpotifyPlaying";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import Projects from "@/components/Projects";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Abraham | Full-Stack Web Developer",
  description: "Gamer & Full-Stack Web Developer",
  keywords: [
    "next.js",
    "react",
    "typescript",
    "web developer",
    "full-stack",
    "gamer",
    "abraham",
    "web stack",
    "developer",
    "baja california",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Abraham",
    description: "Gamer & Full-Stack Web Developer",
    url: "https://abraham-dev.tech/",
    siteName: "Abraham | Full-Stack Web Developer",
    images: [
      {
        url: "https://res.cloudinary.com/dtv26hpd7/image/upload/ar_1:1,bo_1px_solid_rgb:ffffff,c_fill,g_auto,o_100,r_max,w_1000/v1672724832/abraham_icon.png",
        width: 800,
        height: 600,
        alt: "Abraham Icon",
      },
      {
        url: "https://res.cloudinary.com/dtv26hpd7/image/upload/ar_1:1,bo_1px_solid_rgb:ffffff,c_fill,g_auto,o_100,r_max,w_1000/v1672724832/abraham_icon.png",
        width: 1800,
        height: 1600,
        alt: "Abraham Icon",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abraham | Full-Stack Web Developer",
    description: "Gamer & Full-Stack Web Developer",
    siteId: "3038180873",
    creator: "@x3_abe",
    creatorId: "3038180873",
    images: [
      "https://res.cloudinary.com/dtv26hpd7/image/upload/ar_1:1,bo_1px_solid_rgb:ffffff,c_fill,g_auto,o_100,r_max,w_1000/v1672724832/abraham_icon.png",
    ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function HomePage() {
  return (
    <>
      <main className="bg-gradient flex h-full min-h-screen w-full flex-col justify-center align-middle">
        <div className="mx-auto my-auto flex w-full flex-col justify-center gap-y-5 p-4 align-middle">
          <Intro />
          <Socials />
          <Projects />
          <Skills />
          <Suspense fallback={<SpotifyLoading />}>
            <SpotifyPlaying />
          </Suspense>
        </div>
      </main>
    </>
  );
}
