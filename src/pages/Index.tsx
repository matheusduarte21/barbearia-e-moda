
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Clothing from '../components/Clothing';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Clothing />
        <Gallery />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="5583999999999" />
    </div>
  );
};

export default Index;
