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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center border-2 border-black">
              <span className="text-black font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Freezy Frenzy Ice Cream Roll</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-600 hover:text-yellow-500 font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-gray-600 hover:text-yellow-500 font-medium transition-colors"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-yellow-500 font-medium transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-gray-600 hover:text-yellow-500 font-medium transition-colors"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-yellow-500 font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-gray-600 text-sm">
              <Phone className="w-4 h-4" />
              <span>(832) 230-3830</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Jersey Village, TX</span>
            </div>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-600 hover:text-yellow-500 font-medium py-2 text-left transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-gray-600 hover:text-yellow-500 font-medium py-2 text-left transition-colors"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-yellow-500 font-medium py-2 text-left transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-gray-600 hover:text-yellow-500 font-medium py-2 text-left transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-yellow-500 font-medium py-2 text-left transition-colors"
              >
                Contact
              </button>
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-1 text-gray-600 text-sm mb-2">
                <Phone className="w-4 h-4" />
                <span>(832) 230-3830</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Jersey Village, TX</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;