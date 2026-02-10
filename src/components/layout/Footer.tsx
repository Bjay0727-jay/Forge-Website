import Link from 'next/link';
import Image from 'next/image';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY, FOOTER_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-1">
            <Image src="/logos/FC-Logo.png" alt="Forge Cyber Defense" width={160} height={42} className="h-10 w-auto mb-5" />
            <p className="text-sm leading-relaxed text-gray-500 mb-5">{COMPANY.description}</p>
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-4 h-4 text-teal-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">{COMPANY.status}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-gray-600">
                <p>{COMPANY.address}</p>
                <p>{COMPANY.city}</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Compliance</h4>
            <ul className="space-y-3 list-none p-0">
              {FOOTER_LINKS.compliance.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-sm text-gray-500 no-underline hover:text-teal-400 transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Forge Personnel</h4>
            <ul className="space-y-3 list-none p-0">
              {FOOTER_LINKS.personnel.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-sm text-gray-500 no-underline hover:text-teal-400 transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3 list-none p-0">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-sm text-gray-500 no-underline hover:text-teal-400 transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Connect</h4>
            <div className="space-y-4">
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-gray-500 no-underline hover:text-teal-400 transition-colors"><Mail className="w-4 h-4 flex-shrink-0" />{COMPANY.email}</a>
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-sm text-gray-500 no-underline hover:text-teal-400 transition-colors"><Phone className="w-4 h-4 flex-shrink-0" />{COMPANY.phone}</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.</p>
          <p className="text-xs text-gray-600">Security Compliance &amp; Application Development</p>
        </div>
      </div>
    </footer>
  );
}
