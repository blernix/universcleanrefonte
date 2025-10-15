'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marie L.',
      service: 'Nettoyage canapé',
      rating: 5,
      comment: 'Service impeccable ! Mon canapé est comme neuf. Intervention rapide et professionnelle.'
    },
    {
      name: 'Thomas B.',
      service: 'Nettoyage voiture complet',
      rating: 5,
      comment: 'Résultat bluffant sur ma voiture. L\'intérieur et l\'extérieur sont parfaits. Je recommande !'
    },
    {
      name: 'Sophie D.',
      service: 'Nettoyage matelas',
      rating: 5,
      comment: 'Très professionnel. Les taches ont complètement disparu. Excellent rapport qualité-prix.'
    }
  ];

  return (
    <section id="avis" aria-labelledby="avis-title" className="py-20 bg-gray-50">
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
