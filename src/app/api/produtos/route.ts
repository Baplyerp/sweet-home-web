import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Esta rota receberá comandos (PATCH) do script Python da Baply
export async function PATCH(request: Request) {
  try {
    // 1. Camada de Segurança: Verifica a chave da API Baply
    // Você vai adicionar NEXT_PUBLIC_BAPLY_API_KEY no arquivo .env.local depois
    const authHeader = request.headers.get('authorization');
    const apiKey = process.env.NEXT_PUBLIC_BAPLY_API_KEY;

    if (!apiKey || authHeader !== `Bearer ${apiKey}`) {
      return NextResponse.json({ error: 'Acesso Negado. Chave Baply inválida.' }, { status: 401 });
    }

    // 2. Recebe os dados enviados pelo script Python
    const body = await request.json();
    const { id, esgotado, preco_promocional } = body;

    if (!id) {
      return NextResponse.json({ error: 'O ID do produto é obrigatório.' }, { status: 400 });
    }

    // 3. Executa a atualização no Supabase
    const { data, error } = await supabase
      .from('produtos')
      .update({ 
        esgotado: esgotado, 
        preco_promocional: preco_promocional 
      })
      .eq('id', id)
      .select();

    if (error) throw error;

    // 4. Retorna a confirmação para o script Python
    return NextResponse.json({ 
      message: 'Sincronização com ERP Baply concluída com sucesso!', 
      produto_atualizado: data 
    }, { status: 200 });

  } catch (error) {
    console.error("Erro na API Baply:", error);
    return NextResponse.json({ error: 'Erro interno no servidor ao sincronizar.' }, { status: 500 });
  }
}