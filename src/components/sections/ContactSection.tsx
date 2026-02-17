import { Mail, Phone, MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/ui/ContactForm';
import { COMPANY } from '@/lib/constants';

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 px-8 bg-gray-50">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <SectionHeading
              label="Get In Touch"
              title="Let's Secure Your Mission"
              subtitle="Tell us about your compliance or development needs. We'll respond within 24 hours."
            />
            <div className="space-y-6 mt-8">
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 text-gray-600 no-underline hover:text-teal-500 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-teal-500/15 flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-teal-500" /></div>
                <div><div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Email</div><div className="text-sm font-medium">{COMPANY.email}</div></div>
              </a>
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-4 text-gray-600 no-underline hover:text-teal-500 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-teal-500/15 flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-teal-500" /></div>
                <div><div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Phone</div><div className="text-sm font-medium">{COMPANY.phone}</div></div>
              </a>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="w-11 h-11 rounded-xl bg-teal-500/15 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-teal-500" /></div>
                <div><div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Location</div><div className="text-sm font-medium">{COMPANY.address}<br />{COMPANY.city}</div></div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-200 rounded-2xl p-8"><ContactForm /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
