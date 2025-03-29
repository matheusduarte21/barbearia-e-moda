
import React, { useState } from 'react';
import { Menu, X, Scissors, Shirt } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-rmoda-black text-white sticky top-0 z-40 shadow-md">
      <div className="container-custom py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">Rmoda_masculinajp</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="hover:text-rmoda-red transition-colors">
            Início
          </button>
          <button onClick={() => scrollToSection('barber')} className="hover:text-rmoda-red transition-colors">
            Barbearia
          </button>
          <button onClick={() => scrollToSection('clothing')} className="hover:text-rmoda-red transition-colors">
            Moda
          </button>
          <button onClick={() => scrollToSection('gallery')} className="hover:text-rmoda-red transition-colors">
            Galeria
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-rmoda-red transition-colors">
            Contato
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-rmoda-black absolute top-full left-0 right-0 z-30 border-t border-gray-800">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="py-2 hover:text-rmoda-red transition-colors text-left"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('barber')} 
              className="py-2 hover:text-rmoda-red transition-colors text-left"
            >
              Barbearia
            </button>
            <button 
              onClick={() => scrollToSection('clothing')} 
              className="py-2 hover:text-rmoda-red transition-colors text-left"
            >
              Moda
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="py-2 hover:text-rmoda-red transition-colors text-left"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="py-2 hover:text-rmoda-red transition-colors text-left"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
