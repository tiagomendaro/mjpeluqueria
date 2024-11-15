import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scissors, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        const sections = ['servicios', 'reservar', 'galeria'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        setActiveSection(currentSection || '');
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [location]);

  // Nuevo useEffect para hacer scroll al inicio cuando cambias de ruta
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/sobre-nosotros', label: 'Sobre Nosotros' },
  ];

  const homeLinks = [
    { id: 'servicios', label: 'Servicios' },
    { id: 'reservar', label: 'Reservar' },
    { id: 'galeria', label: 'Galería' },
  ];

  return (
    <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-4">
          <Scissors className="h-6 w-6 text-purple-400" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Mj Perruquers
          </h1>
        </Link>

        <button
          className="lg:hidden text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <nav className={`flex lg:flex space-x-8 ${isMenuOpen ? 'flex-col absolute top-16 left-0 w-full bg-gray-800 border-t border-gray-700 p-4' : 'hidden lg:flex'}`}>
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`px-3 py-1.5 rounded-lg transition-all duration-300 ${location.pathname === path
                ? 'bg-purple-400/10 text-purple-400 font-medium'
                : 'text-gray-300 hover:text-purple-400 hover:bg-purple-400/5'
              }`}
            >
              {label}
            </Link>  
          ))}

          {location.pathname === '/' &&
            homeLinks.map(({ id, label }) => (
              <a
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-3 py-1.5 rounded-lg transition-all duration-300 ${activeSection === id
                  ? 'bg-purple-400/10 text-purple-400 font-medium'
                  : 'text-gray-300 hover:text-purple-400 hover:bg-purple-400/5'
                } cursor-pointer`}
              >
                {label}
              </a>
            ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
