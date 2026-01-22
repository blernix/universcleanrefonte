'use client';
import { useState, useEffect } from 'react';
import Hero from './components/home/Hero';
import ServicesGrid from './components/home/ServicesGrid';
import WhyUs from './components/home/WhyUs';
import About from './components/home/About';
import Process from './components/home/Process';
import Testimonials from './components/home/Testimonials';
import FAQ from './components/home/FAQ';
import CTABanner from './components/home/CTABanner';
import Modal from './components/Modal';
import ContactForm from './components/ContactForm';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SectionSeparator from './components/SectionSeparator';
import PopupPromo from './components/PopupPromo';
import SkipLinks from './components/SkipLinks';
import RedirectConfirmModal from './components/RedirectConfirmModal';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('general');
  const [showHeader, setShowHeader] = useState(false);
  const [showRedirectModal, setShowRedirectModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setShowHeader(true);
    };
    const timer = setTimeout(() => setShowHeader(true), 3000);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleOpenModal = (serviceSlug = 'general') => {
    setSelectedService(serviceSlug);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService('general');
  };

  const handleRedirectToBooking = () => {
    setShowRedirectModal(false);
    window.open('https://app.dispoo.fr/website/368-univers-clean/step1', '_blank');
  };

  return (
    <>
      <SkipLinks />
      {showHeader && <Header onOpenModal={handleOpenModal} onOpenRedirectModal={() => setShowRedirectModal(true)} />}

      <main id="main-content" className="min-h-screen">
        <Hero onOpenModal={handleOpenModal} />

        <SectionSeparator variant="light" />
        <ServicesGrid />

        
        <WhyUs />

<SectionSeparator variant="gray" />
        <About />

        <SectionSeparator variant="blue" />
        <Process />

        <SectionSeparator variant="reverseGray" />
        <Testimonials />

        <SectionSeparator variant="gray" />
        <FAQ />

        <SectionSeparator variant="blue" />
        <CTABanner onOpenModal={handleOpenModal} />
      </main>

      <Footer />

      <PopupPromo />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Demander un devis gratuit"
      >
        <ContactForm
          formType={selectedService}
          onSuccess={handleCloseModal}
        />
      </Modal>

      <RedirectConfirmModal
        isOpen={showRedirectModal}
        onClose={() => setShowRedirectModal(false)}
        onConfirm={handleRedirectToBooking}
      />
    </>
  );
}