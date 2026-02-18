import Link from 'next/link';
import { Shield, Building2, Cpu, Heart, DollarSign, Clock, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const services = [
  { icon: Shield, title: 'FedRAMP Authorization', desc: 'Complete FedRAMP authorization support from readiness assessment through full ATO. We guide cloud service providers through every phase — gap analysis, documentation, remediation, 3PAO coordination, and PMO submission for Low, Moderate, and High impact levels.', href: '/services/fedramp-consulting' },
  { icon: Building2, title: 'FISMA & RMF', desc: 'Full lifecycle Risk Management Framework implementation for federal information systems. From system categorization and control selection through security assessment, authorization decisions, and ongoing continuous monitoring.', href: '/services/fisma-rmf' },
  { icon: Cpu, title: 'CMMC 2.0', desc: 'Prepare defense industrial base organizations for Cybersecurity Maturity Model Certification. We conduct readiness assessments, identify gaps against NIST 800-171 controls, develop remediation roadmaps, and support organizations through Levels 1 through 3.', href: '/services/cmmc-compliance' },
  { icon: Heart, title: 'HIPAA Security', desc: 'Comprehensive HIPAA security assessments and compliance programs to protect electronic health information. We evaluate administrative, physical, and technical safeguards and establish ongoing compliance monitoring.', href: '/services/hipaa-compliance' },
  { icon: DollarSign, title: 'SOC 2 & ISO 27001', desc: 'Build trust with customers and partners through independently verified security programs. We support SOC 2 Type I and Type II readiness, ISO 27001 certification preparation, and ongoing audit management.', href: '/services/soc2-compliance' },
  { icon: Clock, title: 'Continuous Monitoring', desc: 'Authorization is just the beginning. We deliver continuous monitoring programs that maintain your security posture through ongoing assessments, vulnerability management, POA&M tracking, and automated compliance reporting.', href: '/services/isso-consulting' },
];

export default function ComplianceServices() {
  return (
    <section id="compliance" className="py-28 px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeading
          label="Security Compliance"
          labelIcon={<Shield className="w-[18px] h-[18px]" />}
          title="Comprehensive Security Compliance Services"
          subtitle="End-to-end compliance solutions — from assessment through authorization and continuous monitoring across every major federal and commercial framework."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <Link key={svc.title} href={svc.href} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 transition-all relative overflow-hidden no-underline text-inherit block group before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-teal-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:border-teal-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:before:scale-x-100">
              <div className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-5 bg-teal-500/15">
                <svc.icon className="w-[26px] h-[26px] text-teal-500" />
              </div>
              <h3 className="text-lg font-bold text-navy-700 mb-2.5">{svc.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{svc.desc}</p>
              <div className="flex items-center justify-end">
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-500 transition-colors shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
