export default function SpotifyLoading() {
  return (
    <div className="w-full animate-pulse">
      <div>
        <div className="flex h-20 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 p-2 text-center align-middle shadow-md backdrop-blur-md">
          <span className="text-center text-lg font-semibold text-white">
            Loading track...
          </span>
        </div>
      </div>
    </div>
  );
}
