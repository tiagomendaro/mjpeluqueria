import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';  // Importamos el icono de WhatsApp

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/34695087050"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-300"
      title="Reserva con nosotros en WhatsApp"
    >
      <FaWhatsapp className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
