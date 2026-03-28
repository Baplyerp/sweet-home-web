// Agora este arquivo guarda apenas a "forma" do nosso dado, sem dados falsos!
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