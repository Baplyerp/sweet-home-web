import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <span className="text-xl font-bold text-brand-dark">Sweet Home Enxovais</span>
            <p className="text-sm text-gray-500 mt-1">Conforto e elegância para o seu lar.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-brand-dark transition-colors">Instagram</Link>
            <Link href="#" className="text-gray-400 hover:text-brand-dark transition-colors">WhatsApp</Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 flex justify-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Sweet Home. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}