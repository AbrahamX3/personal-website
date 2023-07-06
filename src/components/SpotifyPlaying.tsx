import Link from "next/link";
import Image from "next/image";
import { GetBaseURL } from "@/app/utils";

interface ISpotifyTrack {
  isPlaying: boolean;
  title?: string;
  artist_name?: string;
  artist_url?: string;
  url?: string;
  cover?: string;
  repeat_state?: string;
  shuffle_state?: boolean;
  progress_ms?: number;
  duration_ms?: number;
}

export const fetchCache = "force-no-store";

export default async function SpotifyPlaying() {
  async function GetSpotifyData(): Promise<ISpotifyTrack> {
    const res = await fetch(GetBaseURL() + "/api/spotify", {
      method: "GET",
      cache: "no-store",
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
        <div className="mx-auto w-full md:w-1/2">
          <div className="grid h-20 cursor-pointer grid-cols-8 place-content-center place-items-center gap-4 place-self-center rounded-lg border-2 border-white/30 bg-white/10 p-2 text-center shadow-md backdrop-blur-md">
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
            <div className="col-span-6 flex w-full flex-col gap-y-1 overflow-hidden align-middle text-white">
              <a
                href={data.url}
                target="_blank"
                className="truncate font-bold"
                title={data.title}
                aria-label="Open Current Song on Spotify"
              >
                <span>{data.title}</span>
              </a>
              <a
                href={data.artist_url}
                target="_blank"
                className="truncate font-bold"
                title={data.title}
                aria-label="Open Current Song on Spotify"
              >
                <p className="truncate text-sm" title={data.artist_name}>
                  {data.artist_name}
                </p>
              </a>
            </div>
            <div className="ml-auto flex flex-col place-self-center align-middle">
              <a
                href="https://open.spotify.com/user/reaker911x?si=865666beb0ca4d79"
                target="_blank"
                aria-label="Spotify Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 64 64"
                  aria-label="Spotify Profile"
                >
                  <path
                    fill="#ffffff"
                    d="M32 0C14.3 0 0 14.337 0 32c0 17.7 14.337 32 32 32 17.7 0 32-14.337 32-32S49.663 0 32 0zm14.68 46.184c-.573.956-1.797 1.223-2.753.65-7.532-4.588-16.975-5.62-28.14-3.097-1.07.23-2.14-.42-2.37-1.49s.42-2.14 1.49-2.37c12.196-2.79 22.67-1.606 31.082 3.556a2 2 0 0 1 .688 2.753zm3.9-8.717c-.726 1.185-2.256 1.53-3.44.84-8.602-5.276-21.716-6.805-31.885-3.747-1.338.382-2.714-.344-3.097-1.644-.382-1.338.344-2.714 1.682-3.097 11.622-3.517 26.074-1.835 35.976 4.244 1.147.688 1.49 2.217.765 3.403zm.344-9.1c-10.323-6.117-27.336-6.69-37.2-3.708-1.568.497-3.25-.42-3.747-1.988s.42-3.25 1.988-3.747c11.317-3.44 30.127-2.753 41.98 4.282 1.415.84 1.873 2.676 1.032 4.09-.765 1.453-2.638 1.912-4.053 1.07z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto w-full md:w-1/2">
          <div className="flex h-20 cursor-pointer flex-row items-center justify-between rounded-lg border-2 border-white/30 bg-white/10 p-4 text-center align-middle shadow-md backdrop-blur-md">
            <span className="text-center text-lg font-semibold text-white">
              Currently not playing any track.
            </span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://open.spotify.com/user/reaker911x?si=3b28057987e841fe"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 64 64"
                aria-label="Spotify Profile"
              >
                <path
                  fill="#ffffff"
                  d="M32 0C14.3 0 0 14.337 0 32c0 17.7 14.337 32 32 32 17.7 0 32-14.337 32-32S49.663 0 32 0zm14.68 46.184c-.573.956-1.797 1.223-2.753.65-7.532-4.588-16.975-5.62-28.14-3.097-1.07.23-2.14-.42-2.37-1.49s.42-2.14 1.49-2.37c12.196-2.79 22.67-1.606 31.082 3.556a2 2 0 0 1 .688 2.753zm3.9-8.717c-.726 1.185-2.256 1.53-3.44.84-8.602-5.276-21.716-6.805-31.885-3.747-1.338.382-2.714-.344-3.097-1.644-.382-1.338.344-2.714 1.682-3.097 11.622-3.517 26.074-1.835 35.976 4.244 1.147.688 1.49 2.217.765 3.403zm.344-9.1c-10.323-6.117-27.336-6.69-37.2-3.708-1.568.497-3.25-.42-3.747-1.988s.42-3.25 1.988-3.747c11.317-3.44 30.127-2.753 41.98 4.282 1.415.84 1.873 2.676 1.032 4.09-.765 1.453-2.638 1.912-4.053 1.07z"
                />
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
