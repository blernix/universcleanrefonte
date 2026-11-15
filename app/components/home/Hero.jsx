'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useReducedMotion } from 'framer-motion';
import { HERO_PHOTOS, HERO_DELAY } from '@/app/data/hero-photos';

export default function Hero({ onOpenModal }) {
  const [index, setIndex] = useState(0);
  // Pause pilotée par l'utilisateur (bouton) : elle est maître, le survol ne la réarme pas.
  const [userPaused, setUserPaused] = useState(false);
  // Pauses contextuelles (survol / focus) : elles ne s'appliquent que tant qu'elles sont armées.
  const [hoverPaused, setHoverPaused] = useState(false);
  const [focusPaused, setFocusPaused] = useState(false);
  const hoverArmed = useRef(true);
  const focusArmed = useRef(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    // Pas de défilement automatique si la personne préfère réduire les animations,
    // s'il n'y a qu'une photo, ou si une pause (bouton, survol, focus) est active.
    if (reduce) return;
    if (HERO_PHOTOS.length < 2) return;
    if (userPaused || hoverPaused || focusPaused) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % HERO_PHOTOS.length);
    }, HERO_DELAY);

    return () => clearInterval(timer);
  }, [reduce, userPaused, hoverPaused, focusPaused]);

  const togglePause = () => {
    const next = !userPaused;
    setUserPaused(next);
    if (!next) {
      // Reprise au clic : le survol et le focus en cours ne doivent pas réécraser le clic.
      // Ils se réarmeront à la prochaine sortie (mouseleave / blur).
      hoverArmed.current = false;
      focusArmed.current = false;
      setHoverPaused(false);
      setFocusPaused(false);
    }
  };

  const handleMouseEnter = () => {
    if (hoverArmed.current) setHoverPaused(true);
  };

  const handleMouseLeave = () => {
    hoverArmed.current = true;
    setHoverPaused(false);
  };

  const handleFocus = () => {
    if (focusArmed.current) setFocusPaused(true);
  };

  const handleBlur = (event) => {
    if (event.currentTarget.contains(event.relatedTarget)) return;
    focusArmed.current = true;
    setFocusPaused(false);
  };

  return (
    <section className="bg-white pt-24 md:pt-28 pb-12 lg:pb-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Colonne texte */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.1] tracking-tight text-gray-900 text-balance">
              Entreprise de nettoyage à Fontainebleau et en Seine-et-Marne
            </h1>

            <div className="mt-6 space-y-4">
              <p className="text-base lg:text-lg leading-relaxed text-gray-600">
                Nettoyage de canapés, matelas, tapis, vitres, bureaux et logements après chantier ou
                location, pour les particuliers et les professionnels.
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-gray-600">
                Devis gratuit sous 24 h, intervention sous 48 h, 7 jours sur 7.
              </p>
              <p className="text-base lg:text-lg leading-relaxed font-semibold text-gray-900 border-l-2 border-blue-600 pl-4">
                Particuliers : 50 % de crédit d&apos;impôt avec l&apos;avance immédiate.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => onOpenModal && onOpenModal('general')}
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
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
                className="w-full sm:w-auto text-center bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                📞 Appeler maintenant
              </a>
            </div>
          </div>

          {/* Colonne photos : cadre à ratio fixe, les deux images restent montées */}
          <div
            className="relative aspect-[3/5] w-full max-w-[380px] mx-auto lg:ml-auto rounded-3xl overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 shadow-sm"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {HERO_PHOTOS.map((photo, position) => (
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 380px, 90vw"
                priority={position === 0}
                aria-hidden={position === index ? undefined : true}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 motion-reduce:transition-none ${
                  position === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}

            <button
              type="button"
              onClick={togglePause}
              aria-pressed={userPaused}
              aria-label={
                userPaused
                  ? 'Reprendre le défilement des photos'
                  : 'Mettre le défilement des photos en pause'
              }
              className="absolute bottom-3 right-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-gray-900 shadow-sm ring-1 ring-gray-900/10 transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 motion-reduce:hidden"
            >
              {userPaused ? (
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
