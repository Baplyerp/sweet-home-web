import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sweet Home Enxovais | Catálogo",
  description: "O melhor em Cama, Mesa e Banho.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* Adicionamos classes flex para garantir que o Footer fique sempre no final da tela */}
      <body className={`${inter.className} flex flex-col min-h-screen bg-[#F7F5F0]`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}