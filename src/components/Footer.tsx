import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Union Bank</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-200">About Us</a></li>
              <li><a href="#" className="hover:text-blue-200">Careers</a></li>
              <li><a href="#" className="hover:text-blue-200">Investor Relations</a></li>
              <li><a href="#" className="hover:text-blue-200">News & Media</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products & Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-200">Savings Accounts</a></li>
              <li><a href="#" className="hover:text-blue-200">Current Accounts</a></li>
              <li><a href="#" className="hover:text-blue-200">Fixed Deposits</a></li>
              <li><a href="#" className="hover:text-blue-200">Loans</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-200">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-200">Customer Care</a></li>
              <li><a href="#" className="hover:text-blue-200">Grievance Redressal</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-200">Facebook</a></li>
              <li><a href="#" className="hover:text-blue-200">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-200">LinkedIn</a></li>
              <li><a href="#" className="hover:text-blue-200">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="text-center text-sm">
            <p>© 2025 Union Bank. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-blue-200">Privacy Policy</a>
              <a href="#" className="hover:text-blue-200">Terms & Conditions</a>
              <a href="#" className="hover:text-blue-200">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;