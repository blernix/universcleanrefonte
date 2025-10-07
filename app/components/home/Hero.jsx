'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Moteur d'animation scroll expansion
const ScrollExpandMedia = ({
  mediaSrc,
  bgImageSrc,
  initialTitle,
  children
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  
  useEffect(() => {
    setScrollProgress(0);
    setMediaFullyExpanded(false);
  }, [mediaSrc]);

  useEffect(() => {
    let touchStartY = 0;
    let touchStartProgress = 0;
    let isAnimating = false;

    const handleWheel = (e) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY === 0) {
        e.preventDefault();
        setMediaFullyExpanded(false);
        setScrollProgress(0.99);
      }
      else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.001;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
        }
      }
    };

    const handleTouchStart = (e) => {
      if (!mediaFullyExpanded) {
        touchStartY = e.touches[0].clientY;
        touchStartProgress = scrollProgress;
        isAnimating = false;
      }
    };

    const handleTouchMove = (e) => {
      if (!mediaFullyExpanded) {
        const touchCurrentY = e.touches[0].clientY;
        const touchDiff = touchStartY - touchCurrentY;

        // Détection du swipe vers le haut (plus de 5px)
        if (touchDiff > 5 && !isAnimating) {
          isAnimating = true;
        }

        if (isAnimating) {
          // Prévenir uniquement quand on anime
          e.preventDefault();

          // Sensibilité pour mobile
          const touchDelta = touchDiff * 0.004;
          const newProgress = Math.min(Math.max(touchStartProgress + touchDelta, 0), 1);
          setScrollProgress(newProgress);

          if (newProgress >= 1) {
            setMediaFullyExpanded(true);
            isAnimating = false;
          }
        }
      }
    };

    const handleTouchEnd = () => {
      // Reset si l'utilisateur n'a pas assez swipé
      if (!mediaFullyExpanded && scrollProgress < 0.15) {
        setScrollProgress(0);
      }
      isAnimating = false;
    };

    const handleScroll = () => {
      // Permettre le scroll natif quand l'animation est terminée
      if (mediaFullyExpanded) {
        return;
      }

      // Sur mobile, utiliser le scroll pour piloter l'animation
      const scrollY = window.scrollY;
      if (scrollY > 0 && scrollY < 300) {
        const newProgress = Math.min(scrollY / 300, 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
        }
      } else if (scrollY === 0) {
        setScrollProgress(0);
      }
    };

    // Desktop: wheel event
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Mobile: touch events
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Utiliser le scroll comme fallback
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollProgress, mediaFullyExpanded]);

  const mediaWidth = 300 + scrollProgress * 1250;
  const mediaHeight = 400 + scrollProgress * 400;
  const initialTextTranslateX = scrollProgress * 150;
  const initialContentOpacity = 1 - scrollProgress * 2.5;

  return (
    <div className="bg-white text-gray-900">
  <section className='relative flex flex-col items-center justify-start'>
    <div className='sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-visible bg-white'>
      
      {/* Image de fond */}
      <motion.div
        className='absolute inset-0 z-0'
        animate={{ opacity: 1 - scrollProgress }}
        transition={{ duration: 0.1 }}
      >
        <img src={bgImageSrc} alt='Fond Univers Clean' className='w-full h-full object-cover' />
        <div className='absolute inset-0 bg-white/20' />
      </motion.div>

      {/* Vidéo qui s'agrandit */}
      <motion.div
        className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden shadow-2xl pointer-events-none'
        style={{
          width: `${mediaWidth}px`,
          height: `${mediaHeight}px`,
          maxWidth: '95vw',
          maxHeight: '85vh',
        }}
      >
        <video src={mediaSrc} autoPlay muted loop playsInline className='w-full h-full object-cover' />
        <motion.div className='absolute inset-0 bg-black/20' animate={{ opacity: 0.3 - scrollProgress * 0.3 }} />
      </motion.div>

      {/* Titre et bouton initiaux */}
      <motion.div
        className='relative z-20 flex flex-col items-center justify-center text-center px-4 pointer-events-auto'
        style={{ opacity: initialContentOpacity, display: initialContentOpacity <= 0 ? 'none' : 'flex' }}
      >
         <h1 className='text-5xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-2xl'>
            <motion.span className="block" style={{ transform: `translateX(-${initialTextTranslateX}vw)` }}>
              {initialTitle.split(' ')[0]}
            </motion.span>
            <motion.span className="block text-blue-500" style={{ transform: `translateX(${initialTextTranslateX}vw)` }}>
              {initialTitle.split(' ')[1]}
            </motion.span>
         </h1>

         {/* Indicateur de swipe pour mobile */}
         <motion.div
           className="mt-12 md:hidden flex flex-col items-center gap-2"
           animate={{ y: [0, 10, 0] }}
           transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
         >
           <p className="text-white text-sm font-semibold drop-shadow-lg">Glissez vers le haut</p>
           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
           </svg>
         </motion.div>

         <a
            href="#services"
            className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 hover:bg-blue-700 shadow-2xl hidden md:block"
          >
            Découvrir nos services
          </a>
      </motion.div>

    </div>
    
    {/* Contenu après animation */}
    <motion.div
      className='relative w-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  </section>
</div>
  );
};

