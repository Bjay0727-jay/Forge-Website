import { Metadata } from 'next';
import { Shield, Brain, CheckCircle2, Database, BarChart3, FileText, Search, AlertTriangle, Cog, Users, Zap, Star, ArrowRight, MessageSquare, Check, Minus, X } from 'lucide-react';
import Button from '@/components/ui/Button';
import { FORGECOMPLY } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'ForgeComply 360™ — Compliance Platform',
  description: 'ForgeComply 360™ — Compliance Isn\'t a Dashboard. It\'s Proof. Continuous monitoring infrastructure with validated control assurance across risk, compliance, and trust.',
};

const problems = [
  { icon: AlertTriangle, color: 'text-red-400 bg-red-500/10', title: 'Surface-Level Tests', desc: 'Many platforms run automated checks that confirm configuration exists — but don\'t validate the control actually mitigates risk in your environment.' },
  { icon: Cog, color: 'text-amber-400 bg-amber-500/10', title: 'Rigid Workflows', desc: 'One-size-fits-all control mapping that forces your program into the platform\'s structure instead of adapting to how your organization actually operates.' },
  { icon: Users, color: 'text-gray-400 bg-gray-500/10', title: 'No Practitioner Depth', desc: 'Built by engineers for engineers. When you need guidance on how a control applies to your system boundary, the platform can\'t help — and neither can their support team.' },
];

const features = [
  { icon: Brain, title: 'ForgeML™ AI Control Mapping', desc: 'Automatically maps your existing controls across 25+ frameworks. Eliminates duplicate work and accelerates cross-framework authorization.' },
  { icon: CheckCircle2, title: 'Validated Control Testing', desc: 'Goes beyond "is it configured?" to "does it actually work?" Continuous validation that your controls mitigate the risks they\'re supposed to — evidence-grade proof.' },
  { icon: Database, title: 'Evidence Vault', desc: 'Secure, organized evidence repository with automated collection, version control, and assessor-ready packaging. Always audit-ready, never scrambling.' },
  { icon: BarChart3, title: 'Real-Time Compliance Scoring', desc: 'Live dashboards with drill-down visibility into control status, gaps, and remediation progress across every framework simultaneously.' },
  { icon: FileText, title: 'Automated Documentation', desc: 'Generate SSPs, POA&Ms, and assessment packages automatically. Documentation stays in sync with your actual implementation — no drift.' },
  { icon: Search, title: 'Vulnerability Integration', desc: 'Native integration with Nessus, Tenable, and other scanners. Automatically map findings to controls and track remediation with full audit trail.' },
];

const capabilities = [
  { capability: 'Continuous Monitoring', forge: 'full', typical: 'partial', desc: 'Real-time visibility into your control posture, not just periodic snapshots.' },
  { capability: 'Validated Control Testing', forge: 'full', typical: 'no', desc: 'Deep validation that controls actually mitigate risk — not just configuration checks.' },
  { capability: 'Federal Framework Depth (FedRAMP, FISMA, RMF)', forge: 'full', typical: 'partial', desc: 'Native support for federal frameworks with full control catalogs, not bolt-on templates.' },
  { capability: 'AI Cross-Framework Mapping', forge: 'full', typical: 'partial', desc: 'ForgeML™ maps controls across all 25+ frameworks automatically.' },
  { capability: 'Automated SSP / POA&M Generation', forge: 'full', typical: 'no', desc: 'Complete authorization package generation that stays in sync with implementation.' },
  { capability: 'Practitioner-Backed Support', forge: 'full', typical: 'no', desc: 'Compliance experts included — not tier-gated support or self-service only.' },
  { capability: 'Evidence-Grade Proof for Auditors', forge: 'full', typical: 'partial', desc: 'Output that satisfies auditors and assessors, not just internal dashboards.' },
  { capability: 'Custom Workflow Flexibility', forge: 'full', typical: 'partial', desc: 'Adapts to your organization — not the other way around.' },
];

const frameworks = [
  'FedRAMP', 'CMMC 2.0', 'FISMA', 'NIST 800-53', 'NIST 800-171', 'NIST CSF',
  'HIPAA', 'SOC 2', 'ISO 27001', 'PCI DSS', 'HITRUST', 'StateRAMP', 'TX-RAMP', 'RMF', '+ More',
];

const stats = [
  { value: '700+', label: 'Pre-Built Controls' },
  { value: '25+', label: 'Frameworks' },
  { value: '80%', label: 'Faster Documentation' },
  { value: '24/7', label: 'Continuous Monitoring' },
];

function StatusIcon({ level }: { level: string }) {
  if (level === 'full') return <Check className="w-5 h-5 text-teal-500" />;
  if (level === 'partial') return <Minus className="w-5 h-5 text-amber-500" />;
  return <X className="w-5 h-5 text-gray-300" />;
}

