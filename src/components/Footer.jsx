import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-900 text-2xl font-bold">FlingBizzz</span>
            <p className="text-gray-600 mt-2">Build faster. Build better. Build together.</p>
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition">Terms</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>© 2025 FlingBizzz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;