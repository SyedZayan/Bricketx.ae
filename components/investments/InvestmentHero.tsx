export default function InvestmentHero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center bg-[var(--color-black)] overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      >
        <source src="/videos/investment-hero.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0"></div>

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row justify-between items-center relative z-10">
        
        {/* Left: Main Headline */}
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-6">
            Investment Holdings
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.05] mb-6">
            Backing the Next Generation of <br />
            <span className="text-[var(--color-gold)]">Global Leaders.</span>
          </h1>
          <p className="text-lg text-gray-300 font-light leading-relaxed max-w-xl">
            We are a holding company providing flexible capital, real-world operational experience, and aligned partnerships for long-term value creation.
          </p>
        </div>

        {/* Right: Floating Glass Stat Card */}
        <div className="mt-12 md:mt-0 md:ml-8 w-full md:w-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl min-w-[300px]">
            <h3 className="text-5xl font-bold text-white mb-2">
              $150M<span className="text-[var(--color-gold)]">+</span>
            </h3>
            <p className="text-gray-300 text-sm font-light uppercase tracking-widest">
              Assets Under Management
            </p>
            <div className="w-full h-[1px] bg-white/20 my-6"></div>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Targeting high-yield enterprise zones and transformative digital infrastructure across the UAE.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}