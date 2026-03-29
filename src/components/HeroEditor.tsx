"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

interface HeroEditorProps {
  tituloAtual: string;
  subtituloAtual: string;
}

export default function HeroEditor({ tituloAtual, subtituloAtual }: HeroEditorProps) {
  const [titulo, setTitulo] = useState(tituloAtual);
  const [subtitulo, setSubtitulo] = useState(subtituloAtual);
  const [salvando, setSalvando] = useState(false);
  const [mensagem, setMensagem] = useState('');

  const salvarAlteracoes = async () => {
    setSalvando(true);
    setMensagem('');
    
    try {
      // Atualiza o título no banco
      await supabase.from('configuracoes').update({ valor: titulo }).eq('chave', 'hero_titulo');
      
      // Atualiza o subtítulo no banco
      await supabase.from('configuracoes').update({ valor: subtitulo }).eq('chave', 'hero_subtitulo');
      
      setMensagem('✅ Alterações salvas com sucesso!');
    } catch (error) {
      setMensagem('❌ Erro ao salvar.');
    } finally {
      setSalvando(false);
      // Apaga a mensagem de sucesso após 3 segundos
      setTimeout(() => setMensagem(''), 3000);
    }
  };

  return (
    <div className="p-6 flex-1 space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Título Principal</label>
        <input 
          type="text" 
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none" 
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Subtítulo (Tag)</label>
        <input 
          type="text" 
          value={subtitulo}
          onChange={(e) => setSubtitulo(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:border-brand focus:ring-1 focus:ring-brand outline-none" 
        />
      </div>
      <button 
        onClick={salvarAlteracoes}
        disabled={salvando}
        className="w-full bg-brand-dark text-white font-bold py-2 rounded-lg mt-4 hover:bg-brand transition-colors disabled:bg-gray-400"
      >
        {salvando ? 'Salvando no banco...' : 'Salvar Alterações'}
      </button>
      
      {/* Feedback visual para o usuário */}
      {mensagem && (
        <p className="text-sm text-center font-medium mt-2 animate-pulse text-brand-dark">
          {mensagem}
        </p>
      )}
    </div>
  );
}