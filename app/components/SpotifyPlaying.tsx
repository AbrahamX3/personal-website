import Link from "next/link";
import Image from "next/image";

interface ISpotifyTrack {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  url?: string;
  cover?: string;
  repeat_state?: string;
  shuffle_state?: boolean;
  progress_ms?: number;
  duration_ms?: number;
}

export default async function SpotifyPlaying() {
  async function GetSpotifyData(): Promise<ISpotifyTrack> {
    const res = await fetch(process.env.BASE_URL + "/spotify", {
      method: "GET",
      cache: "no-cache",
    });

    if (!res.ok) {
      return {
        isPlaying: false,
      };
    }

    return res.json();
  }

  const data: ISpotifyTrack = await GetSpotifyData();

  return (
    <>
      {data.isPlaying ? (
        <div className="w-full">
          <div>
            <div className="grid h-20 cursor-pointer grid-cols-3 place-content-center place-items-center gap-4 place-self-center rounded-lg border-2 border-white/30 bg-white/10 p-2 text-center shadow-md backdrop-blur-md">
              <div className="flex flex-col place-self-start align-middle">
                <Image
                  src={data.cover || ""}
                  alt={data.title || ""}
                  title={data.title}
                  width={150}
                  height={150}
                  placeholder="blur"
                  blurDataURL={data.cover}
                  className="aspect-square h-full w-full rounded-lg object-contain xs:h-16 xs:w-16"
                />
              </div>
              <div className="overflow-hidde flex w-full flex-col space-y-1 align-middle text-white">
                <Link
                  href={data.url || ""}
                  target="_blank"
                  className="truncate font-bold"
                  title={data.title}
                  aria-label="Open Current Song on Spotify"
                >
                  <span>{data.title}</span>
                </Link>
                <p className="truncate text-sm" title={data.artist}>
                  {data.artist}
                </p>
              </div>
              <div className="ml-auto flex flex-col place-self-center align-middle">
                <Link
                  href="https://open.spotify.com/user/reaker911x?si=865666beb0ca4d79"
                  target="_blank"
                  aria-label="My Spotify Profile"
                >
                  <svg
                    className="h-8 w-8"
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
            <div className="flex h-20 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 p-2 text-center align-middle shadow-md backdrop-blur-md">
              <span className="text-center text-lg font-semibold text-white">
                No track is currently playing.
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
