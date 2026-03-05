import ConsultationHero from '@/components/consultation/ConsultationHero';
import ConsultationServices from '@/components/consultation/ConsultationServices';
import ConsultationApproach from '@/components/consultation/ConsultationApproach';

export const metadata = {
  title: "Business Consultation | BricketX UAE",
  description: "Elite business consultation services driving real growth, operational efficiency, and market entry strategy in the UAE.",
};

export default function ConsultationPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <ConsultationHero />
      <ConsultationServices />
      <ConsultationApproach />
      
      {/* Simple CTA Section at the bottom */}
      <section className="w-full py-24 bg-[var(--color-black)] text-center border-t-4 border-[var(--color-gold)]">
        <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">Ready to dominate the market?</h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto font-light">Book a discovery session with our executive team today.</p>
        <a href="/contact" className="inline-block bg-[var(--color-gold)] text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl">
          Schedule Consultation
        </a>
      </section>
    </main>
  );
}