'use client';

import Image from 'next/image';

export default function BeforeAfterSlider({ beforeImage, afterImage, alt }) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Image AVANT */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl border-4 border-gray-100 group">
          <Image
            src={beforeImage}
            alt={`${alt} - Avant`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {/* Badge AVANT */}
          <div className="absolute top-4 left-4 bg-gradient-to-br from-red-500 via-rose-500 to-pink-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm sm:text-base shadow-xl tracking-wider uppercase border-2 border-white/30">
            <span className="drop-shadow-md">✗ Avant</span>
          </div>
        </div>

        {/* Image APRÈS */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl border-4 border-gray-100 group">
          <Image
            src={afterImage}
            alt={`${alt} - Après`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {/* Badge APRÈS */}
          <div className="absolute top-4 right-4 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm sm:text-base shadow-xl tracking-wider uppercase border-2 border-white/30">
            <span className="drop-shadow-md">✓ Après</span>
          </div>
        </div>
      </div>
    </div>
  );
}