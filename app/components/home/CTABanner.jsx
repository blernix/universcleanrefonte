'use client';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

export default function CTABanner({ onOpenModal }) {
  return (
    <section className="relative overflow-hidden py-32 mt-32 mb-40 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white">
      {/* Éléments décoratifs */}
      <div className="absolute top-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-blue-400/20 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-8 max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="!text-5xl md:!text-6xl font-extrabold mb-8 leading-tight !text-center">
            Prêt à redonner vie à vos textiles ?
          </h2>

          <p className="!text-xl md:!text-2xl !text-blue-100 mb-14 max-w-3xl !mx-auto !text-center leading-relaxed">
            Obtenez votre devis gratuit en moins de 24h.<br />
            Intervention rapide partout en Île-de-France.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 !mb-20">
            <motion.button
              onClick={onOpenModal}
              className="bg-white text-blue-700 !px-10 !py-6 rounded-xl font-bold !text-xl shadow-xl hover:bg-blue-50 transition-all hover:scale-105 flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6" />
              Devis gratuit en ligne
            </motion.button>

            <a
              href="tel:+33782364263"
              className="bg-blue-800/60 border border-white/20 text-white !px-10 !py-6 rounded-xl font-bold !text-xl shadow-lg hover:bg-blue-900/70 transition-all hover:scale-105 flex items-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Appeler maintenant
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: '24h', label: 'Réponse à votre devis' },
              { value: '48h', label: 'Intervention possible' },
              { value: '100%', label: 'Satisfaction garantie' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all"
              >
                <p className="text-5xl font-extrabold mb-3">{item.value}</p>
                <p className="text-blue-100 text-base">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}