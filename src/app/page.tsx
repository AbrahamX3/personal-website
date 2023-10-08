import { Suspense } from "react";
import SpotifyLoading from "@/components/spotify-loading";
import SpotifyPlaying from "@/components/spotify-playing";
import Intro from "@/components/intro";
import TechStack from "@/components/skills";
import Socials from "@/components/socials";
import Projects from "@/components/projects";

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
  metadataBase: new URL("https://www.abraham.lat"),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Abraham",
    description: "Gamer & Full-Stack Web Developer",
    url: "https://abraham.lat",
    siteName: "Abraham | Full-Stack Web Developer",
    images: [
      {
        url: "https://abraham.lat/icon.webp",
        width: 800,
        height: 600,
        alt: "Abraham's Avatar",
      },
      {
        url: "https://abraham.lat/icon.webp",
        width: 1800,
        height: 1600,
        alt: "Abraham's Avatar",
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
    images: ["https://abraham.lat/icon.webp"],
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
    <main className="bg-gradient flex h-full min-h-screen w-full flex-col justify-center align-middle">
      <div className="mx-auto my-auto flex w-full flex-col justify-center gap-y-5 p-4 align-middle">
        <Intro />
        <Socials />
        <Projects />
        <TechStack />
        <Suspense fallback={<SpotifyLoading />}>
          <SpotifyPlaying />
        </Suspense>
      </div>
    </main>
  );
}
