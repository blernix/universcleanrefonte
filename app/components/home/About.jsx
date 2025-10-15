'use client';
import { motion } from 'framer-motion';
import { Heart, Award, Users } from 'lucide-react';
import { aboutContent } from '@/app/data/global';

const icons = { Heart, Award, Users };

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
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="!text-center mb-20"
        >
          <h2 id="about-title" className="!text-4xl md:!text-5xl font-bold !text-gray-900 mb-4 !text-center">
            {aboutContent.intro.title}
          </h2>
          <p className="!text-lg md:!text-xl !text-gray-600 max-w-3xl !mx-auto leading-relaxed !text-center">
            {aboutContent.intro.subtitle}
          </p>
          <p className="mt-6 !text-gray-700 max-w-3xl !mx-auto leading-relaxed !text-center">
            {aboutContent.intro.content}
          </p>
        </motion.div>

        {/* Valeurs */}
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
                {/* Halo animé */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100/40 to-blue-50/20 opacity-0 hover:opacity-100 blur-xl transition-opacity"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <div className="relative z-10 flex flex-col items-center !text-center">
                  <div className="bg-blue-50 p-4 rounded-full mb-6 shadow-sm">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="!text-2xl font-semibold !text-gray-900 mb-3 !text-center">
                    {value.title}
                  </h3>
                  <p className="!text-gray-600 leading-relaxed !text-center">
                    {value.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}