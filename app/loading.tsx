export default function Loading() {
  return (
    <>
      <main className="w-screen h-screen bg-gradient p-6">
        <div className="flex flex-col w-full h-full justify-center items-center align-middle">
          <span className="box text-white animate-pulse max-w-lg md:max-w-xl">
            Loading page...
          </span>
        </div>
      </main>
    </>
  );
}
