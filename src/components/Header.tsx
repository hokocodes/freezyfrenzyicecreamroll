import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-28 py-3">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center transition-transform hover:scale-105 flex-shrink-0"
            >
              <div className="h-24 w-24 rounded-full border-4 border-black overflow-hidden flex items-center justify-center bg-white shadow-md">
                <img
                  src="/images/logo.png"
                  alt="Freezy Frenzy Thai Ice Cream Roll"
                  className="h-full w-full object-contain"
                />
              </div>
            </button>
            <span className="text-lg sm:text-xl font-bold text-gray-800 hidden sm:inline leading-tight ml-2">Freezy Frenzy Thai Ice Cream Roll</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 ml-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-yellow-500 font-medium transition-colors py-2 px-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-yellow-500 font-medium transition-colors py-2 px-2"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-yellow-500 font-medium transition-colors py-2 px-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-yellow-500 font-medium transition-colors py-2 px-2"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-yellow-500 font-medium transition-colors py-2 px-2"
            >
              Contact
            </button>
          </nav>

          <div className="hidden lg:flex items-center space-x-4 ml-8">
            <div className="flex items-center space-x-2 text-gray-700 text-sm bg-gray-50 px-4 py-2 rounded-lg">
              <Phone className="w-4 h-4 text-yellow-500" />
              <span className="font-medium">(832) 230-3830</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700 text-sm bg-gray-50 px-4 py-2 rounded-lg">
              <MapPin className="w-4 h-4 text-yellow-500" />
              <span className="font-medium">Jersey Village, TX</span>
            </div>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-yellow-500 transition-colors ml-4"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-6">
            <nav className="flex flex-col space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-yellow-500 hover:bg-yellow-50 font-medium py-3 px-4 text-left transition-colors rounded-lg"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-gray-700 hover:text-yellow-500 hover:bg-yellow-50 font-medium py-3 px-4 text-left transition-colors rounded-lg"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-yellow-500 hover:bg-yellow-50 font-medium py-3 px-4 text-left transition-colors rounded-lg"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-yellow-500 hover:bg-yellow-50 font-medium py-3 px-4 text-left transition-colors rounded-lg"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-yellow-500 hover:bg-yellow-50 font-medium py-3 px-4 text-left transition-colors rounded-lg"
              >
                Contact
              </button>
            </nav>
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
              <div className="flex items-center space-x-2 text-gray-700 text-sm bg-gray-50 px-4 py-3 rounded-lg">
                <Phone className="w-4 h-4 text-yellow-500" />
                <span className="font-medium">(832) 230-3830</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700 text-sm bg-gray-50 px-4 py-3 rounded-lg">
                <MapPin className="w-4 h-4 text-yellow-500" />
                <span className="font-medium">Jersey Village, TX</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;