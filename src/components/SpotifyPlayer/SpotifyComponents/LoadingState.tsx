const LoadingState = () => {
  return (
    <div className="flex w-full h-20 align-middle items-center justify-center space-x-2 rounded-lg shadow-md hover:bg-gray-800/80  bg-gray-800 border-gray-700 p-2">
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
