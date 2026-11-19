'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useReducedMotion } from 'framer-motion';
import { HERO_PHOTOS, HERO_DELAY } from '@/app/data/hero-photos';

export default function Hero({ onOpenModal }) {
  const [index, setIndex] = useState(0);
  // Pauses contextuelles (survol / focus) : état interne seulement, aucun contrôle affiché.
  const [hoverPaused, setHoverPaused] = useState(false);
  const [focusPaused, setFocusPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    // Pas de défilement automatique si la personne préfère réduire les animations,
    // s'il n'y a qu'une photo, ou si le survol / le focus met la piste en pause.
    if (reduce) return;
    if (HERO_PHOTOS.length < 2) return;
    if (hoverPaused || focusPaused) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % HERO_PHOTOS.length);
    }, HERO_DELAY);

    return () => clearInterval(timer);
  }, [reduce, hoverPaused, focusPaused]);

  const handleMouseEnter = () => setHoverPaused(true);

  const handleMouseLeave = () => setHoverPaused(false);

  const handleFocus = () => setFocusPaused(true);

  const handleBlur = (event) => {
    if (event.currentTarget.contains(event.relatedTarget)) return;
    setFocusPaused(false);
  };

  return (
    <section className="bg-white pt-24 md:pt-28 pb-12 lg:pb-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Colonne texte */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.25rem] xl:text-[2.75rem] font-extrabold leading-[1.1] tracking-tight text-gray-900 text-balance">
              Entreprise de nettoyage à Fontainebleau et en Seine-et-Marne
            </h1>

            <div className="mt-6 space-y-4">
              <p className="text-base lg:text-lg leading-relaxed text-gray-600">
                Nettoyage de canapés, matelas, fin de chantier, ainsi que l&apos;entretien de bureaux / Locaux, pour les particuliers et les professionnels.
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-gray-600">
                Devis gratuit sous 24h, intervention rapide.
              </p>
              <p className="text-base lg:text-lg leading-relaxed font-semibold text-gray-900 border-l-2 border-blue-600 pl-4">
                Particuliers : 50 % de crédit d&apos;impôt avec l&apos;avance immédiate.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => onOpenModal && onOpenModal('general')}
                className="w-full sm:w-auto whitespace-nowrap bg-blue-600 text-white px-6 lg:px-7 xl:px-8 py-3.5 xl:py-4 rounded-full font-bold text-base lg:text-lg xl:text-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
              >
                Demande de devis
              </button>

              <a
                href="tel:+33782364263"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.umami) {
                    window.umami.track('click_telephone', { page: 'accueil' });
                  }
                }}
                className="w-full sm:w-auto whitespace-nowrap text-center bg-white text-blue-600 border-2 border-blue-600 px-6 lg:px-7 xl:px-8 py-3.5 xl:py-4 rounded-full font-bold text-base lg:text-lg xl:text-xl shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                📞 Appeler maintenant
              </a>
            </div>
          </div>

          {/* Colonne photos : cadre à ratio fixe, piste horizontale qui glisse */}
          <div
            className="relative aspect-[3/5] w-full max-w-[380px] mx-auto lg:ml-auto rounded-3xl overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 shadow-sm"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            <div
              className="flex h-full w-full transition-transform duration-700 ease-in-out motion-reduce:transition-none"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {HERO_PHOTOS.map((photo, position) => (
                <div
                  key={photo.src}
                  className="relative h-full w-full shrink-0"
                  aria-hidden={position === index ? undefined : true}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 380px, 90vw"
                    priority={position === 0}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
