import { Building2, Shield, Heart, DollarSign, Briefcase } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const industries = [
  { icon: Building2, title: 'Federal Government', tagline: 'FedRAMP, FISMA & RMF', color: 'bg-teal-500/10', iconColor: 'text-teal-500' },
  { icon: Shield, title: 'Defense & Intelligence', tagline: 'CMMC 2.0 & NIST 800-171', color: 'bg-blue-500/10', iconColor: 'text-blue-500' },
  { icon: Heart, title: 'Healthcare', tagline: 'HIPAA & ePHI Security', color: 'bg-red-500/10', iconColor: 'text-red-500' },
  { icon: DollarSign, title: 'Financial Services', tagline: 'SOC 2, PCI DSS & GLBA', color: 'bg-amber-500/10', iconColor: 'text-amber-500' },
  { icon: Briefcase, title: 'Commercial Enterprise', tagline: 'ISO 27001 & SOC 2', color: 'bg-purple-500/10', iconColor: 'text-purple-500' },
];

export default function IndustriesGrid() {
  return (
    <section id="industries" className="py-28 px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeading
          label="Industries We Serve"
          title="Specialized Security Across Industries"
          align="center"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {industries.map((ind) => (
            <div key={ind.title} className="text-center p-8 rounded-2xl border border-gray-200 bg-gray-50 transition-all hover:border-teal-500 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${ind.color}`}>
                <ind.icon className={`w-8 h-8 ${ind.iconColor}`} />
              </div>
              <h3 className="text-[15px] font-bold text-navy-700 mb-1">{ind.title}</h3>
              <p className="text-xs text-gray-500">{ind.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
