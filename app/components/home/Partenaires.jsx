'use client';

import { motion } from 'framer-motion';

export default function Partenaires() {
  const partenaires = [
    { id: 1, nom: 'Partenaire 1', logo: '/logo_partenaire1.png' },
    { id: 2, nom: 'Partenaire 2', logo: '/logo_partenaire2.png' },
    { id: 3, nom: 'Partenaire 3', logo: '/logo_partenaire3.png' },
    { id: 4, nom: 'Carton Turquant', logo: '/CARTON TURQUAND.png' },
    { id: 5, nom: 'The Loop', logo: '/THE LOOP.png' },
  ];

  return (
    <section id="partenaires" aria-labelledby="partenaires-title" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 id="partenaires-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Partenaires
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous collaborons avec les meilleures marques pour vous offrir un service de qualité.
          </p>
        </motion.div>

        {/* Logos des partenaires - carrousel automatique */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...partenaires, ...partenaires].map((partenaire, index) => (
              <div
                key={`${partenaire.id}-${index}`}
                className="flex-shrink-0 w-64 px-4"
              >
                <div className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
                  <img
                    src={partenaire.logo}
                    alt={`Logo ${partenaire.nom}`}
                    className="w-full h-auto max-h-32 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note supplémentaire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            Grâce à ces partenariats, nous utilisons des produits professionnels de haute qualité
            pour garantir des résultats exceptionnels sur tous vos biens.
          </p>
        </motion.div>
      </div>
    </section>
  );
}