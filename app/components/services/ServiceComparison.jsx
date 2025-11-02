'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Sparkles } from 'lucide-react';

export default function ServiceComparison({ service }) {
  const [selectedFormulas, setSelectedFormulas] = useState([0, 2]); // Par défaut: Start vs Ultimate

  if (!service.formulas || service.formulas.length < 2) return null;

  // Parser tous les benefits uniques de toutes les formules
  const getAllUniqueBenefits = () => {
    const sectionsMap = new Map(); // Map pour préserver l'ordre

    // Parcourir toutes les formules pour collecter TOUS les benefits
    service.formulas.forEach(formula => {
      let currentSection = 'Général'; // Section par défaut

      formula.benefits.forEach(benefit => {
        // Détecter si c'est un header de section
        const isSectionHeader =
          benefit.includes('🚗 INTÉRIEUR') ||
          benefit.includes('✨ EXTÉRIEUR') ||
          benefit.endsWith(':');

        if (isSectionHeader) {
          currentSection = benefit;
          if (!sectionsMap.has(currentSection)) {
            sectionsMap.set(currentSection, new Set());
          }
        } else {
          // C'est un benefit réel, pas un header
          // Ignorer les lignes purement décoratives (emoji seuls)
          if (benefit.trim() && !benefit.match(/^[💰⭐💎]\s*$/)) {
            if (!sectionsMap.has(currentSection)) {
              sectionsMap.set(currentSection, new Set());
            }
            sectionsMap.get(currentSection).add(benefit);
          }
        }
      });
    });

    // Convertir Map en objet simple avec Arrays
    const sections = {};
    sectionsMap.forEach((benefitsSet, sectionName) => {
      sections[sectionName] = Array.from(benefitsSet);
    });

    return { sections };
  };

  const { sections } = getAllUniqueBenefits();

  // Vérifier si une formule contient un benefit spécifique
  // Utilise une logique plus intelligente : si un benefit plus complet existe, on considère qu'il l'a
  const hasBenefit = (formula, benefit) => {
    const benefitLower = benefit.trim().toLowerCase();

    return formula.benefits.some(b => {
      const bLower = b.trim().toLowerCase();

      // Comparaison exacte
      if (bLower === benefitLower) return true;

      // Si l'un des benefits contient des parenthèses avec méthode spécifique (ex: "injection-extraction", "brossage")
      // On exige une correspondance EXACTE pour éviter les faux positifs
      const benefitHasMethod = benefitLower.includes('(') && benefitLower.includes(')');
      const bHasMethod = bLower.includes('(') && bLower.includes(')');

      if (benefitHasMethod || bHasMethod) {
        // Pour les benefits avec méthode, seule la comparaison exacte compte
        return false;
      }

      // Si le benefit de la formule CONTIENT le benefit recherché
      // Ex: "Nettoyage complet des plastiques" contient "Nettoyage des plastiques"
      if (bLower.includes(benefitLower)) return true;

      // Cas inverse : si le benefit recherché est plus complet
      // Ex: cherche "Nettoyage des plastiques" et trouve "Nettoyage plastiques"
      if (benefitLower.includes(bLower)) return true;

      // Mots-clés similaires
      const keywords = benefitLower.split(' ').filter(w => w.length > 3);
      const bKeywords = bLower.split(' ').filter(w => w.length > 3);
      const matchingKeywords = keywords.filter(k => bKeywords.some(bk => bk.includes(k) || k.includes(bk)));

      // Si au moins 70% des mots-clés correspondent, c'est un match
      return matchingKeywords.length >= keywords.length * 0.7;
    });
  };

  // Si aucune section n'a été trouvée, ne rien afficher
  if (Object.keys(sections).length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Comparaison détaillée
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comparez nos formules
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visualisez instantanément les différences entre chaque pack pour choisir celui qui vous convient
          </p>
        </motion.div>

        {/* Sélecteur de formules (mobile) */}
        {service.formulas.length > 2 && (
          <div className="md:hidden mb-8 bg-white rounded-xl p-6 shadow-lg">
            <p className="text-sm font-semibold text-gray-700 mb-4">Comparer :</p>
            <div className="space-y-4">
              {[0, 1].map((position) => (
                <div key={position}>
                  <label className="text-xs text-gray-500 mb-2 block">
                    {position === 0 ? 'Formule 1' : 'Formule 2'}
                  </label>
                  <select
                    value={selectedFormulas[position]}
                    onChange={(e) => {
                      const newSelection = [...selectedFormulas];
                      newSelection[position] = parseInt(e.target.value);
                      setSelectedFormulas(newSelection);
                    }}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none font-semibold"
                  >
                    {service.formulas.map((formula, index) => (
                      <option key={index} value={index}>
                        {formula.name}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tableau de comparaison - Desktop */}
        <div className="hidden md:block overflow-x-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
          >
            <table className="w-full">
              {/* Header */}
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-blue-700">
                  <th className="py-6 px-6 text-left text-white font-bold text-lg">
                    Prestations incluses
                  </th>
                  {service.formulas.map((formula, index) => (
                    <th key={index} className="py-6 px-6 text-center">
                      <div className="text-white">
                        <div className="text-2xl font-bold mb-2">{formula.name}</div>
                        {formula.name === 'Ultimate' && (
                          <div className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-xs font-bold">
                            ⭐ Recommandé
                          </div>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {Object.entries(sections).length === 0 ? (
                  <tr>
                    <td colSpan={service.formulas.length + 1} className="py-10 text-center text-gray-500">
                      Aucune donnée de comparaison disponible
                    </td>
                  </tr>
                ) : (
                  Object.entries(sections).map(([sectionName, benefits], sectionIndex) => (
                    <React.Fragment key={sectionIndex}>
                      {/* Section header */}
                      <tr className="bg-gray-100">
                        <td colSpan={service.formulas.length + 1} className="py-4 px-6">
                          <div className="font-bold text-gray-900 text-lg">
                            {sectionName}
                          </div>
                        </td>
                      </tr>

                      {/* Benefits de la section */}
                      {benefits.length === 0 ? (
                        <tr>
                          <td colSpan={service.formulas.length + 1} className="py-4 px-6 text-center text-gray-400 italic">
                            Aucun élément dans cette section
                          </td>
                        </tr>
                      ) : (
                        benefits.map((benefit, benefitIndex) => (
                      <motion.tr
                        key={benefitIndex}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: benefitIndex * 0.05 }}
                        className={`border-b border-gray-100 hover:bg-blue-50/50 transition-colors ${
                          benefitIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                        }`}
                      >
                        <td className="py-4 px-6 text-gray-700 font-medium">
                          {benefit}
                        </td>
                        {service.formulas.map((formula, formulaIndex) => {
                          // Ultimate a automatiquement toutes les prestations
                          const isUltimate = formula.name === 'Ultimate';
                          const has = isUltimate || hasBenefit(formula, benefit);
                          return (
                            <td key={formulaIndex} className="py-4 px-6 text-center">
                              {has ? (
                                <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                                  <Check className="w-5 h-5 text-green-600" strokeWidth={3} />
                                </div>
                              ) : (
                                <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                                  <X className="w-5 h-5 text-red-400" strokeWidth={3} />
                                </div>
                              )}
                            </td>
                          );
                        })}
                      </motion.tr>
                        ))
                      )}
                    </React.Fragment>
                  ))
                )}
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* Comparaison Mobile - Design amélioré */}
        <div className="md:hidden">
          {/* Headers des formules sélectionnées - Sticky */}
          <div className="sticky top-0 z-10 bg-white shadow-md rounded-t-xl mb-6 overflow-hidden border-2 border-blue-600">
            <div className="grid grid-cols-2 divide-x divide-blue-200">
              {selectedFormulas.map((formulaIndex, position) => {
                const formula = service.formulas[formulaIndex];
                return (
                  <div key={position} className="py-4 px-4 bg-gradient-to-br from-blue-600 to-blue-700 text-center">
                    <div className="text-white font-bold text-lg mb-1">{formula.name}</div>
                    <div className="text-blue-100 text-xs">
                      {formula.price?.classe1 || formula.price?.['2-3places'] || 'Sur devis'}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sections et benefits */}
          <div className="space-y-4">
            {Object.entries(sections).map(([sectionName, benefits], sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
              >
                {/* Section header */}
                <div className="bg-gray-100 py-3 px-4 border-b-2 border-gray-200">
                  <h3 className="font-bold text-gray-900 text-base">{sectionName}</h3>
                </div>

                {/* Benefits - Table-like */}
                <div className="divide-y divide-gray-100">
                  {benefits.map((benefit, benefitIndex) => {
                    // Calculer les has pour les 2 formules
                    const formula1 = service.formulas[selectedFormulas[0]];
                    const formula2 = service.formulas[selectedFormulas[1]];
                    // Ultimate a automatiquement toutes les prestations
                    const has1 = formula1.name === 'Ultimate' || hasBenefit(formula1, benefit);
                    const has2 = formula2.name === 'Ultimate' || hasBenefit(formula2, benefit);

                    return (
                      <div key={benefitIndex} className="p-4">
                        {/* Nom du benefit */}
                        <p className="text-sm text-gray-700 font-medium leading-tight mb-3">
                          {benefit}
                        </p>

                        {/* Grille 2 colonnes pour les icônes */}
                        <div className="grid grid-cols-2 gap-4">
                          {/* Colonne 1 : Formule de gauche (selectedFormulas[0]) */}
                          <div className="flex flex-col items-center gap-2">
                            {has1 ? (
                              <div className="inline-flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                                <Check className="w-6 h-6 text-green-600" strokeWidth={3} />
                              </div>
                            ) : (
                              <div className="inline-flex items-center justify-center w-10 h-10 bg-red-100 rounded-full">
                                <X className="w-6 h-6 text-red-400" strokeWidth={3} />
                              </div>
                            )}
                          </div>

                          {/* Colonne 2 : Formule de droite (selectedFormulas[1]) */}
                          <div className="flex flex-col items-center gap-2">
                            {has2 ? (
                              <div className="inline-flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                                <Check className="w-6 h-6 text-green-600" strokeWidth={3} />
                              </div>
                            ) : (
                              <div className="inline-flex items-center justify-center w-10 h-10 bg-red-100 rounded-full">
                                <X className="w-6 h-6 text-red-400" strokeWidth={3} />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA en bas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">Prêt à choisir votre formule ?</p>
          <a
            href="https://app.dispoo.fr/website/368-univers-clean/step1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
          >
            Obtenir mon devis gratuit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
