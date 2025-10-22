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
    formulasDescription: `La formule Start est pensée pour les voitures entretenues régulièrement et qui nécessitent simplement un rafraîchissement rapide. Dépoussiérage des plastiques, aspiration de l'habitacle, nettoyage des vitres et parfum d'ambiance : un soin express qui redonne immédiatement confort et propreté à votre intérieur.

Si votre véhicule mérite une attention plus poussée, la formule Confort reprend cette base et va plus loin. Les plastiques et les moquettes sont nettoyés plus en détail avec des outils adaptés, les tapis et surtapis passent à l'injection-extraction pour un rendu impeccable, tandis que les vitres et le parfum d'ambiance viennent parfaire l'ensemble. On gagne ici en profondeur et en qualité de nettoyage, pour un habitacle visiblement plus sain et agréable.

Enfin, la formule Ultimate offre le niveau le plus abouti du nettoyage intérieur. Chaque élément est travaillé avec minutie : plastiques et tableau de bord au pinceau et à la vapeur, sièges en tissu ou en cuir nettoyés et traités en profondeur (avec hydratation et nourrissage pour le cuir), moquettes et tapis passés à l'injection-extraction, et application d'une protection UV sur les plastiques pour leur redonner éclat et durabilité. Résultat : un intérieur comme neuf, propre, élégant et protégé dans le temps.

Plus vous montez en gamme, plus le nettoyage devient complet et précis : du simple rafraîchissement au soin premium qui redonne vie et valeur à votre habitacle.`,
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
          'Aspiration de l\'habitacle',
          'Dépoussiérage des plastiques',
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
          'Aspiration de l\'habitacle',
          'Dépoussiérage des plastiques',
          'Nettoyage des plastiques',
          'Nettoyage du tableau de bord',
          'Nettoyage des panneaux de porte',
          'Nettoyage des moquettes',
          'Nettoyage des tapis (injection-extraction)',
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
          'Aspiration de l\'habitacle',
          'Dépoussiérage des plastiques',
          'Nettoyage des plastiques',
          'Nettoyage du tableau de bord',
          'Nettoyage des panneaux de porte',
          'Nettoyage des grilles d\'aération (vapeur)',
          'Nettoyage des moquettes (injection-extraction)',
          'Nettoyage des tapis (injection-extraction)',
          'Nettoyage des sièges en cuir (avec entretien)',
          'Nettoyage des sièges en tissu (injection-extraction)',
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
    formulasDescription: `Tout commence avec la formule Start, idéale pour les voitures entretenues régulièrement. Un prélavage, un lavage à la main, les jantes nettoyées, des vitres claires et un dressing des pneus : l'essentiel pour retrouver rapidement un extérieur propre et agréable à regarder.

Pour ceux qui souhaitent aller plus loin, la formule Confort reprend cette base en ajoutant un nettoyage plus poussé des jantes et pneus avec dégraissage complet, ainsi qu'une décontamination ferreuse de la carrosserie. Ce traitement permet d'éliminer les particules invisibles incrustées et prépare la surface à recevoir une finition brillance, pour un éclat plus profond et durable.

Enfin, la formule Ultimate représente le niveau le plus abouti. Ici, chaque détail est travaillé : prélavage minutieux au pinceau autour des logos, phares et poignées, nettoyage en profondeur des jantes jusqu'à l'intérieur, passages de roues dégraissés, dégoudronnage et clay bar pour une décontamination maximale. Une protection céramique est ensuite appliquée sur toute la carrosserie, les vitres et les jantes, offrant une brillance exceptionnelle et une protection durable pouvant tenir jusqu'à six mois. Le tout est finalisé par des vitres impeccables et un dressing des pneus.

En résumé, plus vous montez en gamme, plus le nettoyage devient précis, profond et durable : du simple rafraîchissement au soin premium qui protège et sublime votre véhicule.`,
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
          'Lavage de la carrosserie à la main',
          'Nettoyage des jantes',
          'Nettoyage des pneus',
          'Finition brillance',
          'Nettoyage des vitres',
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
          'Lavage de la carrosserie à la main',
          'Nettoyage des jantes',
          'Nettoyage des pneus',
          'Décontamination ferreuse de la carrosserie',
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
          'Prélavage de la carrosserie',
          'Lavage de la carrosserie à la main',
          'Nettoyage des jantes',
          'Nettoyage des pneus',
          'Nettoyage des passages de roues',
          'Décontamination ferreuse de la carrosserie',
          'Décontamination chimique de la carrosserie',
          'Dégoudronnage de la carrosserie',
          'Dégoudronnage des jantes',
          'Décontamination mécanique (clay bar)',
          'Protection céramique de la carrosserie',
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
    image: '/services/voiture-complet-hero.webp',
    imageAlt: 'Véhicule entièrement nettoyé, intérieur impeccable et carrosserie brillante',
    category: 'automobile',
    description: 'Pourquoi choisir entre intérieur et extérieur ? Profitez d\'un service complet avec tarif avantageux.',
    formulasDescription: `Pourquoi choisir entre l'intérieur et l'extérieur, quand vous pouvez offrir à votre voiture un nettoyage complet ? Avec nos trois formules Start, Confort et Ultimate, profitez d'un service sur mesure qui redonne vie à votre véhicule, dedans comme dehors.

En choisissant le pack complet, vous bénéficiez non seulement d'un résultat impeccable, mais aussi d'un tarif avantageux par rapport à la prise séparée des prestations. Du simple rafraîchissement au soin haut de gamme avec protection durable, chaque formule est pensée pour répondre à vos besoins et sublimer votre véhicule sous tous les angles.

Offrez-lui le meilleur : un nettoyage complet signé Univers Clean.`,
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
          '🚗 INTÉRIEUR :',
          'Aspiration de l\'habitacle',
          'Dépoussiérage des plastiques',
          'Nettoyage des plastiques',
          'Nettoyage des vitres',
          'Parfum d\'ambiance',
          '✨ EXTÉRIEUR :',
          'Prélavage de la carrosserie',
          'Lavage de la carrosserie à la main',
          'Nettoyage des jantes',
          'Nettoyage des pneus',
          'Finition brillance',
          'Dressing des pneus',
          '💰 Économie vs prestations séparées'
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
          '🚗 INTÉRIEUR :',
          'Aspiration de l\'habitacle',
          'Dépoussiérage des plastiques',
          'Nettoyage des plastiques',
          'Nettoyage du tableau de bord',
          'Nettoyage des panneaux de porte',
          'Nettoyage des moquettes',
          'Nettoyage des tapis (injection-extraction)',
          'Nettoyage des vitres',
          'Parfum d\'ambiance',
          '✨ EXTÉRIEUR :',
          'Prélavage de la carrosserie',
          'Lavage de la carrosserie à la main',
          'Nettoyage des jantes',
          'Nettoyage des pneus',
          'Décontamination ferreuse de la carrosserie',
          'Finition brillance',
          'Dressing des pneus',
          '💰 Économie vs prestations séparées'
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
          '🚗 INTÉRIEUR :',
          'Aspiration de l\'habitacle',
          'Dépoussiérage des plastiques',
          'Nettoyage des plastiques',
          'Nettoyage du tableau de bord',
          'Nettoyage des panneaux de porte',
          'Nettoyage des grilles d\'aération (vapeur)',
          'Nettoyage des moquettes (injection-extraction)',
          'Nettoyage des tapis (injection-extraction)',
          'Nettoyage des sièges en cuir (avec entretien)',
          'Nettoyage des sièges en tissu (injection-extraction)',
          'Protection UV des plastiques',
          'Nettoyage des vitres',
          'Parfum d\'ambiance',
          '✨ EXTÉRIEUR :',
          'Prélavage de la carrosserie',
          'Lavage de la carrosserie à la main',
          'Nettoyage des jantes',
          'Nettoyage des pneus',
          'Nettoyage des passages de roues',
          'Décontamination ferreuse de la carrosserie',
          'Décontamination chimique de la carrosserie',
          'Dégoudronnage de la carrosserie',
          'Dégoudronnage des jantes',
          'Décontamination mécanique (clay bar)',
          'Protection céramique de la carrosserie',
          'Finition brillance',
          'Dressing des pneus',
          '⭐ Protection totale intérieur + extérieur',
          '💎 Idéal pour remise en état, revente ou collection'
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
