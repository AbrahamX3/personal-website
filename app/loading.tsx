export default function Loading() {
  return (
    <>
      <main className="bg-gradient h-screen w-screen p-6">
        <div className="flex h-full w-full flex-col items-center justify-center align-middle">
          <span className="box max-w-lg animate-pulse text-white md:max-w-xl">
            Loading page...
          </span>
        </div>
      </main>
    </>
  );
}
