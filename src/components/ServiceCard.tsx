import React from 'react';
import { Clock } from 'lucide-react';

interface ServiceCardProps {
  service: {
    name: string;
    price: string;
    duration: string;
    description: string;
  };
  onSelect: (service: string) => void;
  isSelected: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect, isSelected }) => {
  const handleSelect = () => {
    onSelect(service.name);
    
    const reservarSection = document.getElementById('reservar');
    if (reservarSection) {
      reservarSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`bg-gray-800 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 border-2 ${
        isSelected ? 'border-purple-400' : 'border-transparent'
      }`}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-100 mb-2">{service.name}</h3>
        <p className="text-gray-400 mb-4">{service.description}</p>
        <div className="flex items-center text-gray-400 mb-4">
          <Clock className="h-5 w-5 mr-2" />
          <span>{service.duration}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-purple-400">{service.price}</span>
          <button
            onClick={handleSelect}
            className={`px-4 py-2 rounded-lg transition-colors ${
              isSelected
                ? 'bg-purple-400 text-gray-900 hover:bg-purple-300'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {isSelected ? 'Seleccionado' : 'Seleccionar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;