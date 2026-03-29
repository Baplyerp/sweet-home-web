"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export default function Navbar({ logoUrl = '/images/logo.png' }: { logoUrl?: string }) {
  const { totalItens, toggleCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-brand-brown shadow-xl sticky top-0 z-50 border-b border-brand-gold/20 backdrop-blur-md bg-brand-brown/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo com respiro elegante */}
          <div className="flex-shrink-0 flex items-center h-full py-5">
            <Link href="/" className="h-full flex items-center group">
              <img 
                src={logoUrl} 
                alt="Sweet Home Comfort Logo"
                className="max-h-[55px] w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
              />
            </Link>
          </div>

          {/* Barra de Busca - Design Minimalista e Iluminado */}
          <div className="hidden md:flex flex-1 max-w-lg mx-12">
            <div className="relative w-full group">
              <input 
                type="text" 
                placeholder="Buscar lençóis egípcios, toalhas banhão..." 
                className="w-full pl-6 pr-14 py-3.5 rounded-full bg-brand-base/10 text-brand-base placeholder:text-brand-base/60 text-sm focus:bg-brand-base focus:text-brand-brown focus:placeholder:text-brand-brown/50 border border-brand-gold/30 focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/20 outline-none transition-all duration-500"
              />
              <button className="absolute right-2 top-1.5 p-2 bg-brand-gold rounded-full text-brand-brown hover:bg-white hover:scale-105 transition-all shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Menu e Carrinho com Micro-interações */}
          <div className="hidden md:flex items-center space-x-8 text-brand-base">
            <Link href="/produtos" className="text-sm font-semibold uppercase tracking-widest hover:text-brand-gold transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300">Catálogo</Link>
            <Link href="/categorias" className="text-sm font-semibold uppercase tracking-widest hover:text-brand-gold transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300">Coleções</Link>
            
            <button onClick={toggleCart} className="relative p-2 text-brand-base hover:text-brand-gold transition-transform hover:scale-110 duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              {totalItens > 0 && (
                <span className="absolute 0 -right-1 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-brand-gold text-[10px] font-black text-brand-brown shadow-lg ring-2 ring-brand-brown">
                  {totalItens}
                </span>
              )}
            </button>
          </div>

          {/* Mobile (Mantido conciso) */}
          <div className="md:hidden flex items-center space-x-6">
             <button onClick={toggleCart} className="relative p-1 text-brand-base">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" /></svg>
                {totalItens > 0 && (
                  <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand-gold text-[9px] font-bold text-brand-brown">{totalItens}</span>
                )}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-brand-base hover:text-brand-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}