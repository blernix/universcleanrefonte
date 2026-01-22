'use client';
import { motion } from 'framer-motion';
import { Sparkles, Truck, MessageSquare, Phone, ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';
import SectionSeparator from '@/app/components/SectionSeparator';

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
    <section className="!relative !overflow-hidden !bg-white !pt-24 md:!pt-32 !pb-12 md:!pb-20">

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
              className="!inline-flex !items-center !gap-2 !bg-blue-600 !text-white !px-4 !py-2 !rounded-full !text-sm !font-bold !shadow-md !mx-auto lg:!mx-0"
            >
              <Star className="!w-4 !h-4 !fill-white" />
              <span className="!uppercase !tracking-wider">Service Premium</span>
            </motion.div>

            {/* Titre */}
            <h1 className="!text-4xl sm:!text-5xl md:!text-6xl lg:!text-7xl !font-black !leading-[1.1] !tracking-tight !text-gray-900">
              {service.heroTitle || service.title}
              {service.heroSubtitle && (
                <span className="!block !text-gray-600 !text-2xl sm:!text-3xl md:!text-4xl !mt-4 !font-bold !leading-tight">
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
              {/* Badge flottant - Prix/Formules */}
              {minPrice && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="!absolute !-top-4 !-right-4 sm:!-top-6 sm:!-right-6 !bg-green-600 !text-white !px-6 !py-3 !rounded-xl !shadow-lg !z-10"
                >
                  <p className="!text-xs !font-semibold !uppercase !tracking-wider">À partir de</p>
                  <p className="!text-2xl !font-black">{minPrice}€</p>
                </motion.div>
              )}

              {/* Badge "Sur devis" si pas de prix */}
              {!minPrice && service.price === 'Sur devis' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="!absolute !-top-4 !-right-4 sm:!-top-6 sm:!-right-6 !bg-blue-600 !text-white !px-6 !py-3 !rounded-xl !shadow-lg !z-10"
                >
                  <p className="!text-sm !font-bold !uppercase !tracking-wider">Sur devis</p>
                </motion.div>
              )}

              {/* Badge flottant - Garantie */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="!absolute !-bottom-4 !-left-4 sm:!-bottom-6 sm:!-left-6 !bg-blue-600 !text-white !px-5 !py-3 !rounded-xl !shadow-lg !z-10"
              >
                <p className="!text-sm !font-bold !flex !items-center !gap-2">
                  <Star className="!w-4 !h-4 !fill-white" />
                  100% Satisfait
                </p>
              </motion.div>

              {/* Image principale */}
              <div className="!relative !w-full !max-w-lg !aspect-square sm:!aspect-[4/3]">
                <div className="!relative !w-full !h-full !bg-white !p-2 sm:!p-4 !rounded-2xl !shadow-xl !overflow-hidden !border !border-gray-200">
                  <Image
                    src={service.heroImage}
                    alt={service.heroImageAlt}
                    width={800}
                    height={800}
                    className="!object-cover !rounded-xl !w-full !h-full"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>

            {/* CTAs - Order 3 sur mobile, cachés sur desktop */}
            <div className="!flex !flex-col sm:!flex-row !gap-4 !pt-4 !justify-center lg:!justify-start !order-3 lg:!hidden">
              <motion.button
                onClick={() => onOpenModal && onOpenModal()}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="!inline-flex !items-center !justify-center !gap-3 !bg-blue-600 hover:!bg-blue-700 !text-white !px-8 !py-4 !rounded-xl !font-bold !text-lg !shadow-lg hover:!shadow-xl !transition-all !duration-300"
              >
                <Phone className="!w-6 !h-6" />
                <span>Mon devis gratuit</span>
                <ArrowRight className="!w-5 !h-5" />
              </motion.button>

              <motion.a
                href="tel:+33782364263"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="!inline-flex !items-center !justify-center !gap-2 !bg-white !border-2 !border-gray-300 !text-gray-700 !px-8 !py-4 !rounded-xl !font-bold !text-lg !shadow-md hover:!border-blue-600 hover:!text-blue-600 hover:!shadow-lg !transition-all !duration-300"
              >
                <Phone className="!w-5 !h-5" />
                <span className="!hidden sm:!inline">07 82 36 42 63</span>
                <span className="!inline sm:!hidden">Appeler</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Bloc image + CTAs - Desktop uniquement (colonne de droite) */}
          <div className="!hidden lg:!flex !flex-col !gap-8 !order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="!relative !flex !justify-center !items-start"
            >
            {/* Badge flottant - Prix/Formules */}
            {minPrice && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="!absolute !-top-4 !-right-4 sm:!-top-6 sm:!-right-6 !bg-green-600 !text-white !px-6 !py-3 !rounded-xl !shadow-lg !z-10"
              >
                <p className="!text-xs !font-semibold !uppercase !tracking-wider">À partir de</p>
                <p className="!text-2xl !font-black">{minPrice}€</p>
              </motion.div>
            )}

            {/* Badge "Sur devis" si pas de prix */}
            {!minPrice && service.price === 'Sur devis' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="!absolute !-top-4 !-right-4 sm:!-top-6 sm:!-right-6 !bg-blue-600 !text-white !px-6 !py-3 !rounded-xl !shadow-lg !z-10"
              >
                <p className="!text-sm !font-bold !uppercase !tracking-wider">Sur devis</p>
              </motion.div>
            )}

            {/* Badge flottant - Garantie */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="!absolute !-bottom-4 !-left-4 sm:!-bottom-6 sm:!-left-6 !bg-blue-600 !text-white !px-5 !py-3 !rounded-xl !shadow-lg !z-10"
            >
              <p className="!text-sm !font-bold !flex !items-center !gap-2">
                <Star className="!w-4 !h-4 !fill-white" />
                100% Satisfait
              </p>
            </motion.div>

            {/* Image principale */}
            <div className="!relative !w-full !max-w-lg !aspect-square sm:!aspect-[4/3]">
              <div className="!relative !w-full !h-full !bg-white !p-2 sm:!p-4 !rounded-2xl !shadow-xl !overflow-hidden !border !border-gray-200">
                <Image
                  src={service.heroImage}
                  alt={service.heroImageAlt}
                  width={800}
                  height={800}
                  className="!object-cover !rounded-xl !w-full !h-full"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            </motion.div>

            {/* CTAs - Desktop uniquement, sous la photo */}
            <div className="!flex !flex-col !gap-4 !w-full">
              <motion.button
                onClick={() => onOpenModal && onOpenModal()}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="!inline-flex !items-center !justify-center !gap-3 !bg-blue-600 hover:!bg-blue-700 !text-white !px-8 !py-4 !rounded-xl !font-bold !text-lg !shadow-lg hover:!shadow-xl !transition-all !duration-300"
              >
                <Phone className="!w-6 !h-6" />
                <span>Mon devis gratuit</span>
                <ArrowRight className="!w-5 !h-5" />
              </motion.button>

              <motion.a
                href="tel:+33782364263"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="!inline-flex !items-center !justify-center !gap-2 !bg-white !border-2 !border-gray-300 !text-gray-700 !px-8 !py-4 !rounded-xl !font-bold !text-lg !shadow-md hover:!border-blue-600 hover:!text-blue-600 hover:!shadow-lg !transition-all !duration-300"
              >
                <Phone className="!w-5 !h-5" />
                07 82 36 42 63
              </motion.a>
            </div>
          </div>
        </div>

        {/* Badges d'avantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="!mt-12 md:!mt-20 !grid !grid-cols-1 sm:!grid-cols-3 !gap-4 md:!gap-6"
        >
          {[
            { icon: Truck, text: "Déplacement offert", subtext: "Dans un rayon de 30km" },
            { icon: Sparkles, text: "Produits Premium", subtext: "Qualité professionnelle" },
            { icon: MessageSquare, text: "Devis Gratuit", subtext: "Sans engagement" },
          ].map(({ icon: Icon, text, subtext }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              whileHover={{ y: -5 }}
              className="!group !bg-white !border-2 !border-gray-200 hover:!border-blue-600 !rounded-xl !p-6 !shadow-md hover:!shadow-lg !transition-all !duration-300 !text-center"
            >
              <div className="!inline-flex !items-center !justify-center !w-14 !h-14 !bg-blue-600 !rounded-xl !mb-4 group-hover:!scale-110 !transition-transform">
                <Icon className="!w-7 !h-7 !text-white" />
              </div>
              <h3 className="!font-bold !text-gray-900 !text-lg !mb-1">{text}</h3>
              <p className="!text-sm !text-gray-600">{subtext}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Séparateur de section */}
      <SectionSeparator variant="gray" />
    </section>
  );
}