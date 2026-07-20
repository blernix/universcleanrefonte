'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import Modal from './Modal';
import ContactForm from './ContactForm';
import { trackDevisClick } from '@/app/utils/umami';

export default function MobileCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current && currentY > 80) {
        setVisible(true);
      } else if (currentY < lastScrollY.current) {
        setVisible(false);
      }

      lastScrollY.current = currentY;

      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setVisible(true);
      }, 800);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, []);

  const handleOpen = () => {
    trackDevisClick('mobile-cta', 'global');
    setIsModalOpen(true);
  };

  const handleClose = () => setIsModalOpen(false);

  const isMobilier = pathname?.includes('nettoyage-canape') || pathname?.includes('nettoyage-matelas');
  const isServicePage = pathname?.startsWith('/services/');

  return (
    <>
      <div className={`${isServicePage ? '' : 'lg:hidden'} fixed bottom-0 left-0 right-0 z-40 p-4 pointer-events-none`}>
        <div className="container mx-auto max-w-lg flex justify-center pointer-events-none">
          <motion.div
            animate={{ y: visible ? 0 : 120, opacity: visible ? 1 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="pointer-events-auto"
          >
            {isMobilier ? (
              <a
                href="https://app.dispoo.fr/univers-clean77"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.umami) {
                    window.umami.track('click_rdv', { page: pathname });
                  }
                }}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold text-base shadow-xl hover:bg-blue-700 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Prendre RDV
              </a>
            ) : (
              <button
                onClick={handleOpen}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold text-base shadow-xl hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Demande de devis
              </button>
            )}
          </motion.div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleClose} title="Demander un devis">
        <ContactForm formType="general" onSuccess={handleClose} />
      </Modal>
    </>
  );
}
