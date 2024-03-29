const skills: string[] = [
  "Next.js",
  "Prisma",
  "tRPC",
  "TailwindCSS",
  "Vercel",
  "Supabase",
  "Zod",
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
  "React Native",
  "Expo",
  "React Query",
  "Redux",
  "Zustand",
  "Auth.js",
  "Clerk",
  "shadcn/ui",
  "Tamagui",
  "Bootstrap",
  "NodeJS",
  "JQuery",
  "Git",
  "HTML",
  "CSS",
];

export default function TechStack() {
  return (
    <section className="flex flex-col items-center justify-center align-middle">
      <div className="w-full text-center">
        <h3 className="font-cabinet-grotesk text-lg font-bold text-white md:text-xl">
          Tech Stack
        </h3>
      </div>
      <div className="mx-auto w-full rounded-md md:w-1/2">
        <div className="flex w-full overflow-x-scroll py-4 scrollbar-thin scrollbar-track-white/20 scrollbar-thumb-white/60 scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
          <div className="flex items-center justify-center gap-x-4 py-2 text-center align-middle text-white">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg w-max border border-white/10 bg-white/10 px-2 backdrop-blur-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
