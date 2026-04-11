import { useState, useEffect } from "react";

import art1 from '../assets/pencil-potrait1.jpg';
import art2 from '../assets/art2.JPG';
import art3 from '../assets/pencil-potrait2.jpg';
import art4 from '../assets/art4.JPG';

const slides = [
  { url: art1, alt: "Artwork 1" },
  { url: art2, alt: "Artwork 2" },
  { url: art3, alt: "Artwork 3" },
  { url: art4, alt: "Artwork 4" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => goTo((current + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-10 ">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#08FE07]/20 to-white"></div>

      {/* Decorative blobs */}
      <div className="absolute top-[-80px] right-[-60px] w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full bg-[#08FE07] opacity-10"></div>
      <div className="absolute bottom-10 right-10 sm:right-20 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-[#08FE07] opacity-10"></div>
      <div className="absolute bottom-[-40px] left-[-40px] w-36 h-36 sm:w-52 sm:h-52 rounded-full bg-[#08FE07] opacity-10"></div>

      {/* Main layout */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-0 px-4 sm:px-8 md:px-12 lg:px-20">

        {/* ── Left: Bubble ── */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div
            className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl bg-green-500/10 backdrop-blur-md relative overflow-hidden"
            style={{
              padding: "clamp(2rem, 8vw, 3.5rem)",
              borderRadius: "60% 40% 55% 45% / 45% 55% 40% 60%",
              border: "1.5px solid rgba(34, 197, 94, 0.25)",
              animation: "bubbleFloat 6s ease-in-out infinite",
            }}
          >
            {/* Shine */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                borderRadius: "60% 40% 55% 45% / 45% 55% 40% 60%",
                background: "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.5) 0%, transparent 60%)",
              }}
            />

            <h1
              className="font-bold text-gray-900 mb-3 sm:mb-4 relative z-10 leading-tight"
              style={{ fontSize: "clamp(1.6rem, 5vw, 3rem)" }}
            >
              Art that speaks, craft that lasts.
            </h1>

            <p
              className="text-gray-600 mb-5 sm:mb-6 relative z-10 leading-relaxed"
              style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)" }}
            >
              Bringing your ideas to life through digital art and creativity.
            </p>

            <button className="bg-green-500 text-black px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-green-400 active:scale-95 transition-all text-sm sm:text-base relative z-10 cursor-pointer">
              Explore Work
            </button>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="hidden lg:block w-px self-stretch mx-6 bg-gradient-to-b from-transparent via-green-300/50 to-transparent" />

        {/* ── Right: Slideshow ── */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-4">

          {/* Image frame */}
          <div
            className="relative w-full overflow-hidden"
            style={{
              maxWidth: "520px",
              aspectRatio: "4/3",
              borderRadius: "2rem",
              
              
            }}
          >
            {/* Slides */}
            {slides.map((slide, i) => (
              <img
                key={i}
                src={slide.url}
                alt={slide.alt}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                style={{
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? "scale(1)" : "scale(1.04)",
                }}
              />
            ))}

            {/* Gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.28) 0%, transparent 50%)",
                borderRadius: "2rem",
              }}
            />

        

            {/* Slide counter */}
            <div className="absolute bottom-3 right-4 text-white/90 text-xs font-medium z-10 bg-black/30 px-2 py-0.5 rounded-full">
              {current + 1} / {slides.length}
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="flex items-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="relative overflow-hidden rounded-xl transition-all duration-300 focus:outline-none"
                style={{
                  width: i === current ? "56px" : "40px",
                  height: "40px",
                  border: i === current ? "2px solid #08FE07" : "2px solid transparent",
                  opacity: i === current ? 1 : 0.55,
                }}
                aria-label={`Go to slide ${i + 1}`}
              >
                <img src={slide.url} alt={slide.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Hero;