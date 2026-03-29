import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";
import CartDrawer from "@/components/CartDrawer";
import { supabase } from "@/lib/supabase";
import StorefrontProvider from "@/components/StorefrontProvider";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 60; // Atualiza as configurações em cache a cada 60 segundos

export const metadata: Metadata = {
  title: "Baply Storefront",
  description: "Plataforma de E-commerce integrada.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Vai buscar a cor principal à base de dados de forma segura
  const { data: configs } = await supabase.from('configuracoes').select('*');
  const corPrincipal = configs?.find(c => c.chave === 'brand_color')?.valor || '#D4AF37'; // Dourado como padrão de segurança

  return (
    <html lang="pt-PT">
      <body className={`${inter.className} flex flex-col min-h-screen bg-brand-light`}>
        {/* O nosso novo Motor de Temas envolve toda a aplicação */}
        <StorefrontProvider corPrincipal={corPrincipal}>
          <CartProvider>
            <Navbar />
            <CartDrawer />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </StorefrontProvider>
      </body>
    </html>
  );
}