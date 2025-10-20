// Services Automobile - Univers Clean 77
// Mis à jour avec images avant/après

export const automobileServices = [
  // --- NETTOYAGE INTÉRIEUR VOITURE ---
  {
    id: 1,
    slug: 'nettoyage-voiture-interieur',
    title: 'Nettoyage Voiture Intérieur',
    heroTitle: 'Respirez la fraîcheur dans votre habitacle',
    heroSubtitle: 'Un intérieur propre, sain et comme neuf',
    shortDescription: 'Trois formules pour un intérieur impeccable, du rafraîchissement au soin premium.',
    image: '/services/interieur-hero.webp',
    imageAlt: 'Intérieur de voiture propre et désinfecté après nettoyage professionnel',
    category: 'automobile',
    description: 'Redonnez vie à l\'habitacle de votre véhicule avec nos trois formules adaptées à vos besoins, du simple rafraîchissement au nettoyage haut de gamme.',
    beforeAfterImages: [
      {
        before: '/services/interieur_bm_avant.webp',
        after: '/services/interieur_bm_apres.webp',
        alt: 'Nettoyage intérieur BMW'
      },
      {
        before: '/services/interieur_porshe_avant.webp',
        after: '/services/interieur_porshe_apres.webp',
        alt: 'Nettoyage intérieur Porsche'
      }
    ],
    formulas: [
      {
        name: 'Start',
        price: {
          'classe1': '60€',
          'classe2': '70€',
          'classe3': '80€'
        },
        description: 'Pensée pour les voitures entretenues régulièrement qui nécessitent un rafraîchissement rapide.',
        benefits: [
          'Dépoussiérage des plastiques',
          'Aspiration de l\'habitacle',
          'Nettoyage des plastiques',
          'Nettoyage des vitres',
          'Parfum d\'ambiance'
        ]
      },
      {
        name: 'Confort',
        price: {
          'classe1': '110€',
          'classe2': '130€',
          'classe3': '150€'
        },
        description: 'Pour une attention plus poussée avec nettoyage en profondeur des plastiques et moquettes.',
        benefits: [
          'Nettoyage complet des plastiques, tableau de bord, panneaux de porte',
          'Nettoyage complet des moquettes',
          'Nettoyage des tapis (injection / extraction)',
          'Nettoyage des vitres',
          'Parfum d\'ambiance'
        ]
      },
      {
        name: 'Ultimate',
        price: {
          'classe1': '295€',
          'classe2': '295€',
          'classe3': '295€'
        },
        priceNote: 'Grande voiture +20€',
        description: 'Le niveau le plus abouti du nettoyage intérieur. Chaque élément travaillé avec minutie.',
        benefits: [
          'Nettoyage des plastiques, tableau de bord, panneaux de porte et grilles d\'aérations (vapeur)',
          'Nettoyage et entretien des sièges en cuir',
          'Nettoyage des sièges en tissus (injection / extraction)',
          'Nettoyage des moquettes (injection / extraction)',
          'Nettoyage des tapis (injection / extraction)',
          'Protection UV des plastiques',
          'Nettoyage des vitres',
          'Parfum d\'ambiance'
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
    heroImageAlt: 'Professionnel nettoyant l\'intérieur d\'une voiture avec injection-extraction'
  },

  // --- NETTOYAGE EXTÉRIEUR VOITURE ---
  {
    id: 2,
    slug: 'nettoyage-voiture-exterieur',
    title: 'Nettoyage Voiture Extérieur',
    heroTitle: 'Faites rayonner votre carrosserie',
    heroSubtitle: 'Brillance éclatante et protection longue durée',
    shortDescription: 'Du rafraîchissement express à la protection céramique 6 mois.',
    image: '/services/porsche-hero.webp',
    imageAlt: 'Voiture de luxe avec carrosserie brillante après nettoyage extérieur professionnel',
    category: 'automobile',
    description: 'Trois formules adaptées pour redonner éclat et protection à votre carrosserie, du simple lavage au soin premium.',
    beforeAfterImages: [
      {
        before: '/services/jante_bleu_avant.webp',
        after: '/services/jante_bleu_apres.webp',
        alt: 'Nettoyage jantes bleues'
      },
      {
        before: '/services/jante_gris_avant.webp',
        after: '/services/jante_gris_apres.webp',
        alt: 'Nettoyage jantes grises'
      }
    ],
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
          'Nettoyage de la carrosserie à la main',
          'Nettoyage des jantes',
          'Nettoyage des vitres',
          'Finition brillance',
          'Dressing des pneus'
        ]
      },
      {
        name: 'Confort',
        price: {
          'classe1': '95€',
          'classe2': '115€',
          'classe3': '135€'
        },
        description: 'Pour aller plus loin avec décontamination ferreuse et finition brillance.',
        benefits: [
          'Prélavage de la carrosserie',
          'Nettoyage de la carrosserie à la main',
          'Nettoyage des jantes, pneus',
          'Décontamination ferreuse',
          'Finition brillance',
          'Nettoyage des vitres',
          'Dressing des pneus'
        ]
      },
      {
        name: 'Ultimate',
        price: {
          'classe1': '249€',
          'classe2': '249€',
          'classe3': '249€'
        },
        priceNote: 'Grande voiture +20€',
        description: 'Le niveau le plus abouti. Chaque détail travaillé pour une brillance exceptionnelle.',
        benefits: [
          'Prélavage de la carrosserie en détails',
          'Nettoyage de la carrosserie à la main',
          'Nettoyage des jantes, pneus et passage de roues',
          'Décontamination chimique et dégoudronnage de la carrosserie et des jantes',
          'Décontamination mécanique de la carrosserie',
          'Protection à base de céramique',
          'Nettoyage des vitres',
          'Dressing des pneus'
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
    heroImageAlt: 'Professionnel appliquant une protection céramique sur carrosserie de voiture'
  },

  // --- NETTOYAGE COMPLET VOITURE ---
  {
    id: 3,
    slug: 'nettoyage-voiture-complet',
    title: 'Nettoyage Voiture Complet',
    heroTitle: 'La transformation totale de votre véhicule',
    heroSubtitle: 'Intérieur + Extérieur : retrouvez votre voiture comme neuve',
    shortDescription: 'Intérieur + Extérieur. Le soin intégral pour votre véhicule.',
    image: '/services/porsche-hero.webp',
    imageAlt: 'Véhicule entièrement nettoyé, intérieur impeccable et carrosserie brillante',
    category: 'automobile',
    description: 'Pourquoi choisir entre intérieur et extérieur ? Profitez d\'un service complet avec tarif avantageux.',
    beforeAfterImages: [
      {
        before: '/services/interieur_bm_avant.webp',
        after: '/services/interieur_bm_apres.webp',
        alt: 'Nettoyage intérieur BMW'
      },
      {
        before: '/services/jante_bleu_avant.webp',
        after: '/services/jante_bleu_apres.webp',
        alt: 'Nettoyage jantes'
      }
    ],
    formulas: [
      {
        name: 'Start',
        price: {
          'classe1': '100€',
          'classe2': '120€',
          'classe3': '140€'
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
          'classe1': '190€',
          'classe2': '230€',
          'classe3': '270€'
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
          'classe1': '490€',
          'classe2': '490€',
          'classe3': '490€'
        },
        priceNote: 'Grande voiture +40€',
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
    heroImageAlt: 'Service complet de nettoyage automobile : intérieur désinfecté et extérieur protégé'
  }
];

// Classes de véhicules pour formulaires
export const vehicleClasses = [
  { value: 'classe1', label: 'Classe 1 : Citadine / Compact (Audi A1, Fiat 500...)' },
  { value: 'classe2', label: 'Classe 2 : Berline / Break (Audi A3, VW Passat...)' },
  { value: 'classe3', label: 'Classe 3 : SUV / Prestige (BMW X5, Porsche Macan...)' }
];
