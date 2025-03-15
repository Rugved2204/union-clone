import React from 'react';
import { Phone, Globe } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-50">
      <div className="bg-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img 
                src="https://www.unionbankonline.co.in/images/union-bank.png" 
                alt="Union Bank Logo" 
                className="h-12"
              />
              <img 
                src="https://www.unionbankonline.co.in/images/azadi-ka-amrit-mahotsav.png" 
                alt="Azadi Ka Amrit Mahotsav" 
                className="h-12"
              />
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-sm">
                <Globe className="h-4 w-4 mr-1" />
                <span>Language: </span>
                <select className="ml-1 text-sm border-none focus:ring-0">
                  <option>Choose Language</option>
                </select>
              </div>
              <div>
                <div className="text-sm">All-India Toll Free Number</div>
                <div className="flex items-center text-blue-600 text-sm">
                  <Phone className="h-3 w-3 mr-1" />
                  <span>1800 222 244 / 1800 425 15 15</span>
                </div>
                <div className="flex items-center text-blue-600 text-sm">
                  <Phone className="h-3 w-3 mr-1" />
                  <span>1800 208 2244 / 1800 22 22 44</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-600">
        <div className="container mx-auto">
          <nav className="flex text-white text-sm">
            <a href="#" className="py-1.5 px-4 hover:bg-red-700 border-r border-red-400">User Guide & FAQs</a>
            <a href="#" className="py-1.5 px-4 hover:bg-red-700 border-r border-red-400">Central / State Govt. Tax</a>
            <a href="#" className="py-1.5 px-4 hover:bg-red-700 border-r border-red-400">Fees / Bills</a>
            <a href="#" className="py-1.5 px-4 hover:bg-red-700 border-r border-red-400">Download Application Forms</a>
            <a href="#" className="py-1.5 px-4 hover:bg-red-700 border-r border-red-400">Other Services</a>
            <a href="#" className="py-1.5 px-4 hover:bg-red-700">Contact Us</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;