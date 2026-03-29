"use client";

import Link from 'next/link';
import { Produto } from '@/lib/mockData';
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
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-brown/5 relative">
      
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {produto.esgotado && (
          <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            Esgotado
          </span>
        )}
        {produto.precoPromocional && !produto.esgotado && (
          <span className="bg-brand-gold text-brand-brown text-xs font-bold px-3 py-1 rounded-full shadow-md">
            Oferta
          </span>
        )}
      </div>

      <Link href={`/produtos/${produto.id}`} className="relative h-64 overflow-hidden bg-gray-100">
        <img 
          src={produto.imagem} 
          alt={produto.nome}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${produto.esgotado ? 'opacity-60 grayscale' : ''}`}
        />
      </Link>

      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs text-brand-gold uppercase tracking-wider font-semibold mb-1">
          {produto.categoria}
        </span>
        
        <Link href={`/produtos/${produto.id}`}>
          <h3 className="text-lg font-bold text-brand-brown mb-2 line-clamp-2 hover:text-brand-gold transition-colors">
            {produto.nome}
          </h3>
        </Link>
        
        <div className="mt-auto pt-4 flex items-end justify-between">
          <div>
            {produto.precoPromocional ? (
              <div className="flex flex-col">
                <span className="text-sm text-gray-400 line-through">{formatarPreco(produto.preco)}</span>
                <span className="text-xl font-extrabold text-brand-brown">{formatarPreco(produto.precoPromocional)}</span>
              </div>
            ) : (
              <span className="text-xl font-extrabold text-brand-brown">{formatarPreco(produto.preco)}</span>
            )}
          </div>
          
          <button 
            disabled={produto.esgotado}
            onClick={(e) => {
              e.preventDefault();
              adicionarItem(produto);
            }}
            className={`p-2 rounded-full transition-colors ${produto.esgotado ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-brand-brown text-white hover:bg-brand-gold hover:text-brand-brown shadow-md transform hover:scale-110'}`}
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