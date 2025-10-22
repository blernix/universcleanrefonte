'use client';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function ServiceFormulasIntro({ formulasDescription, title }) {
  if (!formulasDescription) return null;

  // Séparer le texte en paragraphes
  const paragraphs = formulasDescription.split('\n\n').filter(p => p.trim());

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-6 md:px-8 max-w-5xl">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            {title}
          </motion.h2>
        )}

        <div className="space-y-8">
          {paragraphs.map((paragraph, index) => {
            // Vérifier si le paragraphe contient des bullet points
            const hasBullets = paragraph.includes('•');

            if (hasBullets) {
              // Séparer le titre et les bullets
              const parts = paragraph.split('•').map(p => p.trim()).filter(Boolean);
              const bulletTitle = parts[0].split(':')[0]?.trim();
              const bullets = parts.slice(0);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-white border-l-4 border-blue-500 rounded-r-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  {bulletTitle && (
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                      {bulletTitle}
                    </h3>
                  )}
                  <div className="grid md:grid-cols-2 gap-4">
                    {bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <p className="text-base text-gray-700 leading-relaxed">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            }

            // Paragraphe standard
            const isFirstParagraph = index === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={
                  isFirstParagraph
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 md:p-10 shadow-xl"
                    : "bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all hover:border-blue-300"
                }
              >
                <div className="flex items-start gap-4">
                  {!isFirstParagraph && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm mt-1">
                      {index}
                    </div>
                  )}
                  <p className={
                    isFirstParagraph
                      ? "text-lg md:text-xl text-white leading-relaxed font-medium"
                      : "text-base md:text-lg text-gray-700 leading-relaxed flex-1"
                  }>
                    {paragraph}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guide visuel de progression */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold shadow-sm">
            <ChevronRight className="w-4 h-4" />
            <span>Découvrez nos formules ci-dessous</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
