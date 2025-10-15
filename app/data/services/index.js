// Export centralisé de tous les services
import { automobileServices, vehicleClasses } from './automobile.js';
import { mobilierServices, canapeTypes, matelasSizes } from './mobilier.js';

// Fusionner tous les services dans un seul tableau
export const servicesData = [
  ...automobileServices,
  ...mobilierServices
];

// Ré-exporter les configurations de formulaires
export { vehicleClasses, canapeTypes, matelasSizes };

// Export par catégorie (optionnel, pour filtrage facile)
export { automobileServices, mobilierServices };
