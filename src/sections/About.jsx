import React, { useRef, useState, useEffect } from 'react';
import azileVideo from '../assets/AZYL.mp4';
import { 
  Paintbrush, 
  Users, 
  Sparkles, 
  Heart, 
  Palette, 
  GraduationCap,
  Globe,
  Star,
  ArrowRight,
  Quote,
  Play,
  Pause,
  Volume2,
  VolumeX
} from 'lucide-react';


/* ─── AOA SVG text component ─────────────────────────────────────── */
const AoaText = ({ className, style }) => (
  <svg
    viewBox="0 0 600 200"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <text
      x="50%"
      y="75%"
      textAnchor="middle"
      fontFamily="Syne, sans-serif"
      fontWeight="800"
      fontSize="180"
      fill="#10b981"
      letterSpacing="-4"
    >
      AOA
    </text>
  </svg>
);

/* ─── Intersection-observer hook ─────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─── Main Component ─────────────────────────────────────────────── */
const About = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  // section refs
  const [heroRef,    heroIn]    = useInView(0.1);
  const [storyRef,   storyIn]   = useInView(0.1);
  const [videoRef2,  videoIn]   = useInView(0.1);
  const [missionRef, missionIn] = useInView(0.1);

  const togglePlayPause = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };
  const handleProgressClick = (e) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pct * videoRef.current.duration;
      setProgress(pct * 100);
    }
  };

  return (
    <>
    
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="relative pt-15 pb-10 md:pt-20 md:pb-10 overflow-hidden">

          {/* Animated AOA backgrounds */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <AoaText
              className="aoa-bg-1 absolute -top-8 -left-16 w-[520px] opacity-[0.04]"
              style={{}}
            />
            <AoaText
              className="aoa-bg-2 absolute top-1/3 right-[-80px] w-[420px] opacity-[0.03]"
              style={{}}
            />
            <AoaText
              className="aoa-bg-3 absolute bottom-0 left-1/3 w-[340px] opacity-[0.025]"
              style={{}}
            />
          </div>

          <div
            ref={heroRef}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <div className="text-center max-w-3xl mx-auto">
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 ${heroIn ? 'animate-badge-pop' : 'opacity-0'}`}>
                <Sparkles size={16} className="sparkle-icon" />
                <span>My Story</span>
              </div>

              {/* Heading */}
              <h1
                className={`md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 ${heroIn ? 'animate-fade-up delay-200' : 'opacity-0'}`}
                style={{ fontSize: 'clamp(1.6rem, 5vw, 3rem)' }}
              >
                Where Art Meets
                <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent"> Emotion</span>
              </h1>

              {/* Subtext */}
              <p className={`text-lg md:text-xl text-gray-600 leading-relaxed ${heroIn ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
                AOA Craft is more than a creative brand — it's a movement to make art accessible, meaningful, and deeply human.
              </p>

              {/* Subtle divider line */}
              <div className={`mt-10 flex justify-center ${heroIn ? 'animate-fade-up delay-600' : 'opacity-0'}`}>
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-green-400 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Main Content ──────────────────────────────────────────── */}
        <section className="py-12 md:py-16 relative">

          {/* Secondary floating AOA in main section */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <AoaText
              className="aoa-bg-2 absolute top-1/2 left-1/2 w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-[0.03]"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* ── Brand Story Grid ──────────────────────────────────── */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">

              {/* Video side */}
              <div
                ref={videoRef2}
                className={`relative video-group ${videoIn ? 'animate-fade-left' : 'opacity-0'}`}
              >
                {/* Decorative border */}
                <div
                  className="video-border absolute -top-4 -left-4 w-full h-full border-2 border-green-200 rounded-2xl opacity-60 transition-opacity duration-500 animate-border-draw"
                  style={{ animationDelay: '0.3s' }}
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl -z-10" />

                {/* Video container */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black glow-card">
                  <div className="relative" style={{ paddingBottom: '56.25%' }}>
                    <video
                      ref={videoRef}
                      src={azileVideo}
                      className="absolute top-0 left-0 w-full h-full object-contain"
                      onTimeUpdate={handleTimeUpdate}
                      onClick={togglePlayPause}
                    />

                    {/* Play button overlay (when paused) */}
                    {!isPlaying && (
                      <div
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={togglePlayPause}
                      >
                        <div className="w-16 h-16 rounded-full bg-green-500/90 flex items-center justify-center backdrop-blur-sm transition-transform duration-300 hover:scale-110 shadow-lg shadow-green-500/40">
                          <Play size={28} className="text-white ml-1" />
                        </div>
                      </div>
                    )}

                    {/* Controls overlay */}
                    <div className="video-overlay absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 md:p-4 opacity-0 transition-opacity duration-300">
                      <div
                        className="w-full h-1.5 bg-gray-600 rounded-full mb-3 cursor-pointer group/progress"
                        onClick={handleProgressClick}
                      >
                        <div
                          className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-100 relative"
                          style={{ width: `${progress}%` }}
                        >
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover/progress:opacity-100 transition-opacity" />
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <button onClick={togglePlayPause} className="text-white hover:text-green-400 transition-colors">
                          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                        </button>
                        <button onClick={toggleMute} className="text-white hover:text-green-400 transition-colors">
                          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </button>
                        <span className="text-white text-xs ml-auto">
                          {videoRef.current && (
                            `${Math.floor(videoRef.current.currentTime / 60)}:${String(Math.floor(videoRef.current.currentTime % 60)).padStart(2, '0')} / ${Math.floor(videoRef.current.duration / 60)}:${String(Math.floor(videoRef.current.duration % 60)).padStart(2, '0')}`
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story text side */}
              <div
                ref={storyRef}
                className={storyIn ? 'animate-fade-right' : 'opacity-0'}
              >
                <div className={`inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4 ${storyIn ? 'animate-badge-pop delay-200' : 'opacity-0'}`}>
                  <Paintbrush size={14} />
                  <span>The Beginning</span>
                </div>

                <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 ${storyIn ? 'animate-fade-up delay-300' : 'opacity-0'}`}>
                  Founded on a Passion for <span className="text-green-500">Pencil Portraits</span>
                </h2>

                <div className={`space-y-4 text-gray-600 leading-relaxed ${storyIn ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
                  <p>
                    AOA Craft is a creative brand dedicated to capturing{' '}
                    <span className="font-semibold text-gray-800">emotion, culture, and identity</span> through art.
                    Founded on a deep passion for pencil portraits, the brand has since expanded into murals, canvas paintings, and graphic design —
                    offering both personal commissions and transformative community projects.
                  </p>
                  <p>
                    At its core, <span className="font-semibold text-green-700">AOA Craft is storytelling</span> — each piece is thoughtfully designed to connect with people
                    on a deeper level. Whether it's a portrait that makes someone feel truly seen, a mural that breathes life into a space,
                    or a design that speaks directly to a community, every creation carries meaning.
                  </p>
                </div>

                {/* Stats */}
                <div className={`grid grid-cols-2 gap-4 mt-8 ${storyIn ? 'animate-fade-up delay-600' : 'opacity-0'}`}>
                  <div className="stat-card bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 text-center border border-green-100/60">
                    <p className="text-2xl font-bold text-green-700">300+</p>
                    <p className="text-sm text-gray-600">Portraits Created</p>
                  </div>
                  <div className="stat-card bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 text-center border border-green-100/60">
                    <p className="text-2xl font-bold text-green-700">100+</p>
                    <p className="text-sm text-gray-600">Community Murals</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Mission Section ───────────────────────────────────── */}
            <div
              ref={missionRef}
              className="relative my-20"
            >
              {/* Tiny AOA watermark above card */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-28 opacity-10 pointer-events-none">
                <AoaText />
              </div>

              <div className={`mission-card bg-gradient-to-r from-green-50 via-white to-emerald-50 rounded-3xl p-8 md:p-12 shadow-sm border border-green-100 ${missionIn ? 'animate-mission-in' : 'opacity-0'}`}>
                <div className="text-center max-w-3xl mx-auto">

                  <div className={`inline-flex items-center gap-2 bg-white shadow-sm rounded-full px-5 py-2 mb-6 ${missionIn ? 'animate-badge-pop delay-300' : 'opacity-0'}`}>
                    <Heart size={18} className="text-green-600 sparkle-icon" />
                    <span className="text-sm font-medium text-gray-700">What Drives Me</span>
                  </div>

                  <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 ${missionIn ? 'animate-fade-up delay-400' : 'opacity-0'}`}>
                    The Mission
                  </h2>

                  <div className={`relative ${missionIn ? 'animate-fade-up delay-500' : 'opacity-0'}`}>
                    <Quote className="absolute -top-4 -left-6 text-green-200 w-12 h-12" />
                    <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed px-4 md:px-8">
                      To make art accessible, meaningful, and impactful, while bridging creativity and innovation —
                      one portrait, one mural, one story at a time.
                    </p>
                  </div>

                  {/* Animated underline accent */}
                  <div className={`mt-8 flex justify-center ${missionIn ? 'animate-fade-up delay-700' : 'opacity-0'}`}>
                    <div className="h-0.5 w-24 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default About;
