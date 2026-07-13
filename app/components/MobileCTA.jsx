'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import Modal from './Modal';
import ContactForm from './ContactForm';
import { trackDevisClick } from '@/app/utils/umami';

export default function MobileCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    trackDevisClick('mobile-cta', 'global');
    setIsModalOpen(true);
  };

  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-4 pointer-events-none">
        <div className="container mx-auto max-w-lg flex justify-center pointer-events-none">
          <motion.button
            onClick={handleOpen}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
            className="pointer-events-auto bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold text-base shadow-xl flex items-center gap-2 hover:bg-blue-700 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Demande de devis
          </motion.button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleClose} title="Demander un devis">
        <ContactForm formType="general" onSuccess={handleClose} />
      </Modal>
    </>
  );
}
