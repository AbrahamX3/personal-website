import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "cabinet-grotesk": ["var(--font-cabinet-grotesk)"],
        satoshi: ["var(--font-satoshi)"],
      },
      screens: {
        xs: "260px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
} satisfies Config;
