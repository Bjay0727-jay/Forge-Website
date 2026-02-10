import { NavItem } from '@/types';

export const COMPANY = {
  name: 'Forge Cyber Defense',
  legalName: 'Forge Cyber Defense, LLC',
  tagline: 'Security Compliance & Application Development',
  description: 'Security compliance consulting and secure application development for organizations that can\'t afford to get security wrong.',
  email: 'info@forgecyberdefense.com',
  phone: '(469) 404-3899',
  address: '7950 Legacy Dr Suite 400',
  city: 'Plano, TX 75024',
  location: 'Plano, TX (DFW Metro)',
  status: 'Veteran-Owned',
  url: 'https://forgecyberdefense.com',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    groups: [
      {
        heading: 'Security Compliance',
        items: [
          { label: 'FedRAMP Authorization', href: '/services/fedramp-consulting' },
          { label: 'FISMA & RMF', href: '/services/fisma-rmf' },
          { label: 'CMMC 2.0', href: '/services/cmmc-compliance' },
          { label: 'HIPAA Security', href: '/services/hipaa-compliance' },
          { label: 'SOC 2 & ISO 27001', href: '/services/soc2-compliance' },
          { label: 'Continuous Monitoring', href: '/services/isso-consulting' },
        ],
      },
      {
        heading: 'Forge Personnel',
        items: [
          { label: 'ISSO Consultant', href: '/services/isso-consultant' },
          { label: 'Senior ISSO / RMF Lead', href: '/services/senior-isso-rmf' },
          { label: 'Security Architect', href: '/services/security-architect' },
          { label: 'FedRAMP Specialist', href: '/services/fedramp-specialist' },
        ],
      },
    ],
  },
  { label: 'Knowledge Hub', href: '/knowledge' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = {
  compliance: [
    { label: 'FedRAMP Authorization', href: '/services/fedramp-consulting' },
    { label: 'FISMA & RMF', href: '/services/fisma-rmf' },
    { label: 'CMMC 2.0', href: '/services/cmmc-compliance' },
    { label: 'HIPAA Security', href: '/services/hipaa-compliance' },
    { label: 'SOC 2 Compliance', href: '/services/soc2-compliance' },
    { label: 'All Services', href: '/services' },
  ],
  personnel: [
    { label: 'ISSO Consultant', href: '/services/isso-consultant' },
    { label: 'Senior ISSO / RMF Lead', href: '/services/senior-isso-rmf' },
    { label: 'Security Architect', href: '/services/security-architect' },
    { label: 'FedRAMP Specialist', href: '/services/fedramp-specialist' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Knowledge Hub', href: '/knowledge' },
    { label: 'Contact', href: '/contact' },
    { label: 'Employee Portal', href: '/portal' },
  ],
};
