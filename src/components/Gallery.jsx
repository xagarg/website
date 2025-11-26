import React from 'react';
import { menuItems } from '../mock';

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A visual feast of our plant-based creations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-xl group cursor-pointer"
              style={{
                gridColumn: index % 7 === 0 ? 'span 2' : 'span 1',
                gridRow: index % 7 === 0 ? 'span 2' : 'span 1'
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover min-h-[200px] group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-200">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};