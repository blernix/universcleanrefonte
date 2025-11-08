import { Inter } from "next/font/google";
import "./globals.css";
import SmoothAnchor from "./components/SmoothAnchor";

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
    icon: "/favicon.ico",
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
  telephone: '+33782364263',
  email: 'universclean77@gmail.com',
  priceRange: '€€',

  address: {
    '@type': 'PostalAddress',
    streetAddress: '4 Rue de la Ferme',
    addressLocality: 'La Genevraye',
    addressRegion: 'Île-de-France',
    postalCode: '77690',
    addressCountry: 'FR',
  },

  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.348611,
    longitude: 2.674722
  },

  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '09:00',
      closes: '17:00'
    }
  ],

  areaServed: [
    { '@type': 'City', name: 'Melun' },
    { '@type': 'City', name: 'Fontainebleau' },
    { '@type': 'City', name: 'Meaux' },
    { '@type': 'City', name: 'Provins' },
    { '@type': 'City', name: 'La Genevraye' },
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5VFZ6QMZ');`
          }}
        />
        {/* End Google Tag Manager */}

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-white text-gray-900`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5VFZ6QMZ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Système de navigation smooth avec fade */}
        <SmoothAnchor />

        {children}
      </body>
    </html>
  );
}
