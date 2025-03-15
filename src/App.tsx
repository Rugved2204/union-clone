import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import QuickLinks from './components/QuickLinks';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-3">
            <QuickLinks />
          </div>
          <div className="md:col-span-6">
            <MainContent />
          </div>
          <div className="md:col-span-3">
            <div className="bg-blue-500 text-white rounded">
              <h2 className="bg-blue-600 text-white py-2 px-4 text-base font-medium rounded-t">Know Your User ID</h2>
              <div className="p-3 space-y-2">
                <button className="w-full bg-red-600 text-white py-1.5 px-4 text-sm rounded hover:bg-red-700">
                  Retail User Login
                </button>
                <button className="w-full bg-red-600 text-white py-1.5 px-4 text-sm rounded hover:bg-red-700">
                  Corporate User Login
                </button>
                <button className="w-full bg-red-600 text-white py-1.5 px-4 text-sm rounded hover:bg-red-700">
                  Self User Creation
                </button>
                <button className="w-full bg-red-600 text-white py-1.5 px-4 text-sm rounded hover:bg-red-700">
                  Forgot/Create Password
                </button>
                <button className="w-full bg-red-600 text-white py-1.5 px-4 text-sm rounded hover:bg-red-700">
                  Password Creation (Processor)
                </button>
                <button className="w-full bg-red-600 text-white py-1.5 px-4 text-sm rounded hover:bg-red-700">
                  Register For Mobile Banking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;