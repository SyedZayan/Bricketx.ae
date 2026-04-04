import Link from 'next/link';

export default function HomeCTA() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[var(--color-black)] overflow-hidden flex items-center justify-center border-t border-white/10">
      
      {/* Subtle Glowing Orb for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--color-gold)] opacity-[0.08] blur-[100px] rounded-full pointer-events-none"></div>
      
      {/* Minimalist Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Section Label */}
        <span className="text-[var(--color-gold)] text-[11px] md:text-[12px] font-bold uppercase mb-4 block tracking-widest">
          [ Get In Touch ]
        </span>
        
        {/* Headline */}
        <h2 className="heading-tight text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 drop-shadow-md">
          Turn Your Vision <br className="hidden md:block" /> Into Reality.
        </h2>
        
        {/* Subheading */}
        <p className="text-gray-300 text-[15px] md:text-[18px] font-light mb-10 max-w-2xl mx-auto leading-relaxed">
          Ready to start your next project, promote your business, or grow your investments? 
          Contact us today and let BricketX engineer your success.
        </p>
        
        {/* CTA Buttons - Two options, strictly stacked on mobile, inline on desktop */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full max-w-xs sm:max-w-none mx-auto">
          <Link 
            href="/contact" 
            className="bg-white text-[var(--color-black)] px-10 py-4 rounded-full text-[15px] font-bold transition-all duration-300 shadow-gold hover:bg-[var(--color-gold)] hover:text-white transform hover:-translate-y-1 w-full sm:w-auto text-center"
          >
            Contact Us
          </Link>
          <Link 
            href="/contact?type=consultation" 
            className="bg-transparent backdrop-blur-lg text-white border border-white/40 px-10 py-4 rounded-full text-[15px] font-bold hover:bg-white hover:text-[var(--color-black)] transition-all duration-300 w-full sm:w-auto text-center"
          >
            Request a Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}