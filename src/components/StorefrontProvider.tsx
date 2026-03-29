"use client";

import { useEffect } from "react";

interface StorefrontProviderProps {
  corPrincipal: string;
  children: React.ReactNode;
}

export default function StorefrontProvider({ corPrincipal, children }: StorefrontProviderProps) {
  // Sempre que a cor mudar, este hook injeta a cor na raiz do HTML (no lado do cliente)
  useEffect(() => {
    if (corPrincipal) {
      document.documentElement.style.setProperty('--theme-primary', corPrincipal);
    }
  }, [corPrincipal]);

  return <>{children}</>;
}