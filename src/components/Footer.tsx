import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand/20 mt-auto pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Coluna 1: Marca */}
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold text-brand-dark tracking-tighter">
              Sweet<span className="text-brand">Home</span>
            </span>
            <p className="text-sm text-brand-accent mt-4 leading-relaxed">
              Elevando o conforto do seu lar com produtos exclusivos de Cama, Mesa e Banho. Qualidade e elegância em cada fio.
            </p>
          </div>

          {/* Coluna 2: Departamentos */}
          <div>
            <h3 className="text-brand-dark font-semibold mb-4 uppercase text-sm tracking-wider">Departamentos</h3>
            <ul className="space-y-2 text-sm text-brand-accent">
              <li><Link href="/categorias?tipo=cama" className="hover:text-brand transition-colors">Cama</Link></li>
              <li><Link href="/categorias?tipo=mesa" className="hover:text-brand transition-colors">Mesa</Link></li>
              <li><Link href="/categorias?tipo=banho" className="hover:text-brand transition-colors">Banho</Link></li>
              <li><Link href="/categorias?tipo=decoracao" className="hover:text-brand transition-colors">Decoração</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Institucional */}
          <div>
            <h3 className="text-brand-dark font-semibold mb-4 uppercase text-sm tracking-wider">A Loja</h3>
            <ul className="space-y-2 text-sm text-brand-accent">
              <li><Link href="#" className="hover:text-brand transition-colors">Sobre Nós</Link></li>
              <li><Link href="#" className="hover:text-brand transition-colors">Política de Trocas</Link></li>
              <li><Link href="#" className="hover:text-brand transition-colors">Prazos e Entregas</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Atendimento */}
          <div>
            <h3 className="text-brand-dark font-semibold mb-4 uppercase text-sm tracking-wider">Atendimento</h3>
            <ul className="space-y-2 text-sm text-brand-accent mb-4">
              <li>WhatsApp: (00) 00000-0000</li>
              <li>Seg a Sex das 08h às 18h</li>
            </ul>
            <button className="bg-brand text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-brand-dark transition-colors w-full sm:w-auto">
              Fale Conosco
            </button>
          </div>
        </div>

        {/* Linha Inferior */}
        <div className="border-t border-brand/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-brand-accent text-center md:text-left">
            &copy; {new Date().getFullYear()} Sweet Home Enxovais. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-2 text-sm text-brand-accent">
            <span>Desenvolvido por</span>
            <span className="font-bold text-brand-dark">Baply</span>
          </div>
        </div>
      </div>
    </footer>
  );
}