import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-blue-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Banking Made Simple, Secure, and Smart
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              Experience next-generation banking with cutting-edge digital solutions and personalized services.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 flex items-center">
                Open Account <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
              alt="Digital Banking"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;