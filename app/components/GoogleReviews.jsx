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

export default function GoogleReviews() {
  const note = source.note.toFixed(1).replace('.', ',');
  const sousTitre = `Note ${note}/5 sur ${source.total} avis Google`;

  return (
    <section id="avis" aria-labelledby="avis-title" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 id="avis-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Avis Google
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center">
            {sousTitre}
          </p>
        </div>

        {avisPublies.length > 0 && (
          <ul className="flex flex-wrap justify-center gap-8">
            {avisPublies.map((avis) => (
              <li
                key={`${avis.auteur}-${avis.visite}`}
                className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
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
                <blockquote className="text-gray-700 text-lg italic text-center mb-6">
                  {avis.texte}
                </blockquote>
                <div className="text-center">
                  <p className="font-bold text-gray-900">{avis.auteur}</p>
                  <p className="text-sm text-gray-600">{`Avis Google · ${formatVisite(avis.visite)}`}</p>
                </div>
              </li>
            ))}
          </ul>
        )}

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
      </div>
    </section>
  );
}
