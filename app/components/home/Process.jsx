'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function Process() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);
  const containerRef = useRef(null);

  const steps = [
    { number: '1', title: 'Demande de devis', desc: 'Formulaire en ligne ou appel téléphonique.' },
    { number: '2', title: 'Confirmation rapide', desc: 'Réponse sous 24h avec un tarif personnalisé.' },
    { number: '3', title: 'Intervention', desc: 'Rendez-vous à domicile sous 48h.' },
    { number: '4', title: 'Résultat garanti', desc: 'Paiement uniquement après satisfaction complète.' }
  ];

  // Détecter si on est sur mobile/tablette
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculer la hauteur pour la timeline verticale (mobile)
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, steps]);

  // Animation scroll pour mobile
  const { scrollYProgress } = useScroll(
    isMobile
      ? {
          target: containerRef,
          offset: ['start 30%', 'end 70%'],
        }
      : {}
  );

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Animation scroll bloqué pour desktop
  useEffect(() => {
    if (isMobile) return;

    const handleWheel = (e) => {
      const section = document.getElementById('process-section');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3;

      if (isInView && !animationComplete) {
        e.preventDefault();
        const delta = e.deltaY * 0.0015;
        const newProgress = Math.min(Math.max(scrollProgress + delta, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) setAnimationComplete(true);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [scrollProgress, animationComplete, isMobile]);

  const getStepProgress = (index) => {
    const stepStart = index / steps.length;
    const stepEnd = (index + 1) / steps.length;
    return Math.min(Math.max((scrollProgress - stepStart) / (stepEnd - stepStart), 0), 1);
  };

  const getLineProgress = (index) => {
    const lineStart = (index + 0.5) / steps.length;
    const lineEnd = (index + 1.5) / steps.length;
    return Math.min(Math.max((scrollProgress - lineStart) / (lineEnd - lineStart), 0), 1);
  };

  // --- VERSION MOBILE / TABLETTE ---
  if (isMobile) {
    return (
      <section
        id="process-section"
        ref={containerRef}
        className="relative bg-gray-50 text-gray-900 min-h-screen flex flex-col"
      >
        <div className="w-full py-32 px-8 md:px-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-center"
          >
            Comment ça marche ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto"
          >
            Un processus simple, rapide et transparent
          </motion.p>
        </div>

        <div ref={ref} className="relative w-full flex-1 px-8 md:px-16 pb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex items-start min-h-[25vh] mb-12"
            >
              {/* Cercle avec numéro */}
              <div className="relative z-10 flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                  {step.number}
                </div>
              </div>

              {/* Contenu */}
              <div className="ml-6 flex-1">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl md:text-3xl font-bold text-blue-600 mb-4"
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-700 text-lg leading-relaxed"
                >
                  {step.desc}
                </motion.p>
              </div>
            </div>
          ))}

          {/* Ligne verticale grise de fond */}
          <div
            style={{ height: height + 'px' }}
            className="absolute left-[1.375rem] md:left-[2.375rem] top-0 w-[3px] bg-gradient-to-b from-transparent from-[5%] via-gray-300 to-transparent to-[95%]"
          />

          {/* Ligne verticale animée bleue */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute left-[1.375rem] md:left-[2.375rem] top-0 w-[3px] bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 rounded-full"
          />
        </div>
      </section>
    );
  }

  // --- VERSION DESKTOP ---
  return (
    <section
      id="process-section"
      className="relative min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center py-32"
    >
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollProgress > 0 ? 1 : 0 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          Comment ça marche ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollProgress > 0 ? 1 : 0 }}
          className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Un processus simple, rapide et transparent
        </motion.p>

        <div className="relative flex flex-row items-center justify-center gap-8">
          {steps.map((step, index) => {
            const stepProgress = getStepProgress(index);
            const lineProgress = index < steps.length - 1 ? getLineProgress(index) : 0;

            return (
              <div key={index} className="relative flex flex-col items-center text-center max-w-xs">
                {index < steps.length - 1 && (
                  <div className="absolute top-10 left-full w-24 h-1 bg-blue-200">
                    <motion.div
                      className="h-full bg-blue-600"
                      style={{
                        width: `${lineProgress * 100}%`,
                        transition: 'width 0.3s ease-out',
                      }}
                    />
                  </div>
                )}

                <motion.div
                  className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold shadow-xl mb-6"
                  style={{
                    opacity: stepProgress,
                    scale: stepProgress,
                    transition: 'opacity 0.3s, scale 0.3s',
                  }}
                >
                  {step.number}
                </motion.div>

                <motion.div
                  style={{
                    opacity: stepProgress,
                    y: 20 * (1 - stepProgress),
                    transition: 'opacity 0.3s, transform 0.3s',
                  }}
                >
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.desc}</p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {!animationComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-gray-400 text-sm"
          >
            Scrollez pour découvrir le processus ({Math.round(scrollProgress * 100)}%)
          </motion.div>
        )}
      </div>
    </section>
  );
}