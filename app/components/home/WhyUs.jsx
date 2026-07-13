'use client';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Leaf } from 'lucide-react';

export default function WhyUs() {
  const benefits = [
    {
      icon: <Sparkles className="w-12 h-12 text-blue-600" />,
      title: 'Propreté',
      description: 'Un travail soigné et minutieux pour un résultat impeccable. Chaque surface retrouve son éclat d\'origine grâce à nos méthodes professionnelles.'
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: 'Confiance',
      description: 'Fiabilité, ponctualité et professionnalisme sont nos engagements. Vous nous confiez vos espaces, nous les traitons avec le plus grand soin.'
    },
    {
      icon: <Leaf className="w-12 h-12 text-blue-600" />,
      title: 'Respect',
      description: 'Des produits d\'entretien écoresponsables, sans danger pour vos enfants, vos animaux et l\'environnement. Propre aujourd\'hui, responsable demain.'
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
            Chez Univers Clean, notre différence, c'est l'exigence du résultat.
            Nous utilisons des méthodes professionnelles, des produits efficaces et un soin du détail que l'on voit vraiment après notre passage. Nous ne faisons pas juste propre, nous faisons impeccable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
