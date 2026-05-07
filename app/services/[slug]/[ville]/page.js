import { mobilierServices } from '@/app/data/services';
import { villes, getVilleBySlug } from '@/app/data/villes';
import ServicePageClient from '../ServicePageClient';

export async function generateStaticParams() {
  const params = [];
  for (const service of mobilierServices) {
    for (const ville of villes) {
      params.push({
        slug: service.slug,
        ville: ville.slug
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { slug, ville: villeSlug } = await params;
  const service = mobilierServices.find(s => s.slug === slug);
  const ville = getVilleBySlug(villeSlug);

  if (!service || !ville) {
    return {
      title: 'Page non trouvée - Univers Clean 77',
      description: 'La page demandée n\'existe pas.'
    };
  }

  const title = `${service.title} à ${ville.nom} (${ville.codePostal}) | Univers Clean 77`;
  const description = `${service.shortDescription} Intervention à ${ville.nom} et ses environs. ${ville.description.substring(0, 80)} Devis gratuit en 24h.`;

  const keywords = [
    service.title.toLowerCase(),
    `nettoyage ${ville.nom}`,
    `nettoyage meuble ${ville.nom}`,
    service.slug.includes('canape') ? 'nettoyage canapé' : 'nettoyage matelas',
    `nettoyage professionnel ${ville.nom}`,
    ville.nom,
    ville.codePostal,
    'Seine-et-Marne',
    'Univers Clean 77',
    'devis gratuit'
  ];

  return {
    title,
    description: description.length > 160 ? description.substring(0, 157) + '...' : description,
    keywords,
    openGraph: {
      title: `${service.title} à ${ville.nom} — Univers Clean 77`,
      description: service.shortDescription,
      images: [{ url: service.heroImage || service.image, width: 1200, height: 630, alt: service.heroImageAlt || service.title }],
      url: `https://univers-clean77.fr/services/${slug}/${villeSlug}`,
      siteName: 'Univers Clean 77',
      type: 'website',
      locale: 'fr_FR'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} à ${ville.nom}`,
      description: service.shortDescription,
      images: [service.heroImage || service.image]
    },
    alternates: {
      canonical: `https://univers-clean77.fr/services/${slug}/${villeSlug}`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 }
    }
  };
}

export default async function ServiceCityPage({ params }) {
  const { slug, ville: villeSlug } = await params;
  const service = mobilierServices.find(s => s.slug === slug);
  const ville = getVilleBySlug(villeSlug);

  return <ServicePageClient service={service} ville={ville} />;
}
