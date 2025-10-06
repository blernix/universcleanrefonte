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
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Colonne 1 : À propos */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-blue-500">Univers</span>
              <span className="text-2xl font-bold text-white">Clean</span>
              <span className="text-sm text-gray-400">77</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Spécialiste du nettoyage professionnel à domicile en Île-de-France. 
              Canapé, matelas, voiture : résultat garanti.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/universclean77"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/universclean77/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
                    className="text-sm hover:text-blue-500 transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Zone d'intervention */}
          <div>
            <h3 className="text-white font-semibold mb-4">Zone d'intervention</h3>
            <ul className="space-y-2">
              {zones.map((zone) => (
                <li key={zone} className="text-sm">
                  {zone}
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:+33XXXXXXXXX"
                className="flex items-center gap-2 text-sm hover:text-blue-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>XX XX XX XX XX</span>
              </a>
              <a
                href="mailto:contact@univers-clean77.fr"
                className="flex items-center gap-2 text-sm hover:text-blue-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contact@univers-clean77.fr</span>
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Seine-et-Marne (77)<br />Île-de-France</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} Univers Clean 77. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="/mentions-legales" className="hover:text-blue-500 transition-colors">
                Mentions légales
              </a>
              <a href="/politique-confidentialite" className="hover:text-blue-500 transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
