type TrackInfoProps = {
  url: string;
  image: string;
  title: string;
  artist: string;
};

const TrackInfo = ({ url, image, title, artist }: TrackInfoProps) => {
  return (
    <>
      <a
        href={url}
        target="_blank"
        className="flex items-center hover:bg-gray-700/60 pr-2 rounded-lg col-span-2 align-middle space-x-4"
      >
        <img
          src={image}
          alt={title}
          className="w-16 h-16 aspect-square rounded-lg"
        />
        <div className="flex flex-col overflow-hidden align-middle">
          <p className="truncate font-bold" title={title}>
            {title}
          </p>
          <p className="truncate text-sm" title={artist}>
            {artist}
          </p>
        </div>
      </a>
    </>
  );
};

export default TrackInfo;