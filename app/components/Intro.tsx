import Balancer from "react-wrap-balancer";

export default function Intro() {
  return (
    <div className="flex flex-col space-y-2 items-center align-middle text-center">
      <Balancer>
        <span className="text-5xl text-white font-bold font-cabinet-grotesk">
          Hey, my name is Abraham!
        </span>
      </Balancer>
      <Balancer>
        <span className="text-xl text-white">
          I&apos;m a web developer based in Baja California, Mexico.
        </span>
      </Balancer>
    </div>
  );
}
