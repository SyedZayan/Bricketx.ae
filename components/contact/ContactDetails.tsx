import Image from 'next/image';
import { companyInfo } from '@/config/company';

export default function ContactDetails() {
  return (
    <div className="flex flex-col space-y-12">
      <div>
        <h3 className="text-xl font-medium text-[var(--color-black)] mb-6">Direct Contact</h3>
        <ul className="space-y-6">
          <li className="flex items-center space-x-4">
            <div className="w-11 h-11 bg-white border border-gray-200 flex items-center justify-center text-[var(--color-gold)]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            <span className="text-gray-700 font-medium">{companyInfo.contact.phone}</span>
          </li>
          <li className="flex items-center space-x-4">
            <div className="w-11 h-11 bg-white border border-gray-200 flex items-center justify-center text-[var(--color-gold)]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <a href={`mailto:${companyInfo.contact.email}`} className="text-gray-700 font-medium hover:text-[var(--color-gold)]">{companyInfo.contact.email}</a>
          </li>
        </ul>
      </div>

      <div className="relative w-full h-[450px] bg-gray-200 border border-gray-200">
        <Image src="/images/dubai-map-bg.jpg" alt="Dubai Map" fill className="object-cover grayscale opacity-50" />
        <div className="absolute bottom-6 left-6 right-6 bg-white p-6 shadow-xl border-l-4 border-[var(--color-gold)]">
          <h4 className="text-lg font-bold text-[var(--color-black)] mb-2">Our Office</h4>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            {companyInfo.legalName} <br />
            {companyInfo.contact.address}
          </p>
          <a href={companyInfo.contact.mapUrl} target="_blank" className="text-xs font-bold uppercase tracking-widest hover:text-[var(--color-gold)] transition-colors">
            Get Directions →
          </a>
        </div>
      </div>
    </div>
  );
}