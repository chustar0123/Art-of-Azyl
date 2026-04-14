// src/layout/Footer.jsx
import React from 'react';

const Footer = ({ scrollToSection, sectionRefs }) => {
  const currentYear = new Date().getFullYear();
  
  const mediaFeatures = [
    {
      name: 'Voyage Houston Magazine',
      href: 'https://voyagehouston.com/interview/meet-azile-ngcwembe-of-johannesburg',
      description: 'Featured Artist Interview'
    },
    {
      name: 'Isolezwe',
      href: 'https://isolezwelesixhosa.co.za/iindaba/2025-04-08-ungcwembe-ufuna-ukuphuhlisa-isakhono-sokuzoba-kulutsha-lwase-mbhashe/',
      description: 'Community Art Feature'
    },
    {
      name: 'Mthatha Express News',
      href: 'https://novanews.co.za/mthathaexpress/artist-uses-art-to-maintain-living-20240903/',
      description: 'Local Artist Spotlight'
    },
    {
      name: 'GTribe Magazine',
      href: 'https://gtribemag.com/azile-founded-the-esteemed-aoa-short-for-art-of-azyl-a-name-that-echoed-his-own-and-his-essence-as-a-creator/',
      description: 'Creative Journey'
    }
  ];

  const quickLinks = [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Gallery', section: 'gallery' },
    { name: 'Services', section: 'services' },
    { name: 'Contact', section: 'contact' }
  ];

  const handleQuickLinkClick = (e, sectionName) => {
    e.preventDefault();
    if (scrollToSection && sectionRefs && sectionRefs[sectionName]) {
      scrollToSection(sectionRefs[sectionName]);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand & Mission Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              AOA Craft
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Creating meaningful art that connects, inspires, and transforms spaces. 
              Every piece tells a story, every stroke carries emotion.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/artofazyl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 transition-all"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="https://www.tiktok.com/@artofazyl_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all"
                aria-label="TikTok"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a 
                href="https://www.facebook.com/AzileRhoyiNgcwembe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/artofazyl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={(e) => handleQuickLinkClick(e, link.section)}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Media Features - Where he was invited */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Media Features</h4>
            <ul className="space-y-3">
              {mediaFeatures.map((feature, index) => (
                <li key={index}>
                  <a 
                    href={feature.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <p className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium">
                      {feature.name}
                    </p>
                    <p className="text-gray-600 text-xs mt-0.5">{feature.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Address */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Get in Touch</h4>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-2">
                <i className="fas fa-envelope text-green-400 mt-1 text-sm"></i>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:artofazyl@gmail.com" className="text-white text-sm hover:text-green-400 transition-colors">
                    artofazyl@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <i className="fas fa-phone-alt text-green-400 mt-1 text-sm"></i>
                <div>
                  <p className="text-gray-400 text-sm">Phone / WhatsApp</p>
                  <a href="tel:0719983777" className="text-white text-sm hover:text-green-400 transition-colors">
                    071 998 3777
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <i className="fas fa-map-marker-alt text-green-400 mt-1 text-sm"></i>
                <div>
                  <p className="text-gray-400 text-sm">Address</p>
                  <p className="text-white text-sm">
                    JHB, Auckland Park, South Africa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Info Section */}
        <div className="border-t border-gray-800 pt-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-400 text-sm text-center md:text-left">
                <span className="font-semibold text-green-400">Mission:</span> Making art accessible, meaningful, and impactful — one portrait, one mural, one story at a time.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-xs">
                Working Hours: Open 24 Hours
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright & Credits */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} AOA Craft. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Built by <span className="text-green-400">Chumani Gqibani</span>
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;