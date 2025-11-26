import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-emerald-600">Vegan Junkies</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('reservations')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Book a Table
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-700 hover:text-emerald-600 font-medium py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left text-gray-700 hover:text-emerald-600 font-medium py-2"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-700 hover:text-emerald-600 font-medium py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left text-gray-700 hover:text-emerald-600 font-medium py-2"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="block w-full text-left text-gray-700 hover:text-emerald-600 font-medium py-2"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-700 hover:text-emerald-600 font-medium py-2"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('reservations')}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Book a Table
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};