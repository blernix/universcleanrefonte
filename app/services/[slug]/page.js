import { servicesData } from '@/app/data/services';
import ServicePageClient from './ServicePageClient';

// Generate static paths for all services
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicesData.find(s => s.slug === slug);

  return <ServicePageClient service={service} />;
}
