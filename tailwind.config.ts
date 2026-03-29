import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Aqui está a mágica: O Tailwind agora lê a cor injetada pelo nosso banco de dados!
          DEFAULT: "var(--theme-primary)", 
          dark: "#B08D2E", 
          light: "#F9F6EE",
          accent: "#8A7322",
        },
      },
    },
  },
  plugins: [],
};

export default config;