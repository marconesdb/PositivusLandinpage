import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSection';
import MarketingCTA from '../sections/MarketingCTA';
import CaseStudiesSection from '../sections/CaseStudiesSection';
import WorkingProcessSection from '../sections/WorkingProcessSection';

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
      <Footer />
    </div>
  );
};

export default HomePage;