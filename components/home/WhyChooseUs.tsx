import React from 'react';
import Image from 'next/image';

const features = [
  { 
    id: '01', 
    title: 'Trusted UAE Entity', 
    desc: 'A deeply rooted, reliable corporate partner based in the heart of the Emirates.',
    iconColor: 'bg-orange-50',
    icon: (
      <svg className="w-5 h-5 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  { 
    id: '02', 
    title: 'End-to-End Solutions', 
    desc: 'Flawless project management from initial blueprint to final execution.',
    iconColor: 'bg-blue-50',
    icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  { 
    id: '03', 
    title: 'Industry Partnerships', 
    desc: 'Backed by a formidable network of strategic alliances.',
    iconColor: 'bg-purple-50',
    icon: (
      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    )
  },
  { 
    id: '04', 
    title: 'Transparent Investments', 
    desc: 'Ethical, clear, and high-yield investment opportunities.',
    iconColor: 'bg-green-50',
    icon: (
      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  { 
    id: '05', 
    title: 'Proven Track Record', 
    desc: 'A relentless history of delivering measurable, profitable results.',
    iconColor: 'bg-red-50',
    icon: (
      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full min-h-[100dvh] bg-[#f4f7fa] py-12 lg:py-0 flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Centered Title Area */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-black)] mb-2">
            Why Choose Us?
          </h2>
          <div className="w-16 h-1 bg-[var(--color-gold)] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Feature Cards Stack */}
          <div className="space-y-4">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="group bg-white p-5 rounded-2xl shadow-sm border border-transparent hover:border-[var(--color-gold)]/20 hover:shadow-md transition-all duration-300 flex items-start gap-5"
              >
                {/* Icon Box */}
                <div className={`shrink-0 w-12 h-12 ${feature.iconColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-black)] mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Large Styled Image */}
          <div className="relative group hidden lg:block">
            {/* The Stylized Frame (The curved border effect from template) */}
            <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl">
               <Image 
                src="/images/choose-us-hero.jpg" // Replace with your local image path
                alt="BricketX Executive Team"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Subtle Blue/Gold Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-gold)] opacity-10 rounded-bl-full"></div>
            </div>

            {/* Floating Info Box (Optional flair to match high-end templates) */}
            <div className="absolute -bottom-6 -left-6 bg-[var(--color-black)] text-white p-8 rounded-3xl shadow-xl max-w-[200px] hidden xl:block">
              <p className="text-2xl font-bold text-[var(--color-gold)] mb-1">100%</p>
              <p className="text-xs uppercase tracking-widest font-medium opacity-70 leading-tight">
                Commitment to Performance
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}