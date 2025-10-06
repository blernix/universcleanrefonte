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

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('general');
  const [showHeader, setShowHeader] = useState(false);

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

  return (
    <>
      {showHeader && <Header onOpenModal={() => handleOpenModal('general')} />}

      <main className="min-h-screen">
        <Hero onOpenModal={() => handleOpenModal('general')} />

        <SectionSeparator variant="light" />
        <ServicesGrid />

        <SectionSeparator variant="gray" />
        <WhyUs />

        <SectionSeparator variant="reverseLight" />
        <About />

        <SectionSeparator variant="blue" />
        <Process />

        <SectionSeparator variant="reverseGray" />
        <Testimonials />

        <SectionSeparator variant="gray" />
        <FAQ />

        <SectionSeparator variant="reverseBlue" />
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