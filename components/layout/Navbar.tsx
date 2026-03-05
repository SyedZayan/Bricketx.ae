"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to close the menu when a link is clicked
  const closeMenu = () => setIsMobileMenuOpen(false);

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
      <nav className="w-full border-b border-[var(--color-grey)] border-opacity-20 py-3 px-6 md:px-12 bg-[var(--color-white)] relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Image 
              src="/images/BricketX UAE.png" 
              alt="BricketX UAE Logo" 
              width={200} 
              height={100} 
              className="object-contain h-12 w-auto md:h-16" 
              priority
            />
          </Link>

          {/* Desktop Links (Hidden on Mobile) */}
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
            
            <Link 
              href="/contact" 
              className="bg-[var(--color-black)] text-[var(--color-white)] px-6 py-2.5 rounded-[3px] hover:bg-[var(--color-gold)] transition-colors duration-300 text-sm font-semibold tracking-wide ml-4"
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile Hamburger Button (Hidden on Desktop) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[var(--color-black)] focus:outline-none p-2"
              aria-label="Toggle Mobile Menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  // "X" Close Icon
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Hamburger Menu Icon
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-[100%] left-0 w-full bg-[var(--color-white)] border-b border-[var(--color-grey)] border-opacity-20 shadow-xl transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 py-8 space-y-6 text-center">
          <Link 
            href="/about" 
            onClick={closeMenu}
            className="text-[18px] font-medium text-[var(--color-black)] hover:text-[var(--color-gold)] transition-colors"
          >
            About Us
          </Link>
          <Link 
            href="/consultation" 
            onClick={closeMenu}
            className="text-[18px] font-medium text-[var(--color-black)] hover:text-[var(--color-gold)] transition-colors"
          >
            Business Consultation
          </Link>
          <Link 
            href="/investments" 
            onClick={closeMenu}
            className="text-[18px] font-medium text-[var(--color-black)] hover:text-[var(--color-gold)] transition-colors"
          >
            Investment Holdings
          </Link>
          
          <div className="pt-4 border-t border-[var(--color-grey)] border-opacity-20">
            <Link 
              href="/contact" 
              onClick={closeMenu}
              className="inline-block bg-[var(--color-black)] text-[var(--color-white)] px-8 py-3.5 rounded-[3px] hover:bg-[var(--color-gold)] transition-colors duration-300 text-[15px] font-semibold tracking-wide w-full"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>

    </header>
  );
}