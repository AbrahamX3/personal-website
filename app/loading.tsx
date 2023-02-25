export default function Loading() {
  return (
    <>
      <main className="bg-gradient flex h-full min-h-screen w-full flex-col justify-center align-middle">
        <div className="flex h-full w-full flex-col items-center justify-center align-middle">
          <span className="max-w-lg animate-pulse font-cabinet-grotesk text-lg font-bold text-white md:max-w-xl md:text-xl">
            Loading page...
          </span>
        </div>
      </main>
    </>
  );
}
