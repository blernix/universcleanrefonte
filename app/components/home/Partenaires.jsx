'use client';

import { motion } from 'framer-motion';

export default function Partenaires() {
  const partenaires = [
    { id: 1, nom: 'Eau de Paris', logo: '/logo_partenaire1.png' },
    { id: 4, nom: 'Carton Turquand', logo: '/CARTON TURQUAND.png' },
    { id: 2, nom: 'Médiateurs 77', logo: '/mediateurs77.jpeg' },
    { id: 3, nom: 'Ville de Nemours', logo: '/ville-nemours.jpeg' },
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
            Nos partenaires locaux.
          </p>
        </motion.div>

        {/* Logos des partenaires - rangée statique */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
          {partenaires.map((partenaire) => (
            <div key={partenaire.id} className="w-64">
              <div className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group">
                <img
                  src={partenaire.logo}
                  alt={`Logo ${partenaire.nom}`}
                  className="w-full h-24 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
