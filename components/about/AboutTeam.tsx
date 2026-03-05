"use client";

import { useState } from 'react';
import Image from 'next/image';

const teamMembers = [
  { name: "Julian Vance", role: "Managing Partner", image: "/images/team-1.jpg" },
  { name: "Sarah Chen", role: "Head of Investments", image: "/images/team-2.jpg" },
  { name: "Robert Al-Fayed", role: "VP of Consultation", image: "/images/team-3.jpg" },
  { name: "Elena Rostova", role: "Director of Operations", image: "/images/team-4.jpg" },
];

export default function AboutTeam() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-32 bg-[#fafafa] text-[var(--color-black)]">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left: Text */}
        <div className="lg:col-span-4">
          <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-4 block">
            [ Executive Leadership ]
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-6">
            Visionary Minds <br />
            <span className="text-[var(--color-gold)]">That Inspire.</span>
          </h2>
          <p className="text-gray-600 text-[16px] font-light leading-relaxed mb-8">
            Our executive team brings decades of global financial and operational experience directly to your portfolio.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-black)] hover:text-[var(--color-gold)] transition-colors border-b border-black hover:border-[var(--color-gold)] pb-1">
            Connect with our team &rarr;
          </a>
        </div>

        {/* Center: Interactive List */}
        <div className="lg:col-span-4 flex flex-col mt-10 lg:mt-0">
          {teamMembers.map((member, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={member.name}
                onMouseEnter={() => setActiveIndex(index)}
                className={`py-8 border-b border-gray-200 cursor-pointer flex flex-col justify-center transition-all duration-300
                  ${isActive ? 'pl-6 border-[var(--color-gold)] bg-white shadow-sm' : 'hover:pl-2'}
                `}
              >
                <div className="flex items-center gap-6 mb-2">
                  <span className={`text-xs font-mono transition-colors ${isActive ? 'text-[var(--color-gold)]' : 'text-gray-400'}`}>
                    0{index + 1}
                  </span>
                  <h3 className={`text-3xl font-medium transition-colors ${isActive ? 'text-[var(--color-black)]' : 'text-gray-400'}`}>
                    {member.name}
                  </h3>
                </div>
                {/* Role slides in slightly when active */}
                <span className={`text-sm font-bold uppercase tracking-wider pl-10 transition-all duration-300 ${isActive ? 'opacity-100 text-[var(--color-gold)] translate-y-0' : 'opacity-0 -translate-y-2 h-0 overflow-hidden'}`}>
                  {member.role}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right: Dynamic Image Reveal */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          {/* Swapped from a circle to a sleek portrait rectangle */}
          <div className="relative w-full max-w-[320px] h-[450px] rounded-xl overflow-hidden shadow-2xl bg-white border border-gray-100">
            <Image 
              src={teamMembers[activeIndex].image}
              alt={teamMembers[activeIndex].name}
              fill
              className="object-cover transition-all duration-700 ease-in-out scale-100"
            />
          </div>
        </div>

      </div>
    </section>
  );
}