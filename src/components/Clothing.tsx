
import React from 'react';
import { Shirt } from 'lucide-react';

interface ClothingItemProps {
  title: string;
  description: string;
  price: string;
  category: string;
}

const ClothingItem: React.FC<ClothingItemProps> = ({ title, description, price, category }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <Shirt className="text-gray-400" size={64} />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-rmoda-purple rounded-full mb-2">
          {category}
        </span>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-rmoda-navy">{title}</h3>
          <span className="text-lg font-bold text-rmoda-red">{price}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Clothing: React.FC = () => {
  const clothingItems = [
    {
      title: "Camisa Social Slim",
      description: "Camisa de algodão premium com caimento perfeito e acabamento refinado.",
      price: "R$ 129,90",
      category: "Camisas",
    },
    {
      title: "Camisa Polo Básica",
      description: "Confortável, estilosa e versátil para diversas ocasiões.",
      price: "R$ 89,90",
      category: "Camisas",
    },
    {
      title: "Camisa Estampada",
      description: "Design exclusivo com padronagem moderna e tecido respirável.",
      price: "R$ 119,90",
      category: "Camisas",
    },
    {
      title: "Camisa Jeans",
      description: "Peça atemporal com lavagem premium e botões personalizados.",
      price: "R$ 149,90",
      category: "Camisas",
    },
    {
      title: "Camisa Linho",
      description: "Ideal para ocasiões especiais com toque suave e elegante.",
      price: "R$ 159,90",
      category: "Camisas",
    },
    {
      title: "Camisa Manga Curta",
      description: "Perfeita para dias quentes com design moderno e confortável.",
      price: "R$ 99,90",
      category: "Camisas",
    },
  ];

  return (
    <section id="clothing" className="py-16 bg-rmoda-navy text-white">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-4 mb-12">
          <Shirt className="text-rmoda-purple" size={28} />
          <h2 className="section-title text-center text-white">Moda Masculina</h2>
        </div>
        
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
          Oferecemos uma seleção exclusiva de roupas masculinas de alta qualidade que combinam estilo, 
          conforto e durabilidade. Encontre o look perfeito para qualquer ocasião.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clothingItems.map((item, index) => (
            <ClothingItem 
              key={index} 
              title={item.title} 
              description={item.description} 
              price={item.price} 
              category={item.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clothing;
