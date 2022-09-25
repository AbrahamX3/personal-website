const RefreshButton = ({ handleClick }: any) => {
  return (
    <>
      <div className="h-7 rounded-xl w-[1px] bg-white/60 items-center justify-center align-middle hidden sm:flex" />

      <button onClick={handleClick} title="Refresh">
        <svg
          className="w-6 h-6 duration-150 transition-all ease-in block hover:text-spotify-green text-spotify-gray"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="currentColor"
            d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795z"
          />
        </svg>
      </button>
    </>
  );
};

export default RefreshButton;
