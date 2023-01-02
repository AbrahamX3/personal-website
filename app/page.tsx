// import { Suspense } from "react";
// import SpotifyLoading from "./components/SpotifyLoading";
// import SpotifyPlaying from "./components/SpotifyPlaying";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import About from "./components/About";
import Link from "next/link";
import Image from "next/image";

export default async function HomePage() {
  function GetBaseUrl() {
    const baseUrl = process.env.BASE_URL
      ? process.env.BASE_URL
      : "http://localhost:3000";
    return baseUrl;
  }

  async function GetSpotifyData() {
    const url = GetBaseUrl() + "/api/spotify";
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
  const data = await GetSpotifyData();
  return (
    <>
      <main className="w-full min-h-screen bg-gradient">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-2 min-h-screen mx-auto p-4">
          <div className="flex flex-col col-span-1 justify-center space-y-6 align-middle">
            <Intro />
            <Socials />
            <Skills />
          </div>

          <div className="flex flex-col col-span-1 justify-center mx-auto align-middle">
            <About />
            <div className="mx-auto w-full md:w-full lg:1/2">
              {data.isPlaying ? (
                <div className="w-full">
                  <div>
                    <div className="grid grid-cols-3 h-20 text-center place-self-center place-content-center place-items-center rounded-lg shadow-md cursor-pointer bg-white/10 border-2 border-white/30 backdrop-blur-md p-2">
                      <div className="flex flex-col align-middle place-self-start">
                        <Image
                          src={data.cover}
                          alt={data.title}
                          title={data.title}
                          width={150}
                          height={150}
                          className="w-16 h-16 aspect-square rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col text-white overflow-hidde w-full space-y-1 align-middle">
                        <Link
                          href={data.url}
                          target="_blank"
                          className="truncate font-bold"
                          title={data.title}
                          aria-label="Open Current Song on Spotify"
                        >
                          {data.title}
                        </Link>
                        <p className="truncate text-sm" title={data.artist}>
                          {data.artist}
                        </p>
                      </div>
                      <div className="flex flex-col align-middle place-self-center ml-auto">
                        <Link
                          href="https://open.spotify.com/user/reaker911x?si=865666beb0ca4d79"
                          target="_blank"
                          aria-label="My Spotify Profile"
                        >
                          <svg
                            className="w-8 h-8"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                            aria-label="Spotify Logo"
                          >
                            <path
                              fill="#1ed760"
                              d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8Z"
                            />
                            <path d="M406.6 231.1c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3zm-31 76.2c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm-26.9 65.6c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full">
                  <div>
                    <div className="flex flex-col h-20 text-center justify-center align-middle items-center rounded-lg shadow-md cursor-pointer bg-white/10 border-2 border-white/30 backdrop-blur-md p-2">
                      <span className="text-center text-white font-semibold text-lg">
                        No track is currently playing.
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
