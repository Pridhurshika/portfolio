import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold gradient-text">RP</div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center space-x-8">
            <li><a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a></li>
            <li><a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a></li>
            <li><a href="#education" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
              Education
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a></li>
            <li><a href="#research" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
              Research
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a></li>
            <li><a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a></li>
            <li><a href="#activities" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
              Activities
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a></li>
          </ul>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <ul className="md:hidden pb-4 space-y-3">
            <li><a href="#home" onClick={handleLinkClick} className="block text-gray-800 hover:text-blue-600 transition-colors font-medium">Home</a></li>
            <li><a href="#skills" onClick={handleLinkClick} className="block text-gray-800 hover:text-blue-600 transition-colors font-medium">Skills</a></li>
            <li><a href="#education" onClick={handleLinkClick} className="block text-gray-800 hover:text-blue-600 transition-colors font-medium">Education</a></li>
            <li><a href="#research" onClick={handleLinkClick} className="block text-gray-800 hover:text-blue-600 transition-colors font-medium">Research</a></li>
            <li><a href="#projects" onClick={handleLinkClick} className="block text-gray-800 hover:text-blue-600 transition-colors font-medium">Projects</a></li>
            <li><a href="#activities" onClick={handleLinkClick} className="block text-gray-800 hover:text-blue-600 transition-colors font-medium">Activities</a></li>
            <li><a href="#contact" onClick={handleLinkClick} className="block text-gray-800 hover:text-blue-600 transition-colors font-medium">Contact</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

