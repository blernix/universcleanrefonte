'use client';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import Modal from '@/app/components/Modal';
import ContactForm from '@/app/components/ContactForm';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import SectionSeparator from '@/app/components/SectionSeparator';
import RedirectConfirmModal from '@/app/components/RedirectConfirmModal';

// Import service components
import ServiceHero from '@/app/components/services/ServiceHero';
import ServiceFormulasIntro from '@/app/components/services/ServiceFormulasIntro';
import ServiceFormulas from '@/app/components/services/ServiceFormulas';
import ServiceComparison from '@/app/components/services/ServiceComparison';
import ServiceConversion from '@/app/components/services/ServiceConversion';
import ServiceProcess from '@/app/components/services/ServiceProcess';
import ServiceBenefits from '@/app/components/services/ServiceBenefits';
import ServiceFAQ from '@/app/components/services/ServiceFAQ';
import ServiceTestimonials from '@/app/components/services/ServiceTestimonials';
import ServiceCTA from '@/app/components/services/ServiceCTA';
import ServiceSchema from '@/app/components/services/ServiceSchema';
import BeforeAfterSlider from '@/app/components/services/BeforeAfterSlider';

export default function ServicePageClient({ service }) {
  if (!service) notFound();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showRedirectModal, setShowRedirectModal] = useState(false);
  const [selectedFormula, setSelectedFormula] = useState(service.formulas ? 0 : null);
  const [selectedVehicleClass, setSelectedVehicleClass] = useState('classe1');
  const [selectedCanapeSize, setSelectedCanapeSize] = useState('2-3places');
  const [selectedMatelasSize, setSelectedMatelasSize] = useState('1place');

  const handleRedirectToBooking = () => {
    setShowRedirectModal(false);
    window.open('https://app.dispoo.fr/website/368-univers-clean/step1', '_blank');
  };

  const isAutomobile = service.category === 'automobile';
  const isCanape = service.slug === 'nettoyage-canape';
  const isMatelas = service.slug === 'nettoyage-matelas';
  const hasFormulas = service.formulas && service.formulas.length > 0;
  const isInteriorOrExterior = service.slug === 'nettoyage-voiture-interieur' || service.slug === 'nettoyage-voiture-exterieur';

  // Calcul de l'économie pour la conversion
  const calculateSavings = () => {
    if (!isInteriorOrExterior) return null;

    const currentPrice = parseInt(service.formulas?.[0]?.price?.[selectedVehicleClass]?.replace('€', '') || 0);

    // Prix des services séparés (nouvelle structure)
    const interiorPrices = { classe1: 110, classe2: 130, classe3: 150 };
    const exteriorPrices = { classe1: 100, classe2: 120, classe3: 140 };
    const completePrices = { classe1: 190, classe2: 225, classe3: 260 };

    const estimatedCombinedPrice = interiorPrices[selectedVehicleClass] + exteriorPrices[selectedVehicleClass];
    const completePrice = completePrices[selectedVehicleClass];
    const savings = estimatedCombinedPrice - completePrice;
    const discountPercent = Math.round((savings / estimatedCombinedPrice) * 100);

    return {
      currentPrice,
      estimatedCombinedPrice,
      completePrice,
      savings,
      discount: discountPercent
    };
  };

  const savingsData = calculateSavings();

  return (
    <>
      {/* Schema.org JSON-LD for SEO */}
      <ServiceSchema service={service} />

      <Header onOpenModal={() => setIsModalOpen(true)} onOpenRedirectModal={() => setShowRedirectModal(true)} />

      <main className="overflow-hidden">
        {/* Hero Section */}
        <ServiceHero
          service={service}
          isAutomobile={isAutomobile}
          hasFormulas={hasFormulas}
          onOpenModal={() => setIsModalOpen(true)}
        />

        <SectionSeparator variant="light" />

        {/* Formulas Introduction */}
      
        {/* Formulas Section */}
        <ServiceFormulas
          service={service}
          isAutomobile={isAutomobile}
          isCanape={isCanape}
          isMatelas={isMatelas}
          hasFormulas={hasFormulas}
          selectedFormula={selectedFormula}
          setSelectedFormula={setSelectedFormula}
          selectedVehicleClass={selectedVehicleClass}
          setSelectedVehicleClass={setSelectedVehicleClass}
          selectedCanapeSize={selectedCanapeSize}
          setSelectedCanapeSize={setSelectedCanapeSize}
          selectedMatelasSize={selectedMatelasSize}
          setSelectedMatelasSize={setSelectedMatelasSize}
          onOpenModal={() => setIsModalOpen(true)}
        />

        {/* Conversion Section (Interior/Exterior → Complete) */}
        {isInteriorOrExterior && savingsData && (
          <>
            <SectionSeparator variant="reverseLight" />
            <ServiceConversion
              service={service}
              savingsData={savingsData}
              selectedVehicleClass={selectedVehicleClass}
              setSelectedVehicleClass={setSelectedVehicleClass}
            />
          </>
        )}
          <ServiceFormulasIntro
          formulasDescription={service.formulasDescription}
          title={hasFormulas && service.formulas.length > 1 ? "Trois formules adaptées à vos besoins" : null}
          serviceSlug={service.slug}
        />


        {/* Comparison Section (si plusieurs formules) */}
        {hasFormulas && service.formulas.length > 1 && (
          <>
            <SectionSeparator variant="reverseLight" />
            <ServiceComparison service={service} onOpenModal={() => setIsModalOpen(true)} />
          </>
        )}

        <SectionSeparator variant="gray" />

        {/* Process Section */}
        <ServiceProcess process={service.process} />

        <SectionSeparator variant="reverseGray" />

        {/* Benefits Section */}
        <ServiceBenefits benefits={service.benefits} />

        {/* Before/After Section (si disponible) */}
        {service.beforeAfterImages && service.beforeAfterImages.length > 0 && (
          <>
            <SectionSeparator variant="light" />
            <section className="py-20 bg-white">
              <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Nos Résultats Avant/Après
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Découvrez la différence impressionnante de nos prestations professionnelles
                  </p>
                </div>

                <div className="space-y-12">
                  {service.beforeAfterImages.map((comparison, index) => (
                    <BeforeAfterSlider
                      key={index}
                      beforeImage={comparison.before}
                      afterImage={comparison.after}
                      alt={comparison.alt}
                    />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        <SectionSeparator variant="light" />

        {/* FAQ Section */}
        <ServiceFAQ faqs={service.faqs} />

        <SectionSeparator variant="reverseLight" />

        {/* Testimonials Section */}
        <ServiceTestimonials serviceTitle={service.title} />

        <SectionSeparator variant="blue" />

        {/* CTA Section */}
        <ServiceCTA onOpenModal={() => setIsModalOpen(true)} />
      </main>

      <Footer />

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={`Devis ${service.title}`}>
        <ContactForm formType={service.slug} onSuccess={() => setIsModalOpen(false)} />
      </Modal>

      <RedirectConfirmModal
        isOpen={showRedirectModal}
        onClose={() => setShowRedirectModal(false)}
        onConfirm={handleRedirectToBooking}
      />
    </>
  );
}