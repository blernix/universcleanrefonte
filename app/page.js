'use client';
import { useState } from 'react';
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

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('general');

  const handleOpenModal = (serviceSlug = 'general') => {
    setSelectedService(serviceSlug);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService('general');
  };

  return (
    <>
      <Header onOpenModal={() => handleOpenModal('general')} />

      <main className="min-h-screen">
        <Hero onOpenModal={() => handleOpenModal('general')} />

        {/* Séparateur visuel */}
        <div className="h-16 bg-gradient-to-b from-gray-50 to-white" />

        <ServicesGrid />

        {/* Séparateur visuel */}
        <div className="h-16 bg-gradient-to-b from-white to-gray-50" />

        <WhyUs />

        {/* Séparateur visuel */}
        <div className="h-16 bg-gradient-to-b from-white to-gray-50" />

        <About />

        {/* Séparateur visuel */}
        <div className="h-16 bg-gradient-to-b from-gray-50 to-blue-600" />

        <Process />

        {/* Séparateur visuel */}
        <div className="h-16 bg-gradient-to-b from-blue-600 to-gray-50" />

        <Testimonials />

        {/* Séparateur visuel */}
        <div className="h-16 bg-gradient-to-b from-gray-50 to-white" />

        <FAQ />

        {/* Séparateur visuel */}
        <div className="h-16 bg-gradient-to-b from-white to-blue-600" />

        <CTABanner onOpenModal={() => handleOpenModal('general')} />
      </main>

      <Footer />

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
    </>
  );
}
