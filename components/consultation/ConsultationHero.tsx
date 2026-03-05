import Image from 'next/image';
import Link from 'next/link';

export default function ConsultationHero() {
  return (
    <section className="relative w-full py-32 lg:py-40 bg-[var(--color-black)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--color-gold)]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-grey)]">Elite Advisory</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
            Consulting That <br />
            <span className="text-[var(--color-gold)]">Drives Real Growth.</span>
          </h1>
          
          <p className="text-lg text-[var(--color-grey)] font-light leading-relaxed max-w-lg mb-10">
            At BricketX, we help ambitious enterprises and organizations unlock their true market potential through precision strategy, operational innovation, and financial transformation in the UAE.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-[var(--color-gold)] text-white px-8 py-3.5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[var(--color-black)] transition-all text-center rounded-sm">
              Get Started Today
            </Link>
            <Link href="#services" className="border border-white/20 text-white px-8 py-3.5 text-sm font-bold uppercase tracking-widest hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all text-center rounded-sm">
              Explore Services
            </Link>
          </div>
        </div>

        {/* Right Column: Image with Floating Widgets (Consalt Template Style) */}
        <div className="relative w-full h-[500px] lg:h-[600px] mt-10 lg:mt-0 hidden md:block">
          {/* Main Image */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10">
            <Image 
              src="/images/consult-hero.jpg" 
              alt="Executive Consulting" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* Floating Widget 1: Growth Stat */}
          <div className="absolute top-10 -left-12 bg-white p-5 rounded-lg shadow-2xl flex items-center gap-4 animate-bounce-slow border-l-4 border-[var(--color-gold)]">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase">Business Growth</p>
              <p className="text-2xl font-bold text-[var(--color-black)]">+124%</p>
            </div>
          </div>

          {/* Floating Widget 2: Review Stars */}
          <div className="absolute bottom-16 -right-8 bg-[var(--color-black)] p-4 rounded-lg shadow-2xl border border-white/10 flex flex-col gap-2">
            <div className="flex text-[var(--color-gold)]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              ))}
            </div>
            <p className="text-xs text-white font-medium">Trusted by 200+ Firms</p>
          </div>
        </div>

      </div>
    </section>
  );
}