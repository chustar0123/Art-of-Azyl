// App.js
import { useState, useEffect, useRef } from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Gallery from './sections/Gallery';
import Services from './sections/Services';
import Contact from './sections/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Create refs for each section
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Smooth scroll function
  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      const yOffset = -80; // Adjust for navbar height
      const yPosition = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  };

  const whatsappNumber = '27719983777';
  const whatsappMessage = 'Hello! I would like to get more information.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Create an object with all refs
  const sectionRefs = {
    home: heroRef,
    about: aboutRef,
    gallery: galleryRef,
    services: servicesRef,
    contact: contactRef
  };

  return (
    <div className="relative">
      {/* Pass scroll function and refs to Navbar */}
      <Navbar scrollToSection={scrollToSection} sectionRefs={sectionRefs} />
      
      {/* Add refs to each section */}
      <div ref={heroRef}><Hero /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={galleryRef}><Gallery /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={contactRef}><Contact /></div>
      
      {/* Pass scroll function and refs to Footer */}
      <Footer scrollToSection={scrollToSection} sectionRefs={sectionRefs} />

      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <i className="fab fa-whatsapp text-white text-3xl"></i>
        </a>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="flex items-center cursor-pointer justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <i className="fas fa-arrow-up text-white text-2xl"></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default App;