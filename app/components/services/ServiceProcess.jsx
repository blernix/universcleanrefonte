'use client';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function ServiceProcess({ process }) {
  if (!process || process.length === 0) return null;

  // Variantes d'animation pour le container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Variantes d'animation pour chaque carte
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  // Variantes pour les numéros
  const numberVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        delay: 0.2
      }
    }
  };

  return (
    <section className="!py-32 !bg-gradient-to-b !from-gray-50 !to-white !relative !overflow-hidden">
      {/* Décoration de fond */}
      <div className="!absolute !inset-0 !bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05)_0%,transparent_50%)]"></div>
      <div className="!absolute !inset-0 !bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.05)_0%,transparent_50%)]"></div>

      <div className="!container !mx-auto !px-8 !text-center !max-w-7xl !relative !z-10">
        {/* Header avec animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="!text-4xl md:!text-5xl !font-bold !text-gray-900 !mb-6 !text-center">
            Notre Processus en {process.length} Étapes
          </h2>
          <p className="!text-xl !text-gray-600 !mb-20 !text-center !max-w-3xl !mx-auto">
            Profitez d'un service professionnel sans quitter le confort de votre maison.
          </p>
        </motion.div>

        {/* Grid des étapes avec animation staggered */}
        <motion.div
          className="!grid sm:!grid-cols-2 lg:!grid-cols-4 !gap-8 md:!gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {process.map((step, index) => (
            <motion.div
              key={step.step}
              variants={cardVariants}
              className="!relative !flex !flex-col !items-center !p-8 !bg-white !rounded-3xl !shadow-lg hover:!shadow-2xl !transition-all !duration-300 !border-2 !border-gray-100 hover:!border-blue-200 !group"
            >
              {/* Ligne de connexion entre les cartes (desktop uniquement) */}
              {index < process.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                  className="!hidden lg:!block !absolute !top-10 !left-[calc(100%+1rem)] !w-[calc(100%-2rem)] !h-[3px] !bg-gradient-to-r !from-blue-400 !to-purple-400 !origin-left !z-0"
                >
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.4 }}
                    className="!absolute !right-0 !top-1/2 !-translate-y-1/2"
                  >
                    <CheckCircle2 className="!w-5 !h-5 !text-purple-500 !fill-white" />
                  </motion.div>
                </motion.div>
              )}

              {/* Badge numéro avec animation */}
              <motion.div
                variants={numberVariants}
                className="!flex !items-center !justify-center !h-24 !w-24 !rounded-full !bg-gradient-to-br !from-blue-500 !to-purple-600 !text-white !font-extrabold !text-4xl !mb-6 !shadow-xl group-hover:!shadow-2xl group-hover:!scale-110 !transition-all !duration-300 !border-4 !border-white !relative"
              >
                <span className="!relative !z-10">{step.step}</span>
                {/* Cercle animé en arrière-plan */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: [0, 1.3, 1], opacity: [0, 0.3, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
                  className="!absolute !inset-0 !bg-blue-400 !rounded-full"
                />
              </motion.div>

              {/* Contenu avec animation */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                className="!space-y-4"
              >
                <h3 className="!text-xl md:!text-2xl !font-bold !text-gray-900 !text-center group-hover:!text-blue-600 !transition-colors !duration-300">
                  {step.title}
                </h3>
                <p className="!text-gray-600 !text-base !leading-relaxed !text-center">
                  {step.desc}
                </p>
              </motion.div>

              {/* Badge "Étape" en coin */}
              <div className="!absolute !top-4 !right-4 !bg-blue-100 !text-blue-600 !text-xs !font-semibold !px-3 !py-1 !rounded-full !uppercase !tracking-wider">
                Étape {step.step}
              </div>

              {/* Effet de brillance au hover */}
              <div className="!absolute !inset-0 !bg-gradient-to-br !from-blue-400/0 !via-purple-400/0 !to-blue-400/0 group-hover:!from-blue-400/5 group-hover:!via-purple-400/5 group-hover:!to-blue-400/5 !rounded-3xl !transition-all !duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA finale animée */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="!mt-20 !text-center"
        >
          <div className="!inline-flex !items-center !gap-2 !bg-gradient-to-r !from-blue-50 !to-purple-50 !px-8 !py-4 !rounded-full !border-2 !border-blue-100">
            <CheckCircle2 className="!w-6 !h-6 !text-green-500" />
            <p className="!text-lg !font-semibold !text-gray-700">
              Résultat garanti
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
