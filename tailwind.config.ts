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
        // Paleta base sugerida para a Sweet Home
        brand: {
          light: "#F7F5F0", // Fundo bege muito suave (traz conforto)
          DEFAULT: "#D4B895", // Dourado/Bege médio (elegância)
          dark: "#2C3E50", // Azul profundo para contrastes e textos
          accent: "#8FA39A", // Verde sálvia para detalhes (remete a frescura/banho)
        },
      },
    },
  },
  plugins: [],
};
export default config;