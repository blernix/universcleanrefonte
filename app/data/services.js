// Données centralisées pour tous les services Univers Clean

// ========================================
// SERVICES AUTOMOBILE
// ========================================

export const servicesData = [
  // --- NETTOYAGE INTÉRIEUR VOITURE ---
  {
    id: 1,
    slug: 'nettoyage-voiture-interieur',
    title: 'Nettoyage Voiture Intérieur',
    shortDescription: 'Trois formules pour un intérieur impeccable, du rafraîchissement au soin premium.',
    image: '/services/interieur-hero.webp',
    imageAlt: 'Intérieur de voiture propre après nettoyage',
    category: 'automobile',
    description: 'Redonnez vie à l\'habitacle de votre véhicule avec nos trois formules adaptées à vos besoins, du simple rafraîchissement au nettoyage haut de gamme.',
    formulas: [
      {
        name: 'Start',
        price: {
          'classe1': '80€',
          'classe2': '90€',
          'classe3': '100€'
        },
        description: 'Pensée pour les voitures entretenues régulièrement qui nécessitent un rafraîchissement rapide.',
        benefits: [
          'Dépoussiérage des plastiques',
          'Aspiration complète de l\'habitacle',
          'Nettoyage des vitres intérieures',
          'Parfum d\'ambiance'
        ]
      },
      {
        name: 'Confort',
        price: {
          'classe1': '120€',
          'classe2': '140€',
          'classe3': '160€'
        },
        description: 'Pour une attention plus poussée avec nettoyage en profondeur des plastiques et moquettes.',
        benefits: [
          'Tout de la formule Start',
          'Nettoyage détaillé des plastiques avec outils adaptés',
          'Nettoyage approfondi des moquettes',
          'Injection-extraction des tapis et surtapis',
          'Rendu impeccable et habitacle plus sain'
        ]
      },
      {
        name: 'Ultimate',
        price: {
          'classe1': '180€',
          'classe2': '210€',
          'classe3': '240€'
        },
        description: 'Le niveau le plus abouti du nettoyage intérieur. Chaque élément travaillé avec minutie.',
        benefits: [
          'Plastiques et tableau de bord au pinceau et à la vapeur',
          'Sièges tissus ou cuir nettoyés en profondeur',
          'Hydratation et nourrissage du cuir',
          'Moquettes et tapis à l\'injection-extraction',
          'Protection UV sur les plastiques',
          'Intérieur comme neuf, propre et protégé'
        ]
      }
    ],
    process: [
      { step: 1, title: 'Aspiration complète', desc: 'Tous recoins, sièges et moquettes' },
      { step: 2, title: 'Nettoyage plastiques', desc: 'Tableau de bord, portes, console' },
      { step: 3, title: 'Injection-extraction', desc: 'Sièges, tapis et moquettes' },
      { step: 4, title: 'Finitions premium', desc: 'Protection UV, parfum d\'ambiance' }
    ],
    faqs: [
      { q: 'Combien de temps dure la prestation ?', a: 'De 1h30 (Start) à 4h (Ultimate) selon la formule et l\'état du véhicule.' },
      { q: 'Les sièges seront-ils mouillés ?', a: 'Légèrement humides, secs en 2-4h avec bonne aération.' },
      { q: 'Traitez-vous le cuir ?', a: 'Oui, avec produits spécifiques : nettoyage, hydratation et nourrissage (formule Ultimate).' }
    ],
    heroImage: '/services/interieur-hero.webp',
    heroImageAlt: 'Nettoyage professionnel intérieur voiture'
  },

  // --- NETTOYAGE EXTÉRIEUR VOITURE ---
  {
    id: 2,
    slug: 'nettoyage-voiture-exterieur',
    title: 'Nettoyage Voiture Extérieur',
    shortDescription: 'Du rafraîchissement express à la protection céramique 6 mois.',
    image: '/services/porsche-hero.webp',
    imageAlt: 'Voiture propre après nettoyage extérieur',
    category: 'automobile',
    description: 'Trois formules adaptées pour redonner éclat et protection à votre carrosserie, du simple lavage au soin premium.',
    formulas: [
      {
        name: 'Start',
        price: {
          'classe1': '50€',
          'classe2': '60€',
          'classe3': '70€'
        },
        description: 'Idéale pour les voitures entretenues régulièrement. L\'essentiel pour un extérieur propre.',
        benefits: [
          'Prélavage de la carrosserie',
          'Lavage à la main',
          'Nettoyage des jantes',
          'Vitres claires',
          'Dressing des pneus'
        ]
      },
      {
        name: 'Confort',
        price: {
          'classe1': '90€',
          'classe2': '110€',
          'classe3': '130€'
        },
        description: 'Pour aller plus loin avec décontamination ferreuse et finition brillance.',
        benefits: [
          'Tout de la formule Start',
          'Nettoyage poussé des jantes et pneus',
          'Dégraissage complet',
          'Décontamination ferreuse de la carrosserie',
          'Finition brillance pour un éclat profond et durable'
        ]
      },
      {
        name: 'Ultimate',
        price: {
          'classe1': '150€',
          'classe2': '180€',
          'classe3': '210€'
        },
        description: 'Le niveau le plus abouti. Chaque détail travaillé pour une brillance exceptionnelle.',
        benefits: [
          'Prélavage minutieux au pinceau (logos, phares, poignées)',
          'Nettoyage jantes jusqu\'à l\'intérieur',
          'Passages de roues dégraissés',
          'Dégoudronnage et clay bar (décontamination maximale)',
          'Protection céramique carrosserie, vitres et jantes',
          'Brillance exceptionnelle et protection jusqu\'à 6 mois',
          'Vitres impeccables et dressing pneus'
        ]
      }
    ],
    process: [
      { step: 1, title: 'Prélavage', desc: 'Mousse active et décontamination initiale' },
      { step: 2, title: 'Lavage manuel', desc: 'Shampoing pH neutre et rinçage soigné' },
      { step: 3, title: 'Décontamination', desc: 'Clay bar, dégoudronnant, traitement ferreuse' },
      { step: 4, title: 'Protection', desc: 'Cire céramique, dressing et finitions' }
    ],
    faqs: [
      { q: 'Combien de temps dure le lavage ?', a: 'De 45min (Start) à 3h (Ultimate) selon la formule.' },
      { q: 'La protection dure combien de temps ?', a: 'Jusqu\'à 6 mois avec la formule Ultimate (protection céramique).' },
      { q: 'Lavez-vous les jantes ?', a: 'Oui, jantes et passages de roues inclus dans toutes les formules.' }
    ],
    heroImage: '/services/porsche-hero.webp',
    heroImageAlt: 'Nettoyage professionnel extérieur voiture'
  },

  // --- NETTOYAGE COMPLET VOITURE ---
  {
    id: 3,
    slug: 'nettoyage-voiture-complet',
    title: 'Nettoyage Voiture Complet',
    shortDescription: 'Intérieur + Extérieur. Le soin intégral pour votre véhicule.',
    image: '/services/porsche-hero.webp',
    imageAlt: 'Voiture complètement nettoyée intérieur et extérieur',
    category: 'automobile',
    description: 'Pourquoi choisir entre intérieur et extérieur ? Profitez d\'un service complet avec tarif avantageux.',
    formulas: [
      {
        name: 'Start',
        price: {
          'classe1': '120€',
          'classe2': '140€',
          'classe3': '160€'
        },
        description: 'Rafraîchissement complet intérieur + extérieur pour véhicules entretenus.',
        benefits: [
          'Formule Start Intérieur',
          'Formule Start Extérieur',
          'Tarif avantageux vs prestations séparées'
        ]
      },
      {
        name: 'Confort',
        price: {
          'classe1': '200€',
          'classe2': '240€',
          'classe3': '280€'
        },
        description: 'Nettoyage en profondeur dedans comme dehors.',
        benefits: [
          'Formule Confort Intérieur',
          'Formule Confort Extérieur',
          'Résultat impeccable global',
          'Économie vs prestations séparées'
        ]
      },
      {
        name: 'Ultimate',
        price: {
          'classe1': '320€',
          'classe2': '380€',
          'classe3': '440€'
        },
        description: 'Le soin haut de gamme intégral. Votre véhicule comme neuf sous tous les angles.',
        benefits: [
          'Formule Ultimate Intérieur',
          'Formule Ultimate Extérieur',
          'Protection totale intérieur + extérieur',
          'Brillance exceptionnelle et protection longue durée',
          'Idéal pour remise en état, revente ou voiture de collection'
        ]
      }
    ],
    process: [
      { step: 1, title: 'Extérieur complet', desc: 'Lavage, décontamination et protection carrosserie' },
      { step: 2, title: 'Intérieur complet', desc: 'Aspiration, injection-extraction et finitions' },
      { step: 3, title: 'Polissage (Ultimate)', desc: 'Correction défauts mineurs et rayures' },
      { step: 4, title: 'Protection totale', desc: 'Cire céramique + protection plastiques UV' }
    ],
    faqs: [
      { q: 'Durée totale de la prestation ?', a: 'De 2h30 (Start) à 7h (Ultimate) selon la formule et l\'état du véhicule.' },
      { q: 'Économie vs prestations séparées ?', a: 'Environ 10-15% moins cher que de prendre intérieur et extérieur séparément.' },
      { q: 'Idéal pour quel cas ?', a: 'Remise en état complète, préparation à la revente, véhicule de collection ou simplement pour retrouver une voiture comme neuve.' }
    ],
    heroImage: '/services/porsche-hero.webp',
    heroImageAlt: 'Nettoyage professionnel complet voiture intérieur et extérieur'
  },

  // ========================================
  // SERVICES MOBILIER
  // ========================================

  // --- NETTOYAGE CANAPÉ ---
  {
    id: 4,
    slug: 'nettoyage-canape',
    title: 'Nettoyage de Canapé',
    shortDescription: 'Redonnez vie à vos textiles. Couleurs éclatantes, hygiène renforcée.',
    image: '/services/canape.webp',
    imageAlt: 'Canapé propre après nettoyage professionnel',
    category: 'mobilier',
    price: 'Sur devis',
    priceDetails: {
      '2places': 'Sur devis',
      '3places': 'Sur devis',
      'angle': 'Sur devis'
    },
    description: 'Nettoyage professionnel en profondeur, respectueux des matériaux et de votre environnement. Élimination des taches, ravivage des couleurs, neutralisation des odeurs et réduction des allergènes.',
    benefits: [
      'Couleurs éclatantes : vos tissus retrouvent leur aspect d\'origine',
      'Hygiène renforcée : poussières et allergènes éliminés',
      'Fraîcheur garantie : les mauvaises odeurs disparaissent',
      'Produits spécifiques textiles (différents de l\'automobile)',
      'Pénétration en profondeur dans les fibres',
      'Respect des matériaux délicats',
      'Approche respectueuse de l\'environnement'
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
    heroImage: '/services/canape-hero.png',
    heroImageAlt: 'Nettoyage professionnel de canapé à domicile'
  },

  // --- NETTOYAGE MATELAS ---
  {
    id: 5,
    slug: 'nettoyage-matelas',
    title: 'Nettoyage de Matelas',
    shortDescription: 'Sommeil sain. Élimination acariens, allergènes et taches.',
    image: '/services/matelas-hero.jpg',
    imageAlt: 'Matelas propre après nettoyage professionnel',
    category: 'mobilier',
    price: 'Sur devis',
    priceDetails: {
      '1personne': 'Sur devis',
      '2personnes': 'Sur devis',
      'queensize': 'Sur devis',
      'kingsize': 'Sur devis'
    },
    description: 'Nettoyage en profondeur de votre matelas pour un sommeil sain et réparateur. Traitement professionnel contre acariens, allergènes et taches organiques.',
    benefits: [
      'Élimination acariens et allergènes',
      'Désinfection complète',
      'Détachage (sang, urine, sueur)',
      'Désodorisation neutralisante',
      'Amélioration qualité du sommeil',
      'Produits textiles adaptés',
      'Respect des fibres et matériaux'
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
    heroImage: '/services/matelas-hero.jpg',
    heroImageAlt: 'Nettoyage professionnel de matelas à domicile'
  }
];

// Classes de véhicules pour formulaires
export const vehicleClasses = [
  { value: 'classe1', label: 'Classe 1 : Citadine / Compact (Audi A1, Fiat 500...)' },
  { value: 'classe2', label: 'Classe 2 : Berline / Break (Audi A3, VW Passat...)' },
  { value: 'classe3', label: 'Classe 3 : SUV / Prestige (BMW X5, Porsche Macan...)' }
];

// Tailles de canapé pour formulaire
export const canapeTypes = [
  { value: '2places', label: 'Canapé 2 places' },
  { value: '3places', label: 'Canapé 3 places' },
  { value: 'angle', label: 'Canapé d\'angle' },
  { value: 'autre', label: 'Autre (à préciser)' }
];

// Tailles de matelas pour formulaire
export const matelasSizes = [
  { value: '1personne', label: '1 personne (90x190)' },
  { value: '2personnes', label: '2 personnes (140x190)' },
  { value: 'queensize', label: 'Queen size (160x200)' },
  { value: 'kingsize', label: 'King size (180x200)' }
];

// ========================================
// FAQ GLOBALE - Questions générales
// ========================================

export const globalFAQ = [
  {
    q: 'Combien de temps dure une prestation complète ?',
    a: 'La durée dépend de la gamme de nettoyage choisie :\n\n• Gamme Start : environ une matinée pour un nettoyage rapide et efficace.\n• Gamme Confort : environ une journée complète pour un nettoyage plus en profondeur.\n• Gamme Ultimate : environ une journée et demie pour un nettoyage haut de gamme, alliant précision et soin optimal.'
  },
  {
    q: 'Est-ce que vous vous déplacez à domicile ? Si oui, dans quel secteur ?',
    a: 'Oui, nous proposons un service à domicile pour plus de confort.\n\nNotre entreprise est située à La Genevraye (77), à seulement 10 minutes de Fontainebleau.\n\nNous intervenons dans un rayon de 30 km autour de notre atelier. Au-delà de cette distance, un supplément de déplacement pourra être appliqué.'
  },
  {
    q: 'Les produits que vous utilisez sont-ils sans danger pour les enfants ou les animaux ?',
    a: 'Oui, absolument. Nous utilisons uniquement des produits spécialement conçus pour le nettoyage textile, qui sont sans danger pour les enfants comme pour les animaux de compagnie.\n\nNos solutions sont respectueuses de la santé et de l\'environnement, tout en restant efficaces contre les taches, les mauvaises odeurs et les allergènes. Elles sont choisies pour leur formule non toxique, ce qui permet de profiter rapidement et en toute sécurité de vos canapés, tapis, matelas ou sièges de voiture après le nettoyage.\n\nAvec nous, vous avez la garantie d\'un intérieur propre, sain et sûr pour toute la famille.'
  },
  {
    q: 'Faut-il un accès à l\'eau ou à l\'électricité pour vos interventions ?',
    a: 'Oui, un accès à l\'eau et/ou à l\'électricité est nécessaire pour la bonne réalisation de nos prestations.\n\nNotre matériel professionnel fonctionne grâce à ces ressources, et notre véhicule n\'est pas totalement autonome sur ce point.\n\nRassurez-vous : il suffit d\'un simple accès à une prise électrique standard et à un point d\'eau classique (robinet, extérieur ou intérieur) pour que nous puissions intervenir dans les meilleures conditions et garantir un résultat optimal.'
  },
  {
    q: 'Combien de temps faut-il attendre avant de pouvoir utiliser un canapé ou un matelas après le nettoyage ?',
    a: 'Après notre intervention, vos tissus sont propres, désinfectés et rafraîchis, mais ils peuvent rester légèrement humides.\n\nLe temps de séchage dépend du type de textile, de son épaisseur et de l\'aération de la pièce :\n\n• En moyenne : entre 6 et 12 heures sont nécessaires.\n• Pour un matelas, il est recommandé de prévoir un séchage complet avant de dormir dessus, souvent d\'une demi-journée à une nuit.\n• Pour un canapé ou fauteuil, vous pouvez généralement les réutiliser dans la journée, une fois bien secs au toucher.\n\nPour accélérer le séchage, pensez à aérer la pièce ou utiliser si possible un déshumidificateur ou un ventilateur.'
  },
  {
    q: 'Comment prendre rendez-vous ?',
    a: 'C\'est très simple ! Sur notre site, vous trouverez un lien de réservation disponible sur chaque service.\n\nEn quelques clics, vous pouvez :\n• Choisir la prestation qui correspond à vos besoins (automobile, canapé, matelas, tapis, etc.).\n• Sélectionner la date et l\'heure qui vous conviennent.\n• Valider votre réservation directement en ligne.\n\nNotre système est intuitif, rapide et pratique, ce qui vous permet de planifier votre rendez-vous en toute autonomie et sans perte de temps.'
  }
];

// ========================================
// CONTENU "À PROPOS"
// ========================================

export const aboutContent = {
  intro: {
    title: 'À propos d’Univers Clean',
    subtitle: 'La passion du nettoyage au service de la perfection',
    content: `Née d’une passion pour le detailing automobile, Univers Clean allie rigueur professionnelle et exigence artisanale. Après plus de dix ans d’expérience dans les plus grandes concessions, nous proposons aujourd’hui des prestations haut de gamme pour redonner éclat et confort à votre intérieur comme à votre véhicule.`
  },
  values: [
    {
      title: 'Exigence & Passion',
      text: `Chaque intervention est réalisée avec soin et précision, comme si c’était notre propre bien.`,
      icon: 'Heart'
    },
    {
      title: 'Produits Haut de Gamme',
      text: `Nous sélectionnons les meilleures marques du detailing pour garantir sécurité, efficacité et durabilité.`,
      icon: 'Award'
    },
    {
      title: 'Respect & Confiance',
      text: `Qu’il s’agisse d’une citadine, d’un canapé ou d’une supercar, chaque client bénéficie de la même attention.`,
      icon: 'Users'
    }
  ]
};