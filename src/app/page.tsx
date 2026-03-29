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
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION PREMIUM */}
      <section className="relative bg-brand-base min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-bg.png" 
            alt="Ambiente Sweet Home"
            fill
            className="object-cover object-center brightness-90"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Fundo Marrom Translúcido no Bloco */}
          <div className="max-w-2xl bg-brand-brown/80 backdrop-blur-md p-12 rounded-3xl border border-white/10 text-white shadow-2xl">
            <span className="text-brand-gold font-semibold tracking-wider uppercase text-sm mb-4 block">
              Nova Coleção
            </span>
            <h1 className="text-5xl md:text-6xl font-headings font-extrabold tracking-tight mb-6 leading-tight">
              O toque de <span className="text-brand-gold">conforto</span> que o seu lar merece.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light">
              Descubra a nossa seleção exclusiva de enxovais. Qualidade premium, com o aconchego da sua casa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                href="/produtos" 
                className="px-10 py-4 bg-brand-gold text-brand-brown rounded-full font-bold text-lg shadow-lg hover:brightness-110 transition-all transform hover:-translate-y-1 text-center"
              >
                Ver Catálogo
              </Link>
              <Link 
                href="/categorias?tipo=cama" 
                className="px-10 py-4 bg-transparent border border-white text-white rounded-full font-bold hover:bg-white/10 transition-all text-center"
              >
                Explorar Cama
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE DESTAQUES */}
      <section className="py-24 bg-brand-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            {/* Título no Marrom Premium */}
            <h2 className="text-4xl font-headings font-bold text-brand-brown">Os Mais Amados</h2>
            <p className="text-brand-neutral/70 max-w-lg mx-auto">As escolhas favoritas dos nossos clientes para renovar a casa.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {produtos.map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}