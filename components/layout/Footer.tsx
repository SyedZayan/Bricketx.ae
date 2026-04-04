"use client";

import Image from 'next/image';
import Link from 'next/link';
import { companyInfo } from '@/config/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social Icons Helper
  const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[var(--color-gold)] hover:text-white hover:border-[var(--color-gold)] transition-all duration-300"
    >
      {icon}
    </a>
  );

  return (
    <footer className="w-full bg-[#0a0a0a] text-white pt-20 border-t border-white/5">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* LEFT SIDE: Brand, Tagline & Direct Contact (Main Section) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="mb-10 inline-block">
               <Image 
                src="/images/BricketX UAE.png" 
                alt={`${companyInfo.name} Logo`} 
                width={160} 
                height={50} 
                className="object-contain"
              />
            </Link>
            
            <h2 className="text-xl md:text-2xl font-medium leading-relaxed max-w-sm text-gray-300 mb-8">
              BricketX – Building Projects, <br />
              Promoting Brands, <span className="text-[var(--color-gold)]">Growing Wealth.</span>
            </h2>

            {/* DIRECT CONTACT: Prominent in Main Section  */}
            <div className="flex flex-col gap-3 mb-10">
              <a href={`mailto:${companyInfo.contact.email}`} className="text-white hover:text-[var(--color-gold)] transition-colors flex items-center gap-3 text-[15px] font-light">
                <svg className="w-4 h-4 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                {companyInfo.contact.email} 
              </a>
              <a href={`tel:${companyInfo.contact.phone.replace(/\s+/g, '')}`} className="text-white hover:text-[var(--color-gold)] transition-colors flex items-center gap-3 text-[15px] font-light">
                <svg className="w-4 h-4 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                {companyInfo.contact.phone} 
              </a>
            </div>

            {/* Socials included as requested */}
            <div className="flex flex-wrap gap-3">
              <SocialIcon href={companyInfo.socials.linkedin} icon={<svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>} />
              <SocialIcon href={companyInfo.socials.twitter} icon={<svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z"/></svg>} />
              <SocialIcon href={companyInfo.socials.instagram} icon={<svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>} />
              <SocialIcon href={companyInfo.socials.facebook} icon={<svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>} />
              <SocialIcon href={companyInfo.socials.pinterest} icon={<svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592 0 12.017 0z"/></svg>} />
            </div>
          </div>

          {/* CENTER: Focused Link Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 lg:pt-4">
            <div>
              <h4 className="text-[var(--color-gold)] font-bold uppercase tracking-[0.2em] text-[10px] mb-8">
                Ecosystem
              </h4>
              <ul className="space-y-4 text-[14px] font-light text-gray-400">
                <li><Link href="/services" className="hover:text-white transition-colors">Project Management</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Advertising</Link></li>
                <li><Link href="/investments" className="hover:text-white transition-colors">Investment Portfolios</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[var(--color-gold)] font-bold uppercase tracking-[0.2em] text-[10px] mb-8">
                Company
              </h4>
              <ul className="space-y-4 text-[14px] font-light text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">Our Vision</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Team</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Legal Policy</Link></li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE: High-Impact CTA */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 border border-white/10 p-7 rounded-2xl backdrop-blur-sm relative overflow-hidden group">
              <h4 className="text-lg font-medium mb-3 text-white">Start a Project</h4>
              <p className="text-xs text-gray-400 mb-6 font-light leading-relaxed">
                Engineer your next milestone with UAE's premier growth partner.
              </p>
              <Link 
                href="/contact" 
                className="group/btn flex items-center justify-between bg-white text-black px-5 py-3.5 rounded-xl text-xs font-bold transition-all hover:bg-[var(--color-gold)] hover:text-white"
              >
                REQUEST CONSULTATION
                <span className="text-lg group-hover/btn:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR: Metadata & Clean Legal */}
      <div className="w-full border-t border-white/5 py-8">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-[11px] text-gray-500 uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
          <div className="text-gray-600 text-[11px] font-medium tracking-[0.1em] uppercase">
            &copy; {currentYear} {companyInfo.legalName} 
          </div>
          <div className="text-gray-600 text-[9px] font-bold uppercase tracking-widest flex items-center gap-2">
            Region: <span className="text-white">U.A.E</span>
          </div>
        </div>
      </div>
    </footer>
  );
}