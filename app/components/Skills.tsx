export default function Skills() {
  const Skills = [
    "NextJS",
    "Prisma",
    "tRPC",
    "TailwindCSS",
    "Vercel",
    "Supabase",
    "Railway",
    "Astro",
    "React",
    "Svelte",
    "SvelteKit",
    "PHP",
    "TypeScript",
    "JavaScript",
    "MySQL",
    "PostgrSQL",
    ".NET",
    "Bootstrap",
    "NodeJS",
    "JQuery",
    "Git",
  ];

  return (
    <div className="flex flex-col items-center align-middle justify-center">
      <div className="w-full text-center">
        <h2 className="text-lg md:text-xl text-white font-bold font-cabinet-grotesk py-6">
          Technologies I work with
        </h2>
      </div>
      <div className="w-full">
        <div className="flex overflow-hidden w-full scrollbar-track-white/20 scrollbar-thin scrollbar-thumb-white/60 scrollbar-thumb-rounded-md scrollbar-track-rounded-md py-4">
          <div className="flex justify-center align-middle items-center text-center space-x-4 text-white py-2">
            {Skills.map((skill, index) => (
              <span
                key={index}
                className="border-2 border-white/30 px-2 backdrop-blur-md bg-white/10 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
