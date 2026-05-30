// src/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = ({ scrollToSection, sectionRefs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Track which section is currently in view
  useEffect(() => {
    const handleScrollSpy = () => {
      if (!sectionRefs) return;
      
      const scrollPosition = window.scrollY + 150; // Offset for navbar
      
      // Check each section to see if it's in view
      for (const [sectionName, ref] of Object.entries(sectionRefs)) {
        if (ref && ref.current) {
          const element = ref.current;
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionName);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy(); // Call immediately to set initial active section
    
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [sectionRefs]);
  
  const handleNavigation = (sectionName) => {
    if (scrollToSection && sectionRefs && sectionRefs[sectionName]) {
      scrollToSection(sectionRefs[sectionName], sectionName);
    }
    setActiveSection(sectionName);
    setIsOpen(false);
  };
  
  const navItems = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'SERVICES', id: 'services' },
    { name: 'GALLERY', id: 'gallery' },
  ];
  
  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl py-2' 
          : 'bg-gradient-to-r from-white via-white/95 to-white/90 backdrop-blur-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex items-center group">
              <button 
                onClick={() => handleNavigation('home')}
                className="flex items-center gap-3 cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className="relative">
                  <div className="absolute -inset-1 to-emerald-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                  <img 
                    src="/logo.PNG"
                    className="h-10 w-auto sm:h-12 md:h-14 relative rounded-full" 
                    alt="Art of Azyl"
                  />
                </div>
                
                {/* Full name and tagline - visible only on laptops/desktops (md and above) */}
                <div className="hidden lg:block">
                  <div>
                    <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      Art of
                    </span>
                    <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                      {" "}Azyl
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 -mt-1">Art that speaks, craft that lasts.</p>
                </div>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`relative px-3 py-2 text-sm font-semibold cursor-pointer tracking-wide transition-all duration-300 group
                    ${activeSection === item.id 
                      ? 'text-green-600' 
                      : 'text-gray-700 hover:text-green-600'
                    }`}
                >
                  {item.name}
                  {/* Underline that changes with active section */}
                  <span 
                    className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-200
                      ${activeSection === item.id 
                        ? 'scale-x-100 opacity-100' 
                        : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                      }`}
                  />
                  
                  
                </button>
              ))}
              
              {/* Contact Button */}
              <button 
                onClick={() => handleNavigation('contact')}
                className="relative group overflow-hidden rounded-full cursor-pointer bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-2.5 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  CONTACT
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden fixed inset-x-0 top-[72px] bottom-0 bg-white/98 backdrop-blur-lg shadow-2xl animate-slide-down z-40">
            <div className="flex flex-col h-full">
              <div className="flex-1 px-6 py-8 space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`group w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105
                      ${activeSection === item.id 
                        ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500' 
                        : 'bg-gray-50 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50'
                      }`}
                  >
                    <span className={`text-lg font-semibold flex items-center justify-between
                      ${activeSection === item.id ? 'text-green-600' : 'text-gray-800 group-hover:text-green-600'}
                    `}>
                      {item.name}
                      <ChevronRight className={`w-5 h-5 transition-all
                        ${activeSection === item.id ? 'text-green-500 translate-x-1' : 'text-gray-400 group-hover:text-green-500 group-hover:translate-x-1'}
                      `} />
                    </span>
                  </button>
                ))}
              </div>
              
              {/* Mobile Contact Button */}
              <div className="p-6 border-t border-gray-100 bg-gradient-to-r from-green-50 to-emerald-50">
                <button 
                  onClick={() => handleNavigation('contact')}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  CONTACT
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">Art that speaks, craft that lasts.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Spacer to prevent content hiding under navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;