import { Github, Link } from "lucide-react";
import RayLinkButton from "./rays-link-button";

interface Project {
  label: string;
  url: string;
  icon: JSX.Element;
}

const projects: Project[] = [
  {
    label: "Watchlist",
    url: "https://watchlist.abraham.lat",
    icon: <Link className="w-4 h-4" />,
  },
  {
    label: "Personal Website",
    url: "https://github.com/AbrahamX3/personal-website",
    icon: <Github className="w-4 h-4" />,
  },
  {
    label: "Image Color Picker",
    url: "https://color.abraham.lat",
    icon: <Link className="w-4 h-4" />,
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col items-center justify-center align-middle">
      <div className="w-full text-center">
        <h3 className="pt-6 font-cabinet-grotesk text-lg font-bold text-white md:text-xl">
          Personal Projects
        </h3>
      </div>
      <div className="mx-auto w-full rounded-md md:w-1/2">
        <article className="flex w-full flex-wrap justify-center gap-2 py-4 scrollbar-thin scrollbar-track-white/20 scrollbar-thumb-white/60 scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
          {projects.map(({ icon, label, url }) => (
            <RayLinkButton key={label} icon={icon} label={label} url={url} />
          ))}
        </article>
      </div>
    </section>
  );
}
