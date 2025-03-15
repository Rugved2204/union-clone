import React from 'react';
import { Shield, Building2, Users2, Wallet } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Banking",
      description: "State-of-the-art security measures to protect your financial data and transactions"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Nationwide Presence",
      description: "Access our services through our extensive network of branches and ATMs"
    },
    {
      icon: <Users2 className="h-8 w-8" />,
      title: "Personal Support",
      description: "Dedicated relationship managers for personalized banking solutions"
    },
    {
      icon: <Wallet className="h-8 w-8" />,
      title: "Digital Wallet",
      description: "Convenient mobile payments and transfers through our digital wallet"
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Union Bank</h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience banking excellence with our comprehensive range of services
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-900">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;