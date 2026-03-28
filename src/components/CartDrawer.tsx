"use client";

import { useCart } from "@/contexts/CartContext";
import Link from "next/link";

export default function CartDrawer() {
  const { items, isCartOpen, toggleCart, removerItem, atualizarQuantidade, subtotal } = useCart();

  const formatarPreco = (valor: number) => 
    valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  if (!isCartOpen) return null;

  return (
    <>
      {/* Fundo escuro (Overlay) */}
      <div 
        className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm transition-opacity"
        onClick={toggleCart}
      />

      {/* Gaveta Lateral */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300">
        
        {/* Cabeçalho do Carrinho */}
        <div className="flex justify-between items-center p-6 border-b border-brand/10">
          <h2 className="text-xl font-bold text-brand-dark">Seu Carrinho</h2>
          <button onClick={toggleCart} className="text-gray-400 hover:text-brand-dark transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Lista de Itens */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <p className="text-brand-accent">Seu carrinho está vazio.</p>
              <button onClick={toggleCart} className="text-brand font-bold hover:underline">Continuar comprando</button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 border-b border-brand/5 pb-4">
                <img src={item.imagem} alt={item.nome} className="w-20 h-20 object-cover rounded-lg" />
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-brand-dark line-clamp-2">{item.nome}</h3>
                  <p className="text-sm text-brand-accent mt-1">{formatarPreco(item.precoPromocional || item.preco)}</p>
                  
                  {/* Controles de Quantidade */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-gray-200 rounded-full">
                      <button onClick={() => atualizarQuantidade(item.id, item.quantidade - 1)} className="px-3 py-1 text-gray-500 hover:text-brand-dark">-</button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantidade}</span>
                      <button onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)} className="px-3 py-1 text-gray-500 hover:text-brand-dark">+</button>
                    </div>
                    <button onClick={() => removerItem(item.id)} className="text-xs text-red-500 hover:underline">Remover</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Rodapé (Subtotal e Finalizar) */}
        {items.length > 0 && (
          <div className="p-6 border-t border-brand/10 bg-brand-light/30">
            <div className="flex justify-between items-center mb-6">
              <span className="text-brand-dark font-medium">Subtotal</span>
              <span className="text-2xl font-bold text-brand-dark">{formatarPreco(subtotal)}</span>
            </div>
            <Link href="/carrinho" onClick={toggleCart} className="w-full block text-center bg-brand-dark text-white py-4 rounded-full font-bold hover:bg-brand transition-colors">
              Finalizar Pedido
            </Link>
          </div>
        )}
      </div>
    </>
  );
}