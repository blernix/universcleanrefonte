'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Version mobile
const SimpleHero = ({ videoSrc, bgImageSrc, title, onOpenModal }) => {
  return (
    <div className="bg-white text-gray-900">
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
        {/* Image de fond statique */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero_mobile.png"
            alt="Univers Clean - Nettoyage professionnel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/70" />
          {/* Voile radial derrière le texte : détache les lettres du fond chargé */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,0,0,0.55),rgba(0,0,0,0.05))]" />
        </div>

        {/* Contenu centré */}
        <div className="relative z-10 max-w-3xl mx-auto text-center bg-black/30 backdrop-blur-[2px] border border-white/10 rounded-3xl px-6 py-8 sm:px-10 sm:py-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-extrabold text-white drop-shadow-2xl mb-4"
          >
            Nettoyage professionnel à domicile
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base font-bold mb-4 leading-tight text-white drop-shadow-lg"
          >
            Canapé • Matelas • Bureaux • Chantier en Seine-et-Marne (77)
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            Plus de 10 ans d'expérience. Produits professionnels haut de gamme.
            Intervention à Fontainebleau et alentours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <motion.button
              onClick={() => onOpenModal && onOpenModal('general')}
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-700 transition-all"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
                delay: 1.0
              }}
            >
              Demande de devis
            </motion.button>

            <a
              href="#services"
              className="bg-white text-blue-600 border-2 border-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 transition-all"
            >
              Découvrir nos services
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Version desktop élégante avec photo et effet Ken Burns
const DesktopHero = ({
  mediaSrc,
  bgImageSrc,
  initialTitle,
  children,
  onOpenModal
}) => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section avec effet parallax */}
      <section className='relative h-screen flex flex-col items-center justify-center overflow-hidden'>
        {/* Photo de fond avec effet Ken Burns */}
        <motion.div
          className='absolute inset-0 z-0'
        >
          <motion.img
            src="/hero.png"
            alt='Univers Clean - Nettoyage professionnel'
            className='w-full h-full object-cover'
            animate={{
              scale: [1, 1.1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/70' />
          {/* Voile radial derrière le texte : détache les lettres du fond chargé */}
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,0,0,0.55),rgba(0,0,0,0.05))]' />
        </motion.div>

         {/* Contenu centré */}
        <div className='relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center text-center bg-black/30 backdrop-blur-[2px] border border-white/10 rounded-3xl px-6 py-8 sm:px-10 sm:py-10'>
           <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-2xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-2xl mb-4'
          >
            Nettoyage professionnel à domicile
          </motion.h1>

           <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
          >
            Canapé • Matelas • Bureaux • Chantier en Seine-et-Marne (77)
          </motion.h2>

           <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
          >
            Plus de 10 ans d'expérience. Produits professionnels haut de gamme.
            Intervention à Fontainebleau et alentours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              onClick={() => onOpenModal && onOpenModal('general')}
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              Demande de devis
            </motion.button>

            <a
              href="tel:+33782364263"
              onClick={() => {
                if (typeof window !== 'undefined' && window.umami) {
                  window.umami.track('click_telephone', { page: 'accueil' });
                }
              }}
              className="bg-white text-blue-600 border-2 border-white px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              📞 Appeler maintenant
            </a>
          </motion.div>
        </div>

      </section>

      {/* Contenu de la page */}
      <div className='relative w-full bg-white'>
        {children}
      </div>
    </div>
  );
};

export default function Hero({ onOpenModal }) {
  const [isMobileOrTouch, setIsMobileOrTouch] = useState(false);

  const heroContent = {
    videoSrc: '/videoHero.mp4',
    backgroundSrc: '/hero2.jpg',
    title: "Univers Clean",
  };

  useEffect(() => {
    // Détection mobile OU tactile (tablette incluse)
    const checkMobileOrTouch = () => {
      const isMobileWidth = window.innerWidth < 768;
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobileOrTouch(isMobileWidth || isTouchDevice);
    };

    checkMobileOrTouch();
    window.addEventListener('resize', checkMobileOrTouch);

    return () => window.removeEventListener('resize', checkMobileOrTouch);
  }, []);

  // Version mobile/tablette simplifiée avec carrousel
  if (isMobileOrTouch) {
    return (
      <SimpleHero
        videoSrc={heroContent.videoSrc}
        bgImageSrc={heroContent.backgroundSrc}
        title={heroContent.title}
        onOpenModal={onOpenModal}
      />
    );
  }

  // Version desktop élégante avec photo
  return (
    <DesktopHero
      mediaSrc={heroContent.videoSrc}
      bgImageSrc={heroContent.backgroundSrc}
      initialTitle={heroContent.title}
      onOpenModal={onOpenModal}
    >
      {/* Sections de la page (après le hero) */}
    </DesktopHero>
  );
}
