// Services Mobilier - Univers Clean 77

export const mobilierServices = [
  // --- NETTOYAGE CANAPÉ ---
  {
    id: 4,
    slug: 'nettoyage-canape',
    title: 'Nettoyage de canapé',
    heroTitle: 'Nettoyage de canapé',
    heroSubtitle: 'à domicile en Seine-et-Marne (77)',
    shortDescription: 'Nettoyage professionnel de canapé à domicile. Injection-extraction, détachage, désodorisation.',
    image: '/canape.png',
    imageAlt: 'Canapé en tissu propre et rafraîchi après nettoyage professionnel par injection-extraction',
    category: 'mobilier',
    description: 'Nettoyage de canapé à domicile en Seine-et-Marne. Tissu, cuir, microfibre : on nettoie votre canapé en profondeur avec un injecteur-extracteur professionnel. Détachage, désodorisation, séchage rapide.',
    heroDescription: `Nettoyage de canapé à domicile dans tout le 77. Taches, mauvaises odeurs, poils d'animaux, urine de chat ou de chien ? Votre canapé mérite un nettoyage professionnel. On intervient chez vous avec un injecteur-extracteur pour un résultat impeccable en quelques heures.`,
    formulasDescription: `Nous nettoyons votre canapé directement chez vous avec une machine à injection-extraction professionnelle. Le principe : on injecte une solution nettoyante en profondeur dans les fibres du tissu, puis on aspire immédiatement l'eau et les saletés. Résultat : votre canapé est propre, désodorisé et sèche en 6 à 12 heures.

On s'occupe de tout type de canapé :
• Canapé en tissu (coton, lin, velours, microfibre)
• Canapé en cuir (traitement spécifique avec hydratation)
• Canapé d'angle, convertible, panoramique
• Fauteuil, chaise, pouf et tête de lit

Ce qui est inclus dans le nettoyage :
• Aspiration intégrale pour retirer poussières, poils et allergènes
• Pré-traitement et détachage ciblé (taches de vin, café, urine, graisse...)
• Injection-extraction avec produit textile professionnel
• Ravivage des couleurs
• Désodorisation pour éliminer les odeurs tenaces (animaux, tabac, humidité)
• Séchage optimisé en 6-12h selon aération

Tous nos produits sont certifiés sans danger pour les enfants et les animaux.`,
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
        name: 'Nettoyage',
        price: {
          'fauteuil': '50€',
          '2-3places': '80€',
          '4-5places': '100€',
          'U': '120€'
        },
        description: 'Nettoyage complet avec injection-extraction professionnelle, détachage et désodorisation.',
        benefits: [
          'Aspiration intégrale en profondeur',
          'Pré-traitement et détachage ciblé',
          'Injection-extraction avec produits textiles professionnels',
          'Ravivage des couleurs',
          'Élimination des acariens et allergènes',
          'Désodorisation complète',
          'Séchage rapide en 6-12h',
          'Produits sans danger pour enfants et animaux'
        ]
      }
    ],
    process: [
      { step: 1, title: 'Aspiration', desc: 'Aspiration des poussières et poils en surface et en profondeur' },
      { step: 2, title: 'Détachage', desc: 'Pré-traitement des taches visibles avec produit adapté' },
      { step: 3, title: 'Injection-extraction', desc: 'Injection de solution nettoyante et aspiration immédiate des saletés' },
      { step: 4, title: 'Séchage', desc: 'Séchage naturel optimisé, canapé utilisable en 6 à 12h' }
    ],
    faqs: [
      { q: 'Combien de temps avant de pouvoir utiliser mon canapé ?', a: 'Comptez 6 à 12h de séchage selon le type de tissu et l\'aération de la pièce. Vous pouvez accélérer avec un ventilateur.' },
      { q: 'Nettoyez-vous aussi le cuir ?', a: 'Oui, nous avons un traitement spécifique pour canapé en cuir avec nettoyage doux et hydratation du cuir.' },
      { q: 'Les produits sont-ils dangereux pour mes enfants ou animaux ?', a: 'Non, nos produits textiles sont certifiés sans danger. Pas de javel ni solvants agressifs.' },
      { q: 'Peut-on enlever toutes les taches ?', a: 'La plupart des taches disparaissent : vin, café, urine, graisse, soda. Certaines taches très anciennes peuvent laisser une trace légère, mais le résultat est spectaculaire dans 95% des cas.' },
      { q: 'Quelle est votre zone d\'intervention ?', a: 'Toute la Seine-et-Marne (77) et 30 km autour de La Genevraye. Déplacement offert dans ce rayon.' }
    ],
    heroImage: '/canape.png',
    heroImageAlt: 'Technicien professionnel nettoyant un canapé à domicile avec matériel d\'injection-extraction'
  },

  // --- NETTOYAGE MATELAS ---
  {
    id: 5,
    slug: 'nettoyage-matelas',
    title: 'Nettoyage de matelas',
    heroTitle: 'Nettoyage de matelas',
    heroSubtitle: 'à domicile en Seine-et-Marne (77)',
    shortDescription: 'Nettoyage professionnel de matelas à domicile. Traitement anti-acariens, détachage, désinfection.',
    image: '/matelas.png',
    imageAlt: 'Matelas blanc désinfecté et hygiénique après nettoyage professionnel en profondeur',
    category: 'mobilier',
    description: 'Nettoyage de matelas à domicile en Seine-et-Marne. Traitement professionnel anti-acariens et anti-bactérien. Détachage des taches organiques (urine, sueur, sang). Désinfection complète pour un sommeil sain.',
    heroDescription: `Nettoyage de matelas à domicile en Seine-et-Marne (77). Taches de pipi, de sueur ou de sang ? Allergies aux acariens ? Odeurs ? On nettoie et désinfecte votre matelas chez vous avec un traitement professionnel anti-acariens et antibactérien. Résultat visible immédiatement, matelas propre et sain.`,
    formulasDescription: `Nous nettoyons votre matelas directement chez vous avec une machine à injection-extraction professionnelle et un traitement anti-acariens. Le nettoyage élimine les taches, les acariens, les allergènes et les mauvaises odeurs. Après notre passage, vous dormez sur un matelas propre, frais et désinfecté.

On nettoie tous types de matelas :
• Matelas 1 place, 2 places, king size
• Matelas en mousse, latex, ressorts ensachés
• Matelas à mémoire de forme
• Surmatelas et protège-matelas
• Matelas bébé et enfant
• Literie médicalisée

Ce qui est inclus dans le nettoyage :
• Aspiration profonde pour retirer poussières, peaux mortes et acariens
• Détachage ciblé des taches organiques (urine, pipi enfant, sueur, sang, vomi)
• Injection-extraction avec produit désinfectant textile professionnel
• Traitement anti-acariens pour éliminer les allergènes
• Désinfection antibactérienne complète
• Désodorisation neutralisante (odeurs de transpiration, humidité, urine)
• Séchage optimisé en 6-12h selon aération

À quelle fréquence nettoyer son matelas ? Les experts recommandent un nettoyage professionnel tous les 6 à 12 mois pour maintenir une hygiène optimale. Un matelas non nettoyé accumule des millions d'acariens, peaux mortes et bactéries qui peuvent provoquer allergies et problèmes respiratoires.`,
    beforeAfterImages: [
      {
        before: '/services/matelas_avant.webp',
        after: '/services/matelas_apres.webp',
        alt: 'Nettoyage matelas'
      }
    ],
    formulas: [
      {
        name: 'Nettoyage',
        price: {
           '1place': '60€',
           '2places-140': '80€',
           '2places-160': '90€',
           '2places-180': '100€'
        },
        description: 'Nettoyage complet avec injection-extraction, traitement anti-acariens et désinfection antibactérienne.',
        benefits: [
          'Aspiration profonde (poussières, peaux mortes, acariens)',
          'Détachage ciblé des taches organiques',
          'Injection-extraction avec produit désinfectant professionnel',
          'Traitement anti-acariens',
          'Désinfection antibactérienne complète',
          'Désodorisation neutralisante',
          'Séchage rapide en 6-12h',
          'Produits sans danger, enfants et animaux'
        ]
      }
    ],
    process: [
      { step: 1, title: 'Aspiration', desc: 'Élimination des poussières, peaux mortes et acariens en profondeur' },
      { step: 2, title: 'Détachage', desc: 'Traitement ciblé des taches organiques (pipi, sueur, sang, vomi)' },
      { step: 3, title: 'Injection-extraction', desc: 'Nettoyage en profondeur avec produit désinfectant' },
      { step: 4, title: 'Désinfection', desc: 'Traitement anti-acariens et antibactérien pour un matelas sain' }
    ],
    faqs: [
      { q: 'Combien de temps avant de pouvoir dormir sur le matelas ?', a: 'Le matelas reste légèrement humide. Prévoyez 6 à 12h de séchage. Aérez bien la pièce pour accélérer le processus.' },
      { q: 'À quelle fréquence faire nettoyer son matelas ?', a: 'Tous les 6 à 12 mois pour une hygiène optimale. Un matelas non entretenu accumule acariens, peaux mortes et bactéries.' },
      { q: 'Est-ce efficace contre les acariens et les allergies ?', a: 'Oui, le traitement élimine les acariens et leurs déjections, principales causes d\'allergies respiratoires et cutanées. Résultat visible et durable.' },
      { q: 'Est-ce que ça enlève les taches de pipi ?', a: 'Oui, les taches d\'urine (enfant, pipi au lit, animal de compagnie) font partie des taches que nous traitons le plus souvent. Nous utilisons un détachant enzymatique spécifique.' },
      { q: 'Nettoyez-vous aussi les punaises de lit ?', a: 'Non, les punaises de lit nécessitent un traitement insecticide spécialisé qui ne fait pas partie de nos prestations.' },
      { q: 'Quelle est votre zone d\'intervention ?', a: 'Toute la Seine-et-Marne (77) et 30 km autour de La Genevraye. Déplacement offert dans ce rayon.' }
    ],
    heroImage: '/matelas.png',
    heroImageAlt: 'Traitement professionnel anti-acariens et désinfection de matelas à domicile'
  }
];

// Tailles de canapé pour formulaire
export const canapeTypes = [
  { value: 'fauteuil', label: 'Fauteuil' },
  { value: '2-3places', label: 'Canapé 2/3 places' },
  { value: '4-5places', label: 'Canapé 4/5 places' },
  { value: 'U', label: 'Forme de U' },
  { value: 'autre', label: 'Autre (à préciser)' }
];

// Tailles de matelas pour formulaire
export const matelasSizes = [
  { value: '1place', label: 'Matelas 1 place' },
  { value: '2places-140', label: 'Matelas 2 places (140)' },
  { value: '2places-160', label: 'Matelas 2 places (160)' },
  { value: '2places-180', label: 'Matelas 2 places (180)' }
];
