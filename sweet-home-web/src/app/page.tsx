export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-brand-dark tracking-tight">
          Sweet Home Enxovais
        </h1>
        <p className="text-xl text-brand-accent">
          O seu novo catálogo interativo está a nascer.
        </p>
        
        {/* Um botão de teste apenas para vermos as cores a funcionar */}
        <button className="mt-8 px-6 py-3 bg-brand text-white rounded-full font-semibold shadow-md hover:bg-opacity-90 transition-all">
          Ver Produtos
        </button>
      </div>
    </main>
  );
}