export default function Hero({ onOpenModal }) {
  
  const heroContent = {
    videoSrc: '/videoHero.mp4',
    backgroundSrc: '/hero2.jpg',
    title: "Univers Clean",
  };

  return (
    <ScrollExpandMedia
      mediaSrc={heroContent.videoSrc}
      bgImageSrc={heroContent.backgroundSrc}
      initialTitle={heroContent.title}
    >
      {/* Contenu après l'animation */}
      <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
  <div className="max-w-5xl mx-auto text-center px-6 py-16">
    
    {/* Titre miroir */}
    <div className="flex justify-center gap-4 mb-8">
      <motion.h2 
        initial={{x: '-50vw'}} 
        animate={{x: 0}} 
        transition={{duration: 0.7, ease: 'easeOut', delay: 0.2}} 
        className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight"
      >
        Univers
      </motion.h2>
      <motion.h2 
        initial={{x: '50vw'}} 
        animate={{x: 0}} 
        transition={{duration: 0.7, ease: 'easeOut', delay: 0.2}} 
        className="text-4xl md:text-5xl font-extrabold text-blue-600 tracking-tight"
      >
        Clean
      </motion.h2>
    </div>

    {/* Contenu principal */}
    <motion.div 
      initial={{opacity: 0}} 
      animate={{opacity: 1}} 
      transition={{duration: 0.7, delay: 0.5}}
    >
      <h3 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-gray-900">
        Nettoyage professionnel à domicile
      </h3>

      <p className="text-2xl mb-6 text-gray-700 font-medium">
        <strong>Voiture • Canapé • Matelas • Mobilier</strong>
      </p>

      <p className="!text-lg md:!text-xl mb-12 !text-gray-600 max-w-3xl !mx-auto leading-relaxed !text-center">
        Plus de 10 ans d'expérience. Produits professionnels haut de gamme (Koch Chemie, CarPro).
        Intervention à La Genevraye (77) et 30 km alentour.
      </p>

      {/* Boutons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
<motion.button
  onClick={onOpenModal}
  className="bg-blue-600 text-white !px-8 !py-4 rounded-full font-bold !text-2xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 border-none cursor-pointer"
  animate={{ y: [0, -8, 0] }}
  transition={{
    duration: 1.8,
    repeat: Infinity,
    repeatDelay: 1,
    ease: "easeInOut"
  }}
>
  Obtenir mon devis gratuit
</motion.button>

<a
  href="tel:+33782364263"
  className="bg-white text-blue-600 border-2 border-blue-600 !px-8 !py-4 rounded-full font-bold !text-2xl shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300 cursor-pointer inline-block"
>
  📞 Appeler maintenant
</a>
      </div>
    </motion.div>
  </div>
</div>
    </ScrollExpandMedia>
  );
}
