import React, { useState } from 'react';

const Navbar = () => {
  const [isInvestmentOpen, setInvestmentOpen] = useState(false);
  const [isLearnOpen, setLearnOpen] = useState(false);
  const [isLanguageOpen, setLanguageOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Logo</div>
        <div className="flex items-center">
          <div className="relative">
            <button
              onClick={() => setInvestmentOpen(!isInvestmentOpen)}
              className="text-white px-4 py-2"
            >
              Investment
            </button>
            {isInvestmentOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Investment 1</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Investment 2</a>
              </div>
            )}
          </div>

          <div className="relative ml-4">
            <button
              onClick={() => setLearnOpen(!isLearnOpen)}
              className="text-white px-4 py-2"
            >
              Learn
            </button>
            {isLearnOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">FAQ</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Glossary</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Blog</a>
              </div>
            )}
          </div>

          <a href="#" className="text-white px-4 py-2">Sign In</a>
          <a href="#" className="text-white px-4 py-2">Sign Up</a>

          <div className="relative ml-4">
            <button
              onClick={() => setLanguageOpen(!isLanguageOpen)}
              className="text-white px-4 py-2"
            >
              Language
            </button>
            {isLanguageOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">English</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Spanish</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">French</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
