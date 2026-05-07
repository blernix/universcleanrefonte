// Villes d'intervention - Seine-et-Marne (77)
// Chaque ville a un contenu unique pour le SEO local

export const villes = [
  {
    slug: 'fontainebleau',
    nom: 'Fontainebleau',
    codePostal: '77300',
    description: "Fontainebleau, ville impériale au cœur de la Seine-et-Marne, est mondialement connue pour son château et sa forêt domaniale de 25 000 hectares. Univers Clean 77 intervient à domicile chez les Bellifontains pour le nettoyage de leurs canapés et matelas, avec un service de qualité adapté aux résidences principales comme secondaires.",
  },
  {
    slug: 'samoreau',
    nom: 'Samoreau',
    codePostal: '77210',
    description: "Samoreau, charmante commune résidentielle des bords de Seine, offre un cadre de vie paisible aux portes de Fontainebleau. Nos équipes se déplacent pour redonner éclat et fraîcheur à vos canapés et matelas, dans ce village apprécié pour sa qualité de vie.",
  },
  {
    slug: 'bois-le-roi',
    nom: 'Bois-le-Roi',
    codePostal: '77590',
    description: "Bois-le-Roi, station verte de vacances nichée entre la forêt de Fontainebleau et la Seine, est une commune dynamique du sud Seine-et-Marne. Univers Clean 77 propose ses services de nettoyage canapé et matelas aux Bacots soucieux d'un intérieur sain.",
  },
  {
    slug: 'barbizon',
    nom: 'Barbizon',
    codePostal: '77630',
    description: "Barbizon, mythique village des peintres pré-impressionnistes en lisière de forêt, attire les amoureux d'art et de nature. Nous nettoyons vos canapés et matelas avec le même souci du détail que les artistes qui ont fait la renommée de ce lieu d'exception.",
  },
  {
    slug: 'achere-la-foret',
    nom: 'Achères-la-Forêt',
    codePostal: '77760',
    description: "Achères-la-Forêt, paisible commune du Gâtinais entourée de bois et de clairières, bénéficie d'un environnement préservé. Univers Clean 77 intervient chez vous pour l'entretien de vos canapés et matelas, dans le respect de ce cadre naturel.",
  },
  {
    slug: 'villiers-en-biere',
    nom: 'Villiers-en-Bière',
    codePostal: '77190',
    description: "Villiers-en-Bière, commune dynamique proche de Melun, allie cadre résidentiel et vitalité économique. Nos prestations de nettoyage mobilier sont disponibles pour les habitants, avec la même exigence de qualité qui fait notre réputation.",
  },
  {
    slug: 'bourron-marlotte',
    nom: 'Bourron-Marlotte',
    codePostal: '77780',
    description: "Bourron-Marlotte, village de caractère au riche passé artistique, a séduit écrivains et peintres par son authenticité. Nous intervenons sur vos canapés et matelas avec des méthodes professionnelles, pour un intérieur à la hauteur du cachet de votre commune.",
  },
  {
    slug: 'moret-loing-et-orvanne',
    nom: 'Moret-Loing-et-Orvanne',
    codePostal: '77250',
    description: "Moret-Loing-et-Orvanne, cité médiévale chère à Alfred Sisley, est l'une des plus belles portes de la Seine-et-Marne. Univers Clean 77 redonne vie à vos canapés et matelas dans cette ville au patrimoine exceptionnel, avec un service discret et efficace.",
  },
  {
    slug: 'avon',
    nom: 'Avon',
    codePostal: '77210',
    description: "Avon, limitrophe de Fontainebleau, est une commune résidentielle appréciée pour son calme et sa proximité avec la forêt. Nos interventions de nettoyage canapé et matelas à Avon sont réalisées dans les meilleurs délais.",
  },
  {
    slug: 'noisy-sur-ecole',
    nom: 'Noisy-sur-École',
    codePostal: '77123',
    description: "Noisy-sur-École, village du Parc Naturel Régional du Gâtinais, offre un cadre de vie exceptionnel aux portes de la forêt de Fontainebleau. Univers Clean 77 intervient pour le nettoyage de vos canapés et matelas dans ce havre de nature.",
  },
  {
    slug: 'nemours',
    nom: 'Nemours',
    codePostal: '77140',
    description: "Nemours, ville historique au riche patrimoine médiéval avec son château-musée du XVe siècle, est un centre économique du sud Seine-et-Marne. Nous proposons nos services de nettoyage mobilier aux Nemouriens, avec professionnalisme et réactivité.",
  },
  {
    slug: 'montigny-sur-loing',
    nom: 'Montigny-sur-Loing',
    codePostal: '77690',
    description: "Montigny-sur-Loing, charmant village bucolique des bords du Loing, a inspiré de nombreux artistes par son cadre paisible. Nos équipes nettoient vos canapés et matelas dans cette commune au charme authentique.",
  },
  {
    slug: 'hericy',
    nom: 'Héricy',
    codePostal: '77850',
    description: "Héricy, village fleuri en bord de Seine, offre un cadre de vie privilégié entre fleuve et forêt. Univers Clean 77 assure le nettoyage de vos canapés et matelas à Héricy avec la même rigueur que pour tous nos clients.",
  },
  {
    slug: 'vulaines-sur-seine',
    nom: 'Vulaines-sur-Seine',
    codePostal: '77870',
    description: "Vulaines-sur-Seine, commune résidentielle des bords de Seine, abrite le musée départemental Stéphane Mallarmé. Nous intervenons pour le nettoyage de vos canapés et matelas dans cette ville au riche héritage littéraire.",
  },
  {
    slug: 'veneu-les-sablons',
    nom: 'Veneux-les-Sablons',
    codePostal: '77250',
    description: "Veneux-les-Sablons, commune historique des bords du Loing aujourd'hui intégrée à Moret-Loing-et-Orvanne, conserve son identité propre. Univers Clean 77 propose ses services de nettoyage mobilier aux habitants de ce secteur.",
  }
];

export function getVilleBySlug(slug) {
  return villes.find(v => v.slug === slug);
}
