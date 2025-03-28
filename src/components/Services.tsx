
import React from 'react';
import { Scissors } from 'lucide-react';

interface ServiceProps {
  title: string;
  description: string;
  price: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, price }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-rmoda-navy">{title}</h3>
        <span className="text-lg font-bold text-rmoda-red">{price}</span>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Corte Clássico",
      description: "Corte tradicional com acabamento perfeito e toalha quente.",
      price: "R$ 35",
    },
    {
      title: "Corte Degradê",
      description: "Técnica moderna com transição suave entre diferentes alturas.",
      price: "R$ 45",
    },
    {
      title: "Barba Completa",
      description: "Modelagem, hidratação e finalização com produtos premium.",
      price: "R$ 30",
    },
    {
      title: "Combo Corte + Barba",
      description: "Tratamento completo para cabelo e barba com desconto especial.",
      price: "R$ 65",
    },
    {
      title: "Pigmentação",
      description: "Realce da cor e definição para barbas e cabelos.",
      price: "R$ 40",
    },
    {
      title: "Sobrancelha",
      description: "Design e alinhamento para realçar sua expressão.",
      price: "R$ 15",
    },
  ];

  return (
    <section id="barber" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-4 mb-12">
          <Scissors className="text-rmoda-red" size={28} />
          <h2 className="section-title text-center">Serviços de Barbearia</h2>
        </div>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Nossa barbearia oferece uma experiência premium com profissionais qualificados e produtos de alta qualidade. Conheça nossos serviços e transforme seu visual.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              price={service.price} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
