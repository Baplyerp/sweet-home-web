import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // O segurança olha para o caminho que o usuário quer acessar
  const path = request.nextUrl.pathname;

  // Se o caminho for a área de admin...
  if (path.startsWith('/admin')) {
    // Ele procura pelo "crachá" (neste caso, um cookie de autenticação que criaremos depois)
    const temCracha = request.cookies.has('sb-auth-token'); 

    // Para fins de teste no nosso 360, vamos deixar a porta "encostada",
    // mas já estruturada. Se quiser trancar de vez agora, mude a linha abaixo para `!temCracha`.
    const trancarAgora = false; 

    if (trancarAgora) {
      // Se não tiver o crachá, redireciona para uma página de login
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

// Dizemos ao segurança para vigiar apenas as rotas que importam
export const config = {
  matcher: ['/admin/:path*'],
};