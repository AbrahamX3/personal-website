const ErrorState = ({ error }: { error: string }) => {
  return (
    <div className="flex w-full h-20 align-middle items-center justify-center space-x-2 rounded-lg shadow-md hover:bg-gray-800/80  bg-gray-800 border-gray-700 p-2">
      <div>{error}</div>
    </div>
  );
};

export default ErrorState;
