import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail } from 'lucide-react';
import DatePicker from './DatePicker';

interface BookingSectionProps {
  selectedService: string;
}

const BookingSection: React.FC<BookingSectionProps> = ({ selectedService }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    alert('¡Reserva realizada con éxito!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  if (!selectedService) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">
          Selecciona un servicio arriba para comenzar tu reserva
        </p>
      </div>
    );
  }

  const formatDateTime = (date: Date) => {
    return {
      date: date.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      time: date.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }),
    };
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Reservar {selectedService}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8 bg-gray-800 p-8 rounded-xl">
        <div className="mb-6">
          <button
            type="button"
            onClick={() => setShowDatePicker(true)}
            className="w-full flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-600 text-gray-100 py-3 px-4 rounded-lg transition-colors"
          >
            <Calendar className="h-5 w-5" />
            <span>
              {selectedDate ? (
                <span>
                  {formatDateTime(selectedDate).date} - {formatDateTime(selectedDate).time}h
                </span>
              ) : (
                'Seleccionar fecha y hora'
              )}
            </span>
          </button>
        </div>

        {showDatePicker && (
          <DatePicker
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
            onClose={() => setShowDatePicker(false)}
          />
        )}

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-300">
              <User className="h-4 w-4 mr-2" />
              Nombre completo
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-2.5 text-gray-100 focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-2.5 text-gray-100 focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                Teléfono
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-2.5 text-gray-100 focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={!selectedDate}
          className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-gray-900 font-semibold py-3 px-4 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Confirmar Reserva
        </button>
      </form>
    </div>
  );
};

export default BookingSection;