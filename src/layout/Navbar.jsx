// src/layout/Navbar.jsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ scrollToSection, sectionRefs }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleNavigation = (sectionName) => {
    if (sectionName === 'home') {
      // Use the same scrollToSection function for consistency
      if (scrollToSection && sectionRefs && sectionRefs[sectionName]) {
        scrollToSection(sectionRefs[sectionName], sectionName);
      }
    } else if (scrollToSection && sectionRefs && sectionRefs[sectionName]) {
      // Pass both the ref AND the section ID
      scrollToSection(sectionRefs[sectionName], sectionName);
    }
    setIsOpen(false);
  };
  
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigation('home')}
              className="flex items-center cursor-pointer"
            >
              <img 
                src="/logo.PNG"
                className="h-6 w-auto sm:h-8 md:h-10 lg:h-12" 
                alt="Art of Azyl"
              />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('home')}
              className="text-gray-700 hover:text-green-600 hover:bg-gray-50 font-medium transition duration-300 cursor-pointer"
            >
              HOME
            </button>
            <button 
              onClick={() => handleNavigation('about')}
              className="text-gray-700 hover:text-green-600 font-medium transition duration-300 cursor-pointer"
            >
              ABOUT
            </button>
            <button 
              onClick={() => handleNavigation('services')}
              className="text-gray-700 hover:text-green-600 font-medium transition duration-300 cursor-pointer"
            >
              SERVICES
            </button>
            <button 
              onClick={() => handleNavigation('gallery')}
              className="text-gray-700 hover:text-green-600 font-medium transition duration-300 cursor-pointer"
            >
              GALLERY
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-400 transition duration-300 font-medium cursor-pointer"
            >
              CONTACT ME
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button 
              onClick={() => handleNavigation('home')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium cursor-pointer"
            >
              HOME
            </button>
            <button 
              onClick={() => handleNavigation('about')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium cursor-pointer"
            >
              ABOUT
            </button>
            <button 
              onClick={() => handleNavigation('services')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium cursor-pointer"
            >
              SERVICES
            </button>
            <button 
              onClick={() => handleNavigation('gallery')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md font-medium cursor-pointer"
            >
              GALLERY
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="w-full text-center px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-400 font-medium mt-2 cursor-pointer"
            >
              CONTACT ME
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;