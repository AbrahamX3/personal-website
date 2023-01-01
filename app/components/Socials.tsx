import Link from "next/link";

export default function Socials() {
  const Socials = [
    {
      name: "GitHub",
      url: "https://github.com/AbrahamX3",
    },
    {
      name: "Discord",
      url: "https://discord.com/users/247971007409684480",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/x3_abe",
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center align-middle">
        <div className="flex space-x-6 items-center align-middle text-white">
          {Socials.map((social, index) => (
            <Link
              key={index}
              title={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mx-2 flex flex-col justify-center align-middle items-center rounded-lg text-center my-2 px-4 py-1 text-white border-2 transition-colors duration-150 ease-in border-white/10 hover:border-white/30 backdrop-blur-md bg-white/10">
                {social.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
