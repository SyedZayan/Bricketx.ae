"use client"; // Required for interactivity (hover states) in Next.js App Router

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const portfolioSectors = [
  { 
    id: '1', 
    title: "Commercial Real Estate", 
    subtitle: "High-Yield UAE Assets",
    description: "Acquisition and management of prime commercial assets in high-yield enterprise zones, ensuring long-term capital appreciation.",
    image: "/images/portfolio-1.jpg" // Add your image here
  },
  { 
    id: '2', 
    title: "AI & Web3", 
    subtitle: "Digital Infrastructure",
    description: "Strategic backing of decentralized technologies, artificial intelligence startups, and next-generation digital infrastructure.",
    image: "/images/portfolio-2.jpg"
  },
  { 
    id: '3', 
    title: "Tech & SaaS", 
    subtitle: "Enterprise Efficiency",
    description: "Providing capital and operational expertise to scalable Software-as-a-Service platforms driving enterprise efficiency.",
    image: "/images/portfolio-3.jpg"
  },
  { 
    id: '4', 
    title: "Sustainable Energy", 
    subtitle: "Renewable Transition",
    description: "Investments focused on renewable energy transition, smart grid technologies, and sustainable urban development projects.",
    image: "/images/portfolio-4.jpg"
  }
];

export default function InvestmentFocus() {
  // We track which card is currently being hovered. Default to the first one (index 0).
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-32 bg-[var(--color-white)] text-[var(--color-black)] relative">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        
        {/* Light Theme Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-6 block">
              [ OUR PORTFOLIO ]
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight">
              Capitalizing on <br />
              Future Growth.
            </h2>
          </div>
          
          <div className="pb-2">
            <Link 
              href="/investments" 
              className="inline-flex items-center gap-3 border-b border-[var(--color-black)] hover:border-[var(--color-gold)] pb-2 text-[var(--color-black)] hover:text-[var(--color-gold)] transition-colors text-xs font-bold tracking-widest uppercase"
            >
              View Full Portfolio <span className="text-lg leading-none">&rsaquo;</span>
            </Link>
          </div>
        </div>

        {/* The Interactive Accordion Gallery */}
        <div className="flex flex-col lg:flex-row w-full h-[800px] lg:h-[600px] border-t border-b border-[var(--color-grey)] border-opacity-30">
          {portfolioSectors.map((sector, index) => {
            const isActive = activeIndex === index;

            return (
              <div 
                key={sector.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border-b lg:border-b-0 lg:border-r border-[var(--color-grey)] border-opacity-30 last:border-0 flex flex-col justify-between overflow-hidden
                  ${isActive ? 'flex-[3] lg:flex-[2.5]' : 'flex-1'}
                `}
              >
                
                {/* Huge Background Number (Visible when inactive) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 z-0
                  ${isActive ? 'opacity-0' : 'opacity-100'}
                `}>
                  <span className="text-[8rem] lg:text-[12rem] font-light text-[var(--color-grey)] opacity-20">
                    {sector.id}
                  </span>
                </div>

                {/* Expanding Image Overlay (Visible when active) */}
                <div className={`absolute inset-0 w-full h-full transition-all duration-700 z-10
                  ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}
                `}>
                  <Image 
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover"
                  />
                  {/* Dark gradient so the white text is readable over the image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                {/* Card Content (Always at bottom) */}
                <div className={`relative z-20 p-6 lg:p-8 mt-auto flex flex-col transition-colors duration-500
                  ${isActive ? 'text-white' : 'text-[var(--color-black)]'}
                `}>
                  
                  <div className="flex justify-between items-end gap-4 w-full">
                    <div>
                      <h3 className="text-2xl font-medium tracking-tight mb-1">
                        {sector.title}
                      </h3>
                      <p className={`text-sm tracking-wide uppercase transition-colors duration-500
                         ${isActive ? 'text-[var(--color-gold)]' : 'text-[var(--color-grey)]'}
                      `}>
                        {sector.subtitle}
                      </p>
                    </div>

                    {/* Animated Arrow */}
                    <div className="hidden lg:flex w-10 h-10 rounded-full border border-current items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                      <span className={`transform transition-transform duration-500 ${isActive ? '-rotate-45' : 'rotate-0'}`}>
                        &rarr;
                      </span>
                    </div>
                  </div>

                  {/* Hidden Description (Expands only when active) */}
                  <div className={`grid transition-all duration-500 ease-in-out
                    ${isActive ? 'grid-rows-[1fr] mt-6 opacity-100' : 'grid-rows-[0fr] mt-0 opacity-0'}
                  `}>
                    <div className="overflow-hidden">
                      <p className="text-gray-200 text-sm font-light leading-relaxed max-w-md">
                        {sector.description}
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}