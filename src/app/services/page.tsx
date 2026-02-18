import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Users, ShieldCheck, Landmark, ArrowRight, Building2, Cpu, Heart, DollarSign, Clock, Brain } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = { title: 'Services', description: 'Security Forged. Trust Proven. Compliance consulting, security engineering, AI governance, and secure application development.' };

const complianceServices = [
  { icon: Shield, title: 'FedRAMP Authorization', desc: 'Complete authorization support from readiness through ATO for Low, Moderate, and High impact levels.', href: '/services/fedramp-consulting' },
  { icon: Building2, title: 'FISMA & RMF', desc: 'Full lifecycle Risk Management Framework implementation for federal information systems — from categorization through continuous monitoring.', href: '/services/fisma-rmf' },
  { icon: Cpu, title: 'CMMC 2.0', desc: 'Readiness assessments, gap analysis, and remediation roadmaps for defense industrial base organizations pursuing Level 1–3 certification.', href: '/services/cmmc-compliance' },
  { icon: Heart, title: 'HIPAA Security', desc: 'Comprehensive security assessments and compliance programs to protect electronic health information across administrative, physical, and technical safeguards.', href: '/services/hipaa-compliance' },
  { icon: DollarSign, title: 'SOC 2 & ISO 27001', desc: 'Type I and Type II readiness, ISO 27001 certification preparation, and ongoing audit management for commercial organizations.', href: '/services/soc2-compliance' },
  { icon: Clock, title: 'Continuous Monitoring', desc: 'Ongoing compliance programs — vulnerability management, POA&M tracking, automated reporting — to keep you audit-ready year-round.', href: '/services/isso-consulting' },
  { icon: Brain, title: 'AI Governance', desc: 'AI risk management aligned to NIST AI RMF, federal AI guidance, and emerging regulatory frameworks. Governance programs that address bias, transparency, accountability, and secure AI deployment.', href: '/contact?service=ai-governance' },
];

const securityEngineering = [
  { icon: Users, title: 'ISSO Consultant', desc: 'Dedicated security officers managing day-to-day compliance operations, continuous monitoring, and security documentation.', href: '/services/isso-consultant' },
  { icon: ShieldCheck, title: 'Senior ISSO / RMF Lead', desc: 'Senior professionals leading complex multi-system authorization efforts and coordinating across stakeholders.', href: '/services/senior-isso-rmf' },
  { icon: Landmark, title: 'Security Architect', desc: 'Enterprise architects designing Zero Trust architectures and engineering compliant system boundaries.', href: '/services/security-architect' },
  { icon: Shield, title: 'Authorization Specialist', desc: 'Dedicated authorization experts guiding organizations through readiness, documentation, 3PAO coordination, and submission.', href: '/services/fedramp-specialist' },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-700 to-navy-600 text-white pt-40 pb-24 px-8 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-[1280px] mx-auto relative z-10">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">Security Compliance &amp; Engineering</h1>
          <p className="text-xl text-white/75 max-w-[720px] leading-relaxed">
            We evaluate organizations, uncover vulnerabilities, and deliver turnkey compliance solutions across every major federal and commercial framework. Security forged. Trust proven.
          </p>
        </div>
      </section>

      {/* Compliance Consulting */}
      <section className="py-28 px-8 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeading
            label="Compliance Consulting"
            title="End-to-End Compliance Services"
            subtitle="From initial assessment through authorization and continuous monitoring — across every framework your organization needs."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceServices.map((svc) => (
              <Link key={svc.title} href={svc.href} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 transition-all no-underline text-inherit block hover:border-teal-500 hover:shadow-lg hover:-translate-y-1 group relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-teal-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
                <div className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-5 bg-teal-500/15">
                  <svc.icon className="w-[26px] h-[26px] text-teal-500" />
                </div>
                <h3 className="text-lg font-bold text-navy-700 mb-2">{svc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{svc.desc}</p>
                <div className="flex items-center justify-end">
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-500 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Security Engineering */}
      <section className="py-28 px-8 bg-gray-50">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeading
            label="Security Engineering"
            title="Embedded Security Professionals"
            subtitle="Experienced practitioners who integrate directly into your team to engineer compliance solutions and lead authorization efforts."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {securityEngineering.map((svc) => (
              <Link key={svc.title} href={svc.href} className="bg-white border border-gray-200 rounded-2xl p-7 transition-all no-underline text-inherit block hover:border-teal-500 hover:shadow-lg hover:-translate-y-1 group">
                <div className="w-[48px] h-[48px] rounded-xl flex items-center justify-center mb-5 bg-teal-500/15">
                  <svc.icon className="w-[24px] h-[24px] text-teal-500" />
                </div>
                <h3 className="text-base font-bold text-navy-700 mb-2">{svc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{svc.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-teal-500 flex items-center gap-2 group-hover:gap-3 transition-all">Learn More</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-500 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Not Sure Where to Start?"
        description="Schedule a free consultation. We'll assess your environment and recommend the right compliance and security path for your organization."
      />
    </>
  );
}
