'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  CloudIcon,
  ShieldCheckIcon,
  BuildingOffice2Icon,
  HeartIcon,
  LockClosedIcon,
  ServerStackIcon,
  GlobeAmericasIcon,
  DocumentCheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const frameworks = [
  {
    id: 'fedramp',
    name: 'FedRAMP',
    fullName: 'Federal Risk and Authorization Management Program',
    icon: CloudIcon,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500',
    borderColor: 'border-blue-500',
    description: 'The standardized approach to security assessment, authorization, and continuous monitoring for cloud products and services used by federal agencies.',
    keyPoints: [
      'Required for selling cloud services to federal agencies',
      'Three impact levels: Low, Moderate, High',
      'Based on NIST SP 800-53 security controls',
      'Reusable authorization across agencies'
    ],
    timeline: '6-18 months',
    controlCount: '125-421 controls',
    idealFor: 'Cloud Service Providers (CSPs) targeting federal market',
    href: '/services/fedramp-consulting',
    knowledgeHref: '/knowledge/understanding-fedramp'
  },
  {
    id: 'cmmc',
    name: 'CMMC 2.0',
    fullName: 'Cybersecurity Maturity Model Certification',
    icon: ShieldCheckIcon,
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-500',
    borderColor: 'border-indigo-500',
    description: 'The DoD\'s framework for assessing and certifying the cybersecurity posture of defense contractors handling Federal Contract Information (FCI) or Controlled Unclassified Information (CUI).',
    keyPoints: [
      'Required for DoD contracts involving FCI/CUI',
      'Three certification levels aligned with sensitivity',
      'Level 2 requires 110 NIST 800-171 controls',
      'Third-party assessment for prioritized contracts'
    ],
    timeline: '3-12 months',
    controlCount: '15-110+ controls',
    idealFor: 'Defense contractors and subcontractors',
    href: '/services/cmmc-compliance',
    knowledgeHref: '/knowledge/cmmc-2-what-defense-contractors-need-to-know'
  },
  {
    id: 'fisma',
    name: 'FISMA / RMF',
    fullName: 'Federal Information Security Management Act',
    icon: BuildingOffice2Icon,
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-500',
    borderColor: 'border-emerald-500',
    description: 'The framework that defines security requirements for federal agencies and contractors operating federal information systems, implemented through NIST\'s Risk Management Framework.',
    keyPoints: [
      'Mandatory for federal agencies and their contractors',
      'Seven-step Risk Management Framework process',
      'Categorization based on FIPS 199/200',
      'Continuous monitoring and annual assessments'
    ],
    timeline: '6-12 months',
    controlCount: 'Based on system categorization',
    idealFor: 'Federal agencies and federal system operators',
    href: '/services/fisma-rmf',
    knowledgeHref: '/knowledge/understanding-fedramp-authorization-levels'
  },
  {
    id: 'hipaa',
    name: 'HIPAA',
    fullName: 'Health Insurance Portability and Accountability Act',
    icon: HeartIcon,
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-500',
    borderColor: 'border-red-500',
    description: 'The federal law establishing national standards for protecting sensitive patient health information (PHI) and requiring administrative, physical, and technical safeguards.',
    keyPoints: [
      'Applies to covered entities and business associates',
      'Security Rule requires administrative, physical, technical safeguards',
      'Privacy Rule governs PHI use and disclosure',
      'Breach notification requirements'
    ],
    timeline: '3-6 months',
    controlCount: '~75 safeguards',
    idealFor: 'Healthcare providers, insurers, and their vendors',
    href: '/services/hipaa-compliance',
    knowledgeHref: '/knowledge'
  },
  {
    id: 'soc2',
    name: 'SOC 2',
    fullName: 'System and Organization Controls 2',
    icon: LockClosedIcon,
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-500',
    borderColor: 'border-amber-500',
    description: 'The AICPA attestation framework evaluating service organizations on five Trust Services Criteria: security, availability, processing integrity, confidentiality, and privacy.',
    keyPoints: [
      'Industry-standard for SaaS and service providers',
      'Type I (point-in-time) vs Type II (over a period)',
      'Flexible criteria selection based on services',
      'Highly valued by enterprise customers'
    ],
    timeline: '3-9 months',
    controlCount: 'Varies by criteria selected',
    idealFor: 'SaaS providers and service organizations',
    href: '/services/soc2-compliance',
    knowledgeHref: '/knowledge'
  },
  {
    id: 'stateramp',
    name: 'StateRAMP',
    fullName: 'State Risk and Authorization Management Program',
    icon: GlobeAmericasIcon,
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-500',
    borderColor: 'border-violet-500',
    description: 'A nonprofit membership organization providing a standardized approach for state and local governments to verify the cybersecurity of cloud solutions, similar to FedRAMP but for state/local use.',
    keyPoints: [
      'Standardized security for state/local cloud adoption',
      'Four security categories with increasing rigor',
      'Leverages FedRAMP baselines where applicable',
      'Growing adoption across state governments'
    ],
    timeline: '4-12 months',
    controlCount: 'Category-dependent',
    idealFor: 'CSPs targeting state and local government',
    href: '/services/fedramp-consulting',
    knowledgeHref: '/knowledge'
  },
  {
    id: 'iso27001',
    name: 'ISO 27001',
    fullName: 'ISO/IEC 27001 Information Security Management',
    icon: DocumentCheckIcon,
    color: 'from-slate-500 to-gray-600',
    bgColor: 'bg-slate-500',
    borderColor: 'border-slate-500',
    description: 'The international standard for establishing, implementing, maintaining, and continually improving an information security management system (ISMS).',
    keyPoints: [
      'Internationally recognized certification',
      'Risk-based approach to information security',
      '93 controls across 4 themes in Annex A',
      'Three-year certification cycle'
    ],
    timeline: '6-12 months',
    controlCount: '93 Annex A controls',
    idealFor: 'Organizations seeking international recognition',
    href: '/services/soc2-compliance',
    knowledgeHref: '/knowledge'
  },
  {
    id: 'nist-csf',
    name: 'NIST CSF',
    fullName: 'NIST Cybersecurity Framework',
    icon: ServerStackIcon,
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-500',
    borderColor: 'border-cyan-500',
    description: 'A voluntary framework of standards, guidelines, and best practices to manage cybersecurity risk, organized around five core functions: Identify, Protect, Detect, Respond, Recover.',
    keyPoints: [
      'Flexible, risk-based framework',
      'Five core functions with categories and subcategories',
      'Maps to other frameworks and standards',
      'CSF 2.0 released in 2024'
    ],
    timeline: '3-6 months',
    controlCount: 'Implementation tiers',
    idealFor: 'Organizations building security programs',
    href: '/services/isso-consulting',
    knowledgeHref: '/knowledge'
  }
];

