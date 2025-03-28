
import React from 'react';
import { Scissors, Shirt, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const element = document.getElementById('barber');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-rmoda-black to-rmoda-navy text-white min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-6">
            <div className="bg-rmoda-red p-3 rounded-full">
              <Scissors size={32} />
            </div>
            <div className="bg-rmoda-purple p-3 rounded-full">
              <Shirt size={32} />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="block">Estilo & Elegância</span>
            <span className="block mt-2">Para Homens Modernos</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Barbearia de alta qualidade e moda masculina exclusiva reunidas em um só lugar. Transforme seu visual e eleve seu estilo.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => {
                const element = document.getElementById('barber');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="btn-primary w-full sm:w-auto"
            >
              Conheça a Barbearia
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('clothing');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="btn-secondary w-full sm:w-auto"
            >
              Veja Nossa Moda
            </button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
