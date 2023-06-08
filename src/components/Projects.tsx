import { LucideIcon, Github, Link } from "lucide-react";

interface Project {
  name: string;
  url: string;
  icon: LucideIcon;
}

export default function Projects() {
  const projects: Project[] = [
    {
      name: "Watchlist",
      url: "https://watchlist.abraham-dev.tech",
      icon: Link,
    },
    {
      name: "Personal Website",
      url: "https://github.com/AbrahamX3/personal-website",
      icon: Github,
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center align-middle">
      <div className="w-full text-center">
        <h3 className="pt-6 font-cabinet-grotesk text-lg font-bold text-white md:text-xl">
          Personal Projects
        </h3>
      </div>
      <div className="mx-auto w-full rounded-md md:w-1/2">
        <div className="flex w-full flex-wrap justify-center gap-x-2 py-4 scrollbar-thin scrollbar-track-white/20 scrollbar-thumb-white/60 scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
          {projects.map((project) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
              key={project.name}
              href={project.url}
              className="flex items-center gap-x-2 rounded-lg border-2 border-white/10 bg-white/10 px-2 py-1 text-center align-middle text-white backdrop-blur-md transition-colors duration-150 ease-in hover:border-white/30"
            >
              <project.icon className="h-4 w-4" />
              <span>{project.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
