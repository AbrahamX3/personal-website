type ErrorStateProps = {
  error: string;
  children: React.ReactNode;
};

const ErrorState = ({ children, error }: ErrorStateProps) => {
  return (
    <div className="flex flex-col w-full h-28 justify-center align-middle items-center rounded-lg shadow-md cursor-pointer bg-transparent border-2 border-white/30 to-gray-800 backdrop-blur-md p-2">
      <div className="flex items-center align-middle space-x-2">
        <span className="font-bold text-white">{error}</span>
        {children}
      </div>
    </div>
  );
};

export default ErrorState;
