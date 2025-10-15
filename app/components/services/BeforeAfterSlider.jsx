'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, MoveHorizontal } from 'lucide-react';

export default function BeforeAfterSlider({ beforeImage, afterImage, alt }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  }, []);

  const startDrag = useCallback(() => setIsDragging(true), []);
  const stopDrag = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => {
      e.preventDefault();
      handleMove(e.clientX);
    };

    const handleMouseUp = () => {
      stopDrag();
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMove, stopDrag]);

  return (
    <div className="!w-full !max-w-6xl !mx-auto !px-4 md:!px-8">
      <div
        ref={containerRef}
        className="!relative !w-full !aspect-[4/3] sm:!aspect-[16/9] md:!aspect-[21/9] !overflow-hidden !rounded-2xl !shadow-2xl !bg-gradient-to-br !from-gray-900 !to-gray-800 !select-none !touch-none !border-4 !border-white/20 !backdrop-blur-sm"
        onMouseMove={(e) => isDragging && handleMove(e.clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={stopDrag}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Image APRÈS (fond) */}
        <div className="!absolute !inset-0 !z-10">
          <Image
            src={afterImage}
            alt={`${alt} - Après`}
            fill
            className="!object-cover !transition-transform !duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {/* Badge APRÈS avec animation */}
          <div className="!absolute !top-6 !right-6 !bg-gradient-to-br !from-emerald-500 !via-green-500 !to-teal-600 !text-white !px-6 !py-3 !rounded-2xl !font-bold !text-sm sm:!text-base !shadow-2xl !tracking-wider !uppercase !backdrop-blur-sm !border-2 !border-white/30 !transition-all !duration-300 hover:!scale-105 hover:!shadow-emerald-500/50">
            <span className="!relative !z-10 !drop-shadow-md">✓ Après</span>
            <div className="!absolute !inset-0 !bg-white/20 !rounded-2xl !animate-pulse"></div>
          </div>
        </div>

        {/* Image AVANT (clip révélée) */}
        <div
          className="!absolute !inset-0 !z-20 !transition-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt={`${alt} - Avant`}
            fill
            className="!object-cover !transition-transform !duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {/* Badge AVANT avec animation */}
          <div className="!absolute !top-6 !left-6 !bg-gradient-to-br !from-red-500 !via-rose-500 !to-pink-600 !text-white !px-6 !py-3 !rounded-2xl !font-bold !text-sm sm:!text-base !shadow-2xl !tracking-wider !uppercase !backdrop-blur-sm !border-2 !border-white/30 !transition-all !duration-300 hover:!scale-105 hover:!shadow-rose-500/50">
            <span className="!relative !z-10 !drop-shadow-md">✗ Avant</span>
            <div className="!absolute !inset-0 !bg-white/20 !rounded-2xl !animate-pulse"></div>
          </div>
        </div>

        {/* Barre de séparation premium avec ombre portée */}
        <div
          className="!absolute !top-0 !bottom-0 !w-1 !bg-gradient-to-b !from-blue-400 !via-white !to-blue-400 !shadow-[0_0_20px_rgba(255,255,255,0.8)] !z-30"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Bordures latérales pour plus de visibilité */}
          <div className="!absolute !inset-y-0 !-left-[2px] !w-[2px] !bg-black/20"></div>
          <div className="!absolute !inset-y-0 !-right-[2px] !w-[2px] !bg-black/20"></div>

          {/* Poignée tactile redesignée */}
          <div
            className={`!absolute !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2 !w-16 !h-16 sm:!w-20 sm:!h-20 !bg-gradient-to-br !from-blue-500 !via-blue-600 !to-indigo-600 !rounded-full !shadow-[0_8px_32px_rgba(0,0,0,0.4)] !flex !items-center !justify-center !cursor-grab active:!cursor-grabbing !transition-all !duration-300 !border-4 !border-white !backdrop-blur-md ${
              isDragging ? '!scale-110 !shadow-[0_12px_48px_rgba(59,130,246,0.6)]' : isHovering ? '!scale-105 !shadow-[0_10px_40px_rgba(59,130,246,0.5)]' : ''
            }`}
            onMouseDown={startDrag}
            onTouchStart={startDrag}
          >
            {/* Cercle intérieur pour effet de profondeur */}
            <div className="!absolute !inset-2 !bg-white/10 !rounded-full !backdrop-blur-sm"></div>

            {/* Icônes de direction */}
            <div className="!relative !z-10 !flex !items-center !justify-center !gap-0.5">
              <ChevronLeft className="!w-6 !h-6 sm:!w-7 sm:!h-7 !text-white !drop-shadow-lg !transition-transform !duration-300" style={{ transform: isDragging ? 'translateX(-2px)' : '' }} />
              <ChevronRight className="!w-6 !h-6 sm:!w-7 sm:!h-7 !text-white !drop-shadow-lg !transition-transform !duration-300" style={{ transform: isDragging ? 'translateX(2px)' : '' }} />
            </div>

            {/* Indicateur de mouvement (visible au hover) */}
            {isHovering && !isDragging && (
              <div className="!absolute !-bottom-10 !left-1/2 !-translate-x-1/2 !bg-black/80 !text-white !px-3 !py-1.5 !rounded-lg !text-xs !font-semibold !whitespace-nowrap !backdrop-blur-md !border !border-white/20 !animate-bounce">
                <MoveHorizontal className="!w-4 !h-4 !inline !mr-1" />
                Glissez
              </div>
            )}
          </div>

          {/* Lignes décoratives en haut et en bas */}
          <div className="!absolute !top-0 !left-1/2 !-translate-x-1/2 !w-12 !h-12 !bg-gradient-to-b !from-white !to-transparent !opacity-30 !blur-sm"></div>
          <div className="!absolute !bottom-0 !left-1/2 !-translate-x-1/2 !w-12 !h-12 !bg-gradient-to-t !from-white !to-transparent !opacity-30 !blur-sm"></div>
        </div>

        {/* Overlay d'instructions (visible au chargement) */}
        {!isDragging && sliderPosition === 50 && (
          <div className="!absolute !inset-0 !z-40 !bg-black/40 !backdrop-blur-[2px] !flex !items-center !justify-center !transition-opacity !duration-500 !pointer-events-none">
            <div className="!bg-white/95 !backdrop-blur-md !px-8 !py-4 !rounded-2xl !shadow-2xl !border-2 !border-white/50 !animate-pulse">
              <p className="!text-gray-900 !font-bold !text-base sm:!text-lg !text-center !flex !items-center !gap-2">
                <MoveHorizontal className="!w-6 !h-6 !text-blue-600" />
                Déplacez le curseur pour comparer
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Texte d'instruction redesigné */}
      <div className="!mt-8 !text-center !space-y-2">
        <p className="!text-gray-700 !font-semibold !text-base sm:!text-lg !tracking-wide">
          👆 Faites glisser le curseur pour découvrir la transformation
        </p>
        <p className="!text-gray-500 !text-sm sm:!text-base !font-medium">
          Utilisez votre souris ou votre doigt pour comparer avant / après
        </p>
      </div>
    </div>
  );
}