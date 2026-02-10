import { Building2, Shield, Heart, DollarSign, Briefcase, Globe } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const industries = [
  { icon: Building2, title: 'Federal Government', desc: 'FedRAMP, FISMA, RMF compliance and authorization for federal agencies and cloud service providers', color: 'bg-teal-500/10', iconColor: 'text-teal-500' },
  { icon: Shield, title: 'Defense & Intelligence', desc: 'CMMC 2.0, NIST 800-171, DFARS compliance and classified system security for the defense industrial base', color: 'bg-blue-500/10', iconColor: 'text-blue-500' },
  { icon: Heart, title: 'Healthcare', desc: 'HIPAA security assessments, ePHI protection, health IT compliance, and healthcare data security programs', color: 'bg-red-500/10', iconColor: 'text-red-500' },
  { icon: DollarSign, title: 'Financial Services', desc: 'SOC 2, PCI DSS, GLBA compliance, regulatory reporting, and secure fintech application development', color: 'bg-amber-500/10', iconColor: 'text-amber-500' },
  { icon: Briefcase, title: 'Commercial Enterprise', desc: 'ISO 27001 certification, SOC 2 readiness, custom security programs, and enterprise application development', color: 'bg-purple-500/10', iconColor: 'text-purple-500' },
];

export default function IndustriesGrid() {
  return (
    <section id="industries" className="py-24 px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeading label="Industries We Serve" labelIcon={<Globe className="w-[18px] h-[18px]" />} title="Specialized Security Across Industries" subtitle="We bring results-oriented leadership and repeated success guiding security initiatives across government, healthcare, defense, and private sector environments. Our team excels at evaluating organizations and driving real solutions for real problems." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {industries.map((ind) => (
            <div key={ind.title} className="text-center p-8 rounded-2xl border border-gray-200 bg-gray-50 transition-all hover:border-teal-500 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${ind.color}`}>
                <ind.icon className={`w-8 h-8 ${ind.iconColor}`} />
              </div>
              <h3 className="text-[15px] font-bold text-navy-700 mb-1.5">{ind.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
