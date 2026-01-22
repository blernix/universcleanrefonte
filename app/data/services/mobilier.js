// Services Mobilier - Univers Clean 77

export const mobilierServices = [
  // --- NETTOYAGE CANAPÉ ---
  {
    id: 4,
    slug: 'nettoyage-canape',
    title: 'Nettoyage de Canapé',
    heroTitle: 'Offrez une seconde vie à votre canapé',
    heroSubtitle: 'Couleurs ravivées, fraîcheur retrouvée, confort assuré',
    shortDescription: 'Redonnez vie à vos textiles. Couleurs éclatantes, hygiène renforcée.',
    image: '/services/canape-hero.webp',
    imageAlt: 'Canapé en tissu propre et rafraîchi après nettoyage professionnel par injection-extraction',
    category: 'mobilier',
    description: 'Nettoyage professionnel en profondeur, respectueux des matériaux et de votre environnement. Élimination des taches, ravivage des couleurs, neutralisation des odeurs et réduction des allergènes.',
    formulasDescription: `Redonnez vie à vos textiles d'intérieur grâce à un nettoyage professionnel en profondeur, respectueux des matériaux et de votre environnement. Nos prestations sont spécialement conçues pour éliminer les taches, raviver les couleurs, neutraliser les mauvaises odeurs et réduire les allergènes accumulés dans vos tissus.

Un soin adapté à chaque surface : Contrairement aux produits utilisés pour l'automobile, nous employons des solutions spécifiques pour les textiles d'intérieur. Elles pénètrent en profondeur dans les fibres tout en respectant la délicatesse des tissus : canapés, fauteuils, matelas, chaises ou tapis.

Des résultats visibles et durables :
• Couleurs éclatantes : vos tissus retrouvent leur aspect d'origine.
• Hygiène renforcée : poussières et allergènes sont éliminés.
• Fraîcheur garantie : les mauvaises odeurs disparaissent.

Une approche respectueuse de l'environnement : Nos produits sont soigneusement sélectionnés pour leur efficacité, mais aussi pour leur respect des matériaux et de la planète. Vous profitez ainsi d'un intérieur propre, sain et durable, sans compromis sur la sécurité de votre famille.

Avec notre service de nettoyage, vos canapés, matelas, fauteuils, chaises et tapis retrouvent confort, éclat et hygiène.`,
    beforeAfterImages: [
      {
        before: '/services/canape_bleu_avant.webp',
        after: '/services/canape_bleu_apres.webp',
        alt: 'Nettoyage canapé bleu'
      },
      {
        before: '/services/canape_gris_avant.webp',
        after: '/services/canape_gris_apres.webp',
        alt: 'Nettoyage canapé gris'
      }
    ],
    formulas: [
      {
        name: 'Nettoyage Standard',
        price: {
          '1places': '59€',
          '2-3places': '79€',
          '3-4places': '109€',
          'angle': '119€',
          'U': '139€'
        },
        description: 'Nettoyage complet de votre canapé avec injection-extraction professionnelle.',
        benefits: [
          'Aspiration complète en profondeur',
          'Pré-traitement et détachage ciblé',
          'Injection-extraction avec produits textiles professionnels',
          'Ravivage des couleurs',
          'Élimination des poussières et allergènes',
          'Neutralisation des mauvaises odeurs',
          'Produits spécifiques textiles respectueux des matériaux',
          'Séchage optimisé en 6-12h'
        ]
      }
    ],
    process: [
      { step: 1, title: 'Aspiration complète', desc: 'Élimination des poussières et débris en surface' },
      { step: 2, title: 'Pré-traitement', desc: 'Détachage ciblé des zones difficiles' },
      { step: 3, title: 'Injection-extraction', desc: 'Nettoyage en profondeur avec produits textiles professionnels' },
      { step: 4, title: 'Séchage naturel', desc: 'Séchage optimisé en 6-12h selon aération' }
    ],
    faqs: [
      { q: 'Combien de temps faut-il attendre avant de réutiliser le canapé ?', a: 'Les tissus restent légèrement humides. Comptez entre 6 et 12 heures de séchage selon le textile et l\'aération. Vous pouvez accélérer avec un ventilateur ou déshumidificateur.' },
      { q: 'Les produits sont-ils sans danger pour les enfants et animaux ?', a: 'Oui, absolument. Nous utilisons des produits spécifiques textiles, non toxiques, sans danger pour enfants et animaux. Formules respectueuses de la santé et de l\'environnement.' },
      { q: 'Nettoyez-vous aussi le cuir ?', a: 'Oui, nous avons un traitement spécifique pour le cuir avec hydratation.' }
    ],
    heroImage: '/services/canape-hero.webp',
    heroImageAlt: 'Technicien professionnel nettoyant un canapé à domicile avec matériel d\'injection-extraction'
  },

  // --- NETTOYAGE MATELAS ---
  {
    id: 5,
    slug: 'nettoyage-matelas',
    title: 'Nettoyage de Matelas',
    heroTitle: 'Dormez sur vos deux oreilles',
    heroSubtitle: 'Un matelas sain pour un sommeil réparateur',
    shortDescription: 'Sommeil sain. Élimination acariens, allergènes et taches.',
    image: '/services/chambre-hero.webp',
    imageAlt: 'Matelas blanc désinfecté et hygiénique après nettoyage professionnel en profondeur',
    category: 'mobilier',
    description: 'Nettoyage en profondeur de votre matelas pour un sommeil sain et réparateur. Traitement professionnel contre acariens, allergènes et taches organiques.',
    formulasDescription: `Redonnez vie à vos textiles d'intérieur grâce à un nettoyage professionnel en profondeur, respectueux des matériaux et de votre environnement. Nos prestations sont spécialement conçues pour éliminer les taches, raviver les couleurs, neutraliser les mauvaises odeurs et réduire les allergènes accumulés dans vos tissus.

Un soin adapté à chaque surface : Contrairement aux produits utilisés pour l'automobile, nous employons des solutions spécifiques pour les textiles d'intérieur. Elles pénètrent en profondeur dans les fibres tout en respectant la délicatesse des tissus : canapés, fauteuils, matelas, chaises ou tapis.

Des résultats visibles et durables :
• Couleurs éclatantes : vos tissus retrouvent leur aspect d'origine.
• Hygiène renforcée : poussières et allergènes sont éliminés.
• Fraîcheur garantie : les mauvaises odeurs disparaissent.

Une approche respectueuse de l'environnement : Nos produits sont soigneusement sélectionnés pour leur efficacité, mais aussi pour leur respect des matériaux et de la planète. Vous profitez ainsi d'un intérieur propre, sain et durable, sans compromis sur la sécurité de votre famille.

Avec notre service de nettoyage, vos canapés, matelas, fauteuils, chaises et tapis retrouvent confort, éclat et hygiène.`,
    beforeAfterImages: [
      {
        before: '/services/matelas_avant.webp',
        after: '/services/matelas_apres.webp',
        alt: 'Nettoyage matelas'
      }
    ],
    formulas: [
      {
        name: 'Nettoyage Standard',
        price: {
          'enfant': '50€',
          '1place': '60€',
          '2places': '80€'
        },
        duration: {
          'enfant': '30 min',
          '1place': '45 min',
          '2places': '60 min'
        },
        description: 'Nettoyage complet de votre matelas avec traitement anti-acariens.',
        benefits: [
          'Aspiration profonde en surface et en profondeur',
          'Détachage ciblé (sang, urine, sueur)',
          'Injection-extraction avec produits textiles professionnels',
          'Traitement antibactérien et anti-acariens',
          'Désinfection complète du matelas',
          'Désodorisation neutralisante',
          'Élimination des allergènes',
          'Amélioration de la qualité du sommeil',
          'Séchage optimisé en 6-12h'
        ]
      }
    ],
    process: [
      { step: 1, title: 'Aspiration profonde', desc: 'Élimination poussières et débris' },
      { step: 2, title: 'Détachage ciblé', desc: 'Traitement des taches organiques' },
      { step: 3, title: 'Injection-extraction', desc: 'Nettoyage en profondeur avec produits textiles' },
      { step: 4, title: 'Désinfection', desc: 'Traitement antibactérien et désodorisation' }
    ],
    faqs: [
      { q: 'Combien de temps faut-il attendre avant de dormir sur le matelas ?', a: 'Le matelas reste légèrement humide. Il est recommandé de prévoir un séchage complet de 6 à 12 heures (souvent une demi-journée à une nuit). Aérez bien la pièce pour accélérer le séchage.' },
      { q: 'À quelle fréquence nettoyer son matelas ?', a: 'Recommandé tous les 6 à 12 mois pour maintenir une hygiène optimale.' },
      { q: 'Est-ce efficace contre les punaises de lit ?', a: 'Non, les punaises de lit nécessitent un traitement spécialisé différent.' }
    ],
    heroImage: '/services/chambre-hero.webp',
    heroImageAlt: 'Traitement professionnel anti-acariens et désinfection de matelas à domicile'
  }
];

// Tailles de canapé pour formulaire
export const canapeTypes = [
  { value: '1places', label: 'Canapé 1 place' },
  { value: '2-3places', label: 'Canapé 2/3 places' },
  { value: '3-4places', label: 'Canapé 3/4 places' },
  { value: 'angle', label: 'Forme d\'angle' },
  { value: 'U', label: 'Forme de U' },
  { value: 'autre', label: 'Autre (à préciser)' }
];

// Tailles de matelas pour formulaire
export const matelasSizes = [
  { value: 'enfant', label: 'Matelas enfant' },
  { value: '1place', label: 'Matelas 1 place' },
  { value: '2places', label: 'Matelas 2 places' }
];
