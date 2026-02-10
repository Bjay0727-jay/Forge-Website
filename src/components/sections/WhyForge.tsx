import { Award, Zap, Users, ShieldCheck, Layers, Wrench } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const reasons = [
  { icon: Award, title: 'Veteran-Owned Business', desc: 'Veteran-owned business with military discipline and mission-focused delivery. We bring the same commitment to your security that we brought to national defense.' },
  { icon: Layers, title: 'Multi-Framework Expertise', desc: 'Deep knowledge across FedRAMP, FISMA, CMMC, HIPAA, SOC 2, and ISO 27001 — not just one framework. We understand how compliance requirements overlap and intersect.' },
  { icon: Wrench, title: 'We Build & We Secure', desc: 'Unique combination of application development and compliance expertise under one roof. Security is built in, not bolted on — because our developers and compliance teams work together.' },
  { icon: Zap, title: 'Accelerated Timelines', desc: 'Proven methodologies that reduce compliance timelines significantly — getting you authorized faster without cutting corners. Our templates and processes are battle-tested.' },
];

export default function WhyForge() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeading label="Why Forge Cyber Defense" title="Built Different. Built Secure." subtitle="We're not just consultants and developers. We're veterans, builders, and security practitioners who understand what's at stake when systems must be trusted." align="center" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[960px] mx-auto">
          {reasons.map((r) => (
            <div key={r.title} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 transition-all hover:border-teal-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
              <div className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-5 bg-teal-500/15">
                <r.icon className="w-[26px] h-[26px] text-teal-500" />
              </div>
              <h3 className="text-lg font-bold text-navy-700 mb-2.5">{r.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
