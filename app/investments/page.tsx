import InvestmentHero from '@/components/investments/InvestmentHero';
import InvestmentThesis from '@/components/investments/InvestmentThesis';
import InvestmentPortfolio from '@/components/investments/InvestmentPortfolio';
import InvestmentStrengths from '@/components/investments/InvestmentStrengths';

export const metadata = {
  title: "Investment Holdings | BricketX UAE",
  description: "A growing portfolio of enduring partnerships. We back independent sponsors and long-term holding companies.",
};

export default function InvestmentsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-black)]">
      <InvestmentHero />
      <InvestmentThesis />
      <InvestmentPortfolio />
      <InvestmentStrengths />
      
      {/* Final "Let's Connect" CTA mimicking the SIWA footer image */}
{/* Final "Let's Connect" CTA with Cinematic Glow */}
      <section className="relative w-full py-48 bg-[var(--color-black)] overflow-hidden flex items-center justify-center">
         
         {/* The Magic Glow Effect */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--color-gold)] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
         
         {/* Subtle Grid Lines Overlay */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

         <div className="max-w-3xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
            <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-6 block">
              The Next Step
            </span>
            <h2 className="text-5xl md:text-7xl font-medium text-white mb-10 tracking-tight">
              Let's build <span className="italic text-[var(--color-gold)]">the future.</span>
            </h2>
            <a href="/contact" className="inline-block bg-white text-[var(--color-black)] px-12 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[var(--color-gold)] hover:text-white hover:scale-105 transition-all duration-300 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              Partner With Us &rarr;
            </a>
         </div>
      </section>
    </main>
  );
}