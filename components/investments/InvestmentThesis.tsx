import AnimatedNumber from '@/components/ui/AnimatedNumber';

export default function InvestmentThesis() {
  return (
    <section className="w-full py-32 bg-white text-[var(--color-black)]">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight mb-8">
            Every Investment <br /> Begins With <span className="text-[var(--color-gold)]">Insight.</span>
          </h2>
          <p className="text-gray-600 text-[16px] leading-relaxed font-light mb-12 max-w-lg">
            Our partners bring decades of private market experience, a global perspective, and a shared commitment to sustainable value creation. We back independent sponsors and long-term holding companies with aligned capital.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6">
              <span className="text-[var(--color-gold)] font-mono text-xl pt-1">01</span>
              <div>
                <h4 className="text-lg font-bold mb-1">Real-World Experience</h4>
                <p className="text-gray-500 text-sm font-light leading-relaxed">We’ve been operators. Our approach is grounded in executing scalable business models, not just theoretical finance.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[var(--color-gold)] font-mono text-xl pt-1">02</span>
              <div>
                <h4 className="text-lg font-bold mb-1">A Partner Beyond Capital</h4>
                <p className="text-gray-500 text-sm font-light leading-relaxed">We provide strategic direction, operational frameworks, and regulatory compliance expertise in the UAE.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Editorial Stats Grid with Animated Numbers */}
        <div className="grid grid-cols-2 gap-6 relative">
           {/* Subtle background accent behind the grid */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-gray-50 -z-10 rounded-3xl"></div>

          <div className="bg-white p-10 border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] rounded-xl flex flex-col justify-center text-center transform lg:-translate-y-6">
            <h4 className="text-5xl font-light tracking-tighter mb-2 text-[var(--color-black)] flex items-center justify-center">
              <AnimatedNumber value={15} /><span className="text-[var(--color-gold)] font-bold">+</span>
            </h4>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Years Experience</span>
          </div>
          
          <div className="bg-[var(--color-black)] p-10 border border-[var(--color-black)] shadow-2xl rounded-xl flex flex-col justify-center text-center text-white transform lg:translate-y-6">
            <h4 className="text-5xl font-light tracking-tighter mb-2 flex items-center justify-center">
              <AnimatedNumber value={25} /><span className="text-[var(--color-gold)] font-bold">+</span>
            </h4>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Transactions</span>
          </div>
          
          <div className="bg-white p-10 border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] rounded-xl flex flex-col justify-center text-center transform lg:-translate-y-6">
            <h4 className="text-5xl font-light tracking-tighter mb-2 text-[var(--color-black)] flex items-center justify-center">
              <AnimatedNumber value={3} />
            </h4>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Active Funds</span>
          </div>
          
          <div className="bg-white p-10 border-t-4 border-[var(--color-gold)] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] rounded-xl flex flex-col justify-center text-center transform lg:translate-y-6">
            <h4 className="text-5xl font-light tracking-tighter mb-2 text-[var(--color-black)] flex items-center justify-center">
              <AnimatedNumber value={100} /><span className="text-[var(--color-gold)] font-bold">%</span>
            </h4>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Capital Alignment</span>
          </div>
        </div>

      </div>
    </section>
  );
}