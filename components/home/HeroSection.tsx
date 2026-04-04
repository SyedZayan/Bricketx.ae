import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden bg-[var(--color-black)]">
      
      {/* 1. Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. Deep Gradient Overlay - Darkened slightly at the top for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[var(--color-black)] z-0"></div>

      {/* 3. Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl px-6 md:px-12 mt-[-2vh]">
        
        {/* Top Label - Fixed the border and text color to explicitly use your CSS variable */}
        <div className="mb-10 px-6 py-2 rounded-full border border-[var(--color-gold)]/40 bg-black/30 backdrop-blur-md">
          <span className="text-[var(--color-gold)] text-[11px] font-bold uppercase tracking-widest">
            BricketX – Building Value, Creating Opportunities
          </span>
        </div>

        {/* Headline - FIXED GRADIENT: Now explicitly uses [var(--color-gold)] */}
        <h1 className="text-standout heading-tight text-4xl md:text-6xl lg:text-[4.5rem] font-bold text-white mb-8 drop-shadow-2xl">
          Your Trusted Partner in Projects, <br className="hidden md:block" />
          Advertising & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-[#f3d9b1]">Smart Investments</span>
        </h1>
        
        {/* Subheading - Kept crisp and highly readable */}
        <p className="text-standout text-lg md:text-xl text-gray-200 font-light max-w-3xl mb-12 leading-relaxed">
          At BricketX, we connect vision with execution. From managing large-scale construction projects to 
          delivering high-impact advertising solutions and offering profitable investment opportunities 
          — we help individuals and businesses grow with confidence.
        </p>
        
        {/* CTA Buttons - Fixed hover states to use the exact variable */}
        <div className="flex flex-col sm:flex-row gap-6">
          <Link 
            href="/contact" 
            className="bg-white text-[var(--color-black)] px-12 py-4 rounded-full text-[16px] font-bold transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(195,153,103,0.4)] hover:bg-[var(--color-gold)] hover:text-white transform hover:-translate-y-1"
          >
            Get Started
          </Link>
          <Link 
            href="/services" 
            className="bg-transparent backdrop-blur-lg text-white border border-white/40 px-12 py-4 rounded-full text-[16px] font-bold hover:bg-white hover:text-[var(--color-black)] transition-all duration-300"
          >
            Explore Services
          </Link>
        </div>

      </div>

      {/* Decorative Bottom Fade - Smooth transition into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--color-black)] to-transparent z-10"></div>
    </section>
  );
}