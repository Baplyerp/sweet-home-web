"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Produto } from "@/lib/mockData";

// Tipo que extende o Produto, adicionando a Quantidade
export interface CartItem extends Produto {
  quantidade: number;
}

interface CartContextData {
  items: CartItem[];
  isCartOpen: boolean;
  totalItens: number;
  subtotal: number;
  toggleCart: () => void;
  adicionarItem: (produto: Produto) => void;
  removerItem: (id: string) => void;
  atualizarQuantidade: (id: string, quantidade: number) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const adicionarItem = (produto: Produto) => {
    setItems((currentItems) => {
      const itemExistente = currentItems.find((item) => item.id === produto.id);
      if (itemExistente) {
        return currentItems.map((item) =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      }
      return [...currentItems, { ...produto, quantidade: 1 }];
    });
    setIsCartOpen(true); // Abre o carrinho automaticamente ao adicionar
  };

  const removerItem = (id: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const atualizarQuantidade = (id: string, quantidade: number) => {
    if (quantidade <= 0) {
      removerItem(id);
      return;
    }
    setItems((currentItems) =>
      currentItems.map((item) => (item.id === id ? { ...item, quantidade } : item))
    );
  };

  // Cálculos automáticos (Passo 4.3)
  const totalItens = items.reduce((acc, item) => acc + item.quantidade, 0);
  const subtotal = items.reduce((acc, item) => {
    const precoFinal = item.precoPromocional || item.preco;
    return acc + precoFinal * item.quantidade;
  }, 0);

  return (
    <CartContext.Provider value={{ items, isCartOpen, totalItens, subtotal, toggleCart, adicionarItem, removerItem, atualizarQuantidade }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para facilitar o uso
export const useCart = () => useContext(CartContext);