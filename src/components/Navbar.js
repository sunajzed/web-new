import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt, faGlobe, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setDropdown(dropdown === name ? null : name);
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center text-gray-900 font-bold text-xl">
          <img src="https://via.placeholder.com/50" alt="Logo" className="h-10 w-10 mr-3 rounded-full border border-gray-800" />
          ZedsoftTech
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['Investment', 'Learn', 'Company'].map((item) => (
            <div key={item} className="relative group">
              <button
                onClick={() => toggleDropdown(item)}
                className="text-gray-900 flex items-center hover:text-blue-600 transition duration-300"
              >
                {item} <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
              </button>
              <div className={`absolute bg-white shadow-lg rounded-lg mt-2 w-48 ${dropdown === item ? 'block' : 'hidden'} transition-all duration-300`} style={{ zIndex: 50 }}>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">Option 1</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">Option 2</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">Option 3</a>
              </div>
            </div>
          ))}
          <div className="relative group">
            <button
              onClick={() => toggleDropdown('language')}
              className="text-gray-900 flex items-center hover:text-blue-600 transition duration-300"
            >
              <FontAwesomeIcon icon={faGlobe} className="mr-1" /> EN <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </button>
            <div className={`absolute bg-white shadow-lg rounded-lg mt-2 w-32 ${dropdown === 'language' ? 'block' : 'hidden'} transition-all duration-300`} style={{ zIndex: 50 }}>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">EN</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">FR</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">ES</a>
            </div>
          </div>
          <a href="#" className="py-2 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 flex items-center">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" /> Login
          </a>
          <a href="#" className="py-2 px-4 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition duration-300 flex items-center">
            <FontAwesomeIcon icon={faUser} className="mr-2" /> Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="outline-none mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6 text-gray-900 hover:text-blue-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mobile-menu bg-white shadow-lg border-t border-gray-200`}>
        <ul className="space-y-2 py-4">
          {['Investment', 'Learn', 'Company'].map((item) => (
            <li key={item} className="relative">
              <button
                onClick={() => toggleDropdown(item)}
                className="w-full text-gray-900 flex items-center justify-between px-4 py-2 hover:bg-gray-100 transition duration-300"
              >
                {item}
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
              <div className={`absolute left-0 bg-white shadow-lg rounded-lg mt-2 w-full ${dropdown === item ? 'block' : 'hidden'}`} style={{ zIndex: 50 }}>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">Option 1</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">Option 2</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">Option 3</a>
              </div>
            </li>
          ))}
          <li className="relative">
            <button
              onClick={() => toggleDropdown('language')}
              className="w-full text-gray-900 flex items-center justify-between px-4 py-2 hover:bg-gray-100 transition duration-300"
            >
              <FontAwesomeIcon icon={faGlobe} className="mr-1" /> EN
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            <div className={`absolute left-0 bg-white shadow-lg rounded-lg mt-2 w-full ${dropdown === 'language' ? 'block' : 'hidden'}`} style={{ zIndex: 50 }}>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">EN</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">FR</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition duration-300">ES</a>
            </div>
          </li>
          <li>
            <a href="#" className="block text-center py-2 px-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300">
              <FontAwesomeIcon icon={faSignInAlt} className="mr-2" /> Login
            </a>
          </li>
          <li>
            <a href="#" className="block text-center py-2 px-4 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition duration-300">
              <FontAwesomeIcon icon={faUser} className="mr-2" /> Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
