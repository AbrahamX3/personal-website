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
        <div className="flex absolute opacity-80 flex-col w-full h-28 align-middle items-center justify-center rounded-lg shadow-md cursor-pointer bg-gray-800 border-gray-700 p-2">
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
