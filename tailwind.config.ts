import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#60d4a4",
          "500": "#4c9474",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
