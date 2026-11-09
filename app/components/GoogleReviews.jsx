import { Star } from 'lucide-react';
import { avisPublies, source } from '@/app/data/avis-google';

const MOIS = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
];

function formatVisite(visite) {
  if (!visite) return null;
  const [annee, mois] = String(visite).split('-');
  const label = MOIS[Number(mois) - 1];
  return label && annee ? `${label} ${annee}` : visite;
}

function Carte({ avis, ariaHidden = false }) {
  return (
    <li
      aria-hidden={ariaHidden || undefined}
      className="w-[330px] sm:w-[380px] shrink-0 bg-white rounded-2xl shadow-sm border border-gray-100 p-7 flex flex-col"
    >
      <div
        role="img"
        aria-label={`Note de ${avis.note} étoiles sur 5`}
        className="flex gap-1 mb-4 justify-center"
      >
        {Array.from({ length: avis.note }).map((_, i) => (
          <Star key={i} aria-hidden="true" className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <blockquote className="text-gray-700 text-base italic text-center mb-6 whitespace-pre-line flex-grow">
        {avis.texte}
      </blockquote>
      <div className="text-center">
        <p className="font-bold text-gray-900">{avis.auteur}</p>
        <p className="text-sm text-gray-600">
          {avis.visite ? `Avis Google · ${formatVisite(avis.visite)}` : 'Avis Google'}
        </p>
      </div>
    </li>
  );
}

export default function GoogleReviews() {
  const note = source.note.toFixed(1).replace('.', ',');
  const sousTitre = `Note ${note}/5 sur ${source.total} avis Google`;

  if (!avisPublies.length) return null;

  return (
    <section id="avis" aria-labelledby="avis-title" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 id="avis-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Avis Google
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center">
            {sousTitre}
          </p>
        </div>
      </div>

      {/* Bandeau horizontal à défilement infini : liste dupliquée pour une boucle sans couture */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        <ul className="flex w-max gap-6 px-6 animate-marquee hover:[animation-play-state:paused]">
          {avisPublies.map((avis) => (
            <Carte key={`${avis.auteur}-${avis.visite}`} avis={avis} />
          ))}
          {avisPublies.map((avis) => (
            <Carte key={`copie-${avis.auteur}-${avis.visite}`} avis={avis} ariaHidden />
          ))}
        </ul>
      </div>

      <div className="text-center mt-10">
        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
        >
          Voir la fiche Google
        </a>
      </div>
    </section>
  );
}
