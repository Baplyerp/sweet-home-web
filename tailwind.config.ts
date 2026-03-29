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
          brown: "#4A3525", // Marrom Principal (Navbar, Footer, Títulos)
          gold: "#C2A26C",  // Ouro (Botões, Destaques, Tags)
          base: "#FAF8F3",  // Bege Claro (Fundo do site, muito elegante)
          light: "#FFFFFF", // Branco Puro (Para cartões e áreas de conteúdo)
          dark: "#2D241E"   // Marrom super escuro (Para textos)
        }
      },
      fontFamily: {
        headings: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      }
    },
  },
  plugins: [],
};

export default config;