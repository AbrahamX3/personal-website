import Link from "next/link";

export default function About() {
  return (
    <div className="w-full text-white flex flex-col items-center justify-center align-middle">
      <h2 className="text-xl text-white font-bold font-cabinet-grotesk py-6">
        About Me
      </h2>
      <div className="flex flex-col items-center text-center align-middle space-y-6 w-full">
        <p className="about-box">
          I love to explore and learn all type of old and new web technologies.
        </p>
        <p className="about-box">
          I love to drink and explore coffee, sometimes tea aswell!
        </p>
        <p className="about-box">
          I&apos;m a gamer when I have time, I currently play Overwatch and
          Minecraft. But I also enjoy playing other games from time to time.
        </p>
        <p className="about-box">
          I enjoy watching all type of movies and series with my family, check
          out my{" "}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.notion.so/abraham-/Abe-s-Watchlist-Homepage-b17e0e2e6ba644159735e32a6fe3817d"
          >
            <span className="font-bold hover:text-white/80 transition-colors duration-150 ease-in">
              watchlist
            </span>
          </Link>{" "}
          on notion!
        </p>
        <p className="about-box">
          I enjoy listening to all type of music, in fact, check out what
          I&apos;m currently listening to right now below!
        </p>
      </div>
    </div>
  );
}
