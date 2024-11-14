import React from 'react';

import image1 from '../imgs/1.png';

const AboutUs = () => {
  const sections = [
    {
      title: 'Nuestra Historia',
      text: 'Desde 2010, Mj Perruquers ha sido sinónimo de excelencia en el cuidado del cabello. Comenzamos con la visión de crear un espacio donde cada cliente pudiera sentirse especial y transformado. A lo largo de los años, hemos cultivado un equipo de profesionales apasionados y talentosos que comparten nuestra dedicación por la belleza y el servicio personalizado.',
      image: image1,
      imageAlt: 'Interior del salón'
    },
    {
      title: 'Nuestro Equipo',
      text: 'Contamos con un equipo de estilistas expertos, cada uno especializado en diferentes técnicas y estilos. Nos mantenemos al día con las últimas tendencias y técnicas a través de capacitación continua y participación en eventos internacionales de belleza. Nuestro compromiso es ofrecer servicios de la más alta calidad, adaptados a las necesidades individuales de cada cliente.',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
      imageAlt: 'Equipo de estilistas'
    },
    {
      title: 'Nuestro Compromiso',
      text: 'En Mj Perruquers, nos comprometemos a utilizar productos de primera calidad y técnicas innovadoras para garantizar los mejores resultados. Creemos en crear un ambiente acogedor donde puedas relajarte mientras te mimamos. Nuestra filosofía se centra en realzar tu belleza natural mientras cuidamos la salud de tu cabello.',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
      imageAlt: 'Productos de calidad'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Sobre Nosotros
      </h1>

      <div className="space-y-24">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } gap-8 items-center`}
          >
            <div className="lg:w-1/2 space-y-4">
              <h2 className="text-2xl font-bold text-purple-400">{section.title}</h2>
              <p className="text-gray-300 leading-relaxed">{section.text}</p>
            </div>
            <div className="lg:w-1/2">
              <img
                src={section.image}
                alt={section.imageAlt}
                className="rounded-xl shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <h2 className="text-2xl font-bold text-purple-400 mb-8">Encuéntranos</h2>
        <div className="h-[400px] rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.5776557498927!2d2.2225846!3d41.417893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bb7c9b3c5c73%3A0x15fe088b2d8af8be!2sAv.%20de%20la%20Platja%2C%2070%2C%2008930%20Sant%20Adri%C3%A0%20de%20Bes%C3%B2s%2C%20Barcelona!5e0!3m2!1sen!2ses!4v1710799547959!5m2!1sen!2ses"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;