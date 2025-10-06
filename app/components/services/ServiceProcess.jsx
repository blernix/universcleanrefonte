'use client';
import { motion } from 'framer-motion';

export default function ServiceProcess({ process }) {
  if (!process || process.length === 0) return null;

  return (
    <section className="!py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-8 !text-center max-w-6xl">
        <h2 className="!text-4xl md:!text-5xl font-bold !text-gray-900 !mb-8 !text-center">
          Notre Processus en {process.length} Étapes
        </h2>
        <p className="!text-xl !text-gray-600 !mb-16 !text-center">
          Profitez d'un service professionnel sans quitter le confort de votre maison.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {process.map((step) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: step.step * 0.1 }}
              className="flex flex-col items-center !p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 text-blue-600 font-bold !text-3xl !mb-6">
                {step.step}
              </div>
              <h3 className="!text-xl font-semibold !mb-4 !text-center">{step.title}</h3>
              <p className="!text-gray-600 !text-base !text-center">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
