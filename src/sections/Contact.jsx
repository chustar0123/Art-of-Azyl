import React from 'react';

const Contact = () => {
  const directLinks = [
    {
      icon: <i className="fas fa-envelope text-2xl"></i>,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-700',
      label: 'Email',
      value: 'artofazyl@gmail.com',
      action: 'Send an email',
      href: 'mailto:artofazyl@gmail.com',
    },
    {
      icon: <i className="fas fa-phone-alt text-2xl"></i>,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-700',
      label: 'Phone / WhatsApp',
      value: '071 998 3777',
      action: 'Call or message',
      href: 'tel:0719983777',
    },
    {
      icon: <i className="fab fa-whatsapp text-2xl"></i>,
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-700',
      label: 'WhatsApp',
      value: 'Chat instantly',
      action: 'Open WhatsApp',
      href: 'https://wa.me/27719983777',
    },
  ];

  const socials = [
    {
      icon: <i className="fab fa-instagram text-2xl"></i>,
      iconBg: 'bg-pink-50',
      iconColor: 'text-pink-700',
      hoverBorder: 'hover:border-pink-400',
      name: 'Instagram',
      handle: '@artofazyl',
      href: 'https://www.instagram.com/artofazyl',
    },
    {
      icon: <i className="fab fa-tiktok text-2xl"></i>,
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-900',
      hoverBorder: 'hover:border-gray-600',
      name: 'TikTok',
      handle: '@artofazyl_',
      href: 'https://www.tiktok.com/@artofazyl_',
    },
    {
      icon: <i className="fab fa-facebook text-2xl"></i>,
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-700',
      hoverBorder: 'hover:border-blue-500',
      name: 'Facebook',
      handle: 'Azile Rhoyi Ngcwembe',
      href: 'https://www.facebook.com/AzileRhoyiNgcwembe',
    },
    {
      icon: <i className="fab fa-linkedin text-2xl"></i>,
      iconBg: 'bg-sky-50',
      iconColor: 'text-sky-700',
      hoverBorder: 'hover:border-sky-500',
      name: 'LinkedIn',
      handle: 'AOA Craft',
      href: 'https://www.linkedin.com/in/artofazyl',
    },
  ];

  return (
    <>
      
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">

        {/* Hero */}
        <section className="relative pt-5 md:pt-20 md:pb-10 overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-green-100 opacity-40 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-green-100 opacity-30 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

          <div className="max-w-3xl mx-auto px-4 relative z-10">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <i className="fab fa-whatsapp" aria-hidden="true"></i>
              <span>Get in touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Let's create
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent block">
                something together
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Whether it's a custom commission, art lessons for your little one, or a community project — I'd love to hear from you.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

          {/* Direct Contact */}
          <p className="text-xs font-semibold tracking-widest text-green-600 uppercase mb-5">Direct contact</p>
          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {directLinks.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="group flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-6 hover:border-green-400 hover:-translate-y-1 transition-all duration-300 no-underline"
                aria-label={`${item.label}: ${item.value}`}
              >
                <div className={`w-12 h-12 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center flex-shrink-0`} aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-gray-900 mb-1">{item.value}</p>
                  <p className="text-xs text-green-600 flex items-center gap-1">
                    {item.action}
                    <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform" aria-hidden="true"></i>
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="h-px bg-gray-100 mb-14" />

          {/* Social Media */}
          <p className="text-xs font-semibold tracking-widest text-green-600 uppercase mb-5">Find me on social media</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit AOA Craft on ${s.name} — ${s.handle}`}
                className={`group flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-5 ${s.hoverBorder} hover:-translate-y-1 transition-all duration-300 no-underline`}
              >
                <div className={`w-11 h-11 rounded-xl ${s.iconBg} ${s.iconColor} flex items-center justify-center flex-shrink-0`} aria-hidden="true">
                  {s.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{s.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.handle}</p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;