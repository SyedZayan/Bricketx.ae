import Image from 'next/image';
import { servicesData } from '@/constants/services';

export default function ServicesSection() {
  return (
    <section className="relative w-full h-[100dvh] bg-[var(--color-black)] text-white overflow-hidden flex flex-col justify-center py-6 md:py-8">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 w-full h-full flex flex-col">
        
        {/* Section Header - Tightened margins to give cards more room */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-4 md:mb-8 gap-4 shrink-0">
          <div>
            <span className="text-[var(--color-gold)] text-[10px] md:text-[12px] font-bold uppercase mb-2 block tracking-widest">
              [ Our Expertise ]
            </span>
            <h2 className="heading-tight text-3xl md:text-5xl lg:text-6xl font-medium text-white drop-shadow-md">
              Building Value, <br />
              Creating Opportunities.
            </h2>
          </div>
          
          <div className="max-w-md hidden md:block">
            <p className="text-gray-400 text-[14px] lg:text-[15px] leading-relaxed font-light">
              We help individuals and businesses grow with confidence by connecting vision with flawless execution across projects, media, and investments.
            </p>
          </div>

          {/* Mobile Swipe Indicator */}
          <div className="md:hidden flex items-center gap-2 text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mt-1">
            <span>Swipe to explore</span>
            <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </div>
        </div>

        {/* Cards Container: Added min-h-0 to stop flex children from blowing past the viewport */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory flex-1 min-h-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              // Added max-h-[65vh] so the card height is strictly capped on all screens
              className="group relative w-[85vw] md:w-auto h-full max-h-[70vh] md:max-h-[65vh] flex-shrink-0 snap-center rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#111] cursor-pointer border border-white/5"
            >
              {/* Background Image */}
              <Image 
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-50 md:opacity-60 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>

              {/* Content Container */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end transition-transform duration-500">
                
                {/* Decorative Icon */}
                <div className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-md mb-auto flex items-center justify-center border border-white/20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 shrink-0">
                   <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full"></div>
                </div>

                <div className="flex flex-col gap-2">
                  {/* Title & Number */}
                  <div className="flex justify-between items-end gap-2">
                    <h3 className="text-2xl md:text-3xl font-medium leading-tight text-white drop-shadow-md">
                      {service.title}
                    </h3>
                    <span className="text-[var(--color-gold)] text-xs md:text-sm font-bold mb-1 opacity-80 shrink-0">
                      {service.id}
                    </span>
                  </div>

                  {/* Expanding Description */}
                  <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <span className="block text-white font-medium text-[13px] md:text-[14px] pt-2 mb-1">
                        {service.subtitle}
                      </span>
                      <p className="text-gray-300 text-[12px] md:text-[13px] leading-relaxed font-light line-clamp-3 md:line-clamp-none">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}