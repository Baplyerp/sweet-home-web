export default function CarrinhoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-brand-dark mb-8 text-center border-b border-brand/20 pb-6">
        O seu Carrinho
      </h1>
      
      <div className="bg-white shadow-sm rounded-2xl p-6 border border-brand/10 text-center">
        {/* Futura lógica de itens vazios ou cheios */}
        <p className="text-brand-accent mb-6">
          O seu carrinho está vazio no momento.
        </p>
        
        <button className="px-8 py-3 bg-brand-dark text-white rounded-full font-medium hover:bg-opacity-90 transition-all">
          Continuar Explorando
        </button>
      </div>
    </div>
  );
}