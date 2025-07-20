import React from 'react';
import HeroSection from '../components/HeroSection';
import TryServiceSection from '../Components/TryServiceSection';
import Footer from '../components/Footer';

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
