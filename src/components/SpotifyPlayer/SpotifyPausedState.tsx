type PasuedStateProps = {
  isPlaying: boolean;
  children: React.ReactNode;
};

const PasuedState = ({ isPlaying, children }: PasuedStateProps) => {
  if (isPlaying) {
    return <></>;
  } else {
    return (
      <>
        <div className="flex absolute z-10 opacity-80 flex-col w-full h-28 justify-center align-middle items-center rounded-lg shadow-md cursor-pointer bg-gradient-to-r from-gray-600 via-gray-700 border-2 border-white/30 to-gray-800 backdrop-blur-md p-2">
          <div className="flex items-center align-middle space-x-2">
            <span className="font-bold text-white">PAUSED</span>
            {children}
          </div>
        </div>
      </>
    );
  }
};

export default PasuedState;
