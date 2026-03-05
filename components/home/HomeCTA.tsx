import Link from 'next/link';

export default function HomeCTA() {
  return (
    <section className="relative w-full py-32 bg-[var(--color-black)] overflow-hidden flex items-center justify-center border-t-2 border-[var(--color-gold)]">
      
      {/* Subtle Glowing Orb for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--color-gold)] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
      
      {/* Minimalist Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-6 block">
          Take The Next Step
        </span>
        
        <h2 className="text-4xl md:text-6xl font-medium text-white mb-8 tracking-tight">
          Ready to scale your <br />
          <span className="italic font-light text-[var(--color-gold)]">vision?</span>
        </h2>
        
        <p className="text-gray-400 font-light mb-12 max-w-lg mx-auto">
          Book a private discovery session with our executive team to discuss your portfolio and strategic objectives in the UAE.
        </p>
        
        <Link 
          href="/contact" 
          className="bg-white text-[var(--color-black)] px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[var(--color-gold)] hover:text-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] rounded-sm"
        >
          Partner With Us &rarr;
        </Link>
      </div>
    </section>
  );
}