export default function FrameworkSelector() {
  const [activeFramework, setActiveFramework] = useState(frameworks[0]);

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-teal-400 font-semibold tracking-wide uppercase mb-3">
            Find Your Framework
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Which Compliance Framework Do You Need?
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Select a framework below to learn about requirements, timelines, and how Forge can help
            you achieve authorization.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Framework List - Left Side */}
          <div className="lg:col-span-1 space-y-2">
            {frameworks.map((framework) => {
              const Icon = framework.icon;
              const isActive = activeFramework.id === framework.id;

              return (
                <button
                  key={framework.id}
                  onClick={() => setActiveFramework(framework)}
                  className={`
                    w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300
                    ${isActive
                      ? `bg-gradient-to-r ${framework.color} text-white shadow-lg`
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }
                  `}
                >
                  <div className={`
                    w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
                    ${isActive ? 'bg-white/20' : 'bg-slate-700'}
                  `}>
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold truncate">{framework.name}</p>
                    <p className={`text-sm truncate ${isActive ? 'text-white/70' : 'text-slate-500'}`}>
                      {framework.timeline}
                    </p>
                  </div>
                  <ArrowRightIcon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-white' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Framework Details - Right Side */}
          <div className="lg:col-span-2">
            <div className={`
              rounded-2xl border-2 ${activeFramework.borderColor} bg-slate-800/50 p-8
              transition-all duration-500
            `}>
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`
                  w-16 h-16 rounded-xl flex items-center justify-center
                  bg-gradient-to-br ${activeFramework.color}
                `}>
                  <activeFramework.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {activeFramework.name}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {activeFramework.fullName}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed mb-6">
                {activeFramework.description}
              </p>

              {/* Key Points */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Requirements</h4>
                <ul className="space-y-2">
                  {activeFramework.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`
                        w-5 h-5 rounded-full ${activeFramework.bgColor} flex-shrink-0
                        flex items-center justify-center mt-0.5
                      `}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-slate-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-slate-900/50 rounded-xl">
                <div className="text-center">
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Timeline</p>
                  <p className="text-white font-semibold">{activeFramework.timeline}</p>
                </div>
                <div className="text-center border-x border-slate-700">
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Controls</p>
                  <p className="text-white font-semibold">{activeFramework.controlCount}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">Ideal For</p>
                  <p className="text-white font-semibold text-sm">{activeFramework.idealFor.split(' ').slice(0, 3).join(' ')}</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={activeFramework.href}
                  className={`
                    flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg
                    bg-gradient-to-r ${activeFramework.color} text-white font-semibold
                    hover:shadow-lg transition-all duration-300
                  `}
                >
                  Get {activeFramework.name} Help
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <Link
                  href={activeFramework.knowledgeHref}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-600 text-white font-semibold hover:bg-slate-700 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">
            Not sure which framework applies to your organization?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-teal-400 font-semibold hover:text-teal-300 transition-colors"
          >
            Schedule a free compliance consultation
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
