import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-[var(--color-black)]">
      
      {/* 1. The Background Video */}
      {/* Ensure you create a 'videos' folder inside 'public' and add your mp4 there */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        {/* Fallback text if video fails to load */}
        Your browser does not support the video tag.
      </video>

      {/* 2. The Dark Gradient Overlay */}
      {/* This ensures the white text remains perfectly readable no matter how bright the video gets */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black z-0"></div>

      {/* 3. The Centered Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-6 md:px-12 mt-[-5vh]">
        
        {/* Subtle top label */}
        <div className="mb-6 px-4 py-1.5 rounded-full border border-[var(--color-gold)] border-opacity-40 bg-white/5 backdrop-blur-sm">
          <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest">
            BricketX UAE PM LLC-FZ
          </span>
        </div>

        {/* Massive FinTech-style Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-white leading-[1.05] tracking-tight mb-6 drop-shadow-lg">
          A new era of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-[#e8c89b]">
            global investment.
          </span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mb-10 leading-relaxed drop-shadow-md">
          The premier digital and physical clinic for your business. We help you scale operations, secure high-yield assets, and engineer sustainable growth in the UAE.
        </p>
        
        {/* Call to Action - Pill shaped to match the Fineo reference */}
        <div className="flex flex-col sm:flex-row gap-5">
          <Link 
            href="/contact" 
            className="bg-white text-black px-10 py-4 rounded-full text-[15px] font-semibold hover:bg-[var(--color-gold)] hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(195,153,103,0.3)] hover:shadow-[0_0_60px_rgba(195,153,103,0.6)] transform hover:-translate-y-1"
          >
            Partner With Us
          </Link>
          <Link 
            href="/investments" 
            className="bg-black/50 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full text-[15px] font-semibold hover:bg-white/10 transition-all duration-300"
          >
            Explore Portfolio
          </Link>
        </div>

      </div>
    </section>
  );
}