
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <span className="text-indigo-400">React</span>Site
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">Home</a>
          <a href="#features" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">Features</a>
          <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">About</a>
          <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">Contact</a>
        </nav>
        <div className="md:hidden">
            <button className="text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
