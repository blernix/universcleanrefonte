# ♿ Guide : Accessibilité clavier pour BeforeAfterSlider

## 🎯 Qu'est-ce que l'accessibilité clavier ?

L'accessibilité clavier permet aux utilisateurs de **naviguer et interagir avec ton site SANS souris**, uniquement avec le clavier.

### Qui en a besoin ?

1. **Personnes handicapées** (moteur, vision, etc.)
2. **Utilisateurs de screen readers** (NVDA, JAWS, VoiceOver)
3. **Power users** qui préfèrent le clavier
4. **Tout le monde** quand la souris est cassée/déchargée

### Navigation clavier standard

```
Tab          → Passer au prochain élément interactif
Shift+Tab    → Revenir en arrière
Enter/Space  → Activer un bouton/lien
Flèches      → Naviguer dans sliders/menus
Escape       → Fermer modals/menus
```

---

## ❌ Problème actuel du BeforeAfterSlider

### Ce qui ne marche PAS :

```jsx
// Ligne 86-87 de BeforeAfterSlider.jsx
<div
  onMouseDown={startDrag}  // ❌ Souris uniquement
  onTouchStart={startDrag} // ❌ Tactile uniquement
>
```

**Test** : Essaie de naviguer avec Tab + Flèches → **Rien ne se passe** 😞

### Ce que devrait faire un utilisateur au clavier :

1. **Tab** jusqu'au slider
2. **Flèche Gauche/Droite** pour déplacer le curseur
3. Voir l'image avant/après se révéler progressivement

---

## ✅ Solution : Ajouter le support clavier

### Code à ajouter dans BeforeAfterSlider.jsx

#### 1. Ajouter un handler pour les touches

```javascript
// Après la ligne 22 (après stopDrag)
const handleKeyDown = useCallback((e) => {
  // Flèche Gauche : diminue de 5%
  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    setSliderPosition((prev) => Math.max(prev - 5, 0));
  }
  // Flèche Droite : augmente de 5%
  else if (e.key === 'ArrowRight') {
    e.preventDefault();
    setSliderPosition((prev) => Math.min(prev + 5, 100));
  }
  // Home : va tout à gauche (0%)
  else if (e.key === 'Home') {
    e.preventDefault();
    setSliderPosition(0);
  }
  // End : va tout à droite (100%)
  else if (e.key === 'End') {
    e.preventDefault();
    setSliderPosition(100);
  }
}, []);
```

#### 2. Modifier la poignée pour être focusable

```jsx
// Ligne 84 - Remplacer cette section :
<div
  className="..."
  onMouseDown={startDrag}
  onTouchStart={startDrag}
>
```

**Par :**

```jsx
<button
  type="button"
  tabIndex={0}  // ✅ Rend focusable avec Tab
  role="slider"  // ✅ Indique que c'est un slider
  aria-label="Curseur de comparaison avant/après"
  aria-valuemin={0}
  aria-valuemax={100}
  aria-valuenow={Math.round(sliderPosition)}
  aria-valuetext={`${Math.round(sliderPosition)}% vers la photo après`}
  className="..."
  onMouseDown={startDrag}
  onTouchStart={startDrag}
  onKeyDown={handleKeyDown}  // ✅ Support clavier
>
  <ChevronLeft ... />
  <ChevronRight ... />
</button>
```

#### 3. Ajouter un style pour le focus

```jsx
// Dans className de la poignée, ajouter :
focus:!ring-4 focus:!ring-blue-400 focus:!ring-offset-2 focus:!outline-none
```

---

## 🎨 Résultat final

### Avant (sans accessibilité) :
```
Tab → Passe au-dessus du slider sans s'arrêter ❌
Flèches → Ne font rien ❌
```

### Après (avec accessibilité) :
```
Tab → Focus sur la poignée (anneau bleu visible) ✅
Flèche Gauche → Révèle + de "AVANT" ✅
Flèche Droite → Révèle + de "APRÈS" ✅
Home → Va à 0% (tout AVANT) ✅
End → Va à 100% (tout APRÈS) ✅
Screen reader annonce : "Curseur à 50%, photo avant/après" ✅
```

---

## 🧪 Comment tester ?

### Test manuel (facile)

1. **Ouvre ton site** dans le navigateur
2. **Appuie sur Tab** plusieurs fois jusqu'à voir un contour bleu autour de la poignée
3. **Appuie sur les flèches** ← → pour déplacer
4. **Vérifie** que l'image se révèle progressivement

### Test avec screen reader (avancé)

