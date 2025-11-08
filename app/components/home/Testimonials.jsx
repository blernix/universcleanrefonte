'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marie L.',
      service: 'Nettoyage canapé',
      rating: 5,
      comment: 'Service impeccable ! Mon canapé est comme neuf. Intervention rapide et professionnelle.',
      date: '2024-10-15'
    },
    {
      name: 'Thomas B.',
      service: 'Nettoyage voiture complet',
      rating: 5,
      comment: 'Résultat bluffant sur ma voiture. L\'intérieur et l\'extérieur sont parfaits. Je recommande !',
      date: '2024-09-28'
    },
    {
      name: 'Sophie D.',
      service: 'Nettoyage matelas',
      rating: 5,
      comment: 'Très professionnel. Les taches ont complètement disparu. Excellent rapport qualité-prix.',
      date: '2024-11-02'
    }
  ];

  // Calculer la note moyenne
  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;
  const reviewCount = testimonials.length;

  // Schema AggregateRating pour afficher les étoiles dans Google
  const aggregateRatingSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://univers-clean77.fr#business',
    name: 'Univers Clean 77',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4 Rue de la Ferme',
      addressLocality: 'La Genevraye',
      addressRegion: 'Île-de-France',
      postalCode: '77690',
      addressCountry: 'FR'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating.toFixed(1),
      reviewCount: reviewCount,
      bestRating: '5',
      worstRating: '1'
    }
  };

  // Schema Review pour chaque témoignage
  const reviewsSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://univers-clean77.fr#organization',
    name: 'Univers Clean 77',
    review: testimonials.map((testimonial) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: testimonial.name
      },
      datePublished: testimonial.date,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating,
        bestRating: '5',
        worstRating: '1'
      },
      reviewBody: testimonial.comment,
      itemReviewed: {
        '@type': 'Service',
        name: testimonial.service,
        provider: {
          '@type': 'LocalBusiness',
          name: 'Univers Clean 77',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '4 Rue de la Ferme',
            addressLocality: 'La Genevraye',
            addressRegion: 'Île-de-France',
            postalCode: '77690',
            addressCountry: 'FR'
          }
        }
      }
    }))
  };

  return (
    <section id="avis" aria-labelledby="avis-title" className="py-20 bg-gray-50">
      {/* Schema AggregateRating */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />

      {/* Schema Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />

      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="avis-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center">
            Découvrez les avis de nos clients satisfaits
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.service}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
