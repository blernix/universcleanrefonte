"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PopupPromo() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTrigger, setShowTrigger] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("hasSeenPopup");

    if (!seen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setShowTrigger(true);
        localStorage.setItem("hasSeenPopup", "true");
      }, 3000); // Affiche après 3 secondes

      return () => clearTimeout(timer);
    } else {
      setShowTrigger(true);
    }
  }, []);

  // Fermer avec la touche Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        closePopup();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Bloquer le scroll quand le popup est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closePopup = () => {
    setIsOpen(false);
  };

  const reopenPopup = () => {
    setIsOpen(true);
  };

  const handleBackdropClick = (e) => {
    // Fermer uniquement si on clique sur le backdrop (pas sur le contenu)
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  return (
    <>
      {/* Bouton flottant pour réouvrir le popup */}
      <AnimatePresence>
        {showTrigger && !isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={reopenPopup}
            className="!fixed !bottom-6 !right-6 !z-40 !bg-gradient-to-r !from-blue-600 !to-blue-500 hover:!from-blue-700 hover:!to-blue-600 !shadow-2xl !p-4 !rounded-full !transition-all !duration-300"
            aria-label="Voir la réduction d'impôt"
          >
            <Sparkles size={28} className="!text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            className="!fixed !inset-0 !z-50 !bg-black/70 backdrop-blur-md !flex !items-center !justify-center !px-4 !py-4 !overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="!bg-white !rounded-3xl !shadow-2xl !w-full !max-w-lg !relative !overflow-hidden !my-auto !max-h-[95vh] !overflow-y-auto"
            >
              {/* Dégradé d'arrière-plan décoratif */}
              <div className="!absolute !top-0 !left-0 !right-0 !h-2 !bg-gradient-to-r !from-blue-500 !via-blue-600 !to-blue-500" />

              {/* Bouton de fermeture */}
              <button
                onClick={closePopup}
                className="!absolute !top-4 !right-4 !text-gray-600 hover:!text-gray-900 hover:!bg-gray-100 !rounded-full !p-2 !z-10 !transition-all !duration-200"
                aria-label="Fermer"
              >
                <X size={24} />
              </button>

              {/* Image ajustée */}
              <div className="!w-full !max-h-[280px] !overflow-hidden !flex !justify-center !items-center !bg-gradient-to-b !from-blue-50 !to-white !pt-10 !pb-4">
                <Image
                  src="/reduction.png"
                  alt="Crédit d'impôt"
                  width={600}
                  height={300}
                  className="!w-full !h-auto !object-contain !px-4"
                  priority
                />
              </div>

              {/* Contenu texte */}
              <div className="!p-8 !text-gray-800">
                <h3 id="popup-title" className="!text-2xl !font-extrabold !text-gray-900 !mb-4 !text-center">
                  ✨ Bénéficiez immédiatement de votre réduction d'impôt !
                </h3>

                <p className="!mb-5 !text-gray-700 !text-center !leading-relaxed">
                  Profitez d'une réduction d'impôt <strong>dès maintenant</strong> sur vos prestations :
                </p>

                <div className="!bg-gradient-to-br !from-blue-50 !to-blue-100/50 !rounded-2xl !p-5 !mb-5">
                  <ul className="!space-y-3">
                    <li className="!flex !items-start !gap-3">
                      <span className="!text-green-600 !font-bold !text-xl !flex-shrink-0">✓</span>
                      <span className="!text-gray-900"><strong className="!text-blue-700">50 % de réduction d'impôt</strong> pour les particuliers</span>
                    </li>
                    <li className="!flex !items-start !gap-3">
                      <span className="!text-green-600 !font-bold !text-xl !flex-shrink-0">✓</span>
                      <span className="!text-gray-900"><strong className="!text-blue-700">25 % de réduction d'impôt</strong> pour les professionnels</span>
                    </li>
                    <li className="!text-gray-500 !text-sm !ml-9 !italic">
                      (Hors nettoyage automobile)
                    </li>
                  </ul>
                </div>

                <div className="!bg-blue-50 !border-l-4 !border-blue-600 !p-4 !rounded-r-lg !mb-6">
                  <p className="!text-sm !text-gray-700 !leading-relaxed">
                    💡 <strong>Avantage immédiat :</strong> Plus besoin d'attendre l'année suivante, la réduction est déduite directement de votre facture !
                  </p>
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    closePopup();
                    setTimeout(() => {
                      const contactSection = document.getElementById("contact");
                      contactSection?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
                  className="!w-full !bg-gradient-to-r !from-blue-600 !to-blue-500 hover:!from-blue-700 hover:!to-blue-600 !text-white !font-bold !text-lg !py-4 !px-6 !rounded-full !transition-all !duration-300 !shadow-lg hover:!shadow-xl !transform hover:!scale-105"
                >
                  💬 Contactez-nous pour en profiter !
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
