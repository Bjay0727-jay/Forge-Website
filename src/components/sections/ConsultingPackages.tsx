import { Users, ShieldCheck, Landmark, Shield, FileText, ArrowRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';

const consultingCards = [
  { icon: Users, title: 'ISSO Consultant', desc: 'Dedicated Information System Security Officers who manage day-to-day compliance operations, continuous monitoring, POA&M tracking, and security documentation for federal information systems.', href: '/services/isso-consultant' },
  { icon: ShieldCheck, title: 'Senior ISSO / RMF Lead', desc: 'Senior-level security professionals who lead Risk Management Framework implementations, manage complex multi-system authorization efforts, and coordinate across stakeholders.', href: '/services/senior-isso-rmf' },
  { icon: Landmark, title: 'Security Architect', desc: 'Enterprise security architects who design Zero Trust architectures, develop cloud security strategies, and engineer compliant system boundaries for complex environments.', href: '/services/security-architect' },
  { icon: Shield, title: 'FedRAMP Specialist', desc: 'Dedicated FedRAMP authorization experts who guide your organization through every phase — readiness assessment, gap analysis, documentation, 3PAO coordination, and PMO submission.', href: '/services/fedramp-specialist' },
];

const authorizationCards = [
  { title: 'FedRAMP Low', desc: 'Complete end-to-end authorization support for Low impact cloud systems. Includes readiness assessment, SSP development, 125+ control implementations, 3PAO preparation, and continuous monitoring.', href: '/services/fedramp-low', stat: '125+ Controls' },
  { title: 'FedRAMP Moderate', desc: 'Comprehensive authorization for Moderate impact systems covering 325+ security controls. Full documentation suite, remediation guidance, assessment support, and post-authorization monitoring.', href: '/services/fedramp-moderate', stat: '325+ Controls', featured: true },
  { title: 'FedRAMP High', desc: 'Full authorization package for High impact systems requiring the most stringent security controls. 421+ control implementations with advanced cryptographic and physical security requirements.', href: '/services/fedramp-high', stat: '421+ Controls' },
];

export default function ConsultingPackages() {
  return (
    <section id="consulting" className="py-28 px-8 bg-gray-50">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeading label="Consulting & Authorization" labelIcon={<Users className="w-[18px] h-[18px]" />} title="ISSO Consulting & FedRAMP Authorization" subtitle="Experienced security professionals who integrate directly with your team to manage compliance operations and deliver complete authorization packages." />

        {/* Personnel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {consultingCards.map((card) => (
            <Link key={card.title} href={card.href} className="bg-white border border-gray-200 rounded-2xl p-7 transition-all no-underline text-inherit block hover:border-teal-500 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 group">
              <div className="w-[48px] h-[48px] rounded-xl flex items-center justify-center mb-4 bg-teal-500/15">
                <card.icon className="w-[24px] h-[24px] text-teal-500" />
              </div>
              <h3 className="text-base font-bold text-navy-700 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{card.desc}</p>
              <div className="flex items-center gap-1.5 text-sm font-medium text-teal-500 group-hover:gap-2.5 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* Authorization Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {authorizationCards.map((card) => (
            <Link key={card.title} href={card.href} className={`bg-white border rounded-2xl p-7 transition-all no-underline text-inherit block hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 group ${card.featured ? 'border-teal-500 ring-1 ring-teal-500/20' : 'border-gray-200 hover:border-teal-500'}`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-navy-700">{card.title}</h3>
                <span className="text-xs font-bold text-teal-500 bg-teal-500/10 px-2.5 py-1 rounded-md">{card.stat}</span>
              </div>
              {card.featured && <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-teal-600 bg-teal-500/15 px-2 py-0.5 rounded mb-3">Most Popular</span>}
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{card.desc}</p>
              <div className="flex items-center gap-1.5 text-sm font-medium text-teal-500 group-hover:gap-2.5 transition-all">
                View Package <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* Custom Engagement */}
        <Link href="/contact" className="block bg-white border border-dashed border-gray-300 rounded-2xl p-7 text-center no-underline hover:border-teal-500 hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all group">
          <MessageSquare className="w-8 h-8 text-gray-400 group-hover:text-teal-500 transition-colors mx-auto mb-3" />
          <h3 className="text-lg font-bold text-navy-700 mb-2">Custom Engagement</h3>
          <p className="text-sm text-gray-500 max-w-[480px] mx-auto">Every organization&apos;s security needs are unique. Contact us to discuss a tailored engagement scope.</p>
        </Link>
      </div>
    </section>
  );
}
