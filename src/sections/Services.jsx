import React, { useState } from 'react';
import {
  Sparkles, Palette, Users, GraduationCap, Brush,
  Heart, Clock, CheckCircle, ArrowRight, MessageCircle,
  FileText, Star, CreditCard, FileCheck, X,
  BookOpen, Crosshair
} from 'lucide-react';

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

  const cardThemes = {
    commissions: {
      bg: 'from-green-100 to-green-200',
      iconBg: 'rgba(255,255,255,0.55)',
      iconStroke: '#065f46',
      labelColor: 'text-green-900',
      bar: 'from-green-500 to-emerald-600',
      icon: (
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#065f46" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
          <path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
        </svg>
      )
    },
    lessons: {
      bg: 'from-blue-100 to-blue-200',
      iconBg: 'rgba(255,255,255,0.55)',
      labelColor: 'text-blue-900',
      bar: 'from-blue-500 to-blue-600',
      icon: (
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      )
    },
    community: {
      bg: 'from-purple-100 to-purple-200',
      iconBg: 'rgba(255,255,255,0.55)',
      labelColor: 'text-purple-900',
      bar: 'from-purple-500 to-violet-600',
      icon: (
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#5b21b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    }
  };

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
              { size: 'A4', p1: 'R800',    p2: '—',      p3: '—'      },
              { size: 'A3', p1: 'R2,000',  p2: 'R3,000', p3: 'R4,000' },
              { size: 'A2', p1: 'R4,000',  p2: 'R5,000', p3: 'R6,000' },
              { size: 'A1', p1: 'R7,000',  p2: 'R8,000', p3: 'R9,000' },
              { size: 'A0', p1: 'R10,000', p2: 'R12,000',p3: 'R14,000'},
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

  const cardData = [
    { key: 'commissions', label: 'Art Commissions',        price: 'From R800 (A4)' },
    { key: 'lessons',     label: 'Art Lessons',            price: 'Hourly rates apply' },
    { key: 'community',   label: 'Community Projects',     price: 'Project-based' },
  ];

  return (
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

      {/* Cards */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {cardData.map(({ key, label, price }) => {
              const theme = cardThemes[key];
              return (
                <div
                  key={key}
                  className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => setSelectedService(key)}
                >
                  <div className={`relative h-48 bg-gradient-to-br ${theme.bg} flex flex-col items-center justify-center gap-4`}>
                    <div className="rounded-full w-18 h-18 flex items-center justify-center p-4" style={{ background: theme.iconBg }}>
                      {theme.icon}
                    </div>
                    <span className={`text-lg font-bold ${theme.labelColor}`}>{label}</span>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.bar}`}></div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{services[key].description.split('—')[0].trim()}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-semibold text-sm">{price}</span>
                      <button className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1 text-sm group/btn">
                        Learn More <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto" onClick={() => setSelectedService(null)}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-2 text-white">
                  {services[selectedService].icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{services[selectedService].title}</h2>
              </div>
              <button onClick={() => setSelectedService(null)} className="text-gray-400 hover:text-gray-600 transition"><X size={28} /></button>
            </div>

            <div className="p-6 md:p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{services[selectedService].description}</p>

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
                  <p className="text-gray-700">Pricing depends on session duration — please enquire for a personalised quote based on your child's needs and schedule.</p>
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
                        <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</div>
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

      {/* Why AOA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-green-600">AOA Craft?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Combining technical skill with emotional resonance to create meaningful art
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
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
        </div>
      </section>

    </div>
  );
};

export default Services;