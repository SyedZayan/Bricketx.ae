"use client";

import React from 'react';
import Image from 'next/image';

export default function ContactPage() {
  
  // Optional: A simple handler to prevent page reload on form submit for now
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. Our team will contact you shortly.");
  };

  return (
    <main className="min-h-screen bg-[#fafafa] pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-4 block">
            [ Partner With Us ]
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-[var(--color-black)] mb-6">
            Get in Touch with <br /> Our Executive Team.
          </h1>
          {/* Darkened paragraph text for better readability */}
          <p className="text-gray-600 text-[16px] leading-relaxed font-light max-w-2xl">
            We are here to answer your questions, discuss your portfolio, and help you engineer the best strategies for sustainable growth in the UAE. Let’s build something extraordinary together.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: The Form */}
          <div className="bg-white p-8 md:p-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-200">
            <h2 className="text-2xl font-medium text-[var(--color-black)] mb-8">
              Let's Talk About Your Strategy
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="space-y-2">
                  {/* Darker, bolder labels */}
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[var(--color-black)] opacity-80">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    placeholder="John Doe"
                    /* Darker bottom border and placeholder */
                    className="w-full border-b border-gray-300 py-3 bg-transparent text-[var(--color-black)] placeholder-gray-400 focus:outline-none focus:border-[var(--color-gold)] transition-colors text-[15px]"
                  />
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[var(--color-black)] opacity-80">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    placeholder="john@company.com"
                    className="w-full border-b border-gray-300 py-3 bg-transparent text-[var(--color-black)] placeholder-gray-400 focus:outline-none focus:border-[var(--color-gold)] transition-colors text-[15px]"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className="space-y-2">
                <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-[var(--color-black)] opacity-80">Company Name</label>
                <input 
                  type="text" 
                  id="company" 
                  placeholder="Let us know who you represent"
                  className="w-full border-b border-gray-300 py-3 bg-transparent text-[var(--color-black)] placeholder-gray-400 focus:outline-none focus:border-[var(--color-gold)] transition-colors text-[15px]"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-[var(--color-black)] opacity-80">Subject</label>
                <select 
                  id="subject" 
                  defaultValue=""
                  className="w-full border-b border-gray-300 py-3 bg-transparent text-gray-700 focus:outline-none focus:border-[var(--color-gold)] transition-colors text-[15px] cursor-pointer"
                >
                  <option value="" disabled>Select an inquiry type...</option>
                  <option value="market-entry">UAE Market Entry</option>
                  <option value="investment">Investment Holdings</option>
                  <option value="consulting">Business Consultation</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[var(--color-black)] opacity-80">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  placeholder="Tell us how we can help..."
                  className="w-full border-b border-gray-300 py-3 bg-transparent text-[var(--color-black)] placeholder-gray-400 focus:outline-none focus:border-[var(--color-gold)] transition-colors text-[15px] resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-[var(--color-black)] text-white py-4 mt-6 text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-gold)] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info & Map */}
          <div className="flex flex-col space-y-12">
            
            {/* Direct Contact Details */}
            <div>
              <h3 className="text-xl font-medium text-[var(--color-black)] mb-6">
                Prefer a Direct Approach?
              </h3>
              <ul className="space-y-6">
                <li className="flex items-center space-x-4">
                  {/* Slightly darker icon box border */}
                  <div className="w-11 h-11 bg-white shadow-sm border border-gray-200 flex items-center justify-center text-[var(--color-gold)] rounded-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  {/* Darker text for readability */}
                  <span className="text-gray-700 text-[15px] font-medium">+971 00 000 0000</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-11 h-11 bg-white shadow-sm border border-gray-200 flex items-center justify-center text-[var(--color-gold)] rounded-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <a href="mailto:info@bricketx.ae" className="text-gray-700 text-[15px] font-medium hover:text-[var(--color-gold)] transition-colors">info@bricketx.ae</a>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-11 h-11 bg-white shadow-sm border border-gray-200 flex items-center justify-center text-[var(--color-gold)] rounded-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <span className="text-gray-700 text-[15px] font-medium">Monday to Friday, 9:00 AM - 6:00 PM (GST)</span>
                </li>
              </ul>
            </div>

            {/* Map & Office Card */}
            <div className="relative w-full h-[400px] bg-gray-200 border border-gray-200 shadow-inner">
              
              <Image 
                src="/images/dubai-map-bg.jpg" 
                alt="Map of Dubai" 
                fill 
                className="object-cover grayscale opacity-60 mix-blend-multiply"
              />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white p-6 shadow-xl border-l-4 border-[var(--color-gold)]">
                <h4 className="text-lg font-bold text-[var(--color-black)] mb-3">Visit Our Headquarters</h4>
                <div className="flex items-start space-x-3 mb-5">
                  <svg className="w-4 h-4 text-[var(--color-gold)] mt-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {/* Darker address text */}
                  <p className="text-gray-700 text-[14px] leading-relaxed font-medium">
                    BricketX PM LLC-FZ <br />
                    Business Center 1, M Floor <br />
                    The Meydan Hotel, Nad Al Sheba, Dubai, U.A.E
                  </p>
                </div>
                
                <a href="https://maps.google.com/?q=The+Meydan+Hotel,+Dubai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-black)] hover:text-[var(--color-gold)] transition-colors">
                  Get Directions <span>→</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}