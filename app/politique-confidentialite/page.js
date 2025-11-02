'use client';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SkipLinks from '../components/SkipLinks';

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <SkipLinks />
      <Header />

      <main id="main-content" className="min-h-screen bg-white pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>

          <p className="text-gray-600 mb-8 text-sm">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                La présente Politique de Confidentialité décrit comment Univers Clean (PARSY ERIC) collecte, utilise et protège vos données personnelles lorsque vous utilisez notre site web <a href="https://univers-clean77.fr" className="text-blue-600 hover:text-blue-700">univers-clean77.fr</a>.
              </p>
              <p className="text-gray-700">
                Nous nous engageons à protéger votre vie privée et à respecter la réglementation en vigueur, notamment le Règlement Général sur la Protection des Données (RGPD).
              </p>
            </section>

            {/* Responsable du traitement */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Responsable du traitement des données</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Raison sociale :</strong> PARSY ERIC (Univers Clean)</p>
                <p className="mb-2"><strong>Adresse :</strong> 4 Rue de la Ferme, 77690 La Genevraye</p>
                <p className="mb-2"><strong>Email :</strong> <a href="mailto:universclean77@gmail.com" className="text-blue-600 hover:text-blue-700">universclean77@gmail.com</a></p>
                <p><strong>Téléphone :</strong> <a href="tel:+33782364263" className="text-blue-600 hover:text-blue-700">07 82 36 42 63</a></p>
              </div>
            </section>

            {/* Données collectées */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Données personnelles collectées</h2>
              <p className="text-gray-700 mb-4">
                Nous collectons les données personnelles suivantes :
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Via le formulaire de contact / devis</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale (pour l'intervention)</li>
                <li>Informations relatives à votre demande de service</li>
                <li>Date et heure souhaitées pour l'intervention</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Données de navigation</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Adresse IP</li>
                <li>Type et version du navigateur</li>
                <li>Pages consultées</li>
                <li>Date et heure de la visite</li>
                <li>Données collectées via Google Tag Manager (analytics)</li>
              </ul>
            </section>

            {/* Finalités */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Finalités du traitement</h2>
              <p className="text-gray-700 mb-4">
                Vos données personnelles sont collectées et traitées pour les finalités suivantes :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Traiter vos demandes de devis et de contact</li>
                <li>Gérer la relation client et répondre à vos questions</li>
                <li>Planifier et réaliser les interventions de nettoyage</li>
                <li>Envoyer des communications relatives à nos services (avec votre consentement)</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Respecter nos obligations légales et réglementaires</li>
                <li>Analyser l'audience et le trafic du site web</li>
              </ul>
            </section>

            {/* Base légale */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Base légale du traitement</h2>
              <p className="text-gray-700 mb-4">
                Le traitement de vos données personnelles repose sur les bases légales suivantes :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Exécution d'un contrat :</strong> traitement de votre demande de devis et réalisation de la prestation</li>
                <li><strong>Consentement :</strong> envoi de communications marketing (vous pouvez retirer votre consentement à tout moment)</li>
                <li><strong>Intérêt légitime :</strong> amélioration de nos services et du site web</li>
                <li><strong>Obligation légale :</strong> respect des obligations comptables et fiscales</li>
              </ul>
            </section>

            {/* Destinataires */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Destinataires des données</h2>
              <p className="text-gray-700 mb-4">
                Vos données personnelles sont destinées aux personnes suivantes :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Le personnel d'Univers Clean habilité à traiter les demandes de devis et d'intervention</li>
                <li>Nos prestataires techniques (hébergement web, outils d'analyse, service d'envoi d'emails)</li>
                <li>Les autorités compétentes en cas d'obligation légale</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-lg mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Prestataires utilisés</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>Hostinger International Ltd.</strong> : Hébergement web (serveur VPS en France)</li>
                  <li><strong>EmailJS</strong> : Service d'envoi d'emails pour le formulaire de contact</li>
                  <li><strong>Google LLC</strong> : Analytics et Tag Manager (analyse d'audience et publicité)</li>
                </ul>
              </div>

              <p className="text-gray-700 mt-4">
                Vos données ne sont jamais vendues à des tiers.
              </p>
            </section>

            {/* Durée de conservation */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Durée de conservation</h2>
              <p className="text-gray-700 mb-4">
                Vos données personnelles sont conservées pendant les durées suivantes :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Demandes de devis non converties :</strong> 3 ans à compter de la demande</li>
                <li><strong>Clients :</strong> 10 ans après la dernière prestation (obligations comptables et fiscales)</li>
                <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                <li><strong>Cookies :</strong> 13 mois maximum</li>
              </ul>
            </section>

            {/* Sécurité */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sécurité des données</h2>
              <p className="text-gray-700">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction. Notre site utilise le protocole HTTPS pour sécuriser les échanges de données.
              </p>
            </section>

            {/* Droits */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vos droits</h2>
              <p className="text-gray-700 mb-4">
                Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
                <li><strong>Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et en obtenir une copie</li>
                <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données dans certains cas</li>
                <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données dans certains cas</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données pour des raisons légitimes</li>
                <li><strong>Droit de retirer votre consentement :</strong> à tout moment, sans affecter la licéité du traitement fondé sur le consentement avant son retrait</li>
              </ul>

              <p className="text-gray-700 mb-4">
                Pour exercer ces droits, vous pouvez nous contacter :
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Par email :</strong> <a href="mailto:universclean77@gmail.com" className="text-blue-600 hover:text-blue-700">universclean77@gmail.com</a></p>
                <p className="mb-2"><strong>Par téléphone :</strong> <a href="tel:+33782364263" className="text-blue-600 hover:text-blue-700">07 82 36 42 63</a></p>
                <p><strong>Par courrier :</strong> Univers Clean - 4 Rue de la Ferme, 77690 La Genevraye</p>
              </div>

              <p className="text-gray-700 mt-4">
                Nous nous engageons à répondre à votre demande dans un délai d'un mois maximum.
              </p>

              <p className="text-gray-700 mt-4">
                Vous disposez également du droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">www.cnil.fr</a>
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies et technologies similaires</h2>
              <p className="text-gray-700 mb-4">
                Notre site utilise des cookies et technologies similaires pour :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-6">
                <li>Analyser l'audience et le trafic du site (Google Analytics)</li>
                <li>Mesurer l'efficacité de nos campagnes publicitaires (Google Ads)</li>
                <li>Améliorer votre expérience de navigation</li>
                <li>Mémoriser vos préférences concernant les cookies</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-gray-700 font-medium">
                  ⚠️ Une bannière de consentement vous permettra de gérer vos préférences cookies lors de votre première visite.
                </p>
              </div>

              <p className="text-gray-700 mb-6">
                Vous pouvez à tout moment paramétrer votre navigateur pour refuser les cookies ou être informé de leur dépôt. Cependant, certaines fonctionnalités du site peuvent ne pas fonctionner correctement si vous désactivez les cookies.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cookies utilisés</h3>

              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-2 font-semibold text-gray-900">Google Tag Manager</p>
                  <p className="text-sm text-gray-700 mb-2">Outil de gestion de balises et cookies</p>
                  <p className="text-sm text-gray-600"><strong>Finalité :</strong> Gestion centralisée des outils d'analyse et de publicité</p>
                  <p className="text-sm text-gray-600"><strong>Durée :</strong> 13 mois</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-2 font-semibold text-gray-900">Google Analytics</p>
                  <p className="text-sm text-gray-700 mb-2">Outil d'analyse d'audience (prévu)</p>
                  <p className="text-sm text-gray-600"><strong>Finalité :</strong> Statistiques de visite, analyse du comportement des utilisateurs</p>
                  <p className="text-sm text-gray-600"><strong>Durée :</strong> 13 mois</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-2 font-semibold text-gray-900">Google Ads</p>
                  <p className="text-sm text-gray-700 mb-2">Outil publicitaire (prévu)</p>
                  <p className="text-sm text-gray-600"><strong>Finalité :</strong> Mesure de performance des campagnes publicitaires, reciblage</p>
                  <p className="text-sm text-gray-600"><strong>Durée :</strong> 13 mois</p>
                </div>
              </div>

              <p className="text-gray-700 mt-6">
                Pour plus d'informations sur les cookies Google : <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Politique cookies de Google</a>
              </p>
            </section>

            {/* Transfert de données */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hébergement et transfert de données</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Hébergeur :</strong> Hostinger International Ltd.
                </p>
                <p className="text-gray-700 mb-2">
                  61 Lordou Vironos Street, 6023 Larnaca, Chypre
                </p>
                <p className="text-gray-700 text-sm">
                  Serveur : VPS situé en France (données stockées en France)
                </p>
              </div>
              <p className="text-gray-700">
                Certains de nos prestataires peuvent être situés en dehors de l'Union Européenne. Dans ce cas, nous nous assurons que des garanties appropriées sont en place pour protéger vos données, conformément au RGPD.
              </p>
            </section>

            {/* Modification */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modification de la politique de confidentialité</h2>
              <p className="text-gray-700">
                Nous nous réservons le droit de modifier cette Politique de Confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette page pour rester informé de la manière dont nous protégeons vos données.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-700 mb-4">
                Pour toute question concernant cette Politique de Confidentialité ou le traitement de vos données personnelles, vous pouvez nous contacter :
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Email :</strong> <a href="mailto:universclean77@gmail.com" className="text-blue-600 hover:text-blue-700">universclean77@gmail.com</a></p>
                <p className="mb-2"><strong>Téléphone :</strong> <a href="tel:+33782364263" className="text-blue-600 hover:text-blue-700">07 82 36 42 63</a></p>
                <p><strong>Adresse :</strong> Univers Clean - 4 Rue de la Ferme, 77690 La Genevraye</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
