import { Shield, MessageSquare, Network, Crosshair } from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import ForgeWheel from '@/components/sections/ForgeWheel';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-navy-900 via-navy-700 to-navy-600 text-white pt-40 pb-32 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(13,148,136,0.08)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(59,130,246,0.06)_0%,transparent_50%)]" />
      <div className="absolute inset-0 hero-pattern" />
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <Badge variant="dark" size="md" icon={<Shield className="w-4 h-4" />}>Veteran-Owned &middot; 25+ Years Federal Experience</Badge>
            </div>
            <h1 className="text-5xl md:text-[56px] font-extrabold leading-[1.1] tracking-tight mb-4 max-w-[900px]">
              Security <span className="text-teal-400">Forged.</span><br />Trust <span className="text-teal-400">Proven.</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-[660px] mb-4 font-medium">
              Compliance experts who engineer the solutions.
            </p>
            <p className="text-lg text-white/60 leading-relaxed max-w-[640px] mb-12">
              We guide organizations from gap analysis through full authorization — designing secure architectures, validating controls, and mitigating risk across FedRAMP, CMMC, FISMA, HIPAA, and SOC 2.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button href="/contact" variant="primary" size="lg" icon={<MessageSquare className="w-5 h-5" />}>Schedule a Consultation</Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <ForgeWheel />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1280px] mt-20">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all hover:bg-white/[0.08] hover:border-teal-500/40 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-[14px] flex items-center justify-center mb-5 bg-teal-500/20">
              <Shield className="w-7 h-7 text-teal-400" />
            </div>
            <h3 className="text-xl font-bold mb-2.5">Security Compliance</h3>
            <p className="text-sm text-white/65 leading-relaxed">End-to-end compliance consulting from assessment through authorization across FedRAMP, CMMC, FISMA, HIPAA, and SOC 2.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all hover:bg-white/[0.08] hover:border-blue-500/40 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-[14px] flex items-center justify-center mb-5 bg-blue-500/20">
              <Network className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2.5">Security Architecture &amp; Design</h3>
            <p className="text-sm text-white/65 leading-relaxed">Network and cybersecurity professionals who design solutions tailored to your environment — mitigating risk and delivering true security for each organization&apos;s unique needs.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all hover:bg-white/[0.08] hover:border-red-500/40 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-[14px] flex items-center justify-center mb-5 bg-red-500/20">
              <Crosshair className="w-7 h-7 text-red-400" />
            </div>
            <h3 className="text-xl font-bold mb-2.5">ForgeRedOps</h3>
            <p className="text-sm text-white/65 leading-relaxed">Integrated offensive security and vulnerability management — continuous vulnerability monitoring, penetration testing, and automated remediation with native ForgeComply 360 integration.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
