// Export centralisé de tous les services
import { mobilierServices, canapeTypes, matelasSizes } from './mobilier.js';
import { locauxServices } from './locaux.js';

export const servicesData = [
  ...mobilierServices,
  ...locauxServices
];

export { canapeTypes, matelasSizes };
export { mobilierServices, locauxServices };
