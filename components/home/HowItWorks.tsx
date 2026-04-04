import React from 'react';
import Image from 'next/image';

const steps = [
  { 
    num: '01', 
    title: 'Consultation', 
    desc: 'Engage with our executive team to align your requirements with strategic UAE market objectives.',
    offset: 'md:translate-y-0' 
  },
  { 
    num: '02', 
    title: 'Planning', 
    desc: 'We engineer a bespoke, data-driven strategy specifically architected for your portfolio’s growth.',
    offset: 'md:translate-y-12' 
  },
  { 
    num: '03', 
    title: 'Execution', 
    desc: 'Our specialists manage every operational detail, ensuring absolute compliance and technical precision.',
    offset: 'md:translate-y-0' 
  },
  { 
    num: '04', 
    title: 'Results', 
    desc: 'Attain high-performance outcomes, market leadership, and sustainable capital appreciation.',
    offset: 'md:translate-y-12' 
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full h-[100dvh] bg-[#080808] text-white overflow-hidden flex flex-col justify-center py-10">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-12 w-full h-full flex flex-col">
        
        {/* Professionalized Header */}
        <div className="text-center mb-8 md:mb-16 shrink-0">
          <span className="text-[var(--color-gold)] text-[10px] md:text-[11px] uppercase tracking-[0.4em] mb-4 block">
            Operational Excellence
          </span>
          <h2 className="heading-tight text-3xl md:text-5xl lg:text-6xl font-medium drop-shadow-2xl italic">
            Our Strategic Framework: <br className="hidden md:block" />
            Engineering Success from Concept to Capital
          </h2>
        </div>

        {/* Staggered Content Area */}
        <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory flex-1 min-h-0 [&::-webkit-scrollbar]:hidden pb-12 items-start">
          {steps.map((step) => (
            <div 
              key={step.num} 
              className={`relative w-[85vw] md:w-auto h-full max-h-[50vh] md:max-h-[45vh] flex-shrink-0 snap-center p-8 rounded-[2.5rem] bg-gradient-to-br from-white/[0.08] to-transparent border border-white/5 backdrop-blur-xl flex flex-col group transition-all duration-500 ${step.offset}`}
            >
              
              {/* Numbering Style: .01 step */}
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl md:text-5xl font-light text-white opacity-90">{step.num}</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">step</span>
              </div>

              {/* Graphic Placeholder */}
              <div className="relative flex-1 flex items-center justify-center mb-6">
                <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-700">
                  <Image 
                    src={`/images/how-${step.num}.png`} 
                    alt={step.title}
                    fill
                    className="object-contain drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
                  />
                </div>
              </div>

              {/* Content Description */}
              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-medium text-white mb-2 group-hover:text-[var(--color-gold)] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-[14px] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Subtle Card Glow */}
              <div className="absolute inset-0 bg-[var(--color-gold)]/5 opacity-0 group-hover:opacity-100 rounded-[2.5rem] transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex items-center justify-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-4 shrink-0">
          <span>Swipe to follow process</span>
        </div>

      </div>
    </section>
  );
}