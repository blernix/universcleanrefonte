// Fonction de calcul du prix après crédit d'impôt
export function calculateDiscountedPrice(basePriceStr) {
  // Si pas de prix valide, retourner tel quel
  if (!basePriceStr || typeof basePriceStr !== 'string') {
    return { original: basePriceStr || '', discounted: basePriceStr || '' };
  }
  
  // Extraire le nombre du format "59€" ou "59,00€"
  const cleanStr = basePriceStr.replace('€', '').trim().replace(',', '.');
  const basePrice = parseFloat(cleanStr);
  
  // Vérifier que c'est un nombre valide
  if (isNaN(basePrice)) {
    return { original: basePriceStr, discounted: basePriceStr };
  }
  
  // Calcul : +10% puis -50%
  const discounted = basePrice * 1.10 * 0.50;
  
  // Arrondir à 2 décimales et formater en français avec virgule
  const formattedDiscounted = discounted.toFixed(2).replace('.', ',') + '€';
  
  return {
    original: basePriceStr,
    discounted: formattedDiscounted
  };
}

// Exemples :
// calculateDiscountedPrice('59€') → { original: '59€', discounted: '32,45€' }
// calculateDiscountedPrice('49€') → { original: '49€', discounted: '26,95€' }
// calculateDiscountedPrice('79€') → { original: '79€', discounted: '43,45€' }
// calculateDiscountedPrice('109€') → { original: '109€', discounted: '59,95€' }
// calculateDiscountedPrice('119€') → { original: '119€', discounted: '65,45€' }
// calculateDiscountedPrice('139€') → { original: '139€', discounted: '76,45€' }