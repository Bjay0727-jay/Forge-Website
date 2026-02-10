import { Lock, ClipboardCheck, RefreshCw } from 'lucide-react';
import StatBlock from '@/components/ui/StatBlock';

export default function SecurityCallout() {
  return (
    <section className="py-24 px-8 bg-gradient-to-br from-navy-700 to-navy-600 text-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-5 tracking-tight leading-tight">Security Is Not a Feature.<br /><span className="text-teal-400">It&apos;s Our Foundation.</span></h2>
            <p className="text-base text-white/75 leading-relaxed mb-8">We demonstrate knowledge and care in every project we undertake, which instills confidence in our performance with our clients. Whether it&apos;s a compliance engagement or a custom application — security isn&apos;t bolted on at the end. It&apos;s engineered in from the first line of code and the first control assessment.</p>
            <div className="flex flex-col gap-5">
              {[
                { icon: Lock, title: 'Secure by Design', desc: 'OWASP-aligned development practices baked into every project from day one' },
                { icon: ClipboardCheck, title: 'Compliance-Ready Code', desc: 'Applications built to meet NIST, FedRAMP, HIPAA, and SOC 2 requirements' },
                { icon: RefreshCw, title: 'Continuous Protection', desc: 'Ongoing vulnerability management and security updates after deployment' },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-[10px] bg-teal-500/20 flex items-center justify-center shrink-0">
                    <f.icon className="w-[22px] h-[22px] text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-1">{f.title}</h4>
                    <p className="text-sm text-white/65">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <StatBlock value="30+" label="Years Combined Experience" />
            <StatBlock value="6" label="Compliance Frameworks" />
            <StatBlock value="70%" label="Faster Authorization" />
            <StatBlock value="24/7" label="Continuous Monitoring" />
          </div>
        </div>
      </div>
    </section>
  );
}
