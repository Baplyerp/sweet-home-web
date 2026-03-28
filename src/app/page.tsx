import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION (O Banner Principal) */}
      <section className="relative bg-brand-dark text-white overflow-hidden">
        {/* Um fundo decorativo suave (opcional, feito com CSS) */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand via-brand-dark to-brand-dark"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
          <span className="text-brand font-semibold tracking-wider uppercase text-sm mb-4">
            Nova Coleção Outono/Inverno
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl">
            O toque de <span className="text-brand">conforto</span> que o seu lar merece.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
            Descubra a nossa seleção premium de enxovais. Qualidade de hotel cinco estrelas, com o aconchego da sua casa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/produtos" 
              className="px-8 py-4 bg-brand text-white rounded-full font-bold shadow-lg hover:bg-white hover:text-brand-dark transition-all transform hover:-translate-y-1"
            >
              Ver Catálogo Completo
            </Link>
            <Link 
              href="/categorias?tipo=cama" 
              className="px-8 py-4 bg-transparent border border-white text-white rounded-full font-bold hover:bg-white/10 transition-all"
            >
              Explorar Cama
            </Link>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE DESTAQUES (Preparação para a Fase 3) */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Os Mais Amados</h2>
          <p className="text-brand-accent mb-12">As escolhas favoritas dos nossos clientes para renovar a casa.</p>
          
          {/* Espaço reservado para os Cards de Produto */}
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-brand/30 rounded-xl bg-white/50">
            <p className="text-brand text-lg font-medium">Os cards de produtos entrarão aqui na Fase 3!</p>
          </div>
        </div>
      </section>

    </div>
  );
}