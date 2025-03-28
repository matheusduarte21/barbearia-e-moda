
import React from 'react';
import { Phone, MapPin, Instagram, Facebook, Scissors, Shirt } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-rmoda-black text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="text-rmoda-red" size={20} />
              <Shirt className="text-rmoda-purple" size={20} />
              <h3 className="text-xl font-bold">Rmoda_masculinajp</h3>
            </div>
            <p className="text-gray-400 text-center md:text-left">
              Estilo e elegância para homens modernos. Barbearia e moda masculina em um só lugar.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Horário de Funcionamento</h3>
            <ul className="text-gray-400">
              <li className="mb-2">Segunda a Sexta: 09h às 19h</li>
              <li className="mb-2">Sábado: 09h às 18h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="text-gray-400">
              <li className="flex items-center gap-2 mb-3">
                <Phone size={16} className="text-rmoda-red" />
                <span>(83) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-rmoda-red" />
                <span>João Pessoa, PB</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-full hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-full hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Rmoda_masculinajp. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
