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
        // A PALETA CORRIGIDA: DNA BAPLY + SWEET HOME
        brand: {
          brown: "#4A3525", // O Marrom profundo e elegante (Café/Madeira)
          gold: "#C2A26C",  // O Ouro/Bronze da logo
          base: "#FAF8F3",  // O fundo creme suave
          neutral: "#2D3436" // Texto escuro
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