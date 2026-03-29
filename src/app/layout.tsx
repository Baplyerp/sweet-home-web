import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";
import CartDrawer from "@/components/CartDrawer";
import { supabase } from "@/lib/supabase";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const revalidate = 60; // Atualiza o cache da logo

export const metadata: Metadata = {
  title: "Sweet Home Comfort",
  description: "Cama, Mesa e Banho de alto padrão.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Busca a URL da logo no banco de dados
  const { data: configs } = await supabase.from('configuracoes').select('*');
  const logoUrl = configs?.find(c => c.chave === 'brand_logo')?.valor || '/images/logo.png';

  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-body flex flex-col min-h-screen bg-brand-base`}>
        <CartProvider>
          {/* O Navbar agora recebe a logo sem problemas */}
          <Navbar logoUrl={logoUrl} />
          <CartDrawer />
          <main className="flex-grow">{children}</main>
          {/* Footer normal, sem exigir a propriedade da logo para evitar erros */}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}