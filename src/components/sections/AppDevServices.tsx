import { Cloud, Building2, Shield, Globe, Smartphone, Terminal } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const services = [
  { icon: Cloud, title: 'Custom SaaS Platforms', desc: 'Multi-tenant cloud platforms engineered with enterprise-grade security, role-based access control, encrypted data storage, and compliance-ready architecture that scales with your business.' },
  { icon: Building2, title: 'Government Portals', desc: 'Section 508 accessible, FedRAMP-aligned web applications designed for federal agencies and state government programs with security-first architecture and full compliance documentation.' },
  { icon: Shield, title: 'Compliance Platforms', desc: 'Purpose-built compliance management tools that automate control tracking, evidence collection, audit preparation, and reporting — transforming complex workflows into repeatable processes.' },
  { icon: Globe, title: 'Enterprise Web Applications', desc: 'Full-stack web applications for commercial and enterprise clients — internal portals, operational dashboards, workflow management systems, and business tools with secure development practices.' },
  { icon: Smartphone, title: 'Mobile Applications', desc: 'Secure mobile applications for iOS and Android with encrypted local storage, certificate pinning, secure authentication flows, and compliance-ready architectures.' },
  { icon: Terminal, title: 'API Development & Integration', desc: 'RESTful and GraphQL APIs engineered with security-first design. OAuth and SAML integration, comprehensive documentation, rate limiting, and automated testing.' },
];

export default function AppDevServices() {
  return (
    <section id="appdev" className="py-28 px-8 bg-gray-50">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeading
          label="Application Development"
          labelIcon={<Terminal className="w-[18px] h-[18px]" />}
          title="Secure Applications, Built to Scale"
          subtitle="Every application we deliver is designed with compliance-ready architecture, secure coding practices, and your organization's mission at the center."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div key={svc.title} className="bg-white border border-gray-200 rounded-2xl p-8 transition-all relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-blue-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:border-blue-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:before:scale-x-100">
              <div className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-5 bg-blue-500/10">
                <svc.icon className="w-[26px] h-[26px] text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-navy-700 mb-2.5">{svc.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
