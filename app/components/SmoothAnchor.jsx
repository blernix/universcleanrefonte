'use client';

import { useEffect } from 'react';

/**
 * Composant pour gérer les transitions fade lors des navigations par ancre
 * Intercepte tous les clics sur les liens internes (#xxx) et ajoute une animation
 */
export default function SmoothAnchor() {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');

      // Vérifier si c'est un lien avec ancre interne
      if (!target || !target.hash || target.hash === '#') return;

      // Vérifier que c'est bien un lien vers la même page
      const isInternalAnchor =
        target.hostname === window.location.hostname &&
        target.pathname === window.location.pathname;

      if (!isInternalAnchor) return;

      // Récupérer l'élément cible
      const targetElement = document.querySelector(target.hash);
      if (!targetElement) return;

      // Empêcher le comportement par défaut
      e.preventDefault();

      // Émettre un événement pour terminer l'animation Hero si elle est en cours
      const completeHeroEvent = new CustomEvent('completeHeroAnimation');
      window.dispatchEvent(completeHeroEvent);

      // Animation : Fade Out → Scroll → Fade In
      const body = document.body;

      // Phase 1 : Fade Out (200ms)
      body.style.transition = 'opacity 0.2s ease-out';
      body.style.opacity = '0';

      setTimeout(() => {
        // Phase 2 : Scroll instantané
        targetElement.scrollIntoView({ behavior: 'auto', block: 'start' });

        // Phase 3 : Fade In (300ms)
        setTimeout(() => {
          body.style.transition = 'opacity 0.3s ease-in';
          body.style.opacity = '1';

          // Mettre à jour l'URL avec le hash
          window.history.pushState(null, '', target.hash);

          // Nettoyer les styles après l'animation
          setTimeout(() => {
            body.style.transition = '';
          }, 300);
        }, 50); // Petit délai pour que le scroll soit effectué
      }, 200); // Durée du fade out
    };

    // Écouter tous les clics sur le document
    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return null; // Ce composant ne rend rien
}
