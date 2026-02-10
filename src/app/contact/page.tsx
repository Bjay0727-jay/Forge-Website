import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = { title: 'Contact', description: 'Get in touch with Forge Cyber Defense for security compliance or application development.' };

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-900 via-navy-700 to-navy-600 text-white pt-40 pb-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-[1280px] mx-auto relative z-10">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">Contact Us</h1>
          <p className="text-xl text-white/75 max-w-[720px] leading-relaxed">Ready to start your compliance journey or build a secure application? We respond within 24 hours.</p>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
