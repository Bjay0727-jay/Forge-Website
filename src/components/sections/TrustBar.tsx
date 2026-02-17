import { Shield, Award, Clock, Layers } from 'lucide-react';

const stats = [
  { icon: Award, value: '25+', label: 'Years Federal Experience' },
  { icon: Layers, value: '6', label: 'Compliance Frameworks' },
  { icon: Shield, value: 'Proven', label: 'Authorization Methodology' },
  { icon: Clock, value: '24/7', label: 'Continuous Monitoring' },
];

export default function TrustBar() {
  return (
    <section className="py-14 px-8 bg-navy-800 border-y border-white/[0.06]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/15 flex items-center justify-center shrink-0">
                <stat.icon className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                <div className="text-xs text-white/50 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
