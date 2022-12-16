export default function SpotifyLoading() {
  return (
    <div className="w-full md:w-96 animate-pulse">
      <div>
        <div className="flex flex-col h-20 text-center justify-center align-middle items-center rounded-lg shadow-md cursor-pointer bg-gradient-to-r from-gray-600 via-gray-700 border-2 border-white/30 to-gray-800 backdrop-blur-md p-2">
          <span className="text-center text-white font-semibold text-lg">
            Loading track...
          </span>
        </div>
      </div>
    </div>
  );
}
