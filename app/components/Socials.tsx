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
    <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 justify-items-center justify-center mx-auto">
      {Socials.map((social, index) => (
        <Link
          key={index}
          title={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="rounded-lg text-center px-2 py-1 text-white border-2 transition-colors duration-150 ease-in border-white/10 hover:border-white/30 backdrop-blur-md bg-white/10">
            {social.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
