import React from 'react';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';
import { restaurantInfo } from '../mock';
import { Card, CardContent } from './ui/card';
import MapPi from './MapPi';

export const Location = () => {
  const { hours, location } = restaurantInfo;

  return (
    <section id="location" className="py-20 bg-gradient-to-br from-emerald-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Come experience the best vegan cuisine in Lisbon
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Hours Card */}
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Clock className="w-8 h-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Monday</span>
                  <span className="text-gray-600">{hours.monday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Tuesday</span>
                  <span className="text-gray-600">{hours.tuesday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Wednesday</span>
                  <span className="text-gray-600">{hours.wednesday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Thursday</span>
                  <span className="text-gray-600">{hours.thursday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Friday</span>
                  <span className="text-gray-600">{hours.friday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Saturday</span>
                  <span className="text-gray-600">{hours.saturday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Sunday</span>
                  <span className="text-gray-600">{hours.sunday}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info Card */}
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Location</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-lg text-gray-700">
                    {location.address}
                  </p>
                  <p className="text-lg text-gray-700">
                    {location.city}, {location.state} {location.zip}
                  </p>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Phone</p>
                    <a href={`tel:${location.phone}`} className="text-lg text-gray-900 hover:text-emerald-600 transition-colors">
                      {location.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <a href={`mailto:${location.email}`} className="text-lg text-gray-900 hover:text-emerald-600 transition-colors">
                      {location.email}
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Placeholder */}
        <div className="mt-8 rounded-2xl overflow-hidden shadow-xl h-96">
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">{MapPi}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};