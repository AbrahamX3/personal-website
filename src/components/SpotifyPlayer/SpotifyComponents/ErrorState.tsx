type ErrorStateProps = {
  error: string;
  children: React.ReactNode;
};

const ErrorState = ({ children, error }: ErrorStateProps) => {
  return (
    <div className="flex w-full h-20 align-middle items-center justify-center space-x-2 rounded-lg shadow-md hover:bg-gray-800/80  bg-gray-800 border-gray-700 p-2">
      <div className="flex items-center align-middle space-x-2">
        <span className="font-bold text-white">{error}</span>
        {children}
      </div>
    </div>
  );
};

export default ErrorState;
