import React from 'react';
import { Leaf, Heart, Users, Award } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: <Leaf className="w-12 h-12 text-emerald-600" />,
      title: "100% Plant-Based",
      description: "Every dish is crafted with fresh, locally-sourced plant ingredients"
    },
    {
      icon: <Heart className="w-12 h-12 text-emerald-600" />,
      title: "Made with Love",
      description: "Our chefs pour passion into every plate, creating memorable experiences"
    },
    {
      icon: <Users className="w-12 h-12 text-emerald-600" />,
      title: "Community First",
      description: "We support local farmers and sustainable farming practices"
    },
    {
      icon: <Award className="w-12 h-12 text-emerald-600" />,
      title: "Award Winning",
      description: "Recognized for excellence in vegan cuisine and sustainability"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-emerald-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Welcome to Vegan Junkies, where we prove that plant-based dining can be delicious, satisfying, and exciting. Founded in 2020, we've been on a mission to revolutionize vegan cuisine.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our menu features creative vegan dishes made from fresh, locally-sourced ingredients. We believe in sustainability, community, and most importantly, incredible flavor.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're a committed vegan or just curious about plant-based eating, we invite you to experience food that's good for you and the planet.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxwbGFudCUyMGJhc2VkfGVufDB8fHx8MTc2MzEzMjYxOXww&ixlib=rb-4.1.0&q=85"
                alt="Fresh vegan ingredients"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};