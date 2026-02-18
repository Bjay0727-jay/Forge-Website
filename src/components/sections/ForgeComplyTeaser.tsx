import { Shield, Brain, CheckCircle2, Database, BarChart3, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FORGECOMPLY } from '@/lib/constants';

const highlights = [
  { icon: Brain, title: 'ForgeML™ AI Mapping', desc: 'Auto-map controls across 25+ frameworks' },
  { icon: CheckCircle2, title: 'Validated Testing', desc: 'Proof controls work, not just exist' },
  { icon: Database, title: 'Evidence Vault', desc: 'Assessor-ready evidence, always' },
  { icon: BarChart3, title: 'Real-Time Scoring', desc: 'Live compliance posture dashboards' },
  { icon: FileText, title: 'Auto Documentation', desc: 'SSPs & POA&Ms that stay in sync' },
];

const stats = [
  { value: '700+', label: 'Pre-Built Controls' },
  { value: '25+', label: 'Frameworks' },
  { value: '80%', label: 'Faster Docs' },
  { value: '24/7', label: 'Monitoring' },
];

export default function ForgeComplyTeaser() {
  return (
    <section className="py-28 px-8 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(45,212,191,0.04)_0%,transparent_60%)]" />
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2.5 bg-teal-500/[0.08] border border-teal-500/20 px-6 py-2.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-sm font-mono font-semibold tracking-[1.5px] uppercase text-teal-400">Continuous Trust &amp; Assurance Platform</span>
          </div>
          <h2 className="text-3xl md:text-[42px] font-extrabold text-white leading-[1.12] tracking-tight mb-3">
            ForgeComply 360<span className="text-teal-400">™</span>
          </h2>
          <p className="text-xl text-white/50 italic mb-4">{FORGECOMPLY.tagline}</p>
          <p className="text-base text-white/40 max-w-[540px] mx-auto leading-relaxed">
            {FORGECOMPLY.description}
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {highlights.map((h) => (
            <div key={h.title} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 text-center transition-all hover:border-teal-500/20 hover:bg-white/[0.05]">
              <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center mx-auto mb-3">
                <h.icon className="w-5 h-5 text-teal-400" />
              </div>
              <h3 className="text-[13px] font-bold text-white mb-1">{h.title}</h3>
              <p className="text-[11px] text-white/40 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-4 mb-12 max-w-[720px] mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-extrabold text-teal-400">{s.value}</div>
              <div className="text-[11px] text-white/40">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/products/forgecomply-360"
            className="inline-flex items-center gap-2.5 bg-teal-500 text-white px-8 py-4 rounded-lg text-base font-bold no-underline hover:bg-teal-400 transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(45,212,191,0.2)]"
          >
            Explore ForgeComply 360
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
