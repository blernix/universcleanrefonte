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
    formulasDescription: `Notre prestation de nettoyage intérieur redonne vie à l'habitacle de votre véhicule. Nous effectuons un nettoyage complet des plastiques, du tableau de bord et des panneaux de porte, suivi d'un nettoyage en profondeur des moquettes et des tapis. Les vitres sont nettoyées pour une visibilité parfaite, et nous terminons par un parfum d'ambiance pour une sensation de fraîcheur immédiate.

Pour un résultat encore plus abouti, nous proposons également le nettoyage des sièges en profondeur* (en supplément), qu'ils soient en tissu ou en cuir. Résultat : un intérieur propre, sain et agréable, qui retrouve tout son confort.`,
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
        name: 'Nettoyage Intérieur',
        price: {
          'classe1': '110€',
          'classe2': '130€',
          'classe3': '150€'
        },
        description: 'Nettoyage complet de l\'intérieur de votre véhicule pour un habitacle propre et sain.',
        benefits: [
          'Nettoyage complet des plastiques, tableau de bord, panneaux de porte',
          'Nettoyage complet des moquettes',
          'Nettoyage des tapis',
          'Nettoyage des vitres',
          'Parfum d\'ambiance',
          '(Nettoyage des sièges en profondeur*)'
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
    image: '/services/voiture_exterieur.webp',
    imageAlt: 'Voiture de luxe avec carrosserie brillante après nettoyage extérieur professionnel',
    category: 'automobile',
    description: 'Trois formules adaptées pour redonner éclat et protection à votre carrosserie, du simple lavage au soin premium.',
    formulasDescription: `Notre prestation de nettoyage extérieur redonne éclat et brillance à votre carrosserie. Nous commençons par un prélavage soigné, suivi d'un nettoyage à la main de toute la carrosserie. Les jantes et pneus sont nettoyés en profondeur, puis nous appliquons une finition brillance pour sublimer la peinture. Les vitres sont nettoyées pour une transparence parfaite, et nous terminons par un dressing des pneus pour une finition impeccable.

Résultat : une carrosserie éclatante, des jantes comme neuves et un extérieur qui retrouve toute sa splendeur.`,
    beforeAfterImages: [
      {
        before: '/services/exterieur1_avant.webp',
        after: '/services/exterieur1_apres.webp',
        alt: 'Nettoyage jantes bleues'
      },
      {
        before: '/services/exterieur2_avant.webp',
        after: '/services/exterieur2_apres.webp',
        alt: 'Nettoyage jantes grises'
      }
    ],
    formulas: [
      {
        name: 'Nettoyage Extérieur',
        price: {
          'classe1': '100€',
          'classe2': '120€',
          'classe3': '140€'
        },
        description: 'Nettoyage complet de l\'extérieur de votre véhicule pour une carrosserie éclatante.',
        benefits: [
          'Prélavage de la carrosserie',
          'Nettoyage de la carrosserie à la main',
          'Nettoyage des jantes, pneus',
          'Finition brillance',
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
    heroImage: '/services/voiture_exterieur.webp',
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
    image: '/services/voiture-complet-hero.webp',
    imageAlt: 'Véhicule entièrement nettoyé, intérieur impeccable et carrosserie brillante',
    category: 'automobile',
    description: 'Pourquoi choisir entre intérieur et extérieur ? Profitez d\'un service complet avec tarif avantageux.',
    formulasDescription: `Pourquoi choisir entre l'intérieur et l'extérieur, quand vous pouvez offrir à votre voiture un nettoyage complet ? Notre prestation complète combine le meilleur des deux prestations pour un résultat impeccable, dedans comme dehors.

En choisissant le pack complet, vous bénéficiez d'un tarif avantageux par rapport à la prise séparée des prestations. Un seul rendez-vous pour une transformation totale de votre véhicule : carrosserie éclatante, habitacle propre et sain, le tout avec une économie garantie.

Offrez-lui le meilleur : un nettoyage complet signé Univers Clean.`,
    beforeAfterImages: [
      {
        before: '/services/interieur_bm_avant.webp',
        after: '/services/interieur_bm_apres.webp',
        alt: 'Nettoyage intérieur BMW'
      },
      {
        before: '/services/exterieur1_avant.webp',
        after: '/services/exterieur1_apres.webp',
        alt: 'Nettoyage jantes'
      }
    ],
    formulas: [
      {
        name: 'Nettoyage Complet',
        price: {
          'classe1': '190€',
          'classe2': '225€',
          'classe3': '260€'
        },
        description: 'Nettoyage complet intérieur + extérieur. Économisez en choisissant le pack complet.',
        benefits: [
          '✨ EXTÉRIEUR :',
          'Prélavage de la carrosserie',
          'Nettoyage de la carrosserie à la main',
          'Nettoyage des jantes, pneus',
          'Finition brillance',
          'Nettoyage des vitres',
          'Dressing des pneus',
          '',
          '🚗 INTÉRIEUR :',
          'Nettoyage complet des plastiques, tableau de bord, panneaux de porte',
          'Nettoyage complet des moquettes',
          'Nettoyage des tapis',
          'Nettoyage des vitres',
          'Parfum d\'ambiance',
          '(Nettoyage des sièges en profondeur*)'
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
    heroImage: '/services/voiture-complet-hero.webp',
    heroImageAlt: 'Service complet de nettoyage automobile : intérieur désinfecté et extérieur protégé'
  }
];

// Classes de véhicules pour formulaires
export const vehicleClasses = [
  { value: 'classe1', label: 'Classe 1 : Citadine / Compact (Audi A1, Fiat 500...)' },
  { value: 'classe2', label: 'Classe 2 : Berline / Break (Audi A3, VW Passat...)' },
  { value: 'classe3', label: 'Classe 3 : SUV / Prestige (BMW X5, Porsche Macan...)' }
];
