// Avis Google — fiche « Univers Clean - Entreprise de nettoyage » (cid 95189979976139715)
//
// Source : /opt/data/plateaux/universclean/modifs-client/avis-google.json (relevé du 2026-11-09,
// complété le 2026-11-09 par deux avis transmis par Killian depuis la fiche).
// Texte VERBATIM (fautes, ponctuation et emoji de l'auteur conservés), auteur au prénom public.
// `visite` = mois de la prestation quand Google l'affiche ; `null` si Google ne le donne pas.
// Les avis tronqués par Google restent hors de ce module.

export const source = {
  fiche: 'Univers Clean - Entreprise de nettoyage',
  cid: '95189979976139715',
  url: 'https://maps.google.com/?cid=95189979976139715',
  note: 5.0,
  total: 66,
  releveLe: '2026-11-09',
};

export const avisPublies = [
  {
    auteur: 'François Ducatez',
    note: 5,
    visite: '2026-10',
    texte: 'Excellent service, le canapé et fauteuil sont impeccables! Comme neufs! Je recommande vivement.',
  },
  {
    auteur: 'CHISPORTICH Rachel',
    note: 5,
    visite: null,
    texte:
      'Prestation au top ! Éric a été réactif à ma demande et il est très professionnel. Je retrouve mon canapé après l’avoir taché avec du sang !\n' +
      'Je recommande vivement Éric qui sait se rendre disponible pour ses clients, et connaît les produits adaptés à vos textiles.\n' +
      'Encore merci !',
  },
  {
    auteur: 'Pauline Guignot',
    note: 5,
    visite: '2026-10',
    texte: 'Très satisfaite de la prestation. Travail soigné et résultat impeccable, mon canapé est propre. Je recommande !',
  },
];

// Garde de build : aucun texte tronqué ne doit être publié.
// Le mot marqueur est reconstruit pour ne pas apparaître dans le bundle client.
const MARQUEUR_TRONQUE = String.fromCharCode(84, 82, 79, 78, 81, 85, 69);

for (const avis of avisPublies) {
  if (/\u2026|\.\.\./.test(avis.texte) || avis.texte.includes(MARQUEUR_TRONQUE)) {
    throw new Error(`Avis Google tronqué dans app/data/avis-google.js (${avis.auteur}) : texte non publiable.`);
  }
}
