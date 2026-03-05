import Image from 'next/image';
import AnimatedNumber from '@/components/ui/AnimatedNumber';

export default function AboutVision() {
  return (
    <section className="w-full py-32 bg-white text-[var(--color-black)]">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-6 block">
              [ Our Vision ]
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8">
              Your Vision. <br />
              Our Expertise. <br />
              <span className="text-[var(--color-gold)]">Strategic Dominance.</span>
            </h2>
          </div>
          
          <div className="lg:pl-12 lg:border-l border-gray-200">
            <p className="text-gray-600 text-[16px] font-light leading-relaxed mb-8">
              Bricektx UAE PM LLC-FZ operates at the nexus of strategy and execution. We are not just consultants; we are architects of corporate success. 
            </p>
            <p className="text-gray-600 text-[16px] font-light leading-relaxed">
              By combining deep local UAE market knowledge with global financial frameworks, we help elite enterprises scale, restructure, and secure their legacies in an ever-shifting economic landscape.
            </p>
          </div>
        </div>

        {/* Editorial Stats Row with Animated Numbers */}
        <div className="flex flex-col md:flex-row justify-between border-t border-b border-gray-200 py-12 gap-8 md:gap-0">
          
          <div className="flex-1 px-4 md:border-r border-gray-200 last:border-0 text-center md:text-left">
            <h4 className="text-5xl lg:text-6xl font-light tracking-tighter mb-2 text-[var(--color-black)] flex justify-center md:justify-start items-center">
              <AnimatedNumber value={10} /><span className="text-[var(--color-gold)] font-medium">+</span>
            </h4>
            <span className="text-[11px] uppercase tracking-[0.15em] text-gray-400 font-bold">Years Experience</span>
          </div>

          <div className="flex-1 px-4 md:border-r border-gray-200 last:border-0 text-center md:text-left md:pl-12">
            <h4 className="text-5xl lg:text-6xl font-light tracking-tighter mb-2 text-[var(--color-black)] flex justify-center md:justify-start items-center">
              <AnimatedNumber value={150} /><span className="text-[var(--color-gold)] font-medium">+</span>
            </h4>
            <span className="text-[11px] uppercase tracking-[0.15em] text-gray-400 font-bold">Projects Delivered</span>
          </div>

          <div className="flex-1 px-4 md:border-r border-gray-200 last:border-0 text-center md:text-left md:pl-12">
            <h4 className="text-5xl lg:text-6xl font-light tracking-tighter mb-2 text-[var(--color-black)] flex justify-center md:justify-start items-center">
              <span className="text-[var(--color-gold)] font-medium">$</span><AnimatedNumber value={50} />M
            </h4>
            <span className="text-[11px] uppercase tracking-[0.15em] text-gray-400 font-bold">Assets Managed</span>
          </div>

          <div className="flex-1 px-4 text-center md:text-left md:pl-12">
            <h4 className="text-5xl lg:text-6xl font-light tracking-tighter mb-2 text-[var(--color-black)] flex justify-center md:justify-start items-center">
              <AnimatedNumber value={100} /><span className="text-[var(--color-gold)] font-medium">%</span>
            </h4>
            <span className="text-[11px] uppercase tracking-[0.15em] text-gray-400 font-bold">Client Alignment</span>
          </div>

        </div>

      </div>
    </section>
  );
}