import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Metadata SEO optimisée
export const metadata = {
  metadataBase: new URL("https://univers-clean77.fr"),
  title: "Univers Clean 77 - Nettoyage Professionnel à Domicile en Île-de-France",
  description: "Nettoyage professionnel de canapé, matelas et voiture à domicile en Seine-et-Marne (77). Intervention rapide, résultat garanti. Devis gratuit en 24h.",

  keywords: [
    "nettoyage professionnel 77",
    "nettoyage à domicile Seine-et-Marne",
    "nettoyage canapé Île-de-France",
    "nettoyage voiture 77",
    "Univers Clean",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    url: 'https://univers-clean77.fr',
    title: 'Univers Clean 77 - Nettoyage Professionnel à Domicile',
    description: 'Spécialiste du nettoyage de canapé, matelas et voiture en Île-de-France. Devis gratuit, intervention rapide.',
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
    title: 'Univers Clean 77 - Nettoyage Professionnel à Domicile',
    description: 'Spécialiste du nettoyage de canapé, matelas et voiture en Île-de-France. Devis gratuit, intervention rapide.',
    images: ['https://univers-clean77.fr/logo_univers_clean.png'],
  },

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

// Schema.org LocalBusiness
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://univers-clean77.fr',
  name: 'Univers Clean 77',
  image: 'https://univers-clean77.fr/logo_univers_clean.png',
  url: 'https://univers-clean77.fr',
  telephone: '+33XXXXXXXXX', // À remplacer par le vrai numéro
  priceRange: '€€',

  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Seine-et-Marne',
    addressRegion: 'Île-de-France',
    postalCode: '77000',
    addressCountry: 'FR',
  },

  areaServed: [
    { '@type': 'City', name: 'Melun' },
    { '@type': 'City', name: 'Fontainebleau' },
    { '@type': 'City', name: 'Meaux' },
    { '@type': 'City', name: 'Provins' },
  ],

  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de nettoyage',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Nettoyage de canapé',
          description: 'Nettoyage professionnel de canapé à domicile',
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Nettoyage de matelas',
          description: 'Nettoyage professionnel de matelas à domicile',
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Nettoyage voiture intérieur',
          description: 'Nettoyage professionnel intérieur de voiture',
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Nettoyage voiture extérieur',
          description: 'Nettoyage professionnel extérieur de voiture',
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Nettoyage voiture complet',
          description: 'Nettoyage professionnel complet de voiture (intérieur + extérieur)',
        }
      },
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
