import { Shield, Network, Crosshair, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';

const pillars = [
  {
    icon: Shield,
    title: 'Security Compliance',
    description: 'From readiness assessment through full authorization and ongoing continuous monitoring. We guide you through FedRAMP, CMMC, FISMA, HIPAA, SOC 2, and ISO 27001 — accelerating timelines without cutting corners.',
    href: '/services',
    linkText: 'Explore Compliance Services',
    color: 'teal',
    highlights: ['Gap analysis & readiness assessments', 'Full authorization package development', 'Continuous monitoring programs', 'ISSO consulting & staffing'],
  },
  {
    icon: Network,
    title: 'Security Architecture & Design',
    description: 'Network and cybersecurity professionals who design solutions tailored to your environment. We assess your unique risk landscape and engineer architectures that mitigate threats — not just check boxes.',
    href: '/services',
    linkText: 'Explore Architecture Services',
    color: 'blue',
    highlights: ['Zero Trust architecture design', 'System boundary engineering', 'Cloud security & infrastructure', 'Risk-driven solution design'],
  },
  {
    icon: Crosshair,
    title: 'ForgeRedOps',
    description: 'Integrated offensive security and vulnerability management for federal, defense, and enterprise environments. Continuous vulnerability monitoring, penetration testing, and automated remediation — with native ForgeComply 360 integration.',
    href: '/contact?service=forgeredops',
    linkText: 'Learn About ForgeRedOps',
    color: 'red',
    highlights: ['Continuous vulnerability monitoring', 'Penetration testing & red team exercises', 'Automated remediation workflows', 'ForgeComply 360 compliance integration'],
  },
];

export default function TwoPillars() {
  return (
    <section className="py-28 px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeading
          label="What We Do"
          title="Three Capabilities. One Trusted Partner."
          subtitle="Most firms specialize in one discipline. We bring compliance, architecture, and offensive security under one roof — which means your security program is built by teams that actually work together."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-[1280px] mx-auto">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-9 transition-all hover:border-teal-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-[14px] flex items-center justify-center mb-6 ${
                pillar.color === 'teal' ? 'bg-teal-500/15' :
                pillar.color === 'blue' ? 'bg-blue-500/15' :
                'bg-red-500/15'
              }`}>
                <pillar.icon className={`w-7 h-7 ${
                  pillar.color === 'teal' ? 'text-teal-500' :
                  pillar.color === 'blue' ? 'text-blue-500' :
                  'text-red-500'
                }`} />
              </div>
              <h3 className="text-xl font-bold text-navy-700 mb-3">{pillar.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{pillar.description}</p>
              <ul className="space-y-2.5 mb-8">
                {pillar.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                      pillar.color === 'teal' ? 'bg-teal-500' :
                      pillar.color === 'blue' ? 'bg-blue-500' :
                      'bg-red-500'
                    }`} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={pillar.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 no-underline hover:text-teal-700 transition-colors"
              >
                {pillar.linkText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
