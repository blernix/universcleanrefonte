'use client';
import { servicesData } from '@/app/data/services';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServicesGrid() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="!text-center mb-20"
        >
          <h2 id="services-title" className="!text-4xl md:!text-5xl font-bold !text-gray-900 mb-4 !text-center">
            Nos Services
          </h2>
          <p className="!text-xl !text-gray-600 !text-center max-w-2xl !mx-auto">
            Découvrez notre gamme complète de services de nettoyage professionnel
          </p>
        </motion.div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={`/services/${service.slug}`}>
                <div className="relative group bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full hover:-translate-y-2">
                  
                  {/* Image */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Badge prix */}
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1.5 rounded-full font-semibold text-sm shadow-lg">
                      {service.formulas ? `Dès ${service.formulas[0].price.classe1}` : service.price}
                    </div>

                    {/* Badge catégorie */}
                    {service.category && (
                      <div className="absolute top-4 left-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full font-medium text-xs shadow-sm capitalize">
                        {service.category}
                      </div>
                    )}
                  </div>

                  {/* Contenu */}
                  <div className="flex flex-col flex-grow p-8 !text-center relative z-10 bg-white transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-blue-50">
                    <h3 className="!text-2xl font-bold !text-gray-900 mb-4 !text-center">
                      {service.title}
                    </h3>
                    <p className="!text-gray-600 mb-6 leading-relaxed flex-grow !text-center">
                      {service.shortDescription}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      <span>En savoir plus</span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}