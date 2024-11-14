import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import BookingSection from '../components/BookingSection';
import GallerySection from '../components/GallerySection';

function Home() {
  const services = [
    {
      id: 1,
      name: 'Corte de Cabello',
      price: '9€',
      duration: '30 min',
      description: 'Corte profesional adaptado a tu estilo',
    },
    {
      id: 2,
      name: 'Peinado',
      price: '19€',
      duration: '45 min',
      description: 'Peinado elegante para cualquier ocasión',
    },
    {
      id: 3,
      name: 'Tinte',
      price: '32€',
      duration: '2 hrs',
      description: 'Coloración completa con productos premium',
    },
  ];

  const [selectedService, setSelectedService] = useState(services[0].name);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Reserva tu cita hoy
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transforma tu imagen con nuestros servicios profesionales de belleza
          </p>
        </div>

        <section id="servicios" className="mb-20 scroll-mt-24">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={setSelectedService}
                isSelected={selectedService === service.name}
              />
            ))}
          </div>
        </section>

        <section id="reservar" className="mb-20 scroll-mt-24">
          <BookingSection selectedService={selectedService} />
        </section>
      </div>

      <section id="galeria" className="scroll-mt-24">
        <GallerySection />
      </section>
    </div>
  );
}

export default Home;