"use client";

import { useRef } from 'react';
import Image from 'next/image';

const portfolio = [
  { name: "Aura Tech", sector: "Software & Web3", desc: "Leading provider of decentralized logistics software.", image: "/images/port-1.jpg" },
  { name: "Meydan Assets", sector: "Commercial Real Estate", desc: "Prime commercial acquisitions in high-yield UAE zones.", image: "/images/port-2.jpg" },
  { name: "NexGen Energy", sector: "Sustainable Tech", desc: "Smart grid technologies and renewable transition.", image: "/images/port-3.jpg" },
  { name: "Apex Health", sector: "Digital Healthcare", desc: "AI-driven diagnostics and clinical management systems.", image: "/images/port-4.jpg" },
  { name: "Nexus Logistics", sector: "Supply Chain", desc: "Next-generation automated fulfillment centers.", image: "/images/port-1.jpg" }
];

export default function InvestmentPortfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // UPDATED: Dynamic Scroll Function
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      
      // 1. Find the exact width of the first card currently on the screen
      const cardWidth = current.firstElementChild?.clientWidth || 0;
      
      // 2. Add the gap distance (Tailwind 'gap-8' is exactly 32 pixels)
      const scrollDistance = cardWidth + 32; 
      
      // 3. Move left or right by that exact amount
      const scrollAmount = direction === 'left' ? -scrollDistance : scrollDistance; 
      
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-32 bg-[#fafafa] border-t border-gray-200 overflow-hidden">
      
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 mb-16 flex flex-col md:flex-row justify-between md:items-end gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[var(--color-black)] mb-4">
            A Growing Portfolio of <br />
            <span className="text-[var(--color-gold)]">Enduring Partnerships.</span>
          </h2>
          <p className="text-gray-500 font-light max-w-md text-[15px] leading-relaxed">
            We partner with exceptional entrepreneurs to build businesses that stand the test of time. Explore our active investments below.
          </p>
        </div>

        {/* Interactive Scroll Buttons */}
        <div className="flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="w-14 h-14 rounded-full border border-[var(--color-black)] flex items-center justify-center text-[var(--color-black)] hover:bg-[var(--color-black)] hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label="Scroll Left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-14 h-14 rounded-full border border-[var(--color-black)] flex items-center justify-center text-[var(--color-black)] hover:bg-[var(--color-black)] hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label="Scroll Right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>

      {/* The Animated Scroll Container */}
      <div 
        ref={scrollRef}
        className="pl-6 md:pl-12 xl:pl-[calc((100vw-90rem)/2+3rem)] flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
      >
        {portfolio.map((item, i) => (
          <div 
            key={i} 
            className="min-w-[85vw] md:min-w-[400px] lg:min-w-[500px] h-[550px] relative group rounded-2xl overflow-hidden snap-center flex-shrink-0 cursor-pointer shadow-lg border border-gray-200"
          >
            <Image 
              src={item.image} 
              alt={item.name} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-3">
                {item.sector}
              </span>
              <h3 className="text-3xl font-medium text-white mb-3 group-hover:text-[var(--color-gold)] transition-colors duration-300">
                {item.name}
              </h3>
              <p className="text-gray-300 font-light text-sm leading-relaxed max-w-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}