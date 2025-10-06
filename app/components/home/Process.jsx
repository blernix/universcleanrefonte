'use client';
import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    { number: '1', title: 'Demande de devis', desc: 'Formulaire en ligne ou appel téléphonique' },
    { number: '2', title: 'Confirmation rapide', desc: 'Réponse sous 24h avec tarif personnalisé' },
    { number: '3', title: 'Intervention', desc: 'Rendez-vous à votre domicile sous 48h' },
    { number: '4', title: 'Résultat garanti', desc: 'Paiement après satisfaction complète' }
  ];

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Un processus simple et transparent
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 bg-white text-blue-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-blue-100">{step.desc}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-400/30" style={{ width: 'calc(100% - 4rem)', marginLeft: '2rem' }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
