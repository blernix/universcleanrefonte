import { servicesData } from '@/app/data/services';
import ServicePageClient from './ServicePageClient';

// Generate static paths for all services
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// Generate dynamic metadata for each service page
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return {
      title: 'Service non trouvé - Univers Clean 77',
      description: 'Le service demandé n\'existe pas.'
    };
  }

  // Extraire le prix minimum si des formules existent
  let minPrice = null;
  if (service.formulas && service.formulas.length > 0) {
    const firstFormula = service.formulas[0];
    if (firstFormula.price) {
      const priceKeys = Object.keys(firstFormula.price);
      const priceValue = firstFormula.price[priceKeys[0]];
      if (priceValue && priceValue.includes('€')) {
        minPrice = priceValue.replace('€', '');
      }
    }
  }

  // Construire le titre optimisé SEO (pages directes uniquement)
  const title = `${service.seoTitle || service.title} à Fontainebleau et Alentours (77) | Univers Clean 77`;

  // Construire la description optimisée SEO (copie arbitrée, pages directes uniquement)
  let description = service.metaDescription || service.description || service.shortDescription;

  if (!service.metaDescription) {
    if (minPrice) {
      description = `${description} Prix dès ${minPrice}€. Intervention rapide en Seine-et-Marne. Devis en 24h.`;
    } else {
      description = `${description} Intervention rapide en Seine-et-Marne. Devis en 24h.`;
    }
  }

  // Limiter la description à 160 caractères pour le SEO
  if (description.length > 160) {
    description = description.substring(0, 157) + '...';
  }

  // Mots-clés spécifiques au service
  const baseKeywords = [
    'nettoyage professionnel',
    'Seine-et-Marne',
    'Univers Clean 77',
    'devis',
    'intervention rapide'
  ];

  const serviceKeywords = [
    ...baseKeywords,
    service.title.toLowerCase(),
    service.slug.replace(/-/g, ' '),
    service.category === 'mobilier' ? 'nettoyage textile' :
    service.category === 'locaux' ? 'nettoyage bureau' :
    service.category === 'chantier' ? 'nettoyage chantier' : '',
  ].filter(Boolean);

  return {
    title,
    description,
    keywords: serviceKeywords,
    openGraph: {
      title: `${service.title} Professionnel - Univers Clean 77`,
      description: service.shortDescription,
      images: [
        {
          url: service.heroImage || service.image,
          width: 1200,
          height: 630,
          alt: service.heroImageAlt || service.imageAlt || service.title
        }
      ],
      url: `https://univers-clean77.fr/services/${slug}`,
      siteName: 'Univers Clean 77',
      type: 'website',
      locale: 'fr_FR'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} Professionnel`,
      description: service.shortDescription,
      images: [service.heroImage || service.image]
    },
    alternates: {
      canonical: `https://univers-clean77.fr/services/${slug}`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      }
    }
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);

  return <ServicePageClient service={service} />;
}
