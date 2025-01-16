import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HeroSection from '../sections/HeroSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <Footer />
    </div>
  );
};

export default HomePage;