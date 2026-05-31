// src/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = ({ scrollToSection, sectionRefs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
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
      
      const scrollPosition = window.scrollY + 150;
      
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
    handleScrollSpy();
    
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
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Gallery', id: 'gallery' },
  ];
  
  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl py-2' 
          : 'bg-gradient-to-r from-white via-white/95 to-white/90 backdrop-blur-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex items-center group">
              <button 
                onClick={() => handleNavigation('home')}
                className="flex items-center gap-3 cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                  <img 
                    src="/logo.PNG"
                    className="h-10 w-auto sm:h-12 md:h-14 relative" 
                    alt="Art of Azyl"
                  />
                </div>
                
                {/* Full name and tagline - visible only on laptops/desktops */}
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
                  Contact
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button - Toggle Icon */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 rounded-lg hover:bg-gray-100 text-gray-700 flex items-center justify-center transition-all duration-300"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu - Flowbite Style */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'visible opacity-100' 
            : 'invisible opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Panel - Full width on mobile */}
        <div 
          className={`absolute top-0 left-0 w-full bg-white shadow-2xl transition-all duration-300 ease-out ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {/* Menu Header with Logo */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.PNG"
                className="h-10 w-auto rounded-full" 
                alt="Art of Azyl"
              />
              <div>
                <span className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Art of Azyl
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-500"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Navigation Links - Clean List */}
          <div className="py-4 max-h-[calc(100vh-200px)] overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`w-full text-left px-6 py-4 transition-all duration-200 flex items-center justify-between group
                  ${activeSection === item.id 
                    ? 'text-green-600 bg-green-50' 
                    : 'text-gray-700 hover:bg-gray-50'
                  }`}
              >
                <span className={`text-base font-medium ${
                  activeSection === item.id ? 'text-green-600' : 'text-gray-700'
                }`}>
                  {item.name}
                </span>
                {activeSection === item.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                )}
              </button>
            ))}
            
            {/* Divider */}
            <div className="h-px bg-gray-100 my-3 mx-6"></div>
            
            {/* Contact Link */}
            <button
              onClick={() => handleNavigation('contact')}
              className="w-full text-left px-6 py-4 text-gray-700 hover:bg-gray-50 transition-all duration-200 flex items-center justify-between group"
            >
              <span className="text-base font-medium">Contact</span>
              <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Footer Section */}
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <p className="text-sm text-gray-600 text-center">
              Art that speaks, craft that lasts.
            </p>
           
          </div>
        </div>
      </div>
      
      {/* Spacer to prevent content hiding under navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;