import Link from "next/link";

export default function About() {
  return (
    <div className="flex w-full flex-col items-center justify-center align-middle text-white">
      <h2 className="py-6 font-cabinet-grotesk text-lg font-bold text-white md:text-xl">
        About Me
      </h2>
      <div className="flex w-full flex-col items-center space-y-6 text-center align-middle">
        <p className="box">
          I love exploring and learning new and old web-related technologies!
        </p>
        <p className="box">
          I love drinking and exploring different types of coffee, as well as
          tea!
        </p>
        <p className="box">
          I like to play video games when I have time. I currently play
          Overwatch and Minecraft, but I also like to play other games from time
          to time.
        </p>
        <p className="box">
          I enjoy watching all kinds of movies and series with my family, check
          out my{" "}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.notion.so/abraham-/Abe-s-Watchlist-Homepage-b17e0e2e6ba644159735e32a6fe3817d"
          >
            <span className="font-bold transition-colors duration-150 ease-in hover:text-white/80">
              watch list
            </span>
          </Link>{" "}
          on notion!
        </p>
        <p className="box">
          I enjoy listening to all kinds of music, in fact, check out what
          I&apos;m currently listening to right now below!
        </p>
      </div>
    </div>
  );
}
