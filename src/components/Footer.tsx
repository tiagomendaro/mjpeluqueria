import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-32">
          {/* Logo and Social */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mj Perruquers

              </h2>
            </Link>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <a href="/#servicios" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/#galeria" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Galería
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Avinguda de la Platja, 70, 72, 08930 Sant Adrià de Besòs, Barcelona</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <span>+34 123 456 789</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@bellasalon.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Horario</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Clock className="h-5 w-5 mr-2" />
                <div>
                  <p>Lunes a Viernes</p>
                  <p>9:30 - 19:00</p>
                </div>
              </li>
              <li className="flex items-center text-gray-400">
                <Clock className="h-5 w-5 mr-2" />
                <div>
                  <p>Sábado</p>
                  <p>9:30 - 13:30</p>
                </div>
              </li>
              <li className="flex items-center text-gray-400">
                <Clock className="h-5 w-5 mr-2" />
                <div>
                  <p>Domingo</p>
                  <p>Cerrado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;