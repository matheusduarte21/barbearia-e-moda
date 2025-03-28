
import React from 'react';

const Gallery: React.FC = () => {
  // In a real application, these would be actual image paths
  const galleryItems = [
    {
      type: "haircut",
      title: "Degradê Moderno",
      description: "Técnica de corte contemporânea com transições suaves",
    },
    {
      type: "haircut",
      title: "Corte Clássico",
      description: "Estilo tradicional com acabamento impecável",
    },
    {
      type: "haircut",
      title: "Barba Modelada",
      description: "Design e acabamento perfeito para sua barba",
    },
    {
      type: "clothing",
      title: "Camisa Social Premium",
      description: "Elegância e conforto para ocasiões especiais",
    },
    {
      type: "clothing",
      title: "Polo Casual",
      description: "Estilo descontraído sem perder a elegância",
    },
    {
      type: "clothing",
      title: "Conjunto Completo",
      description: "Look harmonioso com nossas peças exclusivas",
    },
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">Nossa Galeria</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className={`aspect-square rounded-lg overflow-hidden relative shadow-md group`}
            >
              <div className={`absolute inset-0 ${
                item.type === "haircut" 
                  ? "bg-gradient-to-br from-rmoda-red/20 to-rmoda-black/40" 
                  : "bg-gradient-to-br from-rmoda-purple/20 to-rmoda-navy/40"
              } flex items-center justify-center`}>
                <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                  <span className="text-gray-400 text-lg">Imagem {index + 1}</span>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
