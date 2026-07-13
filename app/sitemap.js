import { servicesData, mobilierServices } from '@/app/data/services';
import { villes } from '@/app/data/villes';

export const dynamic = 'force-static';
export const revalidate = false;

export default function sitemap() {
  const baseUrl = 'https://univers-clean77.fr';
  const lastModifiedDate = new Date().toISOString();

  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: lastModifiedDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];

  const servicePages = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}/`,
    lastModified: lastModifiedDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const cityPages = [];
  for (const service of mobilierServices) {
    for (const ville of villes) {
      cityPages.push({
        url: `${baseUrl}/services/${service.slug}/${ville.slug}/`,
        lastModified: lastModifiedDate,
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
  }

  return [...staticPages, ...servicePages, ...cityPages];
}
