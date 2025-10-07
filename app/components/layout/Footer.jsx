import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Nettoyage Canapé', href: '/services/nettoyage-canape' },
    { name: 'Nettoyage Matelas', href: '/services/nettoyage-matelas' },
    { name: 'Nettoyage Voiture Intérieur', href: '/services/nettoyage-voiture-interieur' },
    { name: 'Nettoyage Voiture Extérieur', href: '/services/nettoyage-voiture-exterieur' },
    { name: 'Nettoyage Voiture Complet', href: '/services/nettoyage-voiture-complet' },
  ];

  const zones = [
    'Melun',
    'Fontainebleau',
    'Meaux',
    'Provins',
    'Coulommiers',
    'Toute Île-de-France'
  ];

  return (
    <footer className="bg-[#0B1120] text-gray-300 border-t border-blue-900/40 mt-2.5">
      <div className="container mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Colonne 1 : Identité */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-3xl font-extrabold text-blue-500">Univers</span>
            <span className="text-3xl font-extrabold text-white">Clean</span>
            <span className="text-sm text-gray-400">77</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Spécialiste du nettoyage professionnel à domicile en Île-de-France. 
            Canapé, matelas, voiture : résultat garanti, satisfaction assurée.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/universclean77"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Univers Clean 77"
              className="p-2 rounded-full bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/universclean77/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Univers Clean 77"
              className="p-2 rounded-full bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Colonne 2 : Services */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">Nos Services</h3>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service.href}>
                <a
                  href={service.href}
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 3 : Zones */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">Zones d’intervention</h3>
          <ul className="space-y-2">
            {zones.map((zone) => (
              <li key={zone} className="text-sm text-gray-400">
                {zone}
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 4 : Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="tel:+33782364263"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                07 82 36 42 63
              </a>
            </li>
            <li>
              <a
                href="mailto:universclean77@gmail.com"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                universclean77@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-blue-400" />
              <span>
                Seine-et-Marne (77)
                <br />
                Île-de-France
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bas de page */}
      <div className="border-t border-blue-900/30 mt-10">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© {currentYear} Univers Clean 77 — Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="/mentions-legales" className="hover:text-blue-400 transition-colors">
              Mentions légales
            </a>
            <a href="/politique-confidentialite" className="hover:text-blue-400 transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}