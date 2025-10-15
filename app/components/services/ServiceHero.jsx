'use client';
import { motion } from 'framer-motion';
import { Sparkles, Truck, MessageSquare, Phone, ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';

export default function ServiceHero({ service, isAutomobile, hasFormulas, onOpenModal }) {
  // Calculer le prix minimum dynamiquement
  const getMinPrice = () => {
    if (!service.formulas || service.formulas.length === 0) return null;

    let minPrice = Infinity;
    service.formulas.forEach(formula => {
      if (formula.price) {
        // Si le prix est un objet (différentes classes), prendre le minimum
        if (typeof formula.price === 'object') {
          Object.values(formula.price).forEach(priceStr => {
            const price = parseInt(priceStr.replace('€', '').trim());
            if (price < minPrice) minPrice = price;
          });
        } else {
          // Si le prix est une string simple
          const price = parseInt(formula.price.replace('€', '').trim());
          if (price < minPrice) minPrice = price;
        }
      }
    });

    return minPrice === Infinity ? null : minPrice;
  };

  const minPrice = getMinPrice();

  return (
    <section className="!relative !overflow-hidden !bg-gradient-to-br !from-slate-50 !via-blue-50/30 !to-white !pt-24 md:!pt-32 !pb-12 md:!pb-20">
      {/* Motifs de fond animés */}
      <div className="!absolute !inset-0 !overflow-hidden !pointer-events-none !opacity-40">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="!absolute !-top-40 !-right-40 !w-96 !h-96 !bg-gradient-to-br !from-blue-400/20 !to-purple-400/20 !rounded-full !blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="!absolute !bottom-0 !-left-40 !w-96 !h-96 !bg-gradient-to-tr !from-indigo-400/20 !to-blue-400/20 !rounded-full !blur-3xl"
        />
      </div>

      <div className="!container !relative !mx-auto !px-4 sm:!px-6 md:!px-12 !max-w-7xl">
        <div className="!grid lg:!grid-cols-2 !gap-8 md:!gap-12 lg:!gap-16 !items-start">

          {/* Bloc texte - Order 1 sur mobile et desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="!space-y-6 md:!space-y-8 !order-1 !text-center lg:!text-left"
          >
            {/* Badge catégorie */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="!inline-flex !items-center !gap-2 !bg-gradient-to-r !from-blue-500 !to-indigo-600 !text-white !px-4 !py-2 !rounded-full !text-sm !font-bold !shadow-lg !mx-auto lg:!mx-0"
            >
              <Star className="!w-4 !h-4 !fill-white" />
              <span className="!uppercase !tracking-wider">Service Premium</span>
            </motion.div>

            {/* Titre avec gradient */}
            <h1 className="!text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl !font-black !leading-[1.1] !tracking-tight">
              <span className="!block !bg-gradient-to-r !from-blue-600 !via-indigo-600 !to-purple-600 !bg-clip-text !text-transparent !mb-3 !drop-shadow-sm">
                {service.heroTitle || service.title}
              </span>
              {service.heroSubtitle && (
                <span className="!block !text-gray-800 !text-2xl sm:!text-3xl md:!text-4xl !mt-4 !font-bold !leading-tight">
                  {service.heroSubtitle}
                </span>
              )}
            </h1>

            {/* Description */}
            <p className="!text-base sm:!text-lg md:!text-xl !text-gray-600 !max-w-2xl !leading-relaxed !mx-auto lg:!mx-0">
              {service.description || service.shortDescription}
            </p>

            {/* Info formules */}
            {hasFormulas && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="!inline-flex !items-center !gap-3 !bg-blue-50 !border-2 !border-blue-200 !text-blue-700 !px-5 !py-3 !rounded-2xl !font-bold !text-base !shadow-sm !mx-auto lg:!mx-0"
              >
                <Sparkles className="!w-5 !h-5 !text-blue-600" />
                {service.formulas.length} formules au choix
              </motion.div>
            )}

            {/* Bloc image - Order 2 sur mobile uniquement (entre formules et CTAs) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="!relative !flex !justify-center !items-center lg:!hidden !order-2"
            >
              {/* Cercles décoratifs animés */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="!absolute !inset-0 !rounded-full !bg-gradient-to-r !from-blue-400/20 !to-purple-400/20 !blur-2xl !scale-110"
              />

              {/* Badge flottant - Prix/Formules */}
              {minPrice && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="!absolute !-top-4 !-right-4 sm:!-top-6 sm:!-right-6 !bg-gradient-to-br !from-green-500 !to-emerald-600 !text-white !px-6 !py-3 !rounded-2xl !shadow-2xl !z-10 !rotate-3 hover:!rotate-0 !transition-transform !duration-300"
                >
                  <p className="!text-xs !font-semibold !uppercase !tracking-wider !opacity-90">À partir de</p>
                  <p className="!text-2xl !font-black">{minPrice}€</p>
                </motion.div>
              )}

              {/* Badge "Sur devis" si pas de prix */}
              {!minPrice && service.price === 'Sur devis' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="!absolute !-top-4 !-right-4 sm:!-top-6 sm:!-right-6 !bg-gradient-to-br !from-blue-500 !to-indigo-600 !text-white !px-6 !py-3 !rounded-2xl !shadow-2xl !z-10 !rotate-3 hover:!rotate-0 !transition-transform !duration-300"
                >
                  <p className="!text-sm !font-bold !uppercase !tracking-wider">Sur devis</p>
                </motion.div>
              )}

              {/* Badge flottant - Garantie */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="!absolute !-bottom-4 !-left-4 sm:!-bottom-6 sm:!-left-6 !bg-gradient-to-br !from-orange-500 !to-red-600 !text-white !px-5 !py-3 !rounded-2xl !shadow-2xl !z-10 !-rotate-3 hover:!rotate-0 !transition-transform !duration-300"
              >
                <p className="!text-sm !font-bold !flex !items-center !gap-2">
                  <Star className="!w-4 !h-4 !fill-white" />
                  100% Garanti
                </p>
              </motion.div>

              {/* Image principale avec effet moderne */}
              <div className="!relative !w-full !max-w-lg !aspect-square sm:!aspect-[4/3]">
                <div className="!absolute !inset-0 !bg-gradient-to-br !from-blue-500/20 !to-purple-500/20 !rounded-[2rem] sm:!rounded-[3rem] !blur-xl !scale-105" />
                <div className="!relative !w-full !h-full !bg-gradient-to-br !from-blue-100 !via-white !to-purple-100 !p-2 sm:!p-4 !rounded-[2rem] sm:!rounded-[3rem] !shadow-2xl !overflow-hidden !border-4 !border-white">
                  <Image
                    src={service.heroImage}
                    alt={service.heroImageAlt}
                    fill
                    className="!object-cover !rounded-[1.5rem] sm:!rounded-[2.5rem]"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay gradient subtil */}
                  <div className="!absolute !inset-0 !bg-gradient-to-t !from-black/20 !via-transparent !to-transparent !rounded-[1.5rem] sm:!rounded-[2.5rem]" />
                </div>
              </div>
            </motion.div>

            {/* CTAs - Order 3 sur mobile */}
            <div className="!flex !flex-col sm:!flex-row !gap-4 !pt-4 !justify-center lg:!justify-start !order-3">
              <motion.button
                onClick={onOpenModal}
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="!group !relative !inline-flex !items-center !justify-center !gap-3 !bg-gradient-to-r !from-blue-600 !to-indigo-600 !text-white !px-8 !py-4 !rounded-2xl !font-bold !text-lg !shadow-xl hover:!shadow-2xl !transition-all !duration-300 !overflow-hidden"
              >
                <span className="!absolute !inset-0 !bg-gradient-to-r !from-blue-700 !to-indigo-700 !opacity-0 group-hover:!opacity-100 !transition-opacity !duration-300" />
                <Phone className="!relative !w-6 !h-6" />
                <span className="!relative">Prendre RDV Maintenant</span>
                <ArrowRight className="!relative !w-5 !h-5 group-hover:!translate-x-1 !transition-transform" />
              </motion.button>

              <motion.a
                href="tel:+33782364263"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="!inline-flex !items-center !justify-center !gap-2 !bg-white !border-2 !border-gray-300 !text-gray-700 !px-8 !py-4 !rounded-2xl !font-bold !text-lg !shadow-lg hover:!border-blue-500 hover:!text-blue-600 hover:!shadow-xl !transition-all !duration-300"
              >
                <Phone className="!w-5 !h-5" />
                <span className="!hidden sm:!inline">07 82 36 42 63</span>
                <span className="!inline sm:!hidden">Appeler</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Bloc image - Desktop uniquement (colonne de droite) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="!relative !hidden lg:!flex !justify-center !items-start !order-2"
          >
            {/* Cercles décoratifs animés */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="!absolute !inset-0 !rounded-full !bg-gradient-to-r !from-blue-400/20 !to-purple-400/20 !blur-2xl !scale-110"
            />

            {/* Badge flottant - Prix/Formules */}
            {minPrice && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="!absolute !-top-4 !-right-4 sm:!-top-6 sm:!-right-6 !bg-gradient-to-br !from-green-500 !to-emerald-600 !text-white !px-6 !py-3 !rounded-2xl !shadow-2xl !z-10 !rotate-3 hover:!rotate-0 !transition-transform !duration-300"
              >
                <p className="!text-xs !font-semibold !uppercase !tracking-wider !opacity-90">À partir de</p>
                <p className="!text-2xl !font-black">{minPrice}€</p>
              </motion.div>
            )}

            {/* Badge "Sur devis" si pas de prix */}
            {!minPrice && service.price === 'Sur devis' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="!absolute !-top-4 !-right-4 sm:!-top-6 sm:!-right-6 !bg-gradient-to-br !from-blue-500 !to-indigo-600 !text-white !px-6 !py-3 !rounded-2xl !shadow-2xl !z-10 !rotate-3 hover:!rotate-0 !transition-transform !duration-300"
              >
                <p className="!text-sm !font-bold !uppercase !tracking-wider">Sur devis</p>
              </motion.div>
            )}

            {/* Badge flottant - Garantie */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="!absolute !-bottom-4 !-left-4 sm:!-bottom-6 sm:!-left-6 !bg-gradient-to-br !from-orange-500 !to-red-600 !text-white !px-5 !py-3 !rounded-2xl !shadow-2xl !z-10 !-rotate-3 hover:!rotate-0 !transition-transform !duration-300"
            >
              <p className="!text-sm !font-bold !flex !items-center !gap-2">
                <Star className="!w-4 !h-4 !fill-white" />
                100% Garanti
              </p>
            </motion.div>

            {/* Image principale avec effet moderne */}
            <div className="!relative !w-full !max-w-lg !aspect-square sm:!aspect-[4/3]">
              <div className="!absolute !inset-0 !bg-gradient-to-br !from-blue-500/20 !to-purple-500/20 !rounded-[2rem] sm:!rounded-[3rem] !blur-xl !scale-105" />
              <div className="!relative !w-full !h-full !bg-gradient-to-br !from-blue-100 !via-white !to-purple-100 !p-2 sm:!p-4 !rounded-[2rem] sm:!rounded-[3rem] !shadow-2xl !overflow-hidden !border-4 !border-white">
                <Image
                  src={service.heroImage}
                  alt={service.heroImageAlt}
                  fill
                  className="!object-cover !rounded-[1.5rem] sm:!rounded-[2.5rem]"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay gradient subtil */}
                <div className="!absolute !inset-0 !bg-gradient-to-t !from-black/20 !via-transparent !to-transparent !rounded-[1.5rem] sm:!rounded-[2.5rem]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Badges d'avantages redesignés */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="!mt-12 md:!mt-20 !grid !grid-cols-1 sm:!grid-cols-3 !gap-4 md:!gap-6"
        >
          {[
            { icon: Truck, text: "Déplacement offert", subtext: "Dans un rayon de 30km", color: "blue" },
            { icon: Sparkles, text: "Produits Premium", subtext: "Qualité professionnelle", color: "purple" },
            { icon: MessageSquare, text: "Devis Gratuit", subtext: "Sans engagement", color: "indigo" },
          ].map(({ icon: Icon, text, subtext, color }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className={`!group !bg-white !border-2 !border-${color}-100 hover:!border-${color}-300 !rounded-2xl !p-6 !shadow-lg hover:!shadow-xl !transition-all !duration-300 !text-center`}
            >
              <div className={`!inline-flex !items-center !justify-center !w-14 !h-14 !bg-gradient-to-br !from-${color}-500 !to-${color}-600 !rounded-2xl !mb-4 !shadow-lg group-hover:!scale-110 !transition-transform`}>
                <Icon className="!w-7 !h-7 !text-white" />
              </div>
              <h3 className="!font-bold !text-gray-900 !text-lg !mb-1">{text}</h3>
              <p className="!text-sm !text-gray-600">{subtext}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}