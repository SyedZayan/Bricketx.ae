import Image from 'next/image';

export default function ConsultationApproach() {
  return (
    <section className="w-full py-32 bg-[#fafafa] relative overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-200 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left: Overlapping Images */}
        <div className="relative h-[600px] w-full hidden md:block">
          {/* Back Image */}
          <div className="absolute top-0 left-0 w-[80%] h-[80%] rounded-xl overflow-hidden shadow-lg border border-gray-100">
             <Image src="/images/consult-approach-1.jpg" alt="Data Analysis" fill className="object-cover grayscale" />
          </div>
          {/* Front Image (Overlapping) */}
          <div className="absolute bottom-0 right-0 w-[65%] h-[60%] rounded-xl overflow-hidden shadow-2xl border-4 border-white z-10">
             <Image src="/images/consult-approach-2.jpg" alt="Client Meeting" fill className="object-cover" />
          </div>
          
          {/* Small Decorative Element */}
          <div className="absolute top-1/2 -left-8 bg-[var(--color-gold)] text-white p-4 rounded-full shadow-lg">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
          </div>
        </div>

        {/* Right: Text Content */}
        <div>
          <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-4 block">
            [ Our Methodology ]
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 text-[var(--color-black)]">
            Business opportunities are like buses, there's always another one coming.
          </h2>
          <p className="text-gray-600 text-[15px] font-light leading-relaxed mb-8">
            When it comes to high-stakes business in the UAE, you cannot rely on chance. We employ a rigorous, phase-gated methodology that transforms chaotic market data into linear, executable strategies.
          </p>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full border border-[var(--color-gold)] flex items-center justify-center flex-shrink-0 text-[var(--color-gold)]">
                <span className="text-xs font-bold">1</span>
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-black)] mb-1">Discovery & Audit</h4>
                <p className="text-sm text-gray-500 font-light">Deep-dive analysis of your current operational baseline and fiscal health.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full border border-[var(--color-gold)] flex items-center justify-center flex-shrink-0 text-[var(--color-gold)]">
                <span className="text-xs font-bold">2</span>
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-black)] mb-1">Strategic Blueprinting</h4>
                <p className="text-sm text-gray-500 font-light">Architecting a bespoke roadmap aligned with UAE regulatory frameworks.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full border border-[var(--color-gold)] flex items-center justify-center flex-shrink-0 text-[var(--color-gold)]">
                <span className="text-xs font-bold">3</span>
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-black)] mb-1">Execution & Scale</h4>
                <p className="text-sm text-gray-500 font-light">On-the-ground implementation, continuous monitoring, and optimization.</p>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}