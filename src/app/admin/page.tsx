import { supabase } from "@/lib/supabase";

export const revalidate = 0; // O admin nunca deve ter cache, precisa ser sempre em tempo real

export default async function AdminDashboard() {
  // Buscamos todos os produtos diretamente da tabela original (não da view de vitrine)
  const { data: produtos } = await supabase
    .from('produtos')
    .select('id, nome, preco, destaque, esgotado')
    .order('nome');

  const listaProdutos = produtos || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center border-b border-brand/20 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-brand-dark">Painel de Controle</h1>
          <p className="text-brand-accent mt-2">Gerenciamento manual da vitrine Sweet Home</p>
        </div>
        <div className="bg-brand-dark text-white px-4 py-2 rounded-lg text-sm font-bold">
          Admin Logado
        </div>
      </div>

      <div className="bg-white shadow-sm border border-brand/10 rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-brand-light/50 border-b border-brand/10 text-brand-dark text-sm uppercase tracking-wider">
              <th className="p-4 font-semibold">Produto</th>
              <th className="p-4 font-semibold">Preço</th>
              <th className="p-4 font-semibold text-center">Status (Estoque)</th>
              <th className="p-4 font-semibold text-center">Vitrine (Destaque)</th>
              <th className="p-4 font-semibold text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand/5">
            {listaProdutos.map((produto) => (
              <tr key={produto.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 text-brand-dark font-medium">{produto.nome}</td>
                <td className="p-4 text-brand-accent">R$ {produto.preco.toFixed(2)}</td>
                <td className="p-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${produto.esgotado ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                    {produto.esgotado ? 'Esgotado' : 'Em Estoque'}
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${produto.destaque ? 'bg-brand text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {produto.destaque ? 'Em Destaque' : 'Oculto'}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-brand hover:text-brand-dark font-medium text-sm transition-colors">
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}