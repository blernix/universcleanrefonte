# 🚀 Guide d'optimisation des performances

Score Lighthouse actuel : **74/100**
Objectif : **90+/100**

## ✅ Optimisations déjà appliquées

### 1. Images Hero optimisées
- Passage de `fill` à `width={800} height={800}` pour forcer le bon dimensionnement
- Ajout de dimensions explicites sur le logo (40x40)

## 🎯 Optimisations à faire manuellement

### 1. **Compresser les images (PRIORITÉ HAUTE - Gain ~2 MB)**

#### Images avant/après (600+ KiB chacune)
```bash
# Installer sharp (outil de compression)
npm install -g sharp-cli

# Compresser toutes les images avant/après
cd public/services
sharp -i interieur_bm_avant.webp -o interieur_bm_avant.webp resize 1200 --webp quality=85
sharp -i interieur_bm_apres.webp -o interieur_bm_apres.webp resize 1200 --webp quality=85
sharp -i interieur_porshe_avant.webp -o interieur_porshe_avant.webp resize 1200 --webp quality=85
sharp -i interieur_porshe_apres.webp -o interieur_porshe_apres.webp resize 1200 --webp quality=85
sharp -i jante_bleu_avant.webp -o jante_bleu_avant.webp resize 1200 --webp quality=85
sharp -i jante_bleu_apres.webp -o jante_bleu_apres.webp resize 1200 --webp quality=85
sharp -i jante_gris_avant.webp -o jante_gris_avant.webp resize 1200 --webp quality=85
sharp -i jante_gris_apres.webp -o jante_gris_apres.webp resize 1200 --webp quality=85
sharp -i canape_bleu_avant.webp -o canape_bleu_avant.webp resize 1200 --webp quality=85
sharp -i canape_bleu_apres.webp -o canape_bleu_apres.webp resize 1200 --webp quality=85
sharp -i canape_gris_avant.webp -o canape_gris_avant.webp resize 1200 --webp quality=85
sharp -i capae_gris_apres.webp -o capae_gris_apres.webp resize 1200 --webp quality=85

# Images hero
sharp -i porsche-hero.webp -o porsche-hero.webp resize 1200 --webp quality=85
sharp -i interieur-hero.webp -o interieur-hero.webp resize 1200 --webp quality=85
```

#### Logo (500x500 → 100x100)
```bash
cd public
sharp -i logo_univers_clean.png -o logo_univers_clean_optimized.webp resize 100 --webp quality=90
# Puis remplacer dans le code : logo_univers_clean.png → logo_univers_clean_optimized.webp
```

**Gain estimé : ~2 MB (2000 KiB)**

### 2. **Lazy Loading des composants lourds (PRIORITÉ MOYENNE - Gain ~200 KiB initial)**

Framer Motion est très lourd (191 KiB). Lazy load pour les sections non critiques :

```jsx
// Dans app/components/services/ServiceProcess.jsx
import dynamic from 'next/dynamic';

// Lazy load de motion pour les sections below the fold
const MotionDiv = dynamic(
  () => import('framer-motion').then(mod => mod.motion.div),
  { ssr: true }
);
```

### 3. **Configuration du cache côté serveur**

Pour les fichiers statiques, ajouter ces headers dans ton hébergeur (Vercel/Netlify/autre) :

```
# _headers (pour Netlify)
/public/*
  Cache-Control: public, max-age=31536000, immutable

/_next/static/*
  Cache-Control: public, max-age=31536000, immutable

/services/*.webp
  Cache-Control: public, max-age=31536000, immutable
```

Pour Vercel, ajouter dans `vercel.json` :
```json
{
  "headers": [
    {
      "source": "/(.*).(jpg|jpeg|png|webp|svg|ico)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/_next/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

**Gain estimé : Répétition des visites beaucoup plus rapide**

### 4. **Optimiser Google Tag Manager (OPTIONNEL)**

GTM ajoute 93 KiB et 58 KiB de JavaScript inutilisé. Si possible :
- Charger GTM de manière asynchrone uniquement après interaction utilisateur
- Ou utiliser Google Analytics 4 directement (plus léger)

```jsx
// Dans app/layout.js, remplacer le script GTM par :
<Script
  id="gtm-script"
  strategy="afterInteractive" // Au lieu de beforeInteractive
  dangerouslySetInnerHTML={{...}}
/>
```

## 📊 Gains attendus

| Optimisation | Gain estimé | Impact |
|--------------|-------------|--------|
| Compression images | ~2 MB | ⭐⭐⭐⭐⭐ |
| Dimensions fixes images | ~300 KiB | ⭐⭐⭐⭐ |
| Cache headers | Repeat visits | ⭐⭐⭐⭐ |
| Lazy loading Framer Motion | ~200 KiB | ⭐⭐⭐ |
| GTM async | ~150 KiB | ⭐⭐ |

**Score Lighthouse attendu après optimisations : 85-92/100** 🎯

## 🔍 Pour vérifier les gains

```bash
# Build et analyser
npm run build

# Tester avec Lighthouse
npm install -g lighthouse
lighthouse https://demo.universclean.2minaci.xyz/services/nettoyage-voiture-complet --view
```

## 📝 Notes

- Les fichiers JS (chunks) sont normaux et générés par Next.js/Turbopack
- Le "Legacy JavaScript" (43 KiB) vient des polyfills - acceptable pour la compatibilité
- Focus sur les images = 80% du problème de performance
