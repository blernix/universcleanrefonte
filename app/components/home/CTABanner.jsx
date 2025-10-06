'use client';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

export default function CTABanner({ onOpenModal }) {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
      {/* Cercles décoratifs en arrière-plan */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à redonner vie à vos textiles ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Obtenez votre devis gratuit en moins de 24h. Intervention rapide partout en Île-de-France.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.button
              onClick={onOpenModal}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-50 transition-all hover:scale-105 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Devis gratuit en ligne
            </motion.button>

            <a
              href="tel:+33XXXXXXXXX"
              className="bg-blue-700 text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-800 transition-all hover:scale-105 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-4xl font-bold mb-2">24h</p>
              <p className="text-blue-100">Réponse à votre devis</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-4xl font-bold mb-2">48h</p>
              <p className="text-blue-100">Intervention possible</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-4xl font-bold mb-2">100%</p>
              <p className="text-blue-100">Satisfaction garantie</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
