"use client";
import React from 'react';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. Our team will contact you shortly.");
  };

  return (
    <div className="bg-white p-8 md:p-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-200 h-full">
      <h2 className="text-2xl font-medium text-[var(--color-black)] mb-8">
        Let's Talk About Your Strategy
      </h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-black)] opacity-80">Full Name</label>
            <input type="text" required placeholder="John Doe" className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[var(--color-gold)] transition-colors text-[15px]" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-black)] opacity-80">Email Address</label>
            <input type="email" required placeholder="john@company.com" className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[var(--color-gold)] transition-colors text-[15px]" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-black)] opacity-80">Company Name</label>
          <input type="text" placeholder="Let us know who you represent" className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[var(--color-gold)] transition-colors text-[15px]" />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-black)] opacity-80">Subject</label>
          <select defaultValue="" className="w-full border-b border-gray-300 py-3 bg-transparent text-gray-700 focus:outline-none focus:border-[var(--color-gold)] cursor-pointer text-[15px]">
            <option value="" disabled>Select an inquiry type...</option>
            <option value="market-entry">UAE Market Entry</option>
            <option value="investment">Investment Holdings</option>
            <option value="consulting">Business Consultation</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-black)] opacity-80">Message</label>
          <textarea rows={4} required placeholder="Tell us how we can help..." className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-[var(--color-gold)] resize-none text-[15px]"></textarea>
        </div>
        <button type="submit" className="w-full bg-[var(--color-black)] text-white py-4 mt-6 text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-gold)] transition-all duration-300 shadow-lg">
          Send Message
        </button>
      </form>
    </div>
  );
}