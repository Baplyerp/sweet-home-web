import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { supabase } from "@/lib/supabase";

// Magia do Next.js: O site fica em cache e se atualiza a cada 60 segundos nos bastidores
export const revalidate = 60; 

export default async function Home() {
  // Buscamos os destaques reais do Supabase
  const { data: produtosDestaque } = await supabase
    .from('vitrine_produtos')
    .select('*')
    .eq('destaque', true);

  // Busca os textos do Hero Banner no Supabase
  const { data: configs } = await supabase.from('configuracoes').select('*');
  const heroTitulo = configs?.find(c => c.chave === 'hero_titulo')?.valor || 'O conforto que a sua casa merece.';
  const heroSubtitulo = configs?.find(c => c.chave === 'hero_subtitulo')?.valor || 'Nova Coleção';

  // Garantimos que seja um array vazio caso dê algum erro na busca
  const produtos = produtosDestaque || [];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION (Mantida igual) */}
      <section className="relative bg-brand-dark text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
          <span className="text-brand font-semibold tracking-wider uppercase text-sm mb-4">
            {heroSubtitulo}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl">
            {heroTitulo}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
            Descubra a nossa seleção premium de enxovais. Qualidade de hotel cinco estrelas, com o aconchego da sua casa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/produtos" className="px-8 py-4 bg-brand text-white rounded-full font-bold shadow-lg hover:bg-white hover:text-brand-dark transition-all transform hover:-translate-y-1">
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE DESTAQUES (Agora dinâmica!) */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Os Mais Amados</h2>
            <p className="text-brand-accent">As escolhas favoritas dos nossos clientes para renovar a casa.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {produtos.map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}