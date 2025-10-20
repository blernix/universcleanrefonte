'use client';
import { motion } from 'framer-motion';
import { Sparkles, Award, Users, Leaf } from 'lucide-react';

export default function WhyUs() {
  const benefits = [
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: 'Plus de 10 ans d\'expérience',
      description: 'Formé dans les grandes concessions (Land Rover, Jaguar, BMW). Passion devenue métier.'
    },
    {
      icon: <Sparkles className="w-12 h-12 text-blue-600" />,
      title: 'Produits professionnels haut de gamme',
      description: 'Koch Chemie, CarPro pour l\'automobile. Produits textiles spécifiques pour le mobilier. Jamais mélangés.'
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Tous les clients sont les bienvenus',
      description: 'De la Twingo à la Ferrari, du canapé classique au mobilier haut de gamme. Même attention pour tous.'
    },
    {
      icon: <Leaf className="w-12 h-12 text-blue-600" />,
      title: 'Respect de l\'environnement',
      description: 'Produits respectueux des matériaux et de la planète. Sans danger pour enfants et animaux.'
    }
  ];

  return (
    <section id="pourquoi" aria-labelledby="pourquoi-title" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="!text-center mb-16"
        >
          <h2 id="pourquoi-title" className="!text-4xl md:!text-5xl font-bold !text-gray-900 !mb-4 !text-center">
            Notre Différence
          </h2>
          <p className="!text-xl !text-gray-600 max-w-3xl !mx-auto !text-center">
            La qualité avant tout. Des produits spécifiques pour chaque prestation,
            une passion qui me pousse à redonner vie à tout ce que je nettoie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="!text-center p-6"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="!text-xl font-bold !text-gray-900 !mb-3 !text-center">{benefit.title}</h3>
              <p className="!text-gray-600 !text-center">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
