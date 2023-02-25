export default function Skills() {
  const Skills = [
    "NextJS",
    "Prisma",
    "tRPC",
    "TailwindCSS",
    "Vercel",
    "Supabase",
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
    <div className="flex flex-col items-center justify-center align-middle">
      <div className="w-full text-center">
        <h2 className="py-6 font-cabinet-grotesk text-lg font-bold text-white md:text-xl">
          Technologies I work with
        </h2>
      </div>
      <div className="w-full">
        <div className="flex w-full overflow-hidden py-4 scrollbar-thin scrollbar-track-white/20 scrollbar-thumb-white/60 scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
          <div className="flex items-center justify-center space-x-4 py-2 text-center align-middle text-white">
            {Skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-lg border-2 border-white/30 bg-white/10 px-2 backdrop-blur-md"
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
