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
    <div className="mx-auto grid grid-cols-1 justify-center justify-items-center gap-4 xs:grid-cols-3">
      {Socials.map((social, index) => (
        <a
          key={index}
          title={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="rounded-lg border-2 border-white/10 bg-white/10 px-2 py-1 text-center text-white backdrop-blur-md transition-colors duration-150 ease-in hover:border-white/30">
            {social.name}
          </span>
        </a>
      ))}
    </div>
  );
}
