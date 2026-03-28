import { notFound } from "next/navigation";
import { produtosMock } from "@/lib/mockData";
import Link from "next/link";

export default async function ProdutoDetalhe({ params }: { params: Promise<{ id: string }> }) {
  // Aguardamos para ler o 'id' do URL
  const { id } = await params;
  
  // Procuramos o produto no nosso ficheiro de dados falsos
  const produto = produtosMock.find((p) => p.id === id);

  // Se o cliente digitar um ID que não existe, direcionamos para um ecrã de "Não Encontrado" (404)
  if (!produto) {
    notFound();
  }

  // Função para formatar o preço na nossa moeda
  const formatarPreco = (valor: number) => {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Caminho de navegação (Breadcrumb) */}
      <nav className="mb-8 text-sm text-brand-accent">
        <Link href="/" className="hover:text-brand-dark transition-colors">Início</Link>
        <span className="mx-2">/</span>
        <Link href="/produtos" className="hover:text-brand-dark transition-colors">Catálogo</Link>
        <span className="mx-2">/</span>
        <span className="text-brand-dark font-medium capitalize">{produto.categoria}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Coluna Esquerda: Imagem do Produto */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-brand/10 h-[500px] md:h-[600px] relative group">
          {produto.esgotado && (
            <span className="absolute top-6 left-6 z-10 bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">
              Esgotado
            </span>
          )}
          {produto.precoPromocional && !produto.esgotado && (
            <span className="absolute top-6 left-6 z-10 bg-brand text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">
              Oferta Especial
            </span>
          )}
          <img
            src={produto.imagem}
            alt={produto.nome}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${produto.esgotado ? "opacity-60 grayscale" : ""}`}
          />
        </div>

        {/* Coluna Direita: Informações e Ações */}
        <div className="flex flex-col justify-center">
          <span className="text-sm text-brand-accent uppercase tracking-wider font-bold mb-2">
            {produto.categoria}
          </span>
          <h1 className="text-4xl font-bold text-brand-dark mb-4 leading-tight">
            {produto.nome}
          </h1>

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
            Um toque de elegância e requinte para a sua casa. Na versão final, conetada à base de dados, esta secção exibirá a descrição real, o tipo de tecido e as instruções de lavagem dos enxovais.
          </p>

          {/* Seleção de Variações (Preparação para o futuro) */}
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

          {/* Botão de Adicionar ao Carrinho */}
          <button
            disabled={produto.esgotado}
            className={`w-full py-4 rounded-full font-bold text-lg shadow-lg transition-all flex justify-center items-center gap-2 ${
              produto.esgotado
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-brand-dark text-white hover:bg-brand hover:-translate-y-1"
            }`}
          >
            {produto.esgotado ? "Produto Indisponível" : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                Adicionar ao Carrinho
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}