/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "cabinet-grotesk": ["var(--font-cabinet-grotesk)"],
        satoshi: ["var(--font-satoshi)"],
      },
    },
  },
  plugins: [],
};
