import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSection';
import MarketingCTA from '../sections/MarketingCTA';
import CaseStudiesSection from '../sections/CaseStudiesSection';
import WorkingProcessSection from '../sections/WorkingProcessSection';
import TeamSection from '../sections/TeamSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import ContactSection from '../sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <div className="h-28" /> {/* Elemento espaçador */}
      <HeroSection />
      <ServicesSection />
      <MarketingCTA />
      <CaseStudiesSection />
      <WorkingProcessSection />
      <TeamSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;