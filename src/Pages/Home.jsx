import React from 'react';
import HeroSection from '../Components/HeroSection';
import TryServiceSection from '../Components/TryServiceSection';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <main className="bg-[#0f172a] text-white">
      <HeroSection />
      <TryServiceSection />
      <Footer />
    </main>
  );
};

export default Home;
