'use client';
import { motion } from 'framer-motion';
import { Sparkles, Truck, MessageSquare } from 'lucide-react';

export default function ServiceHero({ service, isAutomobile, hasFormulas, onOpenModal }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50 !pt-40 !pb-32">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <h1 className="!text-5xl md:!text-6xl font-extrabold leading-tight !text-gray-900">
              <span className="block !text-blue-600 !mb-6">{service.title}</span>
              <span className="block !text-gray-800 !text-3xl md:!text-4xl !mt-6">
                {isAutomobile
                  ? "Un soin professionnel pour votre véhicule"
                  : "Retrouver le plaisir d'un intérieur propre, sain et lumineux"}
              </span>
            </h1>

            <p className="!text-lg md:!text-xl !text-gray-600 leading-relaxed max-w-xl !mt-8">
              {service.description || service.shortDescription}
            </p>

            {hasFormulas && (
              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 !mt-8">
                <p className="!text-blue-900 font-bold !text-lg !mb-3">
                  {service.formulas.length} Formules disponibles
                </p>
                <p className="!text-blue-700">Du rafraîchissement express au soin premium haut de gamme</p>
              </div>
            )}

            <motion.button
              onClick={onOpenModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-blue-600 text-white !px-12 !py-5 rounded-full font-bold !text-xl shadow-lg hover:bg-blue-700 transition-colors !mt-8"
            >
              Prendre Rendez-vous
            </motion.button>

            <div className="!pt-14 space-y-6">
              {[
                { icon: Sparkles, text: isAutomobile ? "Produits Professionnels Haut de Gamme (Koch Chemie, CarPro)" : "Produits Textiles Spécifiques et Respectueux" },
                { icon: Truck, text: "Intervention à Domicile - La Genevraye (77) et 30km" },
                { icon: MessageSquare, text: "Devis Gratuit et Transparent" },
              ].map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <Icon className="w-7 h-7 text-blue-600" />
                  <span className="font-medium !text-gray-700 !text-lg">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-blue-100/40 blur-3xl rounded-3xl" />
            <img
              src={service.heroImage}
              alt={service.heroImageAlt}
              className="relative rounded-3xl shadow-2xl w-full h-[520px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
