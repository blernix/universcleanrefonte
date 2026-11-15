/**
 * Photos du carrousel du hero de l'accueil.
 *
 * Ajouter une photo = une ligne. L'ordre du tableau est l'ordre d'affichage
 * et l'index 0 est l'image chargée en priorité (LCP).
 */
export const HERO_PHOTOS = [
  {
    src: '/hero-nettoyage-canape.jpeg',
    alt: "Nettoyage d'un canapé en velours rouge à domicile avec une machine d'injection-extraction",
  },
  {
    src: '/hero-nettoyage-chantier.jpeg',
    alt: "Nettoyage de fin de chantier d'un bureau, agent Univers Clean au travail",
  },
];

/** Délai du fondu enchaîné du carrousel, en millisecondes (5 s). */
export const HERO_DELAY = 5000;
