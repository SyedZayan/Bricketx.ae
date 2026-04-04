import ContactHeader from '@/components/contact/ContactHeader';
import ContactForm from '@/components/contact/ContactForm';
import ContactDetails from '@/components/contact/ContactDetails';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ContactHeader />
        
        {/* Changed to items-start to keep the layout stable */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <ContactForm />
          <ContactDetails />
        </div>
      </div>
    </main>
  );
}