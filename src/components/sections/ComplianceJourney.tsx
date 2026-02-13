'use client';

import { useState } from 'react';
import {
  ClipboardDocumentCheckIcon,
  MapIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  EyeIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const journeySteps = [
  {
    id: 'assess',
    number: '01',
    title: 'Assess',
    shortTitle: 'Assess',
    icon: ClipboardDocumentCheckIcon,
    description: 'Comprehensive gap analysis against your target framework. We evaluate your current security posture, identify control gaps, and establish a baseline for your compliance journey.',
    activities: [
      'Security posture evaluation',
      'Control gap identification',
      'Risk assessment & prioritization',
      'Scope definition & boundary analysis'
    ],
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-500',
    lightBg: 'bg-teal-50',
    textColor: 'text-teal-600',
    borderColor: 'border-teal-500'
  },
  {
    id: 'plan',
    number: '02',
    title: 'Plan',
    shortTitle: 'Plan',
    icon: MapIcon,
    description: 'Strategic roadmap development with realistic timelines and resource allocation. We create actionable remediation plans tailored to your organization\'s capabilities.',
    activities: [
      'Remediation roadmap development',
      'Resource & timeline planning',
      'Policy & procedure framework',
      'SSP documentation strategy'
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-500',
    lightBg: 'bg-blue-50',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-500'
  },
  {
    id: 'implement',
    number: '03',
    title: 'Implement',
    shortTitle: 'Implement',
    icon: WrenchScrewdriverIcon,
    description: 'Hands-on control implementation and documentation. Our team works alongside yours to deploy security controls and create the evidence packages assessors require.',
    activities: [
      'Security control deployment',
      'Technical configuration',
      'Documentation & evidence collection',
      'Staff training & awareness'
    ],
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-500',
    lightBg: 'bg-indigo-50',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-500'
  },
  {
    id: 'authorize',
    number: '04',
    title: 'Authorize',
    shortTitle: 'Authorize',
    icon: ShieldCheckIcon,
    description: 'Assessment preparation and authorization support. We guide you through the assessment process, address findings, and help you achieve your Authority to Operate.',
    activities: [
      'Assessment readiness review',
      '3PAO/C3PAO coordination',
      'Finding remediation support',
      'ATO package finalization'
    ],
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-500',
    lightBg: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-500'
  },
  {
    id: 'monitor',
    number: '05',
    title: 'Monitor',
    shortTitle: 'Monitor',
    icon: EyeIcon,
    description: 'Continuous monitoring and compliance maintenance. Security doesn\'t end at authorization—we help you maintain your security posture and stay audit-ready.',
    activities: [
      'Continuous monitoring program',
      'Vulnerability management',
      'Annual assessment support',
      'Change management & POA&M tracking'
    ],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-500',
    lightBg: 'bg-purple-50',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-500'
  }
];

export default function ComplianceJourney() {
  const [activeStep, setActiveStep] = useState(journeySteps[0]);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-teal-400 font-semibold tracking-wide uppercase mb-3">
            Your Path to Compliance
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Forge Compliance Journey
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            A structured methodology designed to take you from initial assessment through authorization
            and beyond. We partner with you at every stage.
          </p>
        </div>

        {/* Journey Timeline - Desktop */}
        <div className="hidden lg:block mb-12">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-700 -translate-y-1/2" />
            <div
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 -translate-y-1/2 transition-all duration-500"
              style={{
                width: `${(journeySteps.findIndex(s => s.id === activeStep.id) + 1) * 20}%`
              }}
            />

            {/* Steps */}
            <div className="relative flex justify-between">
              {journeySteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep.id === step.id;
                const isPast = journeySteps.findIndex(s => s.id === activeStep.id) >= index;

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step)}
                    className={`
                      relative flex flex-col items-center group cursor-pointer
                      transition-all duration-300
                    `}
                  >
                    {/* Step Circle */}
                    <div className={`
                      w-16 h-16 rounded-full flex items-center justify-center
                      transition-all duration-300 border-4
                      ${isActive
                        ? `bg-gradient-to-br ${step.color} border-white shadow-lg shadow-${step.id === 'assess' ? 'teal' : step.id === 'plan' ? 'blue' : step.id === 'implement' ? 'indigo' : step.id === 'authorize' ? 'emerald' : 'purple'}-500/30 scale-110`
                        : isPast
                          ? `${step.bgColor} border-slate-600`
                          : 'bg-slate-700 border-slate-600'
                      }
                    `}>
                      <Icon className={`w-7 h-7 ${isPast ? 'text-white' : 'text-slate-400'}`} />
                    </div>

                    {/* Step Number & Title */}
                    <div className="mt-4 text-center">
                      <span className={`
                        text-xs font-bold tracking-wider
                        ${isActive ? 'text-teal-400' : 'text-slate-500'}
                      `}>
                        STEP {step.number}
                      </span>
                      <p className={`
                        font-semibold mt-1 transition-colors
                        ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-300'}
                      `}>
                        {step.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Journey Steps - Mobile */}
        <div className="lg:hidden mb-8">
          <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-hide">
            {journeySteps.map((step) => {
              const isActive = activeStep.id === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step)}
                  className={`
                    flex-shrink-0 px-4 py-2 rounded-full font-medium text-sm
                    transition-all duration-300
                    ${isActive
                      ? `bg-gradient-to-r ${step.color} text-white`
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }
                  `}
                >
                  {step.shortTitle}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Detail Card */}
        <div className={`
          bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700
          p-8 md:p-10 transition-all duration-500
        `}>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left: Description */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`
                  w-14 h-14 rounded-xl flex items-center justify-center
                  bg-gradient-to-br ${activeStep.color}
                `}>
                  <activeStep.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                    Step {activeStep.number}
                  </p>
                  <h3 className="text-2xl font-bold text-white">
                    {activeStep.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {activeStep.description}
              </p>

              <a
                href="/contact"
                className={`
                  inline-flex items-center gap-2 px-6 py-3 rounded-lg
                  bg-gradient-to-r ${activeStep.color} text-white font-semibold
                  hover:shadow-lg transition-all duration-300
                  hover:scale-105
                `}
              >
                Start Your Journey
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Right: Activities */}
            <div className={`
              ${activeStep.lightBg} rounded-xl p-6 border-l-4 ${activeStep.borderColor}
            `}>
              <h4 className={`font-semibold ${activeStep.textColor} mb-4 uppercase tracking-wide text-sm`}>
                Key Activities
              </h4>
              <ul className="space-y-3">
                {activeStep.activities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className={`
                      w-6 h-6 rounded-full ${activeStep.bgColor} flex-shrink-0
                      flex items-center justify-center mt-0.5
                    `}>
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { value: 'Accelerated', label: 'Authorization Timelines' },
            { value: '25+ Years', label: 'Federal Experience' },
            { value: '6', label: 'Compliance Frameworks' },
            { value: '24/7', label: 'Continuous Monitoring' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </p>
              <p className="text-slate-400 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
