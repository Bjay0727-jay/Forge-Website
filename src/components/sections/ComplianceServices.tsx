import Link from 'next/link';
import { Shield, Building2, Cpu, Heart, DollarSign, Clock, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const services = [
  { icon: Shield, title: 'FedRAMP Authorization', desc: 'Complete FedRAMP authorization support from readiness assessment through full ATO. We guide cloud service providers through every phase — gap analysis, documentation, remediation, 3PAO coordination, and PMO submission for Low, Moderate, and High impact levels.', tags: ['FedRAMP', 'StateRAMP'], href: '/services/fedramp-consulting' },
  { icon: Building2, title: 'FISMA & RMF', desc: 'Full lifecycle Risk Management Framework implementation for federal information systems. From system categorization and control selection through security assessment, authorization decisions, and ongoing continuous monitoring — we ensure your systems meet FISMA reporting requirements.', tags: ['NIST 800-53', 'RMF'], href: '/services/fisma-rmf' },
  { icon: Cpu, title: 'CMMC 2.0', desc: 'Prepare defense industrial base organizations for Cybersecurity Maturity Model Certification. We conduct readiness assessments, identify gaps against NIST 800-171 controls, develop remediation roadmaps, and support organizations through Levels 1 through 3 certification.', tags: ['CMMC', 'NIST 800-171'], href: '/services/cmmc-compliance' },
  { icon: Heart, title: 'HIPAA Security', desc: 'Comprehensive HIPAA security assessments and compliance programs to protect electronic health information. We evaluate administrative, physical, and technical safeguards, conduct gap analysis, develop remediation plans, and establish ongoing compliance monitoring.', tags: ['HIPAA', 'HITECH'], href: '/services/hipaa-compliance' },
  { icon: DollarSign, title: 'SOC 2 & ISO 27001', desc: 'Build trust with customers and partners through independently verified security programs. We support SOC 2 Type I and Type II readiness, ISO 27001 certification preparation, and ongoing audit management for commercial organizations.', tags: ['SOC 2', 'ISO 27001'], href: '/services/soc2-compliance' },
  { icon: Clock, title: 'Continuous Monitoring', desc: 'Authorization is just the beginning. We deliver continuous monitoring programs that maintain your security posture through ongoing assessments, vulnerability management, POA&M tracking, and automated compliance reporting to keep you audit-ready year-round.', tags: ['ConMon', 'POA&M'], href: '/services/isso-consulting' },
];

export default function ComplianceServices() {
  return (
    <section id="compliance" className="py-24 px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeading label="Security Compliance" labelIcon={<Shield className="w-[18px] h-[18px]" />} title="Comprehensive Security Compliance Services" subtitle="We fully understand the dynamic environment of the interconnected world and the challenge of protecting data from advanced persistent threats. Our team delivers end-to-end compliance solutions — evaluating organizations, uncovering vulnerabilities, and driving real solutions for complex regulatory requirements." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <Link key={svc.title} href={svc.href} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 transition-all relative overflow-hidden no-underline text-inherit block group before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-teal-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:border-teal-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:before:scale-x-100">
              <div className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-5 bg-teal-500/15">
                <svc.icon className="w-[26px] h-[26px] text-teal-500" />
              </div>
              <h3 className="text-lg font-bold text-navy-700 mb-2.5">{svc.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex flex-wrap gap-1.5">
                  {svc.tags.map(tag => (<span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-teal-500/15 text-teal-600">{tag}</span>))}
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-500 transition-colors shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
