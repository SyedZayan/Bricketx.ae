import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex flex-col w-full shadow-sm bg-[var(--color-white)]">
      
      {/* Top Announcement Banner */}
      <div className="w-full bg-[var(--color-black)] py-2 px-6 flex justify-center items-center text-center">
        <p className="text-xs md:text-[13px] text-[var(--color-grey)] font-medium tracking-wide">
          Elevating Business & Investments in the UAE. 
          <Link href="/contact" className="text-[var(--color-gold)] hover:text-white transition-colors ml-2 font-semibold">
            Discover how we do it &rsaquo;
          </Link>
        </p>
      </div>

      {/* Main Navigation */}
      <nav className="w-full border-b border-[var(--color-grey)] border-opacity-20 py-3 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
            {/* By setting a specific height class (h-12 or h-16) and w-auto, 
              we prevent the stacked logo from blowing up the navbar height.
            */}
            <Image 
              src="/images/BricketX UAE.png" 
              alt="BricketX UAE Logo" 
              width={200} 
              height={100} 
              className="object-contain h-12 w-auto md:h-16" 
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 lg:space-x-10 items-center font-medium text-[15px]">
            <Link href="/about" className="text-[var(--color-black)] hover:text-[var(--color-gold)] transition-colors duration-300">
              About Us
            </Link>
            <Link href="/consultation" className="text-[var(--color-black)] hover:text-[var(--color-gold)] transition-colors duration-300">
              Business Consultation
            </Link>
            <Link href="/investments" className="text-[var(--color-black)] hover:text-[var(--color-gold)] transition-colors duration-300">
              Investment Holdings
            </Link>
            
            {/* CTA Button - Matched to your screenshot */}
            <Link 
              href="/contact" 
              className="bg-[var(--color-black)] text-[var(--color-white)] px-6 py-2.5 rounded-[3px] hover:bg-[var(--color-gold)] transition-colors duration-300 text-sm font-semibold tracking-wide ml-4"
            >
              Partner With Us
            </Link>
          </div>

        </div>
      </nav>
    </header>
  );
}