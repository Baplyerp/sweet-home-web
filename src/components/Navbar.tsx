"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

// 1. Avisamos ao TypeScript que este componente recebe a propriedade logoUrl
export default function Navbar({ logoUrl = '/images/logo.png' }: { logoUrl?: string }) {
  const { totalItens, toggleCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-brand-brown shadow-lg sticky top-0 z-50 border-b border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          <div className="flex-shrink-0 flex items-center h-full py-4">
            <Link href="/" className="h-full flex items-center">
              {/* 2. Trocamos o Image do Next pela tag img tradicional para aceitar links externos perfeitamente */}
              <img 
                src={logoUrl} 
                alt="Sweet Home Comfort Logo"
                className="max-h-[60px] w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity p-1" 
              />
            </Link>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-10">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Buscar lençóis egípcios, toalhas banhão..." 
                className="w-full pl-5 pr-12 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/50 text-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none"
              />
              <button className="absolute right-4 top-3 text-white/50 hover:text-brand-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-white">
            <Link href="/produtos" className="font-medium hover:text-brand-gold transition-colors">Catálogo</Link>
            <Link href="/categorias" className="font-medium hover:text-brand-gold transition-colors">Coleções</Link>
            
            <button onClick={toggleCart} className="relative p-2 text-white hover:text-brand-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-brand-brown transform bg-brand-gold rounded-full">
                {totalItens}
              </span>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
             <button onClick={toggleCart} className="relative p-2 text-white hover:text-brand-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-brand-brown bg-brand-gold rounded-full">{totalItens}</span>
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-brand-gold transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}