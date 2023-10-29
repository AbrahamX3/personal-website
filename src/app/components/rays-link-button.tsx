import { HTMLAttributeAnchorTarget } from "react";
import { cn } from "~/lib/cn";

interface LinkRaysProps {
  label: string;
  url: string;
  icon: JSX.Element;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}

export default function RayLinkButton({
  icon,
  label,
  url,
  className,
  target = "_blank",
}: LinkRaysProps) {
  return (
    <a
      target={target}
      rel="noopener noreferrer"
      href={url}
      className={cn(
        "flex relative shadow-slate-800 shadow items-center gap-x-2 rounded-lg group/lights border border-white/10 bg-white/10 px-2 py-1 text-center align-middle text-white backdrop-blur-sm transition-colors duration-150 ease-in hover:border-slate-100/50",
        className,
      )}
    >
      <span className="z-10">{icon}</span>
      <p className="z-10">{label}</p>
      <div className="absolute z-0 rounded-md inset-0 overflow-hidden dark">
        <div className="rays absolute -inset-3 opacity-20 group-hover/lights:opacity-70" />
      </div>
    </a>
  );
}
