import HomeClient from './HomeClient';

export const metadata = {
  title: 'Univers Clean 77 — Nettoyage Professionnel à Fontainebleau et Alentours',
  description: 'Nettoyage professionnel de canapé, matelas, locaux et fin de chantier à Fontainebleau et alentours (77). Intervention rapide, résultat garanti. Devis en 24h.',

  openGraph: {
    type: 'website',
    url: 'https://univers-clean77.fr',
    title: 'Univers Clean 77 - Nettoyage Professionnel à Fontainebleau et alentours',
    description: 'Spécialiste du nettoyage de canapé, matelas, locaux et fin de chantier à Fontainebleau et alentours (77). Devis en 24h, intervention rapide.',
    siteName: 'Univers Clean 77',
    images: [
      {
        url: 'https://univers-clean77.fr/logo_univers_clean.png',
        width: 1200,
        height: 630,
        alt: 'Univers Clean 77 - Nettoyage Professionnel',
      },
    ],
    locale: 'fr_FR',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Univers Clean 77 - Nettoyage Professionnel à Fontainebleau et alentours',
    description: 'Spécialiste du nettoyage de canapé, matelas, locaux et fin de chantier à Fontainebleau et alentours (77). Devis en 24h, intervention rapide.',
    images: ['https://univers-clean77.fr/logo_univers_clean.png'],
  },
};

export default function Page() {
  return <HomeClient />;
}
