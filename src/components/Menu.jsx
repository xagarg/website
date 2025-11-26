import React, { useState } from 'react';
import { menuItems } from '../mock';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

export const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(menuItems.map(item => item.category))];

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our delicious plant-based creations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={selectedCategory === category
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                : 'border-emerald-600 text-emerald-600 hover:bg-emerald-50'
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-full font-bold">
                  {item.price}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-emerald-600 font-semibold mb-2">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};