'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { globalFAQ } from '@/app/data/global';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" aria-labelledby="faq-title" className="!py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-8 max-w-4xl">
        <h2 id="faq-title" className="!text-4xl md:!text-5xl font-bold !text-gray-900 !mb-16 !text-center">
          Questions Fréquentes
        </h2>
        <div className="space-y-4">
          {globalFAQ.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full !p-6 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="!text-xl font-bold !text-gray-900 flex items-start gap-3">
                  <span className="!text-blue-600">Q:</span> {faq.q}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="!text-gray-600 !text-base px-6 pb-6 pl-14">
                      <span className="font-semibold !text-blue-600">R:</span> {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
