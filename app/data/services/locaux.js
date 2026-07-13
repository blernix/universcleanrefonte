// Services Locaux & Chantier - Univers Clean 77

export const locauxServices = [
  // --- NETTOYAGE LOCAUX / BUREAU ---
  {
    id: 6,
    slug: 'nettoyage-locaux-bureau',
    title: 'Nettoyage de Locaux & Bureaux',
    heroTitle: 'Des locaux impeccables au quotidien',
    heroSubtitle: 'Propreté, hygiène et productivité',
    shortDescription: 'Nettoyage professionnel de bureaux et locaux. Régulier ou ponctuel.',
    image: '/bureaux.png',
    imageAlt: 'Nettoyage professionnel de bureaux et locaux en Seine-et-Marne',
    category: 'locaux',
    description: 'Nettoyage professionnel de vos bureaux et locaux professionnels. Intervention régulière ou ponctuelle adaptée à vos besoins.',
    heroDescription: `Vous cherchez un professionnel pour l'entretien de vos locaux ou bureaux en Seine-et-Marne ?

Univers Clean intervient pour le nettoyage de vos espaces professionnels : bureaux, commerces, salles de réunion. Service ponctuel ou régulier, à votre convenance.`,
    formulasDescription: `Nos prestations de nettoyage de locaux sont entièrement personnalisables selon vos besoins. Fréquence, surface, type de prestation : nous nous adaptons.

Un service professionnel pour vos espaces de travail :
• Sols aspirés et lavés
• Dépoussiérage des surfaces et bureaux
• Nettoyage et désinfection des sanitaires
• Vidage des corbeilles

Des produits adaptés à chaque type de surface, pour un résultat impeccable sans risque pour vos collaborateurs.`,
    beforeAfterImages: [],
    formulas: [
      {
        name: 'Sur devis',
        price: {
          'regulier': 'Sur devis',
        },
        description: 'Nettoyage professionnel de vos locaux et bureaux, adapté à votre surface et fréquence.',
        benefits: [
          'Dépoussiérage complet des surfaces et bureaux',
          'Aspiration et lavage des sols',
          'Nettoyage et désinfection des sanitaires',
          'Vidage des corbeilles',
          'Entretien des vitres',
          'Désinfection des points de contact',
          'Produits professionnels adaptés',
          'Intervention régulière ou ponctuelle',
          'Devis personnalisé sous 24h'
        ]
      }
    ],
    process: [
      { step: 1, title: 'Diagnostic', desc: 'Évaluation de vos besoins et surface' },
      { step: 2, title: 'Devis', desc: 'Devis personnalisé selon fréquence et prestations' },
      { step: 3, title: 'Intervention', desc: 'Nettoyage complet avec matériel professionnel' },
      { step: 4, title: 'Suivi', desc: 'Contrôle qualité après chaque prestation' }
    ],
    faqs: [
      { q: 'Intervenez-vous sur quelle zone ?', a: 'Nous intervenons dans toute la Seine-et-Marne (77) et 30 km autour de La Genevraye.' },
      { q: 'Quelle fréquence proposez-vous ?', a: 'Quotidienne, hebdomadaire, bi-mensuelle ou ponctuelle. C\'est vous qui choisissez.' },
      { q: 'Fournissez-vous les produits ?', a: 'Oui, tout le matériel et les produits professionnels sont fournis.' }
    ],
    heroImage: '/bureaux.png',
    heroImageAlt: 'Nettoyage professionnel de bureaux en Seine-et-Marne'
  },

  // --- NETTOYAGE FIN DE CHANTIER ---
  {
    id: 7,
    slug: 'nettoyage-fin-chantier',
    title: 'Nettoyage de Fin de Chantier',
    heroTitle: 'Votre chantier livré propre',
    heroSubtitle: 'Le nettoyage final avant la remise des clés',
    shortDescription: 'Remise en état après travaux. Propreté irréprochable pour la réception.',
    image: '/chantier.png',
    imageAlt: 'Nettoyage professionnel de fin de chantier après travaux',
    category: 'chantier',
    description: 'Nettoyage complet de fin de chantier. Dépoussiérage intégral, nettoyage des sols, vitres et sanitaires avant remise des clés.',
    heroDescription: `Votre chantier est terminé ? Il ne reste plus qu'à le rendre propre pour la remise des clés.

Univers Clean s'occupe du nettoyage complet après travaux : poussières, résidus, traces de peinture. Nous intervenons sur tous types de chantiers en Seine-et-Marne.`,
    formulasDescription: `Un chantier qui se termine mérite un nettoyage à la hauteur du travail accompli. Nous nettoyons tout de fond en comble pour une remise des clés en toute sérénité.

Notre prestation complète inclut :
• Dépoussiérage intégral (murs, plafonds, menuiseries)
• Nettoyage des sols et plinthes
• Vitres et encadrements
• Sanitaires et cuisine
• Évacuation des résidus légers

Intervention rapide, résultat impeccable.`,
    beforeAfterImages: [],
    formulas: [
      {
        name: 'Sur devis',
        price: {
          'standard': 'Sur devis',
        },
        description: 'Nettoyage complet de fin de chantier, adapté à la surface et au type de travaux.',
        benefits: [
          'Dépoussiérage complet murs, plafonds et menuiseries',
          'Nettoyage des sols et plinthes',
          'Nettoyage des vitres et encadrements',
          'Nettoyage cuisine et sanitaires',
          'Dégraissage des surfaces',
          'Évacuation des résidus légers',
          'Inspection qualité finale',
          'Intervention rapide sous 48h',
          'Devis gratuit sous 24h'
        ]
      }
    ],
    process: [
      { step: 1, title: 'Visite', desc: 'Évaluation de la surface et des besoins' },
      { step: 2, title: 'Devis', desc: 'Devis personnalisé sous 24h' },
      { step: 3, title: 'Nettoyage', desc: 'Intervention complète par notre équipe' },
      { step: 4, title: 'Contrôle', desc: 'Vérification qualité avant remise des clés' }
    ],
    faqs: [
      { q: 'Quels types de chantiers nettoyez-vous ?', a: 'Tous types : maisons, appartements, bureaux, commerces après rénovation ou construction.' },
      { q: 'Sous quel délai intervenez-vous ?', a: 'Généralement sous 48h après votre appel, selon planning.' },
      { q: 'Évacuez-vous les gravats ?', a: 'Nous évacuons les résidus légers. Les gravats lourds ne sont pas pris en charge.' }
    ],
    heroImage: '/chantier.png',
    heroImageAlt: 'Nettoyage professionnel de fin de chantier'
  }
];