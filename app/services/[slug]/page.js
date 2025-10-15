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
      // Récupérer le premier prix disponible (classe1, classe2, ou classe3)
      const priceValue = firstFormula.price.classe1 || firstFormula.price.classe2 || firstFormula.price.classe3;
      minPrice = priceValue ? priceValue.replace('€', '') : null;
    }
  }

  // Construire le titre optimisé SEO
  const title = `${service.title} à Domicile - Univers Clean 77 | Devis Gratuit`;

  // Construire la description optimisée SEO
  let description = service.description || service.shortDescription;
  if (minPrice) {
    description = `${description} Prix dès ${minPrice}€. Intervention rapide en Seine-et-Marne. Devis gratuit sous 24h.`;
  } else {
    description = `${description} Intervention rapide en Seine-et-Marne. Devis gratuit sous 24h.`;
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
    'devis gratuit',
    'intervention rapide'
  ];

  const serviceKeywords = service.category === 'automobile'
    ? [...baseKeywords, 'nettoyage voiture', 'détailing auto', 'nettoyage automobile']
    : [...baseKeywords, 'nettoyage mobilier', 'nettoyage domicile'];

  return {
    title,
    description,
    keywords: [...serviceKeywords, service.title.toLowerCase()],
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
