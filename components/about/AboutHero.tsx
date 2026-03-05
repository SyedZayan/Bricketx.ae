export default function AboutHero() {
  return (
    <section className="relative w-full py-40 lg:py-56 flex items-center justify-center bg-[var(--color-black)] overflow-hidden">
      
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 mix-blend-luminosity">
        <source src="/videos/about-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[var(--color-black)] z-0"></div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300">Who We Are</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-medium text-white tracking-tight leading-[1.05] mb-8">
          Architects of <br /> <span className="italic font-light text-[var(--color-gold)]">Enduring Value.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
          Pioneering sustainable growth, mitigating risk, and engineering operational excellence for elite enterprises in the UAE and beyond.
        </p>
      </div>
    </section>
  );
}