'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Award, Users } from 'lucide-react';
import { aboutContent } from '@/app/data/global';

const icons = { Heart, Award, Users };

// Hiérarchie des 4 blocs, par position : accroche, méthode, prestations, assurance.
// Aucune mise en avant à l'intérieur d'un bloc (le texte du client reste verbatim).
const BLOCK_CLASSES = [
  'text-lg lg:text-xl text-gray-700 leading-relaxed',
  'text-base text-gray-600 leading-relaxed',
  'text-base text-gray-600 leading-relaxed',
  'text-base text-gray-700 leading-relaxed'
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Dégradé d’arrière-plan animé */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-100/40 via-white to-blue-50/50 blur-3xl"
        animate={{ opacity: [0.6, 0.8, 0.6], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative container  mx-auto px-6 max-w-6xl">
        {/* Intro : photo à gauche (1er enfant du DOM), texte à droite à partir de lg */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] gap-10 lg:gap-16 items-center"
        >
          {/* Cadre photo : même langage que le panneau du hero (Hero.jsx:88) */}
          <div className="relative aspect-[61/100] w-full max-w-[380px] mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 shadow-sm">
            <Image
              src="/about-nettoyage-canape.jpeg"
              alt="Technicien nettoyant un canapé mauve à la brosseuse, à domicile"
              fill
              sizes="(min-width: 1024px) 380px, 90vw"
              className="object-cover"
            />
          </div>

          {/* Texte : bord gauche aligné sur la colonne, aucun centrage hérité */}
          <div className="max-w-[34rem]">
            <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-gray-900">
              {aboutContent.intro.title}
            </h2>
            <div className="mt-6 space-y-5">
              {aboutContent.intro.blocks.map((block, index) => (
                <p key={index} className={BLOCK_CLASSES[index] ?? BLOCK_CLASSES[BLOCK_CLASSES.length - 1]}>
                  {block}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Valeurs *
        <div className="grid md:grid-cols-3 gap-10 !pb-8">
          {aboutContent.values.map((value, index) => {
            const Icon = icons[value.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100/40 to-blue-50/20 opacity-0 hover:opacity-100 blur-xl transition-opacity"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <div className="relative z-10 flex flex-col items-center !text-center">
                  <div className="bg-blue-50 p-4 rounded-full !mb-6 shadow-sm">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="!text-2xl font-semibold !text-gray-900 !mb-3 !text-center">
                    {value.title}
                  </h3>
                  <p className="!text-gray-600 leading-relaxed !text-center">
                    {value.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>*/}
      </div>
    </section>
  );
}