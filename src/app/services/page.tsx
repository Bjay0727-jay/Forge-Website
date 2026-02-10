import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Users, ShieldCheck, Landmark, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = { title: 'Services', description: 'Explore Forge Cyber Defense security compliance consulting and application development services.' };

const consultingServices = [
  { icon: Users, title: 'ISSO Consultant', desc: 'Experienced ISSOs for ongoing compliance management and security assessments.', href: '/services/isso-consultant', rate: '$175/hr' },
  { icon: ShieldCheck, title: 'Senior ISSO / RMF Lead', desc: 'Senior-level compliance leadership for complex RMF implementations.', href: '/services/senior-isso-rmf', rate: '$225/hr' },
  { icon: Landmark, title: 'Security Architect', desc: 'Security architecture design meeting federal and commercial requirements.', href: '/services/security-architect', rate: '$250/hr' },
  { icon: Shield, title: 'FedRAMP Specialist', desc: 'End-to-end FedRAMP authorization from readiness through P-ATO.', href: '/services/fedramp-specialist', rate: 'Contact Us' },
];

const fedRampPackages = [
  { title: 'FedRAMP Low', desc: '125+ controls for non-sensitive federal data. 3-6 month timeline.', href: '/services/fedramp-low', level: 'Low', color: 'bg-emerald-500' },
  { title: 'FedRAMP Moderate', desc: '325+ controls for CUI protection. 6-12 month timeline.', href: '/services/fedramp-moderate', level: 'Moderate', color: 'bg-amber-500' },
  { title: 'FedRAMP High', desc: '421+ controls for the most sensitive data. 12-18 month timeline.', href: '/services/fedramp-high', level: 'High', color: 'bg-red-500' },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-900 via-navy-700 to-navy-600 text-white pt-40 pb-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-[1280px] mx-auto relative z-10">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">Our Services</h1>
          <p className="text-xl text-white/75 max-w-[720px] leading-relaxed">Expert security compliance consulting and secure application development services tailored to your organization&apos;s needs.</p>
        </div>
      </section>
      <section className="py-24 px-8 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeading label="Consulting" title="Security Consulting Services" subtitle="Embed our experienced security professionals directly into your team." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {consultingServices.map((svc) => (
              <Link key={svc.title} href={svc.href} className="bg-gray-50 border border-gray-200 rounded-2xl p-7 transition-all no-underline text-inherit block hover:border-teal-500 hover:shadow-lg hover:-translate-y-1 group">
                <div className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-5 bg-teal-500/15"><svc.icon className="w-[26px] h-[26px] text-teal-500" /></div>
                <h3 className="text-lg font-bold text-navy-700 mb-2">{svc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{svc.desc}</p>
                <div className="flex items-center justify-between"><span className="text-sm font-bold text-teal-500">{svc.rate}</span><ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-500 transition-colors" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeading label="FedRAMP" title="FedRAMP Authorization Packages" subtitle="Turnkey authorization packages for every impact level." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fedRampPackages.map((pkg) => (
              <Link key={pkg.title} href={pkg.href} className="bg-white border border-gray-200 rounded-2xl p-8 transition-all no-underline text-inherit block hover:border-teal-500 hover:shadow-lg hover:-translate-y-1 group">
                <span className={`inline-block text-xs font-bold text-white px-3 py-1 rounded-full mb-4 ${pkg.color}`}>{pkg.level}</span>
                <h3 className="text-xl font-bold text-navy-700 mb-3">{pkg.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{pkg.desc}</p>
                <span className="text-sm font-semibold text-teal-500 flex items-center gap-2 group-hover:gap-3 transition-all">Learn More <ArrowRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
