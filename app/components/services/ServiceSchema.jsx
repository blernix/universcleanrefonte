// Composant pour injecter les schemas JSON-LD dans les pages services
// Optimisé pour le SEO et les rich snippets Google
import { calculateDiscountedPrice } from '@/app/utils/priceCalculations';

export default function ServiceSchema({ service }) {
  // Fonction pour extraire tous les prix numériques d'une formule (après réduction si applicable)
  const extractAllPriceNumbers = (formula) => {
    if (!formula.price) return [];
    const prices = [];
    const isDiscounted = service.slug === 'nettoyage-canape' || service.slug === 'nettoyage-matelas';
    
    for (const key in formula.price) {
      const priceStr = formula.price[key];
      if (!priceStr || priceStr === 'Sur devis') continue;
      
      let finalPriceStr = priceStr;
      if (isDiscounted) {
        const { discounted } = calculateDiscountedPrice(priceStr);
        finalPriceStr = discounted;
      }
      
      // Convertir en nombre
      const cleanPrice = finalPriceStr.replace('€', '').replace(',', '.');
      const priceNum = parseFloat(cleanPrice);
      if (!isNaN(priceNum)) {
        prices.push(priceNum);
      }
    }
    return prices;
  };

  // Extraire le prix minimum
  const getMinPrice = () => {
    if (!service.formulas || service.formulas.length === 0) return null;
    const firstFormula = service.formulas[0];
    const prices = extractAllPriceNumbers(firstFormula);
    if (prices.length === 0) return null;
    return Math.min(...prices);
  };

  // Extraire le prix maximum
  const getMaxPrice = () => {
    if (!service.formulas || service.formulas.length === 0) return null;
    const lastFormula = service.formulas[service.formulas.length - 1];
    const prices = extractAllPriceNumbers(lastFormula);
    if (prices.length === 0) return null;
    return Math.max(...prices);
  };

  const minPrice = getMinPrice();
  const maxPrice = getMaxPrice();

  // 1. Schema Service
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://univers-clean77.fr/services/${service.slug}#service`,
    name: service.title,
    description: service.description,
    image: `https://univers-clean77.fr${service.heroImage}`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://univers-clean77.fr#business',
      name: 'Univers Clean 77',
      telephone: '+33782364263',
      email: 'contact@univers-clean77.fr',
      url: 'https://univers-clean77.fr',
      logo: 'https://univers-clean77.fr/logo.png',
      image: 'https://univers-clean77.fr/logo.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '4 Rue de la Ferme',
        addressLocality: 'La Genevraye',
        postalCode: '77690',
        addressRegion: 'Île-de-France',
        addressCountry: 'FR'
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
          opens: '09:00',
          closes: '18:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '17:00'
        }
      ],
      priceRange: minPrice && maxPrice ? `${minPrice}€ - ${maxPrice}€` : 'Sur devis',
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 48.348611,
          longitude: 2.674722
        },
        geoRadius: '30000' // 30km en mètres
      }
    },
    serviceType: service.category === 'automobile' ? 'Nettoyage Automobile' : 'Nettoyage Mobilier',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 48.348611,
        longitude: 2.674722
      },
      geoRadius: '30000'
    },
    offers: minPrice && maxPrice ? {
      '@type': 'AggregateOffer',
      lowPrice: minPrice,
      highPrice: maxPrice,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: `https://univers-clean77.fr/services/${service.slug}`,
      priceSpecification: service.formulas?.map((formula) => ({
        '@type': 'UnitPriceSpecification',
        name: formula.name,
        price: minPrice,
        priceCurrency: 'EUR'
      }))
    } : {
      '@type': 'Offer',
      price: 'Sur devis',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: `https://univers-clean77.fr/services/${service.slug}`
    }
  };

  // 2. Schema Breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://univers-clean77.fr'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://univers-clean77.fr/#services'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `https://univers-clean77.fr/services/${service.slug}`
      }
    ]
  };

  // 3. Schema FAQPage (si FAQs disponibles)
  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  } : null;

  // 4. Schema Organization (entreprise)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://univers-clean77.fr#organization',
    name: 'Univers Clean 77',
    url: 'https://univers-clean77.fr',
    logo: 'https://univers-clean77.fr/logo.png',
    description: 'Nettoyage professionnel à domicile en Seine-et-Marne. Plus de 10 ans d\'expérience. Voiture, canapé, matelas, mobilier.',
    telephone: '+33782364263',
    email: 'contact@univers-clean77.fr',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4 Rue de la Ferme',
      addressLocality: 'La Genevraye',
      postalCode: '77690',
      addressRegion: 'Île-de-France',
      addressCountry: 'FR'
    },
    sameAs: [
      // Ajouter ici les liens réseaux sociaux quand disponibles
      'https://www.facebook.com/universclean77',
      'https://www.instagram.com/universclean77/'
    ]
  };

  return (
    <>
      {/* Schema Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Schema Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Schema FAQ (si disponible) */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Schema Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
