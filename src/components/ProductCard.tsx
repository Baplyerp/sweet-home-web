"use client";

import Link from 'next/link';
import { Produto } from '@/lib/mockData'; // No futuro trocaremos pela tipagem do Supabase
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  produto: Produto;
}

export default function ProductCard({ produto }: ProductCardProps) {
  const { adicionarItem } = useCart();

  const formatarPreco = (valor: number) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-brand-brown/5 hover:border-brand-gold/30 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(74,53,37,0.15)] hover:-translate-y-1 relative">
      
      {/* Badges Premium */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
        {produto.esgotado && (
          <span className="bg-brand-brown text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm border border-white/20">
            Esgotado
          </span>
        )}
        {produto.precoPromocional && !produto.esgotado && (
          <span className="bg-brand-gold/90 backdrop-blur-md text-brand-brown text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full shadow-md border border-brand-gold/50">
            Oferta Especial
          </span>
        )}
      </div>

      {/* Container da Imagem com Micro-interação */}
      <Link href={`/produtos/${produto.id}`} className="relative h-72 overflow-hidden bg-brand-base/50">
        {/* Imagem do Produto */}
        <img 
          src={produto.imagem} 
          alt={produto.nome}
          className={`w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 ${produto.esgotado ? 'opacity-50 grayscale' : ''}`}
        />
        {/* Gradiente sutil que aparece no hover para dar um ar de mistério/luxo */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </Link>

      {/* Corpo do Cartão */}
      <div className="p-6 flex flex-col flex-grow bg-white relative z-10">
        {/* Categoria em Dourado */}
        <span className="text-[10px] text-brand-gold uppercase tracking-widest font-bold mb-2">
          {produto.categoria}
        </span>
        
        {/* Título com a Fonte Premium Playfair */}
        <Link href={`/produtos/${produto.id}`}>
          <h3 className="text-xl font-headings font-bold text-brand-brown mb-3 line-clamp-2 group-hover:text-brand-gold transition-colors leading-snug">
            {produto.nome}
          </h3>
        </Link>
        
        {/* Área de Preço e Botão */}
        <div className="mt-auto pt-4 flex items-end justify-between border-t border-brand-brown/5">
          <div className="flex flex-col">
            {produto.precoPromocional ? (
              <>
                <span className="text-xs text-brand-brown/40 line-through mb-0.5">{formatarPreco(produto.preco)}</span>
                <span className="text-2xl font-body font-black text-brand-brown leading-none">{formatarPreco(produto.precoPromocional)}</span>
              </>
            ) : (
              <span className="text-2xl font-body font-black text-brand-brown leading-none">{formatarPreco(produto.preco)}</span>
            )}
          </div>
          
          {/* Botão de Adicionar - Estilo "Joia" */}
          <button 
            disabled={produto.esgotado}
            onClick={(e) => {
              e.preventDefault(); // Evita que o clique vá para a página do produto
              adicionarItem(produto);
            }}
            className={`p-3 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
              produto.esgotado 
                ? 'bg-brand-base text-brand-brown/30 cursor-not-allowed' 
                : 'bg-brand-base text-brand-brown hover:bg-brand-brown hover:text-brand-gold hover:shadow-lg transform active:scale-95'
            }`}
            aria-label="Adicionar ao carrinho"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>
      
    </div>
  );
}