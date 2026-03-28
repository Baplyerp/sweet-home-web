"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-3xl font-bold text-brand-dark tracking-tighter">
              Sweet<span className="text-brand">Home</span>
            </Link>
          </div>

          {/* Barra de Busca (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Buscar lençóis, toalhas, edredons..." 
                className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand text-sm"
              />
              <button className="absolute right-3 top-2.5 text-gray-400 hover:text-brand">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Links e Carrinho (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/produtos" className="text-brand-dark font-medium hover:text-brand transition-colors">Catálogo</Link>
            <Link href="/categorias" className="text-brand-dark font-medium hover:text-brand transition-colors">Categorias</Link>
            
            <Link href="/carrinho" className="text-brand-dark hover:text-brand relative p-2 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand rounded-full">
                0
              </span>
            </Link>
          </div>

          {/* Botão Menu Mobile (Hamburger) */}
          <div className="md:hidden flex items-center space-x-4">
            <Link href="/carrinho" className="text-brand-dark relative p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-[10px] font-bold text-white transform translate-x-1/4 -translate-y-1/4 bg-brand rounded-full">0</span>
            </Link>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-brand-dark">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
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

      {/* Menu Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-4 shadow-lg absolute w-full">
          <input 
            type="text" 
            placeholder="Buscar produtos..." 
            className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-brand text-sm mb-4"
          />
          <Link href="/produtos" onClick={() => setIsMobileMenuOpen(false)} className="block text-brand-dark font-medium hover:text-brand">Catálogo</Link>
          <Link href="/categorias" onClick={() => setIsMobileMenuOpen(false)} className="block text-brand-dark font-medium hover:text-brand">Categorias</Link>
        </div>
      )}
    </nav>
  );
}