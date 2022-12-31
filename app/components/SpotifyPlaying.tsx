import Link from "next/link";
import Image from "next/image";

async function GetSpotifyData() {
  const url = process.env.VERCEL_URL
    ? process.env.VERCEL_URL + "/api/spotify"
    : "http://localhost:3000/api/spotify";

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch data from Spotify API.");

  return res.json();
}

export default async function SpotifyPlaying() {
  const data = await GetSpotifyData();
  console.log(data);
  return (
    <>
      {data.isPlaying ? (
        <div className="w-full">
          <Link href={data.url} target={"_blank"}>
            <div className="grid grid-cols-3 h-20 text-center justify-center align-middle items-center rounded-lg shadow-md cursor-pointer bg-transparent border-2 border-white/30 backdrop-blur-md p-2">
              <Image
                src={data.cover}
                alt={data.title}
                width={500}
                height={500}
                title={data.title}
                className="w-16 h-16 aspect-square rounded-lg col-span-1"
              />
              <div className="flex col-span-1 flex-col overflow-hidden space-y-1 align-middle">
                <p className="truncate font-bold text-white" title={data.title}>
                  {data.title}
                </p>
                <p className="truncate text-sm text-white" title={data.artist}>
                  {data.artist}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <div className="w-full">
          <div>
            <div className="flex flex-col h-20 text-center justify-center align-middle items-center rounded-lg shadow-md cursor-pointer bg-transparent border-2 border-white/30 backdrop-blur-md p-2">
              <span className="text-center text-white font-semibold text-lg">
                No track is currently playing.
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
