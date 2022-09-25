const LoadingState = () => {
  return (
    <div className="flex justify-center flex-row space-x-2 w-full h-28 align-middle items-center rounded-lg shadow-md cursor-pointer bg-gradient-to-r from-gray-600 via-gray-700 border-2 border-white/30 to-gray-800 backdrop-blur-md p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6 text-spotify-green animate-spin"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M3.055 13H5.07a7.002 7.002 0 0 0 13.858 0h2.016a9.001 9.001 0 0 1-17.89 0zm0-2a9.001 9.001 0 0 1 17.89 0H18.93a7.002 7.002 0 0 0-13.858 0H3.055z"
          fill="currentColor"
        />
      </svg>
      <div>Loading...</div>
    </div>
  );
};

export default LoadingState;
