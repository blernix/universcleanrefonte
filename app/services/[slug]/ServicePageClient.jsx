'use client';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import { Check, Truck, MessageSquare, Calendar, Star, Sparkles } from 'lucide-react';
import Modal from '@/app/components/Modal';
import ContactForm from '@/app/components/ContactForm';
import { motion } from 'framer-motion';

export default function ServicePageClient({ service }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFormula, setSelectedFormula] = useState(service.formulas ? 0 : null);
  const [selectedVehicleClass, setSelectedVehicleClass] = useState('classe1');

  if (!service) notFound();

  const isAutomobile = service.category === 'automobile';
  const hasFormulas = service.formulas && service.formulas.length > 0;

  return (
    <main className="overflow-hidden">

      {/* --- HERO --- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Texte */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
                <span className="block text-blue-600">{service.title}</span>
                <span className="block text-gray-800 text-3xl md:text-4xl mt-4">
                  {isAutomobile
                    ? "Un soin professionnel pour votre véhicule"
                    : "Retrouver le plaisir d'un intérieur propre, sain et lumineux"}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                {service.description || service.shortDescription}
              </p>

              {hasFormulas && (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                  <p className="text-blue-900 font-bold text-lg mb-2">3 Formules disponibles</p>
                  <p className="text-blue-700">Du rafraîchissement express au soin premium haut de gamme</p>
                </div>
              )}

              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition-colors"
              >
                Prendre Rendez-vous
              </motion.button>

              <div className="pt-10 space-y-4">
                {[
                  { icon: Sparkles, text: isAutomobile ? "Produits Professionnels Haut de Gamme (Koch Chemie, CarPro)" : "Produits Textiles Spécifiques et Respectueux" },
                  { icon: Truck, text: "Intervention à Domicile - La Genevraye (77) et 30km" },
                  { icon: MessageSquare, text: "Devis Gratuit et Transparent" },
                ].map(({ icon: Icon, text }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Icon className="w-6 h-6 text-blue-600" />
                    <span className="font-medium text-gray-700">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-2 bg-blue-100/40 blur-3xl rounded-3xl" />
              <img
                src={service.heroImage}
                alt={service.heroImageAlt}
                className="relative rounded-3xl shadow-2xl w-full h-[520px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FORMULES (si disponibles) --- */}
      {hasFormulas ? (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Choisissez Votre Formule
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Trois niveaux de service pour répondre à tous vos besoins
              </p>

              {isAutomobile && (
                <div className="mt-6 flex justify-center gap-4 flex-wrap">
                  {[
                    { value: 'classe1', label: 'Citadine' },
                    { value: 'classe2', label: 'Berline' },
                    { value: 'classe3', label: 'SUV/Prestige' }
                  ].map((vehicleClass) => (
                    <button
                      key={vehicleClass.value}
                      onClick={() => setSelectedVehicleClass(vehicleClass.value)}
                      className={`px-6 py-3 rounded-full font-semibold transition-all ${
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
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {service.formulas.map((formula, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedFormula(index)}
                  className={`relative cursor-pointer rounded-2xl p-8 transition-all ${
                    selectedFormula === index
                      ? 'bg-blue-600 text-white shadow-2xl scale-105'
                      : 'bg-gray-50 text-gray-900 hover:shadow-lg'
                  }`}
                >
                  {/* Badge si Ultimate */}
                  {formula.name === 'Ultimate' && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Recommandé
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className={`text-3xl font-bold mb-2 ${selectedFormula === index ? 'text-white' : 'text-blue-600'}`}>
                      {formula.name}
                    </h3>
                    <p className={`text-4xl font-extrabold ${selectedFormula === index ? 'text-white' : 'text-gray-900'}`}>
                      {isAutomobile ? formula.price[selectedVehicleClass] : formula.price?.classe1 || 'Sur devis'}
                    </p>
                    <p className={`text-sm mt-2 ${selectedFormula === index ? 'text-blue-100' : 'text-gray-500'}`}>
                      {formula.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {formula.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${selectedFormula === index ? 'text-blue-200' : 'text-green-500'}`} />
                        <p className={`text-sm ${selectedFormula === index ? 'text-white' : 'text-gray-700'}`}>
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className={`w-full mt-8 py-3 rounded-full font-bold transition-all ${
                      selectedFormula === index
                        ? 'bg-white text-blue-600 hover:bg-gray-100'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    Choisir {formula.name}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* --- TARIFS SIMPLES (pour mobilier) --- */
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center max-w-7xl">
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
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="mt-5 w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Obtenir mon devis précis
                </button>
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
                {service.benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="font-medium text-gray-900">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- PROCESSUS --- */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Notre Processus en {service.process.length} Étapes
          </h2>
          <p className="text-lg text-gray-600 mb-14">
            Profitez d’un service professionnel sans quitter le confort de votre maison.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: step.step * 0.1 }}
                className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 font-bold text-2xl mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AVANTAGES --- */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Tous les Avantages de Notre Service
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- FAQ --- */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Questions Fréquentes
          </h2>
          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-blue-600">Q:</span> {faq.q}
                </h3>
                <p className="text-gray-600 pl-6">
                  <span className="font-semibold text-blue-600">R:</span> {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TÉMOIGNAGES --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-6xl">
          <div className="mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Nos Clients Sont Ravis</h2>
            <p className="text-gray-600">Plus de 50 avis 5 étoiles sur Google</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { quote: "Service impeccable ! Résultat au-delà de mes attentes.", author: "Marie L." },
              { quote: `Très professionnel et efficace. Mon ${service.title.toLowerCase()} est comme neuf !`, author: "Thomas B." },
              { quote: "Excellent rapport qualité-prix. Technicien compétent et sympathique.", author: "Sophie D." },
            ].map(({ quote, author }, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{quote}"</p>
                <p className="font-semibold text-gray-900">{author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINALE --- */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 max-w-5xl">
          {[
            {
              title: "Prêt à réserver votre intervention ?",
              text: "Obtenez votre devis gratuit en moins de 24h. C’est simple, rapide et sans engagement.",
              button: (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" /> Prendre Rendez-vous
                </button>
              ),
            },
            {
              title: "Déjà convaincu par nos clients ?",
              text: "Rejoignez nos centaines de clients satisfaits en Île-de-France.",
              button: (
                <a
                  href="tel:+33XXXXXXXXX"
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-block"
                >
                  📞 Appeler maintenant
                </a>
              ),
            },
          ].map(({ title, text, button }, i) => (
            <div key={i} className="bg-white/15 backdrop-blur-md rounded-2xl p-10 text-white text-center border border-white/20">
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className="mb-6 text-blue-50">{text}</p>
              {button}
            </div>
          ))}
        </div>
      </section>

      {/* --- MODAL --- */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={`Devis ${service.title}`}>
        <ContactForm formType={service.slug} onSuccess={() => setIsModalOpen(false)} />
      </Modal>

    </main>
  );
}