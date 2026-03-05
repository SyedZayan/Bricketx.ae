import Image from 'next/image';

export default function InvestmentStrengths() {
  return (
    <section className="relative w-full py-40 bg-[var(--color-black)] overflow-hidden flex items-center">
      
      {/* Wavy/Abstract Background Image */}
      <Image 
        src="/images/wavy-bg.jpg" 
        alt="Abstract Waves" 
        fill 
        className="object-cover opacity-30 mix-blend-screen"
      />

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 w-full relative z-10">
        
        <div className="text-center mb-20">
          <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-4 block">
            Why Partner With Us
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-white">
            Key Strengths and Principles
          </h2>
        </div>

        {/* Floating Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl transform md:-translate-y-8 hover:-translate-y-12 transition-transform duration-500 shadow-2xl">
            <h4 className="text-xl font-medium text-white mb-4">First-hand Experience</h4>
            <p className="text-gray-300 font-light text-sm leading-relaxed">
              First-hand business experience means we know what truly matters when scaling an enterprise in emerging markets.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl transform md:translate-y-8 hover:translate-y-4 transition-transform duration-500 shadow-2xl">
            <h4 className="text-xl font-medium text-white mb-4">Genuine Alignment</h4>
            <p className="text-gray-300 font-light text-sm leading-relaxed">
              Capital invested alongside yours. We structure our funds to ensure our success is directly tied to yours.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl transform md:-translate-y-4 hover:-translate-y-8 transition-transform duration-500 shadow-2xl">
            <h4 className="text-xl font-medium text-white mb-4">Agile Action</h4>
            <p className="text-gray-300 font-light text-sm leading-relaxed">
              Quick action and open communication at every stage. We remove bureaucratic red tape to accelerate acquisitions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}