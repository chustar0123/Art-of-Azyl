import React, { useState } from 'react';
import { 
  X, 
  ZoomIn, 
  ChevronLeft, 
  ChevronRight,
  Pencil,
  Brush,
  Image as ImageIcon,
  Monitor,
  Sparkles,
  LayoutGrid
} from 'lucide-react';
// Pencil Portraits 
import pencilPortrait1 from '../assets/pencil-potrait1.jpg';
import pencilPortrait2 from '../assets/pencil-potrait2.jpg';
import pencilPortrait3 from '../assets/pencil-potrait3.jpg';
import pencilPortrait4 from '../assets/pencil-potrait4.jpg';

// Murals 
import mural1 from '../assets/mural1.JPG';
import mural2 from '../assets/mural2.JPG';
import mural3 from '../assets/mural3.JPG';

// Canvas Paintings 
import canvas1 from '../assets/canvas1.PNG';
import canvas2 from '../assets/canvas2.PNG';
import canvas3 from '../assets/canvas3.PNG';

// Graphic Design 
import graphic1 from '../assets/Azile2.PNG';
import graphic2 from '../assets/Azile2.PNG';
import graphic3 from '../assets/Azile2.PNG';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const galleryData = {
    pencilPortraits: [
      {
        id: 1,
        title: "Soulful Gaze",
        medium: "Graphite Pencil on Paper",
        image: pencilPortrait1, 
        category: "pencil",
      },
      {
        id: 2,
        title: "Elder's Wisdom",
        medium: "Charcoal & Graphite",
        image: pencilPortrait2,
        category: "pencil",
      },
      {
        id: 3,
        title: "Innocence",
        medium: "Pencil on Paper",
        image: pencilPortrait3, 
        category: "pencil",
      },
      {
        id: 4,
        title: "Contemplation",
        medium: "Graphite & White Charcoal",
        image: pencilPortrait4, 
        category: "pencil",
      }
    ],
    murals: [
      {
        id: 5,
        title: "Community Unity",
        medium: "Acrylic on Wall",
        image: mural1, 
        category: "mural",
      },
      {
        id: 6,
        title: "Nature's Embrace",
        medium: "Spray Paint & Acrylic",
        image: mural2, 
        category: "mural",
      },
      {
        id: 7,
        title: "Urban Dreams",
        medium: "Mixed Media Mural",
        image: mural3, 
        category: "mural",
      }
    ],
    canvasPaintings: [
      {
        id: 8,
        title: "Abstract Emotions",
        medium: "Oil on Canvas",
        image: canvas1, 
        category: "canvas",
      },
      {
        id: 9,
        title: "Vibrant Soul",
        medium: "Acrylic on Canvas",
        image: canvas2, 
        category: "canvas",
      },
      {
        id: 10,
        title: "Serenity",
        medium: "Watercolor on Canvas",
        image: canvas3, 
        category: "canvas",
      }
    ],
    graphicDesign: [
      {
        id: 11,
        title: "Brand Identity",
        medium: "Digital Illustration",
        image: graphic1, 
        category: "graphic",
      },
      {
        id: 12,
        title: "Event Poster",
        medium: "Digital Design",
        image: graphic2, 
        category: "graphic",
      },
      {
        id: 13,
        title: "Album Artwork",
        medium: "Digital Art",
        image: graphic3, 
        category: "graphic",
      }
    ]
  };

 
  const allArtworks = [
    ...galleryData.pencilPortraits,
    ...galleryData.murals,
    ...galleryData.canvasPaintings,
    ...galleryData.graphicDesign
  ];

  
  const getFilteredArtworks = () => {
    switch(activeCategory) {
      case 'pencil':
        return galleryData.pencilPortraits;
      case 'mural':
        return galleryData.murals;
      case 'canvas':
        return galleryData.canvasPaintings;
      case 'graphic':
        return galleryData.graphicDesign;
      default:
        return allArtworks;
    }
  };

  const filteredArtworks = getFilteredArtworks();

  // Open lightbox with selected image
  const openLightbox = (artwork) => {
    const index = allArtworks.findIndex(item => item.id === artwork.id);
    setCurrentIndex(index);
    setSelectedImage(artwork);
  };

  // Navigate through images in lightbox
  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % allArtworks.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(allArtworks[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + allArtworks.length) % allArtworks.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(allArtworks[prevIndex]);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  // Category counts
  const categoryCounts = {
    all: allArtworks.length,
    pencil: galleryData.pencilPortraits.length,
    mural: galleryData.murals.length,
    canvas: galleryData.canvasPaintings.length,
    graphic: galleryData.graphicDesign.length
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-15 pb-8 md:pt-20 md:pb-10 overflow-hidden">
        {/* Decorative S-Curve background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="absolute top-20 left-0 w-96 h-96" viewBox="0 0 200 200">
            <path d="M 30,30 C 80,60 120,40 140,80 C 160,120 120,140 80,170 L 100,170 C 140,140 180,120 160,80 C 140,40 100,60 50,30 Z" fill="#10b981"/>
          </svg>
          <svg className="absolute bottom-20 right-0 w-80 h-80" viewBox="0 0 200 200">
            <path d="M 30,30 C 80,60 120,40 140,80 C 160,120 120,140 80,170 L 100,170 C 140,140 180,120 160,80 C 140,40 100,60 50,30 Z" fill="#059669"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              AOA
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent"> Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Exploring emotion, culture, and identity through diverse artistic expressions
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-8 sticky top-20 bg-white/80 backdrop-blur-md z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`group px-6 py-2.5 rounded-full font-medium transition-all cursor-pointer duration-300 flex items-center gap-2 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 border border-gray-200'
              }`}
            >
              <LayoutGrid size={18} />
              <span>All Works</span>
              <span className={`text-sm ${activeCategory === 'all' ? 'text-white/80' : 'text-gray-400'}`}>
                ({categoryCounts.all})
              </span>
            </button>

            <button
              onClick={() => setActiveCategory('pencil')}
              className={`group px-6 py-2.5 rounded-full font-medium cursor-pointer transition-all duration-300 flex items-center gap-2 ${
                activeCategory === 'pencil'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 border border-gray-200'
              }`}
            >
              <Pencil size={18} />
              <span>Pencil Portraits</span>
              <span className={`text-sm ${activeCategory === 'pencil' ? 'text-white/80' : 'text-gray-400'}`}>
                ({categoryCounts.pencil})
              </span>
            </button>

            <button
              onClick={() => setActiveCategory('mural')}
              className={`group px-6 py-2.5 rounded-full cursor-pointer font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === 'mural'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 border border-gray-200'
              }`}
            >
              <Brush size={18} />
              <span>Murals</span>
              <span className={`text-sm ${activeCategory === 'mural' ? 'text-white/80' : 'text-gray-400'}`}>
                ({categoryCounts.mural})
              </span>
            </button>

            <button
              onClick={() => setActiveCategory('canvas')}
              className={`group px-6 py-2.5 rounded-full cursor-pointer font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === 'canvas'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 border border-gray-200'
              }`}
            >
              <ImageIcon size={18} />
              <span>Canvas Paintings</span>
              <span className={`text-sm ${activeCategory === 'canvas' ? 'text-white/80' : 'text-gray-400'}`}>
                ({categoryCounts.canvas})
              </span>
            </button>

            <button
              onClick={() => setActiveCategory('graphic')}
              className={`group px-6 py-2.5 rounded-full cursor-pointer font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === 'graphic'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 border border-gray-200'
              }`}
            >
              <Monitor size={18} />
              <span>Graphic Design</span>
              <span className={`text-sm ${activeCategory === 'graphic' ? 'text-white/80' : 'text-gray-400'}`}>
                ({categoryCounts.graphic})
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArtworks.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No artworks found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {filteredArtworks.map((artwork) => (
                <div
                  key={artwork.id}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => openLightbox(artwork)}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <ZoomIn size={18} className="text-gray-800" />
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                      {artwork.category === 'pencil' && 'Pencil Portrait'}
                      {artwork.category === 'mural' && 'Mural'}
                      {artwork.category === 'canvas' && 'Canvas Painting'}
                      {artwork.category === 'graphic' && 'Graphic Design'}
                    </div>
                  </div>
                  
                  {/* Caption */}
                  <div className="p-5 bg-white">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                      {artwork.title}
                    </h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p className="flex items-center gap-2">
                        <span className="font-medium text-gray-800">Medium:</span>
                        {artwork.medium}
                      </p>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-green-400 transition-colors duration-300 z-10"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-6 text-white hover:text-green-400 transition-colors duration-300 z-10 bg-black/50 rounded-full p-2 hover:bg-black/70"
          >
            <ChevronLeft size={36} />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-green-400 transition-colors duration-300 z-10 bg-black/50 rounded-full p-2 hover:bg-black/70"
          >
            <ChevronRight size={36} />
          </button>
          
          <div className="max-w-6xl w-full max-h-[90vh] flex flex-col items-center">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
            />
            
            <div className="mt-6 bg-white/10 backdrop-blur-md rounded-xl p-5 max-w-2xl w-full">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <p>
                  <span className="font-semibold text-white">Medium:</span> {selectedImage.medium}
                </p>
            
                
                <p>
                  <span className="font-semibold text-white">Category:</span> 
                  {selectedImage.category === 'pencil' && ' Pencil Portrait'}
                  {selectedImage.category === 'mural' && ' Mural'}
                  {selectedImage.category === 'canvas' && ' Canvas Painting'}
                  {selectedImage.category === 'graphic' && ' Graphic Design'}
                </p>
              </div>
            </div>
          </div>
          
          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 text-sm bg-black/50 px-3 py-1 rounded-full">
            {currentIndex + 1} / {allArtworks.length}
          </div>
        </div>
      )}

     
    </div>
  );
};

export default Gallery;