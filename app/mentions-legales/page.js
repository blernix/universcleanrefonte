'use client';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SkipLinks from '../components/SkipLinks';

export default function MentionsLegalesPage() {
  return (
    <>
      <SkipLinks />
      <Header />

      <main id="main-content" className="min-h-screen bg-white">
        <div className="container mx-auto px-6 py-20 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>

          <div className="prose prose-lg max-w-none">
            {/* Éditeur du site */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Éditeur du site</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Nom commercial :</strong> Univers Clean</p>
                <p className="mb-2"><strong>Raison sociale :</strong> PARSY ERIC</p>
                <p className="mb-2"><strong>Forme juridique :</strong> Entrepreneur individuel</p>
                <p className="mb-2"><strong>SIREN :</strong> 883 999 294</p>
                <p className="mb-2"><strong>SIRET :</strong> 883 999 294 00019</p>
                <p className="mb-2"><strong>RCS :</strong> 883 999 294 R.C.S. Melun</p>
                <p className="mb-2"><strong>Numéro de TVA intracommunautaire :</strong> FR46883999294</p>
                <p className="mb-2"><strong>Code APE :</strong> 81.21Z - Nettoyage courant des bâtiments</p>
              </div>
            </section>

            {/* Siège social */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Siège social</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2">4 Rue de la Ferme</p>
                <p className="mb-2">77690 La Genevraye</p>
                <p>France</p>
              </div>
            </section>

            {/* Directeur de publication */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Directeur de publication</h2>
              <p className="text-gray-700">PARSY Eric, Chef d'entreprise</p>
            </section>

            {/* Contact */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Téléphone :</strong> <a href="tel:+33782364263" className="text-blue-600 hover:text-blue-700">07 82 36 42 63</a></p>
                <p className="mb-2"><strong>Email :</strong> <a href="mailto:universclean77@gmail.com" className="text-blue-600 hover:text-blue-700">universclean77@gmail.com</a></p>
                <p><strong>Site web :</strong> <a href="https://univers-clean77.fr" className="text-blue-600 hover:text-blue-700">https://univers-clean77.fr</a></p>
              </div>
            </section>

            {/* Hébergeur */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hébergement</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p className="mb-2">340 S Lemon Ave #4133</p>
                <p className="mb-2">Walnut, CA 91789</p>
                <p>États-Unis</p>
              </div>
            </section>

            {/* Activité */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Activité</h2>
              <p className="text-gray-700 mb-4">
                Univers Clean est spécialisé dans le nettoyage professionnel :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Nettoyage de canapés</li>
                <li>Nettoyage de matelas</li>
                <li>Nettoyage de tapis</li>
                <li>Nettoyage de vitres</li>
                <li>Nettoyage de terrasses</li>
                <li>Nettoyage de véhicules automobiles (intérieur et extérieur)</li>
                <li>Nettoyage courant de bâtiments</li>
              </ul>
            </section>

            {/* Propriété intellectuelle */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Propriété intellectuelle</h2>
              <p className="text-gray-700 mb-4">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="text-gray-700">
                La reproduction de tout ou partie de ce site sur un support électronique ou autre est formellement interdite sauf autorisation expresse du directeur de la publication.
              </p>
            </section>

            {/* Crédits */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Crédits</h2>
              <p className="text-gray-700">
                Conception et développement : Site web créé avec Next.js
              </p>
            </section>

            {/* Données personnelles */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Protection des données personnelles</h2>
              <p className="text-gray-700">
                Pour en savoir plus sur la protection de vos données personnelles, consultez notre{' '}
                <a href="/politique-confidentialite" className="text-blue-600 hover:text-blue-700 underline">
                  Politique de confidentialité
                </a>.
              </p>
            </section>

            {/* Médiation */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Médiation de la consommation</h2>
              <p className="text-gray-700 mb-4">
                Conformément à l'article L.616-1 du Code de la consommation, le consommateur a le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige qui l'oppose à un professionnel.
              </p>
              <p className="text-gray-700">
                Pour toute réclamation, vous pouvez contacter le service client à l'adresse email : universclean77@gmail.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
