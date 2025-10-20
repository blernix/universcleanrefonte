'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function ServiceFormulas({
  service,
  isAutomobile,
  isCanape,
  isMatelas,
  hasFormulas,
  selectedFormula,
  setSelectedFormula,
  selectedVehicleClass,
  setSelectedVehicleClass,
  selectedCanapeSize,
  setSelectedCanapeSize,
  selectedMatelasSize,
  setSelectedMatelasSize
}) {
  // Si pas de formules, afficher la version simple avec tarifs
  if (!hasFormulas) {
    return (
      <section className="!py-32 bg-white">
        <div className="container mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center max-w-7xl">
          {/* Image + Tarifs */}
          <div className="relative">
            <img
              src={service.image}
              alt={service.imageAlt}
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="lg:absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 w-full lg:w-72">
              <p className="font-bold text-gray-900 mb-3 text-lg">Tarifs</p>
              <div className="text-center py-6">
                <p className="text-3xl font-bold text-blue-600">{service.price}</p>
                <p className="text-sm text-gray-500 mt-2">Tarif adapté selon la taille</p>
              </div>
              <a
                href="https://app.dispoo.fr/website/368-univers-clean/step1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors block text-center no-underline"
              >
                Obtenir mon devis précis
              </a>
            </div>
          </div>

          {/* Texte */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {isAutomobile ? "Un Soin Expert pour Votre Véhicule" : "Un Soin Expert et Respectueux pour Vos Textiles"}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {isAutomobile
                ? "Nous utilisons des produits professionnels haut de gamme (Koch Chemie, CarPro) pour un résultat optimal."
                : "Nous utilisons des solutions spécifiques qui pénètrent en profondeur dans les fibres tout en respectant leur délicatesse."}
            </p>
            <div className="space-y-5">
              {service.benefits?.slice(0, 4).map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="font-medium text-gray-900">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Si formules disponibles, afficher les cartes
  return (
    <section className="!py-32 bg-white">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="!text-center !mb-20">
          <h2 className="!text-4xl md:!text-5xl font-bold !text-gray-900 !mb-6 !text-center">
            Choisissez Votre Formule
          </h2>
          <p className="!text-xl !text-gray-600 max-w-2xl !mx-auto !text-center">
            Trois niveaux de service pour répondre à tous vos besoins
          </p>

          {isAutomobile && (
            <div className="!mt-10 flex justify-center gap-5 flex-wrap">
              {[
                { value: 'classe1', label: 'Citadine' },
                { value: 'classe2', label: 'Berline' },
                { value: 'classe3', label: 'SUV/Prestige' }
              ].map((vehicleClass) => (
                <button
                  key={vehicleClass.value}
                  onClick={() => setSelectedVehicleClass(vehicleClass.value)}
                  className={`!px-8 !py-4 rounded-full font-bold !text-lg transition-all ${
                    selectedVehicleClass === vehicleClass.value
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {vehicleClass.label}
                </button>
              ))}
            </div>
          )}

          {isCanape && (
            <div className="!mt-10 flex justify-center gap-5 flex-wrap">
              {[
                { value: '1places', label: '1 place' },
                { value: '2-3places', label: '2-3 places' },
                { value: '3-4places', label: '3-4 places' },
                { value: 'angle', label: 'Angle' },
                { value: 'U', label: 'Forme U' }
              ].map((canapeSize) => (
                <button
                  key={canapeSize.value}
                  onClick={() => setSelectedCanapeSize(canapeSize.value)}
                  className={`!px-8 !py-4 rounded-full font-bold !text-lg transition-all ${
                    selectedCanapeSize === canapeSize.value
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {canapeSize.label}
                </button>
              ))}
            </div>
          )}

          {isMatelas && (
            <div className="!mt-10 flex justify-center gap-5 flex-wrap">
              {[
                { value: 'enfant', label: 'Matelas enfant' },
                { value: '1place', label: 'Matelas 1 place' },
                { value: '2places', label: 'Matelas 2 places' }
              ].map((matelasSize) => (
                <button
                  key={matelasSize.value}
                  onClick={() => setSelectedMatelasSize(matelasSize.value)}
                  className={`!px-8 !py-4 rounded-full font-bold !text-lg transition-all ${
                    selectedMatelasSize === matelasSize.value
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {matelasSize.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className={`grid gap-10 ${service.formulas.length === 1 ? 'md:grid-cols-1 max-w-2xl mx-auto' : 'md:grid-cols-3'}`}>
          {service.formulas.map((formula, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedFormula(index)}
              className={`relative cursor-pointer rounded-2xl !p-10 transition-all ${
                selectedFormula === index
                  ? 'bg-blue-600 text-white shadow-2xl scale-105'
                  : 'bg-gray-50 text-gray-900 hover:shadow-lg'
              }`}
            >
              {formula.name === 'Ultimate' && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white !px-5 !py-2 rounded-full !text-sm font-bold shadow-lg">
                  ⭐ Recommandé
                </div>
              )}

              <div className="!text-center !mb-8">
                <h3 className={`!text-3xl font-bold !mb-4 ${selectedFormula === index ? 'text-white' : 'text-blue-600'}`}>
                  {formula.name}
                </h3>
                <p className={`!text-4xl font-extrabold ${selectedFormula === index ? 'text-white' : 'text-gray-900'}`}>
                  {isAutomobile
                    ? formula.price[selectedVehicleClass]
                    : isCanape
                      ? formula.price[selectedCanapeSize]
                      : isMatelas
                        ? formula.price[selectedMatelasSize]
                        : formula.price?.classe1 || 'Sur devis'}
                </p>
                <p className={`!text-sm !mt-4 ${selectedFormula === index ? 'text-blue-100' : 'text-gray-500'}`}>
                  {formula.description}
                </p>
              </div>

              <div className="space-y-4">
                {formula.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${selectedFormula === index ? 'text-blue-200' : 'text-green-500'}`} />
                    <p className={`!text-base ${selectedFormula === index ? 'text-white' : 'text-gray-700'}`}>
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="https://app.dispoo.fr/website/368-univers-clean/step1"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full !mt-10 !py-4 rounded-full font-bold !text-lg transition-all block text-center no-underline ${
                  selectedFormula === index
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Choisir {formula.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
