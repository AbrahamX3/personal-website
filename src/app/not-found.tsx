import { HomeIcon } from "lucide-react";
import RayLinkButton from "./components/rays-link-button";

export default function NotFound() {
  return (
    <div className="flex flex-col text-white font-satoshi items-center h-screen w-screen justify-center bg-gradient">
      <div className="font-bold text-8xl z-10 font-cabinet-grotesk">404</div>
      <div className="font-medium z-10 text-4xl pt-4 pb-6">
        This page does not exist
      </div>
      <RayLinkButton
        target="_self"
        label="Go Home"
        className="z-10"
        icon={<HomeIcon className="w-4 h-4" />}
        url="/"
      />
      <div className="absolute z-0 rounded-md inset-0 overflow-hidden dark">
        <div className="rays absolute -inset-3 opacity-20" />
      </div>
    </div>
  );
}
