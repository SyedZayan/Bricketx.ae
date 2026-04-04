import HeroSection from '@/components/home/HeroSection';
import HomeStats from '@/components/home/HomeStats';
import ConsultationServices from '@/components/home/ConsultationServices';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import InvestmentFocus from '@/components/home/InvestmentFocus';
import HowItWorks from '@/components/home/HowItWorks';
import HomeCTA from '@/components/home/HomeCTA';      

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 1. Impact Intro */}
      <HeroSection />          {/* DARK (100dvh) */}
      
      {/* 2. Proof of Scale */}
      <HomeStats />            {/* LIGHT */}
      
      {/* 3. Primary Expertise */}
      <ConsultationServices /> {/* DARK (100dvh) */}
      
      {/* 4. Brand Authority & Trust */}
      <WhyChooseUs />          {/* LIGHT (100dvh) */}

      
      {/* 6. Concrete Results (Portfolio) */}
      <InvestmentFocus />      {/* LIGHT (Portfolio Accordion) */}
      
      {/* 7. Strategic Methodology */}
      <HowItWorks />           {/* DARK (100dvh) */}
      
      {/* 8. Conversion Path */}
      <HomeCTA />              {/* DARK */}
    </main>
  );
}