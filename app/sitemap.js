// Génération automatique du sitemap pour le SEO
// Ce fichier est lu par Next.js et génère automatiquement sitemap.xml

import { servicesData } from '@/app/data/services';

// Configuration pour l'export statique
export const dynamic = 'force-static';
export const revalidate = false;

export default function sitemap() {
  const baseUrl = 'https://univers-clean77.fr';
  const lastModifiedDate = new Date().toISOString();

  // Pages statiques
  const staticPages = [
    {
      url: baseUrl,
      lastModified: lastModifiedDate,
      changeFrequency: 'monthly',
      priority: 1.0, // Page d'accueil = priorité maximale
    },
    // Pages légales à ajouter quand elles seront créées
    // {
    //   url: `${baseUrl}/mentions-legales`,
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 0.3,
    // },
    // {
    //   url: `${baseUrl}/politique-confidentialite`,
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 0.3,
    // },
  ];

  // Pages services (générées dynamiquement depuis les données)
  const servicePages = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: lastModifiedDate,
    changeFrequency: 'monthly',
    priority: 0.8, // Pages services = haute priorité
  }));

  // Combiner toutes les pages
  return [...staticPages, ...servicePages];
}
