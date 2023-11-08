import scrollbar from "tailwind-scrollbar";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
      },
      screens: {
        xs: "260px",
      },
    },
  },
  plugins: [scrollbar({ nocompatible: true })],
} satisfies Config;
