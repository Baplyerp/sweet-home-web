export type Produto = {
  id: string;
  nome: string;
  categoria: string;
  preco: number;
  precoPromocional: number | null;
  imagem: string;
  destaque: boolean;
  esgotado: boolean;
};

export const produtosMock: Produto[] = [
  {
    id: '1',
    nome: 'Jogo de Cama King Fio Egípcio',
    categoria: 'cama',
    preco: 350.00,
    precoPromocional: 299.90,
    imagem: 'https://images.unsplash.com/photo-1522771730849-f0db1261d2d3?q=80&w=800&auto=format&fit=crop',
    destaque: true,
    esgotado: false,
  },
  {
    id: '2',
    nome: 'Toalha de Banho Banhão 100% Algodão',
    categoria: 'banho',
    preco: 89.90,
    precoPromocional: null,
    imagem: 'https://images.unsplash.com/photo-1616627686884-bb9e160dd8bb?q=80&w=800&auto=format&fit=crop',
    destaque: true,
    esgotado: false,
  },
  {
    id: '3',
    nome: 'Kit Cobre Leito Queen Estampado',
    categoria: 'cama',
    preco: 199.90,
    precoPromocional: null,
    imagem: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop',
    destaque: false,
    esgotado: true,
  },
  {
    id: '4',
    nome: 'Toalha de Mesa Retangular 6 Lugares',
    categoria: 'mesa',
    preco: 120.00,
    precoPromocional: 99.90,
    imagem: 'https://images.unsplash.com/photo-1603513360454-e85d4380eb4c?q=80&w=800&auto=format&fit=crop',
    destaque: true,
    esgotado: false,
  },
];