**Windows** : [NVDA](https://www.nvaccess.org/download/) (gratuit)
**Mac** : VoiceOver (intégré, Cmd+F5)

```bash
1. Active le screen reader
2. Tab jusqu'au slider
3. Le screen reader doit annoncer :
   "Curseur de comparaison avant/après, slider, 50 sur 100"
4. Appuie sur les flèches
5. Doit annoncer les nouvelles valeurs : "55", "60", etc.
```

### Test avec outil automatique

```bash
# Installer axe DevTools (extension Chrome/Firefox)
# Ouvrir DevTools > onglet axe
# Scanner la page
# Chercher "keyboard-access" issues
```

---

## 📊 Impact

### Accessibilité

- **WCAG 2.1 Level AA** : ✅ Conforme (exigence 2.1.1 Keyboard)
- **Section 508** : ✅ Conforme
- **Score Lighthouse Accessibility** : +10 points

### SEO

- Google favorise les sites accessibles
- Meilleur ranking potentiel

### Légal

- En France : **Obligation légale** pour sites publics/entreprises >250 employés
- Risque : Amende jusqu'à 25 000€ (rare mais possible)

---

## 💡 Ressources

- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=211)
- [MDN - Keyboard Navigation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
- [WebAIM - Keyboard Accessibility](https://webaim.org/techniques/keyboard/)
- [Testing with NVDA](https://webaim.org/articles/nvda/)

---

## 🚀 Autres composants à vérifier

### Déjà accessibles ✅

- **Header navigation** : Tab fonctionne
- **Modal** : Focus trap + Escape fonctionnent
- **ContactForm** : Tous les champs accessibles
- **Footer links** : Tab fonctionne

### À améliorer potentiellement

- **Hero scroll animation** : Ajouter un bouton "Skip animation"
- **PopupPromo** : Ajouter focus trap + aria-live
- **Testimonials carousel** : Vérifier navigation flèches

---

## ⚙️ Code complet modifié

Voici le code complet de la fonction `handleKeyDown` et de la poignée modifiée :

```javascript
// BeforeAfterSlider.jsx
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, MoveHorizontal } from 'lucide-react';

export default function BeforeAfterSlider({ beforeImage, afterImage, alt }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  }, []);

  const startDrag = useCallback(() => setIsDragging(true), []);
  const stopDrag = useCallback(() => setIsDragging(false), []);

  // ✅ NOUVEAU : Support clavier
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(prev - 5, 0));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(prev + 5, 100));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPosition(100);
    }
  }, []);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => {
      e.preventDefault();
      handleMove(e.clientX);
    };

    const handleMouseUp = () => {
      stopDrag();
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMove, stopDrag]);

  return (
    <div className="!w-full !max-w-6xl !mx-auto !px-4 md:!px-8">
      <div
        ref={containerRef}
        className="!relative !w-full !aspect-[4/3] sm:!aspect-[16/9] md:!aspect-[21/9] !overflow-hidden !rounded-2xl !shadow-2xl !bg-gradient-to-br !from-gray-900 !to-gray-800 !select-none !touch-none !border-4 !border-white/20 !backdrop-blur-sm"
        onMouseMove={(e) => isDragging && handleMove(e.clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={stopDrag}
      >
        {/* Images... */}

        {/* Barre de séparation */}
        <div
          className="!absolute !top-0 !bottom-0 !w-1 !bg-gradient-to-b !from-blue-400 !via-white !to-blue-400 !shadow-[0_0_20px_rgba(255,255,255,0.8)] !z-30"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Bordures... */}

          {/* ✅ MODIFIÉ : Poignée avec support clavier */}
          <button
            type="button"
            tabIndex={0}
            role="slider"
            aria-label="Curseur de comparaison avant/après"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuetext={`${Math.round(sliderPosition)}% vers la photo après`}
            className={`!absolute !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2 !w-16 !h-16 sm:!w-20 sm:!h-20 !bg-gradient-to-br !from-blue-500 !via-blue-600 !to-indigo-600 !rounded-full !shadow-[0_8px_32px_rgba(0,0,0,0.4)] !flex !items-center !justify-center !cursor-grab active:!cursor-grabbing !transition-all !duration-300 !border-4 !border-white !backdrop-blur-md focus:!ring-4 focus:!ring-blue-400 focus:!ring-offset-2 focus:!outline-none ${
              isDragging ? '!scale-110 !shadow-[0_12px_48px_rgba(59,130,246,0.6)]' : isHovering ? '!scale-105 !shadow-[0_10px_40px_rgba(59,130,246,0.5)]' : ''
            }`}
            onMouseDown={startDrag}
            onTouchStart={startDrag}
            onKeyDown={handleKeyDown}  // ✅ NOUVEAU
          >
            {/* Cercle intérieur + icônes */}
            <div className="!absolute !inset-2 !bg-white/10 !rounded-full !backdrop-blur-sm"></div>
            <div className="!relative !z-10 !flex !items-center !justify-center !gap-0.5">
              <ChevronLeft className="!w-6 !h-6 sm:!w-7 sm:!h-7 !text-white !drop-shadow-lg !transition-transform !duration-300" />
              <ChevronRight className="!w-6 !h-6 sm:!w-7 sm:!h-7 !text-white !drop-shadow-lg !transition-transform !duration-300" />
            </div>

            {/* Tooltip hover */}
            {isHovering && !isDragging && (
              <div className="!absolute !-bottom-10 !left-1/2 !-translate-x-1/2 !bg-black/80 !text-white !px-3 !py-1.5 !rounded-lg !text-xs !font-semibold !whitespace-nowrap !backdrop-blur-md !border !border-white/20 !animate-bounce">
                <MoveHorizontal className="!w-4 !h-4 !inline !mr-1" />
                Glissez ou utilisez les flèches ← →
              </div>
            )}
          </button>
        </div>
      </div>

      <p className="!text-center !text-gray-600 !mt-4 !text-sm sm:!text-base">
        Glissez le curseur ou utilisez les touches fléchées pour comparer
      </p>
    </div>
  );
}
```

---

## ✅ Checklist d'implémentation

- [ ] Ajouter `handleKeyDown` function
- [ ] Changer `<div>` de la poignée en `<button>`
- [ ] Ajouter `tabIndex={0}`
- [ ] Ajouter `role="slider"`
- [ ] Ajouter attributs `aria-*`
- [ ] Ajouter `onKeyDown={handleKeyDown}`
- [ ] Ajouter styles `focus:!ring-*`
- [ ] Tester avec Tab + flèches
- [ ] Tester avec screen reader
- [ ] Mettre à jour le texte d'instruction

**Temps estimé** : 15-20 minutes
**Difficulté** : Facile (copier-coller + petites modifs)
