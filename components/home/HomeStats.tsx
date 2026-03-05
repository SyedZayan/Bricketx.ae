import AnimatedNumber from '@/components/ui/AnimatedNumber';

export default function HomeStats() {
  return (
    <section className="w-full bg-white border-y border-gray-200 py-12 md:py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-gray-200">
          
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-4xl md:text-5xl font-light text-[var(--color-black)] mb-2 tracking-tighter flex items-center">
              <AnimatedNumber value={10} />
              <span className="text-[var(--color-gold)] font-medium">+</span>
            </h4>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Years Experience</p>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-4xl md:text-5xl font-light text-[var(--color-black)] mb-2 tracking-tighter flex items-center">
              <span className="text-[var(--color-gold)] font-medium">$</span>
              <AnimatedNumber value={50} />
              <span className="text-[var(--color-gold)] font-medium">M+</span>
            </h4>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Assets Advised</p>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-4xl md:text-5xl font-light text-[var(--color-black)] mb-2 tracking-tighter flex items-center">
              <AnimatedNumber value={150} />
              <span className="text-[var(--color-gold)] font-medium">+</span>
            </h4>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Global Partners</p>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-4xl md:text-5xl font-light text-[var(--color-black)] mb-2 tracking-tighter flex items-center">
              <AnimatedNumber value={100} />
              <span className="text-[var(--color-gold)] font-medium">%</span>
            </h4>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Capital Alignment</p>
          </div>

        </div>
      </div>
    </section>
  );
}