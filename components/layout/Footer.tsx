import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white pt-20 pb-8 border-t-2 border-[var(--color-gold)]">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col space-y-6">
            {/* Soft, minimal logo wrapper instead of a harsh white box */}
            <Link href="/" className="inline-block bg-white/5 border border-white/10 p-4 rounded-lg w-max backdrop-blur-sm">
               <Image 
                src="/images/BricketX UAE.png" 
                alt="BricketX UAE Logo" 
                width={150} 
                height={50} 
                className="object-contain"
              />
            </Link>
            <p className="text-[var(--color-grey)] text-[14px] leading-relaxed pr-4 font-light">
              Bricektx UAE PM LLC-FZ. Premier investment holding and business consultation company delivering tailored strategies for sustainable growth in the UAE.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[var(--color-gold)] font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-[14px] text-[var(--color-grey)] font-light">
              <li><Link href="/about" className="hover:text-white transition-colors">About BricketX</Link></li>
              <li><Link href="/leadership" className="hover:text-white transition-colors">Leadership Team</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-[var(--color-gold)] font-bold mb-6 uppercase tracking-widest text-xs">Expertise</h4>
            <ul className="space-y-4 text-[14px] text-[var(--color-grey)] font-light">
              <li><Link href="/consultation" className="hover:text-white transition-colors">Business Consultation</Link></li>
              <li><Link href="/investments" className="hover:text-white transition-colors">Investment Holdings</Link></li>
              <li><Link href="/market-entry" className="hover:text-white transition-colors">UAE Market Entry</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Our Portfolio</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-[var(--color-gold)] font-bold mb-6 uppercase tracking-widest text-xs">Connect</h4>
            <ul className="space-y-4 text-[14px] text-[var(--color-grey)] font-light">
              <li className="flex items-start space-x-3">
                 <span className="text-[var(--color-gold)] mt-0.5">📍</span>
                 <span>Dubai, United Arab Emirates<br/>(Insert Specific Zone/Address)</span>
              </li>
              <li className="flex items-center space-x-3">
                 <span className="text-[var(--color-gold)]">✉️</span>
                 <a href="mailto:info@bricketx.ae" className="hover:text-white transition-colors">info@bricketx.ae</a>
              </li>
              <li className="flex items-center space-x-3">
                 <span className="text-[var(--color-gold)]">📞</span>
                 <a href="tel:+971000000000" className="hover:text-white transition-colors">+971 00 000 0000</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[var(--color-grey)] font-light tracking-wide">
          <p>&copy; {currentYear} Bricektx UAE PM LLC-FZ. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}