export default function SpotifyLoading() {
  return (
    <div className="w-full animate-pulse">
      <div>
        <div className="flex flex-col h-20 text-center justify-center align-middle items-center rounded-lg shadow-md cursor-pointer bg-white/10 border-2 border-white/30 backdrop-blur-md p-2">
          <span className="text-center text-white font-semibold text-lg">
            Loading track...
          </span>
        </div>
      </div>
    </div>
  );
}
