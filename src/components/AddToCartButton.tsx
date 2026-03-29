"use client";

import { useState } from "react";
import { Produto } from "@/lib/mockData";
import { useCart } from "@/contexts/CartContext";

export default function AddToCartButton({ produto }: { produto: Produto }) {
  const { adicionarItem } = useCart();
  const [adicionado, setAdicionado] = useState(false);

  const handleAdd = () => {
    adicionarItem(produto);
    setAdicionado(true);
    // Volta ao estado normal depois de 2 segundos
    setTimeout(() => setAdicionado(false), 2000);
  };

  if (produto.esgotado) {
    return (
      <button disabled className="w-full py-5 rounded-full bg-gray-200 text-gray-500 font-bold uppercase tracking-widest text-sm cursor-not-allowed border border-gray-300">
        Produto Esgotado
      </button>
    );
  }

  return (
    <button
      onClick={handleAdd}
      className={`w-full py-5 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-xl flex items-center justify-center gap-3 ${
        adicionado
          ? "bg-green-700 text-white"
          : "bg-brand-brown text-brand-gold hover:bg-brand-gold hover:text-brand-brown transform hover:-translate-y-1"
      }`}
    >
      {adicionado ? (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
          Adicionado à Sacola
        </>
      ) : (
        <>
          Adicionar à Sacola
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </>
      )}
    </button>
  );
}