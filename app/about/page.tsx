import AboutHero from '@/components/about/AboutHero';
import AboutVision from '@/components/about/AboutVision';
import AboutValues from '@/components/about/AboutValues';

export const metadata = {
  title: "About Us | BricketX UAE",
  description: "Learn about Bricektx UAE PM LLC-FZ, our core values, and our executive leadership team.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
      <AboutHero />
      <AboutVision />
      <AboutValues />
    </main>
  );
}