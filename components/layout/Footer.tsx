"use client";

import Image from 'next/image';
import Link from 'next/link';
import { companyInfo } from '@/config/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#111111] text-white relative overflow-hidden flex flex-col justify-between">
      
      {/* Subtle Geometric Background Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute w-full h-full opacity-10" preserveAspectRatio="none" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 400L1440 0" stroke="white" strokeWidth="1"/>
          <path d="M1440 400L0 0" stroke="white" strokeWidth="1"/>
          <path d="M1000 400L1440 200" stroke="white" strokeWidth="1"/>
          <path d="M440 0L0 200" stroke="white" strokeWidth="1"/>
        </svg>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 w-full pt-20 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* LEFT SIDE: Brand, Bio, Socials, Back to Top */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-12">
            
            {/* Logo */}
            <Link href="/" className="mb-8 inline-block">
               <Image 
                src="/images/BricketX UAE.png" 
                alt={`${companyInfo.name} Logo`} 
                width={160} 
                height={55} 
                className="object-contain"
              />
            </Link>
            
            {/* Bio from Data File */}
            <p className="text-[var(--color-grey)] text-[15px] leading-relaxed font-light max-w-md mb-8">
              {companyInfo.description}
            </p>

            {/* Social Icons */}
            <div className="flex items-center flex-wrap gap-6 mb-12">
              {/* LinkedIn */}
              <a href={companyInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--color-gold)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              {/* Instagram */}
              <a href={companyInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--color-gold)] transition-colors">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* Facebook */}
              <a href={companyInfo.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--color-gold)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
              </a>
              {/* X (Twitter) */}
              <a href={companyInfo.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--color-gold)] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z"/></svg>
              </a>
              {/* Pinterest */}
              <a href={companyInfo.socials.pinterest} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--color-gold)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592 0 12.017 0z"/></svg>
              </a>
              {/* YouTube */}
              <a href={companyInfo.socials.youtube || "#"} target="_blank" rel="noopener noreferrer" className={`text-white hover:text-[var(--color-gold)] transition-colors ${!companyInfo.socials.youtube && 'opacity-50 cursor-not-allowed'}`}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>

            {/* Back To Top Button */}
            <button 
              onClick={scrollToTop}
              className="group flex items-center justify-center lg:justify-start gap-3 border border-white/20 px-6 py-4 lg:py-3 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300 w-full lg:w-auto"
            >
              <svg className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
              Back To Top
            </button>
          </div>

          {/* RIGHT SIDE: Link Grids */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:gap-6 pt-8 lg:pt-2 border-t border-white/10 lg:border-t-0 mt-8 lg:mt-0">
            
            {/* Site Map / Company */}
            <div>
              <h4 className="text-white font-medium mb-6 text-[15px]">Site Map</h4>
              <ul className="space-y-4 text-[14px] text-[var(--color-grey)] font-light">
                <li><Link href="/about" className="hover:text-[var(--color-gold)] transition-colors">About BricketX</Link></li>
                <li><Link href="/contact" className="hover:text-[var(--color-gold)] transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Expertise */}
            <div>
              <h4 className="text-white font-medium mb-6 text-[15px]">Expertise</h4>
              <ul className="space-y-4 text-[14px] text-[var(--color-grey)] font-light">
                <li><Link href="/consultation" className="hover:text-[var(--color-gold)] transition-colors">Business Consultation</Link></li>
                <li><Link href="/investments" className="hover:text-[var(--color-gold)] transition-colors">Investment Holdings</Link></li>
              </ul>
            </div>

            {/* Legal & Connect */}
            <div className="sm:col-span-2 md:col-span-1">
              <h4 className="text-white font-medium mb-6 text-[15px]">Legal & Connect</h4>
              <ul className="space-y-4 text-[14px] text-[var(--color-grey)] font-light">
                <li><a href={`mailto:${companyInfo.contact.email}`} className="hover:text-[var(--color-gold)] transition-colors flex items-center gap-3"><svg className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> <span className="truncate">{companyInfo.contact.email}</span></a></li>
                <li><a href={`tel:${companyInfo.contact.phone.replace(/\s+/g, '')}`} className="hover:text-[var(--color-gold)] transition-colors flex items-center gap-3"><svg className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> {companyInfo.contact.phone}</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Solid Gold Bottom Bar */}
      <div className="w-full bg-[var(--color-gold)] py-5 relative z-20">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 text-center">
          <p className="text-[#111111] text-[11px] md:text-xs font-medium tracking-wide">
            Copyright &copy; {currentYear}, {companyInfo.legalName}. All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}