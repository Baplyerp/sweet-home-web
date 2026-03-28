import ProductCard from "@/components/ProductCard";
import { produtosMock } from "@/lib/mockData";

export default function ProdutosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="border-b border-brand/20 pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-brand-dark tracking-tight">
            Todos os Produtos
          </h1>
          <p className="text-lg text-brand-accent mt-2">
            Explore a nossa coleção completa e encontre a peça perfeita.
          </p>
        </div>
        
        {/* Futuro filtro de ordenação */}
        <div className="flex items-center gap-2 text-sm text-brand-dark">
          <span className="font-medium">Ordenar por:</span>
          <select className="bg-white border border-brand/20 rounded-md px-3 py-2 focus:outline-none focus:border-brand cursor-pointer">
            <option>Lançamentos</option>
            <option>Menor Preço</option>
            <option>Maior Preço</option>
          </select>
        </div>
      </div>
      
      {/* Grid com TODOS os produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {produtosMock.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}