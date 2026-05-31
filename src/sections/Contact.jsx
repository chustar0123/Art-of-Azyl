// src/sections/Contact.jsx - Complete working version
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Sparkles, Send, CheckCircle, AlertCircle, User, MessageCircle } from "lucide-react";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Validation functions
  const validateName = (value) => {
    if (!value.trim()) return 'Name is required';
    if (value.length < 2) return 'Name must be at least 2 characters';
    if (value.length > 50) return 'Name must be less than 50 characters';
    if (!/^[a-zA-Z\s'-]+$/.test(value)) return 'Name can only contain letters, spaces, apostrophes, and hyphens';
    return '';
  };

  const validateEmail = (value) => {
    if (!value.trim()) return 'Email address is required';
    const emailRegex = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
    if (!emailRegex.test(value)) return 'Please enter a valid email address (e.g., name@example.com)';
    if (value.length > 100) return 'Email address is too long';
    return '';
  };

  const validateMessage = (value) => {
    if (!value.trim()) return 'Message is required';
    if (value.length < 10) return 'Message must be at least 10 characters';
    if (value.length > 2000) return 'Message cannot exceed 2000 characters';
    return '';
  };

  const handleBlur = (field) => {
    let error = '';
    switch (field) {
      case 'name':
        error = validateName(formData.name);
        break;
      case 'email':
        error = validateEmail(formData.email);
        break;
      case 'message':
        error = validateMessage(formData.message);
        break;
      default:
        break;
    }
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      message: validateMessage(formData.message)
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  // FIXED: Handle form submission with correct EmailJS variable names
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      const firstErrorField = Object.keys(errors).find(key => errors[key]);
      if (firstErrorField) {
        document.getElementById(firstErrorField)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Variable names match your EmailJS template: {{name}}, {{email}}, {{title}}
      const templateParams = {
        name: formData.name,        // This goes to {{name}} in your template
        email: formData.email,      // This goes to {{email}} in your template
        title: 'Art Commission Inquiry', // This goes to {{title}} (Subject)
        message: formData.message,  // This goes in the Content section
      };

      console.log('Sending message from:', formData.name);
      console.log('Reply to email:', formData.email);

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus({
          type: 'success',
          message: '✨ Message sent successfully! I\'ll get back to you within 24 hours.'
        });
        
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setErrors({});
        
        setTimeout(() => {
          setSubmitStatus({ type: '', message: '' });
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        type: 'error',
        message: '❌ Failed to send message. Please try again or contact me directly via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Rest of your component remains the same...
  const directLinks = [
    {
      icon: <Mail size={24} />,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-700',
      label: 'Email',
      value: 'artofazyl@gmail.com',
      action: 'Send an email',
      href: 'mailto:artofazyl@gmail.com',
    },
    {
      icon: <Phone size={24} />,
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
    {
      icon: <MapPin size={24} />,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-700',
      label: "Location",
      value: "South Africa",
      action: "Based in SA",
      href: "#",
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
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 pb-10 overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-green-100 opacity-40 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-green-100 opacity-30 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} className="sparkle-icon" />
            <span>Get in touch</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Let's Bring Your
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent"> Vision to Life</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Whether it's a custom portrait, mural, or art lessons — I'm here to help create something meaningful.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Contact Form - Centered */}
        <div className="mb-14">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-8 border-b border-green-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Send a Message</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Have a project in mind or want to commission a piece? I'd love to hear from you!
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <User size={16} className="text-green-500" />
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500/20
                    ${errors.name 
                      ? 'border-red-400 bg-red-50/50 focus:border-red-500' 
                      : 'border-gray-200 focus:border-green-500 bg-gray-50/50 hover:bg-white'
                    }`}
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                    <AlertCircle size={14} />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Mail size={16} className="text-green-500" />
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500/20
                    ${errors.email 
                      ? 'border-red-400 bg-red-50/50 focus:border-red-500' 
                      : 'border-gray-200 focus:border-green-500 bg-gray-50/50 hover:bg-white'
                    }`}
                  placeholder="you@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                    <AlertCircle size={14} />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <MessageCircle size={16} className="text-green-500" />
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500/20 resize-none
                    ${errors.message 
                      ? 'border-red-400 bg-red-50/50 focus:border-red-500' 
                      : 'border-gray-200 focus:border-green-500 bg-gray-50/50 hover:bg-white'
                    }`}
                  placeholder="Tell me about your project, idea, or question..."
                  disabled={isSubmitting}
                />
                <div className="flex justify-between items-center">
                  {errors.message && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.message}
                    </p>
                  )}
                  <p className={`text-xs ml-auto ${formData.message.length > 1900 ? 'text-orange-500' : 'text-gray-400'}`}>
                    {formData.message.length}/2000 characters
                  </p>
                </div>
              </div>

              {/* Submit Status */}
              {submitStatus.message && (
                <div className={`rounded-xl p-4 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 border border-green-200' 
                    : 'bg-red-50 border border-red-200'
                }`}>
                  <p className={`text-sm flex items-center gap-2 ${
                    submitStatus.type === 'success' ? 'text-green-700' : 'text-red-600'
                  }`}>
                    {submitStatus.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                    {submitStatus.message}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full group overflow-hidden rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3.5 px-6 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 cursor-pointer"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>

              <p className="text-xs text-gray-400 text-center mt-4">
                I'll respond to your message within 24 hours. Your privacy is respected.
              </p>
            </form>
          </div>
        </div>

        <div className="h-px bg-gray-100 my-14" />

        {/* Social Media Section */}
        <div>
          <p className="text-xs font-semibold tracking-widest text-green-600 uppercase mb-5 text-center">
            Find me on social media
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
    </div>
  );
};

export default Contact;