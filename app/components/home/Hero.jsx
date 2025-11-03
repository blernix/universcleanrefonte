'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Version mobile avec carrousel d'images
const SimpleHero = ({ videoSrc, bgImageSrc, title }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images du carrousel (ajoute hero-accueil-2.webp quand tu l'auras)
  const slides = [
    { src: '/services/hero-accueil-1.webp', alt: 'Nettoyage automobile professionnel' },
    { src: '/services/hero-accueil-2.webp', alt: 'Nettoyage canapé professionnel' },
    { src: '/services/hero-accueil-3.webp', alt: 'Nettoyage matelas professionnel' },
   
     
  ];

  useEffect(() => {
    // Carrousel automatique toutes les 4 secondes
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-white text-gray-900">
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
        {/* Carrousel d'images de fond */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.src}
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentSlide === index ? 1 : 0,
                scale: currentSlide === index ? 1 : 1.1,
              }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}

          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Contenu centré */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* H1 optimisé SEO */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold text-white drop-shadow-2xl mb-4"
          >
            Nettoyage professionnel à domicile
          </motion.h1>

          {/* H2 avec services et localisation */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl font-bold mb-4 leading-tight text-white drop-shadow-lg"
          >
            Voiture • Canapé • Matelas en Seine-et-Marne (77)
          </motion.h2>

          {/* Nom de la marque */}
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg font-semibold mb-6 text-blue-400 drop-shadow-lg"
          >
            {title}
          </motion.p> */}

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            Plus de 10 ans d'expérience. Produits professionnels haut de gamme.
            Intervention à La Genevraye (77) et 30 km alentour.
          </motion.p>

          {/* Boutons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            {/* CTA principal avec micro-bounce */}
            <motion.a
              href="https://app.dispoo.fr/website/368-univers-clean/step1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-700 transition-all no-underline"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
                delay: 1.0
              }}
            >
              Prendre rendez-vous
            </motion.a>

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
  children
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculer l'opacité du hero en fonction du scroll (disparaît progressivement)
  const heroOpacity = Math.max(0, 1 - scrollY / 600);
  const heroScale = 1 + (scrollY / 2000); // Léger zoom lors du scroll

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section avec effet parallax */}
      <section className='relative h-screen flex flex-col items-center justify-center overflow-hidden'>
        {/* Photo de fond avec effet Ken Burns */}
        <motion.div
          className='absolute inset-0 z-0'
          style={{ opacity: heroOpacity }}
        >
          <motion.img
            src="/services/hero_accueil.webp"
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
            style={{
              transform: `scale(${heroScale})`,
            }}
          />
          <div className='absolute inset-0 bg-black/40' />
        </motion.div>

        {/* Contenu centré */}
        <div className='relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center text-center px-6'>
          {/* H1 optimisé SEO */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-2xl mb-4'
          >
            Nettoyage professionnel à domicile
          </motion.h1>

          {/* H2 avec services et localisation (SEO) */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-4xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
          >
            Voiture • Canapé • Matelas en Seine-et-Marne (77)
          </motion.h2>

          {/* Nom de la marque */}
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl font-semibold mb-6 text-blue-400 drop-shadow-lg"
          >
            {initialTitle}
          </motion.p> */}

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
          >
            Plus de 10 ans d'expérience. Produits professionnels haut de gamme.
            Intervention à La Genevraye (77) et 30 km alentour.
          </motion.p>

          {/* Boutons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* CTA principal avec bounce */}
            <motion.a
              href="https://app.dispoo.fr/website/368-univers-clean/step1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 no-underline"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              Prendre rendez-vous
            </motion.a>

            <a
              href="tel:+33782364263"
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

export default function Hero() {
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
      />
    );
  }

  // Version desktop élégante avec photo
  return (
    <DesktopHero
      mediaSrc={heroContent.videoSrc}
      bgImageSrc={heroContent.backgroundSrc}
      initialTitle={heroContent.title}
    >
      {/* Sections de la page (après le hero) */}
    </DesktopHero>
  );
}
