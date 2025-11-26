import React from 'react';
import { Button } from './ui/button';

export const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-16 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-100"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23059669" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Plant-Based.<br />
              <span className="text-emerald-600">Flavor-Packed.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience the best vegan cuisine in town. Fresh ingredients, bold flavors, and dishes that'll make you forget you're eating plants.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('menu')}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg"
              >
                View Menu
              </Button>
              <Button
                onClick={() => scrollToSection('reservations')}
                variant="outline"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-6 text-lg"
              >
                Book a Table
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHx2ZWdhbiUyMGZvb2R8ZW58MHx8fHwxNzYzMTMyNjEzfDA&ixlib=rb-4.1.0&q=85"
                alt="Delicious vegan food"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <p className="text-sm text-gray-600 mb-1">Open Daily</p>
              <p className="text-2xl font-bold text-emerald-600">12PM - 11PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