export default function ForgeComply360Page() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-700 to-navy-600 text-white pt-40 pb-28 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(13,148,136,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-[1120px] mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2.5 bg-teal-500/[0.08] border border-teal-500/20 px-6 py-2.5 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-sm font-semibold tracking-[1.5px] uppercase text-teal-400">Continuous Trust &amp; Assurance Platform</span>
          </div>
          <h1 className="text-5xl md:text-[64px] font-extrabold leading-[1.05] tracking-tight mb-3">
            Compliance Isn&apos;t<br />a Dashboard.<br /><span className="text-teal-400">It&apos;s Proof.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/50 italic mb-7">Continuous monitoring. Continuous proof.</p>
          <p className="text-[17px] text-white/65 max-w-[540px] mx-auto mb-10 leading-relaxed">
            {FORGECOMPLY.description}
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-14">
            <Button href="/contact?product=forgecomply360" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>Request a Demo</Button>
            <Button href="#features" variant="outline" size="lg">See How It Works</Button>
          </div>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {['FedRAMP', 'CMMC 2.0', 'HIPAA', 'SOC 2', 'NIST 800-53', 'ISO 27001', '25+ Frameworks'].map((fw) => (
              <span key={fw} className="text-[10px] font-semibold tracking-[1px] uppercase text-white/40 bg-white/[0.04] border border-white/[0.08] px-3.5 py-1.5 rounded-md">{fw}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THE PROBLEM ═══ */}
      <section className="py-32 px-8 bg-navy-800 border-t border-white/[0.06]">
        <div className="max-w-[1120px] mx-auto">
          {/* Section header — centered */}
          <div className="text-center mb-16">
            <span className="text-[13px] font-semibold uppercase tracking-[1.5px] text-teal-400 mb-4 block">The Problem</span>
            <h2 className="text-3xl md:text-[42px] font-extrabold text-white leading-[1.15] tracking-tight mb-6 max-w-[700px] mx-auto">
              Your Compliance Tool Shows Green. Your <span className="text-teal-400">Auditor</span> Sees Red Flags.
            </h2>
            <p className="text-base text-white/50 max-w-[600px] mx-auto leading-relaxed">
              Most compliance platforms automate evidence collection and show dashboards. But when the auditor arrives and starts pulling evidence — automated checks that confirm configuration without validating effectiveness don&apos;t hold up.
            </p>
          </div>
          {/* Problem cards — 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-8 transition-all hover:border-teal-500/20 hover:bg-white/[0.06]">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${p.color}`}>
                  <p.icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{p.title}</h4>
                <p className="text-sm text-white/45 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section id="features" className="py-32 px-8 bg-navy-900 border-t border-white/[0.06]">
        <div className="max-w-[1120px] mx-auto text-center">
          <span className="text-[13px] font-semibold uppercase tracking-[1.5px] text-teal-400 mb-5 block">The ForgeComply Difference</span>
          <h2 className="text-3xl md:text-[42px] font-extrabold text-white leading-[1.15] tracking-tight mb-5 max-w-[650px] mx-auto">
            Controls Monitored. Controls Validated. <span className="text-teal-400">Controls Proven.</span>
          </h2>
          <p className="text-base text-white/50 max-w-[520px] mx-auto mb-16 leading-relaxed">
            Six capabilities that move you from compliance theater to genuine assurance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-9 text-left transition-all hover:border-teal-500/25 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                <div className="w-12 h-12 rounded-xl bg-teal-500/15 flex items-center justify-center mb-6">
                  <f.icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-[15px] font-bold text-white mb-2.5">{f.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-extrabold text-teal-400 tracking-tight mb-1.5">{s.value}</div>
                <div className="text-sm text-white/45 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT SETS US APART ═══ */}
      <section className="py-32 px-8 bg-navy-800 border-t border-white/[0.06]">
        <div className="max-w-[1120px] mx-auto text-center">
          <span className="text-[13px] font-semibold uppercase tracking-[1.5px] text-teal-400 mb-5 block">What Sets Us Apart</span>
          <h2 className="text-3xl md:text-[42px] font-extrabold text-white leading-[1.15] tracking-tight mb-5 max-w-[650px] mx-auto">
            The gap between <span className="text-teal-400">monitoring</span> and <span className="text-teal-400">proof</span>
          </h2>
          <p className="text-base text-white/50 max-w-[520px] mx-auto mb-14 leading-relaxed">
            Most compliance platforms stop at automated evidence collection. ForgeComply 360 goes further — validating that controls actually work and producing output your auditors trust.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white/[0.03] border border-white/[0.08] rounded-xl overflow-hidden text-left">
              <thead>
                <tr className="bg-white/[0.04]">
                  <th className="px-6 py-4 text-[11px] font-semibold tracking-[1.5px] uppercase text-white/40">Capability</th>
                  <th className="px-6 py-4 text-[11px] font-semibold tracking-[1.5px] uppercase text-teal-400 text-center">ForgeComply 360</th>
                  <th className="px-6 py-4 text-[11px] font-semibold tracking-[1.5px] uppercase text-white/40 text-center">Typical GRC Platform</th>
                </tr>
              </thead>
              <tbody>
                {capabilities.map((row, i) => (
                  <tr key={row.capability} className={i < capabilities.length - 1 ? 'border-b border-white/[0.06]' : ''}>
                    <td className="px-6 py-5">
                      <div className="text-sm text-white font-semibold mb-0.5">{row.capability}</div>
                      <div className="text-[12px] text-white/35 leading-relaxed">{row.desc}</div>
                    </td>
                    <td className="px-6 py-5 text-center bg-teal-500/[0.04]">
                      <div className="flex items-center justify-center"><StatusIcon level={row.forge} /></div>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <div className="flex items-center justify-center"><StatusIcon level={row.typical} /></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-white/30 mt-6 max-w-[480px] mx-auto">
            Based on publicly available feature documentation from leading GRC and compliance automation platforms.
          </p>
        </div>
      </section>

      {/* ═══ FRAMEWORKS ═══ */}
      <section className="py-32 px-8 bg-navy-900 border-t border-white/[0.06]">
        <div className="max-w-[1120px] mx-auto text-center">
          <span className="text-[13px] font-semibold uppercase tracking-[1.5px] text-teal-400 mb-5 block">Multi-Framework Coverage</span>
          <h2 className="text-3xl md:text-[42px] font-extrabold text-white leading-[1.15] tracking-tight mb-5 max-w-[550px] mx-auto">
            One platform. <span className="text-teal-400">Every framework</span> that matters.
          </h2>
          <p className="text-base text-white/50 max-w-[520px] mx-auto mb-10 leading-relaxed">
            ForgeComply 360 covers the frameworks your organization needs — from federal to commercial, mapped and cross-referenced by ForgeML™.
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {frameworks.map((fw) => (
              <span key={fw} className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-5 py-2.5 text-[13px] text-white/75 font-semibold transition-all hover:border-teal-500/30 hover:bg-white/[0.06]">{fw}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BUILT BY PRACTITIONERS ═══ */}
      <section className="py-32 px-8 bg-navy-800 border-t border-white/[0.06]">
        <div className="max-w-[1120px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="text-[13px] font-semibold uppercase tracking-[1.5px] text-teal-400 mb-4 block">Built Different</span>
              <h2 className="text-3xl md:text-[42px] font-extrabold text-white leading-[1.12] tracking-tight mb-4">
                Built by <span className="text-teal-400">defenders.</span><br />Backed by evidence.
              </h2>
              <p className="text-base text-white/50 max-w-[520px] leading-relaxed">
                ForgeComply 360 isn&apos;t another SaaS tool built by engineers who Googled &ldquo;FedRAMP.&rdquo; It&apos;s built by Forge Cyber Defense — a veteran-owned consultancy with 25+ years of federal compliance experience. We put everything we&apos;ve learned helping organizations achieve ATO into the platform.
              </p>
            </div>
            <div className="space-y-3.5">
              {[
                { icon: Star, title: 'Veteran-Owned', desc: 'Military discipline and mission-focused delivery. The same commitment to national defense now applied to your security program.' },
                { icon: Zap, title: '25+ Years Federal Experience', desc: 'Real-world compliance expertise across FedRAMP, FISMA, CMMC, HIPAA, and SOC 2 — baked into every feature and workflow.' },
                { icon: Shield, title: 'Platform + Practitioners', desc: 'We offer consulting and technology together. The platform does the heavy lifting; our team provides the expertise when you need it.' },
              ].map((item) => (
                <div key={item.title} className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-6 flex gap-4 items-start transition-all hover:border-teal-500/20 hover:bg-white/[0.06]">
                  <div className="w-10 h-10 min-w-[40px] rounded-lg flex items-center justify-center bg-teal-500/15 text-teal-400">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-[13px] text-white/45 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-32 px-8 bg-navy-900 border-t border-white/[0.06]">
        <div className="max-w-[1120px] mx-auto">
          <div className="bg-gradient-to-br from-navy-700 to-navy-800 border border-teal-500/15 rounded-2xl p-16 text-center relative overflow-hidden">
            <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(13,148,136,0.08)_0%,transparent_60%)]" />
            <span className="text-[13px] font-semibold uppercase tracking-[1.5px] text-teal-400 mb-5 block">Get Started</span>
            <h2 className="text-3xl md:text-[40px] font-extrabold text-white leading-[1.15] tracking-tight mb-4 relative z-10">
              Ready to move from compliance <span className="text-teal-400">theater</span><br />to compliance <span className="text-teal-400">proof</span>?
            </h2>
            <p className="text-base text-white/50 max-w-[480px] mx-auto mb-9 relative z-10">
              Schedule a personalized demo and see how ForgeComply 360 validates your controls, accelerates your authorization, and gives your auditors what they actually need.
            </p>
            <div className="flex gap-4 justify-center flex-wrap relative z-10">
              <Button href="/contact?product=forgecomply360" variant="primary" size="lg" icon={<MessageSquare className="w-5 h-5" />}>Request a Demo</Button>
              <Button href="/" variant="outline" size="lg">Back to Forge Cyber Defense</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
