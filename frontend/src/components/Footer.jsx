import React from 'react';
import { Facebook, Instagram, Twitter, Leaf } from 'lucide-react';
import { restaurantInfo } from '../mock';

export const Footer = () => {
  const { location } = restaurantInfo;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Leaf className="w-8 h-8 text-emerald-500 mr-2" />
              <h3 className="text-2xl font-bold">Vegan Junkies</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Plant-Based. Flavor-Packed. Experience the best vegan cuisine in town.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-500 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-500 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-500 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#reservations" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200">
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{location.address}</li>
              <li>{location.city}, {location.state} {location.zip}</li>
              <li>
                <a href={`tel:${location.phone}`} className="hover:text-emerald-500 transition-colors duration-200">
                  {location.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${location.email}`} className="hover:text-emerald-500 transition-colors duration-200">
                  {location.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Vegan Junkies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};