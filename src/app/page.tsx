export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-6">
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-brand-dark tracking-tight">
          O conforto que a sua casa merece.
        </h1>
        <p className="text-xl text-brand-accent">
          Explore o nosso catálogo interativo e descubra coleções exclusivas de Cama, Mesa e Banho.
        </p>
        
        <button className="mt-8 px-8 py-4 bg-brand text-white rounded-full font-semibold shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
          Ver Catálogo Completo
        </button>
      </div>
    </div>
  );
}