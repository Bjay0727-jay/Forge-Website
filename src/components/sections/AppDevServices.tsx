import { Cloud, Building2, Shield, Globe, Smartphone, Terminal } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const services = [
  { icon: Cloud, title: 'Custom SaaS Platforms', desc: 'Multi-tenant cloud platforms engineered with enterprise-grade security, role-based access control, encrypted data storage, and compliance-ready architecture. We build platforms that scale with your business while meeting the most demanding regulatory requirements.', tags: ['Cloud-Native', 'Multi-Tenant', 'API-First'] },
  { icon: Building2, title: 'Government Portals', desc: 'Section 508 accessible, FedRAMP-aligned web applications designed for federal agencies and state government programs. Built with security-first architecture, intuitive user interfaces, and full compliance documentation from development through deployment.', tags: ['508 Compliant', 'FedRAMP Ready'] },
  { icon: Shield, title: 'Compliance Platforms', desc: 'Purpose-built compliance management tools that automate the tedious work — control tracking, evidence collection, audit preparation, and reporting. We develop platforms that transform complex compliance workflows into streamlined, repeatable processes.', tags: ['Automation', 'OSCAL', 'Workflows'] },
  { icon: Globe, title: 'Enterprise Web Applications', desc: 'Full-stack web applications for commercial and enterprise clients — internal portals, operational dashboards, workflow management systems, and business tools. Every project follows secure development practices with thorough testing and documentation.', tags: ['Full-Stack', 'Responsive', 'Scalable'] },
  { icon: Smartphone, title: 'Mobile Applications', desc: 'Secure mobile applications for iOS and Android with encrypted local storage, certificate pinning, secure authentication flows, and compliance-ready architectures. Cross-platform development that maintains native performance and security standards.', tags: ['iOS', 'Android', 'Cross-Platform'] },
  { icon: Terminal, title: 'API Development & Integration', desc: 'RESTful and GraphQL APIs engineered with security-first design principles. OAuth and SAML integration, comprehensive documentation, rate limiting, input validation, and automated testing for seamless and secure system connectivity.', tags: ['REST', 'GraphQL', 'OAuth'] },
];

export default function AppDevServices() {
  return (
    <section id="appdev" className="py-24 px-8 bg-gray-50">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeading label="Application Development" labelIcon={<Terminal className="w-[18px] h-[18px]" />} title="Secure Applications, Built to Scale" subtitle="We support technological solutions with security standards baked in from day one. Whether building government portals, commercial SaaS platforms, or enterprise tools — every application we deliver is designed with compliance-ready architecture, secure coding practices, and your organization's mission at the center." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div key={svc.title} className="bg-white border border-gray-200 rounded-2xl p-8 transition-all relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-blue-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:border-blue-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:before:scale-x-100">
              <div className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-5 bg-blue-500/10">
                <svc.icon className="w-[26px] h-[26px] text-blue-500" />
              </div>
              <h3 className="text-lg font-bold text-navy-700 mb-2.5">{svc.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{svc.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {svc.tags.map(tag => (<span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-600">{tag}</span>))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
