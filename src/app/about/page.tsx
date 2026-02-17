import { Metadata } from 'next';
import { Shield, Award, Target, Users, CheckCircle, Eye, Crosshair, Heart, MessageSquare, Handshake, Sparkles } from 'lucide-react';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = { title: 'About', description: 'Security Forged. Trust Proven. Forge Cyber Defense is a veteran-owned cybersecurity firm dedicated to national security and reducing risk through proven compliance services.' };

const coreValues = [
  { icon: Users, title: 'People', desc: 'We are motivated, highly skilled professionals invested in our customers\u2019 success.' },
  { icon: Handshake, title: 'Respect', desc: 'We are respectful to everyone and have a passion to care for those around us and make a positive impact in our community.' },
  { icon: Eye, title: 'Openness', desc: 'We are fair in what we say and do; we foster a community environment amongst our employees.' },
  { icon: Shield, title: 'Trust', desc: 'We are committed to honesty and ethics in all our actions and deeds.' },
  { icon: Sparkles, title: 'Excellence', desc: 'We promote a culture of innovation and continuous improvement to make measurable progress.' },
  { icon: MessageSquare, title: 'Communication', desc: 'We are committed to sharing our learning experience for an interconnected environment.' },
  { icon: Target, title: 'Team-Building', desc: 'We are committed as one team, one mission to achieve success.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-900 via-navy-700 to-navy-600 text-white pt-40 pb-24 px-8 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="max-w-[1280px] mx-auto relative z-10">
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">About Forge Cyber Defense</h1>
          <p className="text-xl text-white/75 max-w-[720px] leading-relaxed">Security Forged. Trust Proven. A veteran-owned firm enhancing information security through outreach, awareness, assessment, policy, and best practices.</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-28 px-8 bg-white">
        <div className="max-w-[1080px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-5 h-5 text-teal-500" />
                <span className="text-sm font-bold uppercase tracking-wider text-teal-500">Our Vision</span>
              </div>
              <h2 className="text-3xl font-extrabold text-navy-700 tracking-tight mb-6">Security for an Interconnected World</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Enhancing information security by mitigating security risk through outreach, awareness, assessment, policy, and best practices. We provide our clients with an ongoing and mature cybersecurity practice that is continually reducing risks by preventing oversight of vulnerabilities that plague networks.</p>
              <p className="text-gray-600 leading-relaxed">We fully understand the dynamic environment of the interconnected world in which we live; the ever-changing nature of vulnerabilities and the challenge of protecting data from advanced persistent threats.</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Crosshair className="w-5 h-5 text-teal-500" />
                <span className="text-sm font-bold uppercase tracking-wider text-teal-500">Our Mission</span>
              </div>
              <h2 className="text-3xl font-extrabold text-navy-700 tracking-tight mb-6">Dedicated to National Security</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Forge Cyber Defense is deeply committed to its mission of reducing risks to our clients&apos; infrastructure. We strive to become a valued asset to the community by giving back and paying it forward.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Our goal is to be a trusted partner by consistently delivering proven, on-point services to our clients. We provide an organizational culture that fosters innovation, technical excellence, dedication to repeatable processes, and attention to detail.</p>
              <p className="text-gray-600 leading-relaxed">As a veteran-owned business, we believe our employees are our greatest asset. By empowering our team to excel, Forge consistently exceeds our customers&apos; expectations.</p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-24">
            <div className="text-center mb-14">
              <span className="text-sm font-bold uppercase tracking-wider text-teal-500">We are who we say we are</span>
              <h2 className="text-3xl font-extrabold text-navy-700 tracking-tight mt-3">Core Values: PROTECT</h2>
              <p className="text-gray-500 mt-3 max-w-[640px] mx-auto">Forge Cyber Defense was built on the principle to PROTECT. Our core values guide every engagement and every interaction.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((v) => (
                <div key={v.title} className="bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:border-teal-500/40 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-teal-500/15 flex items-center justify-center shrink-0"><v.icon className="w-5 h-5 text-teal-500" /></div>
                    <div><h4 className="font-bold text-navy-700 mb-1">{v.title}</h4><p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What We Do */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10 mb-24">
            <h2 className="text-2xl font-extrabold text-navy-700 tracking-tight mb-6">What We Do</h2>
            <p className="text-gray-600 leading-relaxed mb-8">For years, we&apos;ve been helping organizations meet their strategic goals. Through balanced insight, Forge brings strategies to deliver the right solutions to meet business requirements. Our team of experts is ready to help you develop strategies for not only surviving, but thriving in the future.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'FedRAMP Authorization (Low, Moderate, High)',
                'FISMA & Risk Management Framework (RMF)',
                'CMMC 2.0 Preparation & Assessment',
                'HIPAA Security Compliance',
                'SOC 2 & ISO 27001 Readiness',
                'Continuous Monitoring & Ongoing Authorizations',
                'Assessment & Authorizations (A&A)',
                'Risk & Vulnerability Assessments',
                'Security Architecture & Zero Trust',
                'Secure Application Development',
                'IT Program Management Services',
                'Security Operations Center (SOC) Services',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-teal-500 shrink-0" /><span className="text-sm text-gray-700">{item}</span></div>
              ))}
            </div>
          </div>

          {/* Social Responsibility */}
          <div className="text-center">
            <Heart className="w-8 h-8 text-teal-500 mx-auto mb-4" />
            <h2 className="text-2xl font-extrabold text-navy-700 tracking-tight mb-4">Social Responsibility</h2>
            <p className="text-gray-600 leading-relaxed max-w-[700px] mx-auto">We believe in bettering our communities and providing for those in need. Giving back is an integral part of our culture and we are honored to support organizations dedicated to advocating, providing support, transitional guidance, and advancing research.</p>
          </div>
        </div>
      </section>
      <CTABanner title="Ready to Work Together?" description="Let's discuss how Forge Cyber Defense can support your security and compliance objectives." />
    </>
  );
}
