import React, { useState } from 'react';
import {
  Sparkles, Palette, Users, GraduationCap, Brush,
  Heart, Clock, CheckCircle, ArrowRight,
  Star, CreditCard, X, Phone, MessageSquare, PenTool, Package
} from 'lucide-react';

import lessons from '../assets/lessons.jpg';
import commissions from '../assets/art-com.jpg';
import community from '../assets/community.jpg';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = {
    commissions: {
      title: "Art Commissions",
      icon: <Brush size={32} />,
      description: "Custom, personalized artwork created just for you — from pencil portraits to large-scale murals and unique graphic designs. All pieces come with a frame included.",
      features: [
        "Custom pencil portraits from photos",
        "Murals for homes, businesses, and public spaces",
        "Canvas paintings tailored to your style",
        "Graphic design for brands and events",
        "Digital illustrations and custom artwork",
        "Frame included with every commission"
      ],
      process: [
        "Consultation to discuss your vision",
        "Quote and timeline agreement",
        "Sketch/design approval",
        "Creation process with updates",
        "Final delivery and payment"
      ]
    },
    lessons: {
      title: "Art Lessons for Children",
      icon: <GraduationCap size={32} />,
      description: "Nurturing creativity and building artistic skills in young minds through engaging, structured lessons.",
      features: [
        "Beginner to intermediate drawing skills",
        "Pencil techniques and shading",
        "Color theory and painting basics",
        "Creative expression and storytelling through art",
        "Portfolio building for older students"
      ],
      process: [
        "Initial consultation to assess skill level",
        "Custom lesson plan development",
        "Weekly structured sessions",
        "Progress tracking and feedback",
        "Portfolio review and celebration"
      ]
    },
    community: {
      title: "Community Projects & Collaborations",
      icon: <Users size={32} />,
      description: "Bringing art to communities through collaborative murals, workshops, and public art initiatives.",
      features: [
        "Community mural projects",
        "School art workshops",
        "Collaborative exhibitions",
        "Public art installations",
        "Art therapy and outreach programs"
      ],
      process: [
        "Initial meeting to discuss project scope",
        "Community engagement and planning",
        "Funding/sponsorship coordination (if needed)",
        "Project execution with community involvement",
        "Celebration and documentation"
      ]
    }
  };

  const cardData = [
    {
      key: 'commissions',
      label: 'Art Commissions',
      price: 'From R800 (A4)',
      image: commissions,
      accent: '#3B6D11',
      accentLight: '#EAF3DE',
      accentText: '#173404',
    },
    {
      key: 'lessons',
      label: 'Art Lessons',
      price: 'Hourly rates apply',
      image: lessons,
      accent: '#185FA5',
      accentLight: '#E6F1FB',
      accentText: '#042C53',
    },
    {
      key: 'community',
      label: 'Community Projects',
      price: 'Project-based',
      image: community,
      accent: '#534AB7',
      accentLight: '#EEEDFE',
      accentText: '#26215C',
    },
  ];

  const CommissionPricingTable = () => (
    <div className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <CreditCard size={22} className="text-green-500" /> Pricing
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-green-100">
              <th className="border border-green-200 px-4 py-2 text-left text-green-800 font-semibold">Size</th>
              <th className="border border-green-200 px-4 py-2 text-center text-green-800 font-semibold">1 Person</th>
              <th className="border border-green-200 px-4 py-2 text-center text-green-800 font-semibold">2 People</th>
              <th className="border border-green-200 px-4 py-2 text-center text-green-800 font-semibold">3 People</th>
            </tr>
          </thead>
          <tbody>
            {[
              { size: 'A4', p1: 'R800',    p2: '—',       p3: '—'       },
              { size: 'A3', p1: 'R2,000',  p2: 'R3,000',  p3: 'R4,000'  },
              { size: 'A2', p1: 'R4,000',  p2: 'R5,000',  p3: 'R6,000'  },
              { size: 'A1', p1: 'R7,000',  p2: 'R8,000',  p3: 'R9,000'  },
              { size: 'A0', p1: 'R10,000', p2: 'R12,000', p3: 'R14,000' },
            ].map((row) => (
              <tr key={row.size} className="even:bg-green-50/40">
                <td className="border border-green-200 px-4 py-2 font-semibold text-green-700">{row.size}</td>
                <td className="border border-green-200 px-4 py-2 text-center text-gray-800">{row.p1}</td>
                <td className="border border-green-200 px-4 py-2 text-center text-gray-800">{row.p2}</td>
                <td className="border border-green-200 px-4 py-2 text-center text-gray-800">{row.p3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-gray-600 text-sm mt-3">✦ All commissions come with a frame included</p>
      <p className="text-gray-600 text-sm">✦ 50% deposit required prior to commencement</p>
    </div>
  );

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">

        {/* Hero */}
        <section className="relative pt-15 pb-8 md:pt-20 md:pb-10 overflow-hidden">
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
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles size={16} /><span>What I Offer</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Creative<span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent"> Services</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Bringing art to life through personalized commissions, nurturing young talent, and building stronger communities
              </p>
            </div>
          </div>
        </section>

        {/* Service Cards with image backgrounds */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {cardData.map(({ key, label, price, image, accent, accentLight, accentText }) => (
                <div
                  key={key}
                  className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                  style={{ background: '#fff' }}
                  onClick={() => setSelectedService(key)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedService(key)}
                  aria-label={`Learn more about ${label}`}
                >
                  {/* Image container */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={image}
                      alt={label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Dark gradient overlay so text is always readable */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0.04) 100%)',
                      }}
                    />
                    {/* Label pinned to bottom of image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                      <span className="text-white text-lg font-bold drop-shadow-sm">{label}</span>
                      {/* Accent pill */}
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: accentLight, color: accentText }}
                      >
                        {price}
                      </span>
                    </div>
                    {/* Top accent bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ background: accent }}
                    />
                  </div>

                  {/* Card body */}
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {services[key].description.split('—')[0].trim()}
                    </p>
                    <button
                      className="flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
                      style={{ color: accent }}
                      aria-label={`Learn more about ${label}`}
                    >
                      Learn More
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedService && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedService(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${services[selectedService].title} details`}
          >
            <div
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header with image banner */}
              <div className="relative h-40 overflow-hidden rounded-t-3xl">
                <img
                  src={cardData.find(c => c.key === selectedService)?.image}
                  alt={services[selectedService].title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 100%)' }}
                />
                <div className="absolute inset-0 flex items-center justify-between px-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="rounded-xl p-2 text-white"
                      style={{ background: cardData.find(c => c.key === selectedService)?.accent }}
                    >
                      {services[selectedService].icon}
                    </div>
                    <h2 className="text-2xl font-bold text-white drop-shadow">
                      {services[selectedService].title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-white/80 hover:text-white transition bg-black/30 rounded-full p-1"
                    aria-label="Close modal"
                  >
                    <X size={26} />
                  </button>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {services[selectedService].description}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle size={22} className="text-green-500" /> What's Included
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {services[selectedService].features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-700">
                        <Sparkles size={16} className="text-green-500" /><span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedService === 'commissions' && <CommissionPricingTable />}
                {selectedService === 'lessons' && (
                  <div className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <CreditCard size={22} className="text-green-500" /> Pricing
                    </h3>
                    <p className="text-gray-700">
                      Pricing depends on session duration — please enquire for a personalised quote based on your child's needs and schedule.
                    </p>
                  </div>
                )}
                {selectedService === 'community' && (
                  <div className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <CreditCard size={22} className="text-green-500" /> Pricing
                    </h3>
                    <p className="text-gray-700 font-semibold">Project-based pricing — contact for a custom quote.</p>
                  </div>
                )}

                {services[selectedService].process && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Clock size={22} className="text-green-500" /> How It Works
                    </h3>
                    <div className="space-y-3">
                      {services[selectedService].process.map((step, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-700">
                          <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {i + 1}
                          </div>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Why AOA + How It Works */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Why Choose AOA */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose <span className="text-green-600">AOA Craft?</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Combining technical skill with emotional resonance to create meaningful art
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 mb-20">
              {[
                { icon: <Heart size={28} className="text-green-600" />,   title: "Passionate",      desc: "Every piece is created with genuine care and emotion" },
                { icon: <Palette size={28} className="text-green-600" />, title: "Professional",    desc: "High-quality materials and expert techniques" },
                { icon: <Clock size={28} className="text-green-600" />,   title: "Timely Delivery", desc: "Clear timelines and regular updates" },
                { icon: <Star size={28} className="text-green-600" />,    title: "Satisfaction",    desc: "Your vision brought to life, guaranteed" },
              ].map((item, i) => (
                <div key={i} className="text-center p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">{item.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t-2 border-gray-100 pt-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Sparkles size={16} /><span>Simple 4-Step Process</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  How <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">It Works</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  From first contact to final delivery — getting your custom artwork is easy
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6 relative">
                {[
                  { step: 1, icon: <Phone size={28} />,       title: "Contact Us",                 desc: "Reach out via phone, email, or our contact form to start the conversation" },
                  { step: 2, icon: <MessageSquare size={28}/>, title: "Tell us your idea",          desc: "Share your vision, reference photos, and any specific requirements" },
                  { step: 3, icon: <PenTool size={28} />,     title: "We design it",               desc: "Our artists bring your concept to life with sketches and regular updates" },
                  { step: 4, icon: <Package size={28} />,     title: "You receive the final product", desc: "Your finished piece is carefully packaged and delivered to your door" },
                ].map((item, idx) => (
                  <div key={item.step} className="relative group">
                    <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-6 text-center hover:shadow-sm transition-all duration-300 hover:-translate-y-1 h-full">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        {item.step}
                      </div>
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 text-green-600 shadow-md group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    {idx < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 text-green-400 z-10">
                        <ArrowRight size={20} className="text-green-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;