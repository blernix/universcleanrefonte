"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { villes } from '@/app/data/villes';

export default function ZoneIntervention({ serviceSlug, currentVilleSlug }) {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="zone-intervention-title">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 id="zone-intervention-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notre zone d'intervention
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Univers Clean 77 intervient dans tout le sud Seine-et-Marne.
            Découvrez toutes les villes où nous proposons nos services de nettoyage :
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {villes.map((ville) => {
              const isCurrent = ville.slug === currentVilleSlug;
              const href = `/services/${serviceSlug}/${ville.slug}`;

              if (isCurrent) {
                return (
                  <span
                    key={ville.slug}
                    className="block px-4 py-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-500 text-gray-900 font-semibold text-sm shadow-md"
                  >
                    <MapPin className="w-3.5 h-3.5 inline-block mr-1.5 text-blue-600" />
                    {ville.nom} <span className="text-blue-600 ml-1">—— vous êtes ici</span>
                  </span>
                );
              }

              return (
                <Link
                  key={ville.slug}
                  href={href}
                  className="block px-4 py-3 rounded-xl bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg hover:bg-blue-50/50 transition-all duration-300 group"
                >
                  <span className="text-gray-900 font-medium text-sm group-hover:text-blue-700 transition-colors flex items-center justify-between">
                    <span>
                      <MapPin className="w-3.5 h-3.5 inline-block mr-1.5 text-blue-500 group-hover:text-blue-700" />
                      {ville.nom}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
