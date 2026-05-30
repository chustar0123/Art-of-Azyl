import { useState, useEffect, useRef } from "react";
import art1 from '../assets/slide1.jpg';
import art2 from '../assets/slide2.jpg';
import art3 from '../assets/pencil-potrait2.jpg';
import art4 from '../assets/art4.JPG';

const slides = [
  { url: art1, alt: "Pencil portrait artwork by Azile Ngcwembe - AOA Craft" },
  { url: art2, alt: "Canvas painting artwork by Azile Ngcwembe - AOA Craft" },
  { url: art3, alt: "Detailed pencil portrait of elder by Azile Ngcwembe" },
  { url: art4, alt: "Contemporary art piece by Azile Ngcwembe - AOA Craft" },
];

const stats = [
  { value: "100+", label: "Commissions" },
  { value: "3+",   label: "Years of craft" },
];

const Hero = ({ scrollToSection, sectionRefs }) => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes bubbleFloat {
        0%   { transform: translateY(0px) rotate(0deg); }
        50%  { transform: translateY(-15px) rotate(2deg); }
        100% { transform: translateY(0px) rotate(0deg); }
      }
      @keyframes fadeSlideUp {
        from { opacity: 0; transform: translateY(18px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .hero-text-1 { animation: fadeSlideUp 0.6s ease forwards; animation-delay: 0.05s; opacity: 0; }
      .hero-text-2 { animation: fadeSlideUp 0.6s ease forwards; animation-delay: 0.18s; opacity: 0; }
      .hero-text-3 { animation: fadeSlideUp 0.6s ease forwards; animation-delay: 0.30s; opacity: 0; }
      .hero-text-4 { animation: fadeSlideUp 0.6s ease forwards; animation-delay: 0.42s; opacity: 0; }
      .hero-text-5 { animation: fadeSlideUp 0.6s ease forwards; animation-delay: 0.54s; opacity: 0; }

      .hero-img-frame {
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        aspect-ratio: 4/5;
        box-shadow: 0 24px 64px rgba(0,0,0,0.13);
      }

      .hero-img-frame-secondary {
        position: absolute;
        bottom: -18px;
        left: -18px;
        width: 52%;
        aspect-ratio: 1/1;
        border-radius: 16px;
        overflow: hidden;
        border: 4px solid #fff;
        box-shadow: 0 12px 32px rgba(0,0,0,0.12);
        z-index: 10;
      }

      .thumb-btn {
        border: none;
        padding: 0;
        background: none;
        cursor: pointer;
        border-radius: 8px;
        overflow: hidden;
        transition: opacity 0.2s, transform 0.2s;
        flex-shrink: 0;
      }
      .thumb-btn:hover { opacity: 1 !important; transform: scale(1.06); }

      .floating-badge {
        position: absolute;
        top: 20px;
        right: -16px;
        background: #fff;
        border: 0.5px solid rgba(0,0,0,0.09);
        border-radius: 12px;
        padding: 10px 14px;
        display: flex;
        align-items: center;
        gap: 8px;
        box-shadow: 0 4px 18px rgba(0,0,0,0.09);
        z-index: 20;
        white-space: nowrap;
      }

      .dot-available {
        width: 8px; height: 8px;
        border-radius: 50%;
        background: #16a34a;
        flex-shrink: 0;
        box-shadow: 0 0 0 3px #dcfce7;
      }

      @media (max-width: 1023px) {
        .floating-badge { right: 10px; top: 10px; }
        .hero-img-frame-secondary { display: none; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => { setCurrent(index); setAnimating(false); }, 400);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => goTo((current + 1) % slides.length), 4000);
    return () => clearInterval(timerRef.current);
  }, [current]);

  const handleExploreWork = () => {
    if (scrollToSection && sectionRefs?.gallery) scrollToSection(sectionRefs.gallery, 'gallery');
  };

  const handleContact = () => {
    if (scrollToSection && sectionRefs?.contact) scrollToSection(sectionRefs.contact, 'contact');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-10">

      {/* Background gradient — original */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#08FE07]/20 to-white" />

      {/* Decorative blobs — original */}
      <div className="absolute top-[-80px] right-[-60px] w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full bg-[#08FE07] opacity-10" />
      <div className="absolute bottom-10 right-10 sm:right-20 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-[#08FE07] opacity-10" />
      <div className="absolute bottom-[-40px] left-[-40px] w-36 h-36 sm:w-52 sm:h-52 rounded-full bg-[#08FE07] opacity-10" />

      {/* Main layout */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-0 px-4 sm:px-8 md:px-12 lg:px-20">

        {/* ── LEFT: Text content ── */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pb-60">

          {/* Badge */}
          <div className="hero-text-1 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              Open for commissions · Johannesburg
            </span>
          </div>

          {/* Headline */}
          <h1
            className="hero-text-2 font-bold text-gray-900 mb-3 sm:mb-4 leading-tight"
            style={{ fontSize: "clamp(1.6rem, 5vw, 3rem)" }}
          >
            Your memory,{" "}
            <span className="text-green-600">drawn by hand.</span>
          </h1>

          {/* Sub-copy */}
          <p
            className="hero-text-3 text-gray-600 mb-5 sm:mb-6 leading-relaxed max-w-md"
            style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)" }}
          >
            Custom pencil portraits, murals &amp; canvas paintings — each piece made with care, made to last, and made to mean something.
          </p>

          {/* CTAs */}
          <div className="hero-text-4 flex flex-wrap gap-3 mb-8">
            <button
              onClick={handleContact}
              className="bg-green-500 text-black px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-green-400 active:scale-95 transition-all text-sm sm:text-base cursor-pointer"
            >
              Commission a piece
            </button>
            <button
              onClick={handleExploreWork}
              className="border border-green-500 text-green-700 bg-white/60 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-green-50 active:scale-95 transition-all text-sm sm:text-base cursor-pointer"
            >
              Explore Work
            </button>
          </div>

          {/* Stats */}
          <div className="hero-text-5 flex gap-3 flex-wrap">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center bg-white/70 rounded-xl px-4 py-2 shadow-sm border border-green-100"
              >
                <span className="text-green-600 font-bold text-lg leading-tight">{s.value}</span>
                <span className="text-gray-500 text-xs mt-0.5 whitespace-nowrap">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="hidden lg:block w-px self-stretch mx-6 bg-gradient-to-b from-transparent via-green-300/50 to-transparent" />

        {/* ── RIGHT: Slideshow (from document) ── */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-4">

          {/* Slideshow wrapper — position:relative for floating badge */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '480px' }}>

            {/* Floating "Available" badge */}
            <div className="floating-badge">
              <span className="dot-available" />
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#1a1a1a' }}>Available now</div>
                <div style={{ fontSize: '11px', color: '#888' }}>Taking new commissions</div>
              </div>
            </div>

            {/* Main image frame */}
            <div className="hero-img-frame">
              {slides.map((slide, i) => (
                <img
                  key={i}
                  src={slide.url}
                  alt={slide.alt}
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    opacity: i === current ? 1 : 0,
                    transform: i === current ? 'scale(1)' : 'scale(1.04)',
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                  }}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              ))}

              {/* Bottom gradient */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)',
                pointerEvents: 'none',
              }} />

              {/* Slide counter */}
              <div style={{
                position: 'absolute', bottom: 14, right: 14,
                background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(6px)',
                color: '#fff', fontSize: '11px', fontWeight: 500,
                padding: '3px 10px', borderRadius: '20px', zIndex: 5,
              }}>
                {current + 1} / {slides.length}
              </div>
            </div>

            {/* Secondary floating image */}
            <div className="hero-img-frame-secondary">
              <img
                src={slides[(current + 1) % slides.length].url}
                alt="Next artwork preview"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Thumbnail strip */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '24px', justifyContent: 'center' }}>
            {slides.map((slide, i) => (
              <button
                key={i}
                className="thumb-btn"
                onClick={() => goTo(i)}
                aria-label={`View slide ${i + 1}`}
                style={{
                  width: i === current ? '54px' : '38px',
                  height: '38px',
                  opacity: i === current ? 1 : 0.45,
                  outline: i === current ? '2px solid #22c55e' : '2px solid transparent',
                  outlineOffset: '2px',
                  transition: 'width 0.3s ease, opacity 0.2s, outline 0.2s',
                }}
              >
                <img src={slide.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
