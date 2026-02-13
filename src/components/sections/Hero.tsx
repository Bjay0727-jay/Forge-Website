import { Shield, Zap, MessageSquare, ChevronRight, Code } from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-navy-900 via-navy-700 to-navy-600 text-white pt-40 pb-28 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(13,148,136,0.08)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(59,130,246,0.06)_0%,transparent_50%)]" />
      <div className="absolute inset-0 hero-pattern" />
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="flex gap-3 flex-wrap mb-8">
          <Badge variant="dark" size="md" icon={<Shield className="w-4 h-4" />}>Veteran-Owned Business</Badge>
          <Badge variant="dark" size="md" icon={<Zap className="w-4 h-4" />}>25+ Years Experience</Badge>
        </div>
        <h1 className="text-5xl md:text-[56px] font-extrabold leading-[1.1] tracking-tight mb-6 max-w-[900px]">
          Security Compliance <br />&amp; <span className="text-teal-400">Application Development</span>
        </h1>
        <p className="text-xl text-white/75 leading-relaxed max-w-[720px] mb-12">
          Results-oriented leadership and deep expertise guiding security and technology initiatives across government, healthcare, and private sector environments. We evaluate organizations, uncover vulnerabilities, and deliver real solutions for complex challenges.
        </p>
        <div className="flex gap-4 flex-wrap mb-16">
          <Button href="/contact" variant="primary" size="lg" icon={<MessageSquare className="w-5 h-5" />}>Schedule a Consultation</Button>
          <Button href="/services" variant="outline" size="lg" icon={<ChevronRight className="w-5 h-5" />}>Explore Our Services</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px]">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all hover:bg-white/[0.08] hover:border-teal-500/40 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-[14px] flex items-center justify-center mb-5 bg-teal-500/20">
              <Shield className="w-7 h-7 text-teal-400" />
            </div>
            <h3 className="text-xl font-bold mb-2.5">Security Compliance</h3>
            <p className="text-sm text-white/65 leading-relaxed">End-to-end compliance consulting across every major security framework. We guide organizations from assessment through authorization.</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['FedRAMP', 'FISMA', 'CMMC', 'HIPAA', 'SOC 2', 'RMF'].map(tag => (
                <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.08] text-white/70 font-medium">{tag}</span>
              ))}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all hover:bg-white/[0.08] hover:border-blue-500/40 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-[14px] flex items-center justify-center mb-5 bg-blue-500/20">
              <Code className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2.5">Application Development</h3>
            <p className="text-sm text-white/65 leading-relaxed">Custom applications built with security at the core. From government portals to enterprise SaaS platforms — every line of code is secure.</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Custom SaaS', 'Gov Portals', 'Enterprise Apps', 'APIs'].map(tag => (
                <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.08] text-white/70 font-medium">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
