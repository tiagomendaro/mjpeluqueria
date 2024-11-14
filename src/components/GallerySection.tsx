import React from 'react';

const GallerySection: React.FC = () => {
  const gallery = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=600',
      title: 'Corte Moderno',
      description: 'Estilo urbano con degradado'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&q=80&w=600',
      title: 'Peinado Elegante',
      description: 'Acabado profesional para eventos'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1584297091622-af8e5bd80b13?auto=format&fit=crop&q=80&w=600',
      title: 'Color y Estilo',
      description: 'Transformación completa'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=600',
      title: 'Corte Clásico',
      description: 'Elegancia intemporal'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=600',
      title: 'Estilo Texturizado',
      description: 'Volumen y movimiento'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=600',
      title: 'Acabado Natural',
      description: 'Look fresco y juvenil'
    }
  ];

  return (
    <section id="galeria" className="py-16 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
          Nuestros Trabajos
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Explora nuestra galería de estilos y transformaciones realizadas por nuestro equipo de profesionales
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-xl bg-gray-800 transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;