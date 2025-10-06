'use client';
import { motion } from 'framer-motion';

export default function ServiceConversion({
  service,
  savingsData,
  selectedFormula,
  setSelectedFormula,
  selectedVehicleClass,
  setSelectedVehicleClass
}) {
  if (!savingsData) return null;

  return (
    <section className="!py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-400/20 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="!text-center !mb-16"
        >
          <div className="inline-block bg-yellow-400 text-blue-900 !px-6 !py-2 rounded-full font-bold !text-sm !mb-6 animate-pulse">
            🎯 OFFRE AVANTAGEUSE
          </div>
          <h2 className="!text-4xl md:!text-6xl font-extrabold !mb-6 !text-center">
            Pourquoi pas les deux ?
          </h2>
          <p className="!text-xl md:!text-2xl !text-blue-100 !text-center max-w-3xl !mx-auto !mb-8">
            Économisez <span className="!text-yellow-400 font-bold">{savingsData.discount}%</span> en choisissant le nettoyage complet !
          </p>

          {/* Sélecteurs de formule et véhicule */}
          <div className="flex flex-col gap-6 bg-white/20 backdrop-blur-md !px-8 !py-6 rounded-2xl border border-white/30 max-w-4xl !mx-auto">
            <div className="!text-center">
              <p className="!text-blue-100 !text-sm !mb-3">Modifiez vos options pour voir l'économie :</p>
            </div>

            {/* Sélecteur de formule */}
            <div>
              <label className="!text-blue-200 !text-sm font-semibold block !mb-3">Formule :</label>
              <div className="flex flex-wrap justify-center gap-3">
                {service.formulas.map((formula, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedFormula(index)}
                    className={`!px-6 !py-3 rounded-full font-bold !text-base transition-all ${
                      selectedFormula === index
                        ? 'bg-white text-blue-600 shadow-lg'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {formula.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sélecteur de classe de véhicule */}
            <div>
              <label className="!text-blue-200 !text-sm font-semibold block !mb-3">Type de véhicule :</label>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { value: 'classe1', label: 'Citadine' },
                  { value: 'classe2', label: 'Berline' },
                  { value: 'classe3', label: 'SUV/Prestige' }
                ].map((vehicleClass) => (
                  <button
                    key={vehicleClass.value}
                    onClick={() => setSelectedVehicleClass(vehicleClass.value)}
                    className={`!px-6 !py-3 rounded-full font-bold !text-base transition-all ${
                      selectedVehicleClass === vehicleClass.value
                        ? 'bg-white text-blue-600 shadow-lg'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {vehicleClass.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Comparaison des prix */}
        <div className="grid md:grid-cols-3 gap-8 !mb-16">
          {/* Prix actuel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-md !p-8 rounded-2xl border border-white/20"
          >
            <div className="!text-center">
              <p className="!text-blue-200 !text-sm !mb-3">Votre choix actuel</p>
              <p className="!text-5xl font-extrabold !mb-2">{savingsData.currentPrice}€</p>
              <p className="!text-blue-100 !text-base">
                {service.slug === 'nettoyage-voiture-interieur' ? 'Intérieur uniquement' : 'Extérieur uniquement'}
              </p>
            </div>
          </motion.div>

          {/* Prix combiné sans réduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md !p-8 rounded-2xl border border-white/20 relative"
          >
            <div className="absolute -top-3 -right-3 bg-red-500 !text-white !px-4 !py-1 rounded-full !text-xs font-bold rotate-12">
              SÉPARÉ
            </div>
            <div className="!text-center">
              <p className="!text-blue-200 !text-sm !mb-3">Intérieur + Extérieur séparés</p>
              <p className="!text-5xl font-extrabold !mb-2 line-through opacity-60">{savingsData.estimatedCombinedPrice}€</p>
              <p className="!text-blue-100 !text-base">Prix sans économie</p>
            </div>
          </motion.div>

          {/* Prix complet avec réduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-yellow-400 to-orange-500 !text-blue-900 !p-8 rounded-2xl border-4 border-yellow-300 shadow-2xl relative transform hover:scale-105 transition-transform"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 !text-white !px-6 !py-2 rounded-full !text-sm font-bold shadow-lg">
              ⭐ MEILLEURE OFFRE
            </div>
            <div className="!text-center !mt-4">
              <p className="!text-blue-800 !text-sm !mb-3 font-bold">Nettoyage Complet</p>
              <p className="!text-6xl font-extrabold !mb-2">{savingsData.completePrice}€</p>
              <div className="bg-blue-900 !text-yellow-300 !px-4 !py-2 rounded-full inline-block font-bold !text-lg !mb-3">
                Économie : {savingsData.savings}€
              </div>
              <p className="!text-blue-800 !text-base font-medium">Intérieur + Extérieur</p>
            </div>
          </motion.div>
        </div>

        {/* CTA vers le complet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="!text-center"
        >
          <a
            href="/services/nettoyage-voiture-complet"
            className="inline-flex items-center gap-3 bg-white !text-blue-700 !px-12 !py-6 rounded-full font-bold !text-2xl shadow-2xl hover:bg-blue-50 transition-all hover:scale-105"
          >
            🚗 Passer au Nettoyage Complet
          </a>
          <p className="!text-blue-100 !mt-6 !text-lg">
            ✓ Économisez {savingsData.savings}€ · ✓ Un seul rendez-vous · ✓ Résultat optimal
          </p>
        </motion.div>
      </div>
    </section>
  );
}
