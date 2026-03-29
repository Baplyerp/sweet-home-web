import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sweet Home Comfort',
    short_name: 'Sweet Home',
    description: 'Enxovais de luxo e alto padrão para o seu lar.',
    start_url: '/',
    display: 'standalone', // Isso faz abrir como aplicativo, sem a barra do navegador!
    background_color: '#FAF8F3', // Nossa cor Bege
    theme_color: '#4A3525', // Nosso Marrom Premium para a barra do celular
    icons: [
      {
        src: '/images/logo.png', // Garanta que essa imagem exista na pasta public/images!
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}