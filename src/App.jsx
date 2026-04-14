import { useState, useEffect, useRef } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Gallery from './sections/Gallery';
import Services from './sections/Services';
import Contact from './sections/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

const sectionMeta = {
  home: {
    title: "AOA Craft | Pencil Portraits & Murals by Azile Ngcwembe",
    desc: "Custom pencil portraits, murals and graphic design by Azile Ngcwembe. Commission unique artwork in South Africa."
  },
  about: {
    title: "About AOA Craft | Azile Ngcwembe's Story",
    desc: "Learn about Azile Ngcwembe, founder of AOA Craft — a South African artist passionate about pencil portraits, murals, and community storytelling."
  },
  services: {
    title: "Art Services | AOA Craft",
    desc: "Commission a portrait, mural, or design from AOA Craft. Custom art services including pencil portraits, murals, and art lessons in South Africa."
  },
  gallery: {
    title: "Gallery | AOA Craft by Azile Ngcwembe",
    desc: "Browse pencil portraits, murals and canvas paintings by AOA Craft. Explore the portfolio of South African artist Azile Ngcwembe."
  },
  contact: {
    title: "Contact AOA Craft | Commission Art by Azile Ngcwembe",
    desc: "Get in touch with AOA Craft via WhatsApp, email, or social media. Commission custom artwork or enquire about art lessons in South Africa."
  },
};

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeMeta, setActiveMeta] = useState(sectionMeta.home);

  const heroRef     = useRef(null);
  const aboutRef    = useRef(null);
  const servicesRef = useRef(null);
  const galleryRef  = useRef(null);
  const contactRef  = useRef(null);

  const sectionRefs = {
    home:     heroRef,
    about:    aboutRef,
    services: servicesRef,
    gallery:  galleryRef,
    contact:  contactRef,
  };

  const updateHash = (hash) => {
    if (hash && hash !== window.location.hash.slice(1)) {
      window.history.replaceState(null, '', `#${hash}`);
    }
  };

  const scrollToSection = (sectionRef, sectionId) => {
    if (sectionRef && sectionRef.current) {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const offsetPosition =
          sectionRef.current.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
      setTimeout(() => { if (sectionId) updateHash(sectionId); }, 100);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateHash('home');
  };

  useEffect(() => {
    const NAVBAR_HEIGHT = 80;

    const getActiveSection = () => {
      // Order must match the DOM order top-to-bottom
      const sections = [
        { key: 'home',     ref: heroRef },
        { key: 'about',    ref: aboutRef },
        { key: 'services', ref: servicesRef },
        { key: 'gallery',  ref: galleryRef },
        { key: 'contact',  ref: contactRef },
      ];

      const triggerY = NAVBAR_HEIGHT + 60;
      let active = sections[0];

      for (const section of sections) {
        if (!section.ref.current) continue;
        const top = section.ref.current.getBoundingClientRect().top;
        if (top <= triggerY) {
          active = section;
        }
      }

      return active;
    };

    let ticking = false;
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const active = getActiveSection();
          setActiveMeta(sectionMeta[active.key]);
          updateHash(active.key);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && sectionRefs[hash]) {
      setTimeout(() => scrollToSection(sectionRefs[hash], hash), 300);
    }
  }, []);

  const whatsappNumber  = '27719983777';
  const whatsappMessage = 'Hello! I would like to get more information.';
  const whatsappLink    = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{activeMeta.title}</title>
        <meta name="description"        content={activeMeta.desc} />
        <meta name="author"             content="Azile Ngcwembe - AOA Craft" />
        <meta name="robots"             content="index, follow" />

        <meta property="og:title"       content={activeMeta.title} />
        <meta property="og:description" content={activeMeta.desc} />
        <meta property="og:image"       content="https://artofazyl.co.za/og-image.png" />
        <meta property="og:url"         content="https://artofazyl.co.za" />
        <meta property="og:type"        content="website" />
        <meta property="og:site_name"   content="AOA Craft" />

        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={activeMeta.title} />
        <meta name="twitter:description" content={activeMeta.desc} />
        <meta name="twitter:image"       content="https://artofazyl.co.za/og-image.png" />

        <link rel="canonical" href="https://artofazyl.co.za" />
      </Helmet>

      <div className="relative">
        <Navbar scrollToSection={scrollToSection} sectionRefs={sectionRefs} />

        <div ref={heroRef}     id="home">    <Hero     scrollToSection={scrollToSection} sectionRefs={sectionRefs} /></div>
        <div ref={aboutRef}    id="about">   <About /></div>
        <div ref={servicesRef} id="services"><Services /></div>
        <div ref={galleryRef}  id="gallery"> <Gallery /></div>
        <div ref={contactRef}  id="contact"> <Contact /></div>

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
    </HelmetProvider>
  );
}

export default App;