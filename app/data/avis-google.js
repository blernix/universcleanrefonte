// Avis Google — fiche « Univers Clean - Entreprise de nettoyage » (cid 95189979976139715)
//
// Source : /opt/data/plateaux/universclean/modifs-client/avis-google.json (relevé du 2026-11-09).
// Seules les entrées marquées `affiche: true` ET `complet: true` sont reprises ici, texte
// verbatim, sans le champ `contexte`. Les avis tronqués par Google restent hors du module.

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
