import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";

export const revalidate = 60;

export default async function ProdutoDetalhe({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Busca o produto específico pelo ID no banco real
  const { data: produto } = await supabase
    .from('vitrine_produtos')
    .select('*')
    .eq('id', id)
    .single();

  if (!produto) {
    notFound();
  }

  const formatarPreco = (valor: number) => {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="mb-8 text-sm text-brand-accent">
        <Link href="/" className="hover:text-brand-dark transition-colors">Início</Link>
        <span className="mx-2">/</span>
        <Link href="/produtos" className="hover:text-brand-dark transition-colors">Catálogo</Link>
        <span className="mx-2">/</span>
        <span className="text-brand-dark font-medium capitalize">{produto.categoria}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-brand/10 h-[500px] md:h-[600px] relative group">
          {produto.esgotado && (
            <span className="absolute top-6 left-6 z-10 bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">Esgotado</span>
          )}
          {produto.precoPromocional && !produto.esgotado && (
            <span className="absolute top-6 left-6 z-10 bg-brand text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">Oferta Especial</span>
          )}
          <img
            src={produto.imagem}
            alt={produto.nome}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${produto.esgotado ? "opacity-60 grayscale" : ""}`}
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-sm text-brand-accent uppercase tracking-wider font-bold mb-2">{produto.categoria}</span>
          <h1 className="text-4xl font-bold text-brand-dark mb-4 leading-tight">{produto.nome}</h1>

          <div className="mb-6">
            {produto.precoPromocional ? (
              <div className="flex items-center gap-4">
                <span className="text-4xl font-extrabold text-brand-dark">{formatarPreco(produto.precoPromocional)}</span>
                <span className="text-xl text-gray-400 line-through">{formatarPreco(produto.preco)}</span>
              </div>
            ) : (
              <span className="text-4xl font-extrabold text-brand-dark">{formatarPreco(produto.preco)}</span>
            )}
          </div>

          <p className="text-brand-dark/70 mb-8 leading-relaxed text-lg">
            Um toque de elegância e requinte para a sua casa. Mais detalhes em breve quando conectarmos a descrição completa do banco de dados!
          </p>

          <div className="mb-8 space-y-4 border-t border-b border-brand/10 py-6">
            <div>
              <h3 className="text-sm font-semibold text-brand-dark mb-3">Selecione o Tamanho</h3>
              <div className="flex flex-wrap gap-3">
                {["Solteiro", "Casal", "Queen", "King"].map((tamanho) => (
                  <button key={tamanho} className="px-5 py-2 border border-brand/30 rounded-lg text-sm font-medium hover:border-brand hover:text-brand transition-colors bg-white">
                    {tamanho}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* O nosso botão inteligente do Passo 4 continua funcionando perfeitamente! */}
          <AddToCartButton produto={produto} />
        </div>
      </div>
    </div>
  );
}