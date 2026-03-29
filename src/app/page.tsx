import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

export const revalidate = 60; 

export default async function Home() {
  const { data: produtosDestaque } = await supabase
    .from('vitrine_produtos')
    .select('*')
    .eq('destaque', true);

  const produtos = produtosDestaque || [];

  return (
    <div className="flex flex-col min-h-screen bg-brand-base">
      
      {/* 1. HERO SECTION PREMIUM (Mantida e Refinada) */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-bg.png" 
            alt="Ambiente Sweet Home"
            fill
            className="object-cover object-center brightness-90"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-2xl bg-brand-brown/80 backdrop-blur-md p-10 md:p-12 rounded-3xl border border-brand-gold/20 text-white shadow-2xl">
            <span className="text-brand-gold font-bold tracking-widest uppercase text-xs mb-4 block">
              Nova Coleção Outono
            </span>
            <h1 className="text-5xl md:text-6xl font-headings font-extrabold tracking-tight mb-6 leading-tight">
              O toque de <span className="text-brand-gold">conforto</span> que o seu lar merece.
            </h1>
            <p className="text-lg md:text-xl text-brand-base/90 mb-10 leading-relaxed font-light">
              Descubra a nossa seleção exclusiva de enxovais. Qualidade de hotel 5 estrelas, com o aconchego da sua casa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/produtos" className="px-10 py-4 bg-brand-gold text-brand-brown rounded-full font-bold text-lg shadow-lg hover:brightness-110 transition-all transform hover:-translate-y-1 text-center">
                Ver Catálogo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NOVO MÓDULO: BARRA DE CONFIANÇA (Trust Markers) */}
      <section className="bg-brand-brown border-y border-brand-gold/20 py-8 relative z-20 -mt-8 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 divide-y md:divide-y-0 md:divide-x divide-brand-gold/20 text-center">
          <div className="flex flex-col items-center justify-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
            <h3 className="text-brand-base font-bold text-sm uppercase tracking-wider">Qualidade Premium</h3>
            <p className="text-brand-base/60 text-xs mt-1">Algodão egípcio e fios selecionados</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <h3 className="text-brand-base font-bold text-sm uppercase tracking-wider">Compra Segura</h3>
            <p className="text-brand-base/60 text-xs mt-1">Ambiente criptografado Baply</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
            <h3 className="text-brand-base font-bold text-sm uppercase tracking-wider">Satisfação Garantida</h3>
            <p className="text-brand-base/60 text-xs mt-1">Primeira troca grátis em até 7 dias</p>
          </div>
        </div>
      </section>

      {/* 3. NOVO MÓDULO: BENTO GRID DE COLEÇÕES (O Efeito "Uau") */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headings font-bold text-brand-brown">Explore Nossas Coleções</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {/* Bloco 1: Maior (Ocupa 2 colunas no Desktop) */}
          <Link href="/categorias?tipo=cama" className="md:col-span-2 relative rounded-2xl overflow-hidden group shadow-md">
            <div className="absolute inset-0 bg-brand-brown/40 group-hover:bg-brand-brown/20 transition-colors z-10"></div>
            <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop" alt="Cama" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-8 left-8 z-20">
              <span className="bg-brand-gold text-brand-brown text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">Linha Premium</span>
              <h3 className="text-3xl font-headings font-bold text-white">Cama</h3>
            </div>
          </Link>

          {/* Bloco 2 */}
          <Link href="/categorias?tipo=banho" className="relative rounded-2xl overflow-hidden group shadow-md">
            <div className="absolute inset-0 bg-brand-brown/40 group-hover:bg-brand-brown/20 transition-colors z-10"></div>
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1974&auto=format&fit=crop" alt="Banho" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-8 left-8 z-20">
              <h3 className="text-3xl font-headings font-bold text-white">Banho</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* 4. SEÇÃO DE DESTAQUES (Vitrine Dinâmica) */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-headings font-bold text-brand-brown">Os Mais Amados</h2>
              <p className="text-brand-brown/60 mt-2">Peças selecionadas para transformar seu ambiente.</p>
            </div>
            <Link href="/produtos" className="hidden md:block text-brand-gold font-bold hover:text-brand-brown transition-colors">
              Ver todos →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {produtos.map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link href="/produtos" className="inline-block px-8 py-3 border-2 border-brand-gold text-brand-brown font-bold rounded-full hover:bg-brand-gold transition-colors">
              Ver todos os produtos
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}