import HeroSection from '@/components/home/HeroSection';
import HomeStats from '@/components/home/HomeStats';
import ConsultationServices from '@/components/home/ConsultationServices';
import InvestmentFocus from '@/components/home/InvestmentFocus';
import HomeCTA from '@/components/home/HomeCTA';      

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />          {/* DARK */}
      <HomeStats />            {/* LIGHT (Breaks up the heavy top) */}
      <ConsultationServices /> {/* DARK */}
      <InvestmentFocus />      {/* LIGHT */}
      <HomeCTA />              {/* DARK (Smooth transition into Footer) */}
    </main>
  );
}