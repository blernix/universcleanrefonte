'use client';

import { motion } from 'framer-motion';

export default function Partenaires() {
  const partenaires = [
    { id: 1, nom: 'Partenaire 1', logo: '/logo_partenaire1.png' },
    { id: 2, nom: 'Partenaire 2', logo: '/logo_partenaire2.png' },
    { id: 3, nom: 'Partenaire 3', logo: '/logo_partenaire3.png' },
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

        {/* Logos des partenaires */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center">
          {partenaires.map((partenaire, index) => (
            <motion.div
              key={partenaire.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
               {/* Logo */}
              <div className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
                <img
                  src={partenaire.logo}
                  alt={`Logo ${partenaire.nom}`}
                  className="w-full h-auto max-h-32 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
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