'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheckIcon,
  CpuChipIcon,
  DocumentChartBarIcon,
  CloudArrowUpIcon,
  ClockIcon,
  CheckBadgeIcon,
  ChartBarIcon,
  DocumentDuplicateIcon,
  BoltIcon,
  ArrowRightIcon,
  PlayCircleIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: CpuChipIcon,
    title: 'AI-Powered Control Mapping',
    description: 'ForgeML™ automatically maps your existing controls across 25+ frameworks, eliminating duplicate work and accelerating authorization.'
  },
  {
    icon: DocumentChartBarIcon,
    title: '700+ Pre-Built Controls',
    description: 'Start with our comprehensive control library covering FedRAMP, CMMC, HIPAA, SOC 2, NIST 800-53, and more—fully customizable to your environment.'
  },
  {
    icon: CloudArrowUpIcon,
    title: 'Evidence Vault',
    description: 'Secure, organized evidence repository with automated collection, version control, and assessor-ready packaging.'
  },
  {
    icon: ChartBarIcon,
    title: 'Real-Time Compliance Scoring',
    description: 'Live dashboards show your compliance posture across all frameworks with drill-down visibility into control status and gaps.'
  },
  {
    icon: DocumentDuplicateIcon,
    title: 'Automated Documentation',
    description: 'Generate SSPs, POA&Ms, and assessment packages automatically. Keep documentation in sync with your actual implementation.'
  },
  {
    icon: BoltIcon,
    title: 'Vulnerability Integration',
    description: 'Native integration with Nessus, Tenable, and other scanners. Automatically map findings to controls and track remediation.'
  }
];

const frameworks = [
  'FedRAMP', 'CMMC 2.0', 'HIPAA', 'SOC 2', 'NIST 800-53', 'NIST 800-171',
  'FISMA', 'StateRAMP', 'TX-RAMP', 'ISO 27001', 'PCI DSS', 'HITRUST'
];

const stats = [
  { value: 'Designed to', label: 'Accelerate ATO' },
  { value: 'Comprehensive', label: 'Control Library' },
  { value: 'Multi-Framework', label: 'Coverage' },
  { value: '24/7', label: 'Continuous Monitoring' }
];

export default function ForgeComply360() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
            <ShieldCheckIcon className="w-5 h-5 text-teal-400" />
            <span className="text-teal-400 font-semibold text-sm">Introducing Our GRC Platform</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ForgeComply 360<sup className="text-lg">™</sup>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            An AI-powered compliance platform designed to transform how organizations achieve and maintain
            federal authorization. Built by compliance experts, for compliance teams.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/contact?product=forgecomply360"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105"
            >
              Request a Demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-slate-600 text-white font-semibold hover:bg-slate-800 transition-all duration-300"
            >
              <PlayCircleIcon className="w-6 h-6 text-teal-400" />
              Watch Overview
            </button>
          </div>

          {/* Framework Badges */}
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {frameworks.map((framework) => (
              <span
                key={framework}
                className="px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium hover:border-teal-500/50 hover:text-teal-300 transition-colors cursor-default"
              >
                {framework}
              </span>
            ))}
            <span className="px-3 py-1.5 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-400 text-sm font-medium">
              + More
            </span>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-teal-400 mb-1">
                {stat.value}
              </p>
              <p className="text-slate-400 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-800/30 border border-slate-700 hover:border-teal-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Platform Preview */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-800/50 p-2">
          <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center relative overflow-hidden">
            {/* Mock Dashboard UI */}
            <div className="absolute inset-4 grid grid-cols-12 gap-4 opacity-60">
              {/* Sidebar */}
              <div className="col-span-2 bg-slate-800 rounded-lg p-3 space-y-3">
                <div className="h-8 bg-teal-500/20 rounded" />
                <div className="h-4 bg-slate-700 rounded w-3/4" />
                <div className="h-4 bg-slate-700 rounded w-1/2" />
                <div className="h-4 bg-slate-700 rounded w-2/3" />
                <div className="h-4 bg-teal-500/30 rounded" />
                <div className="h-4 bg-slate-700 rounded w-3/4" />
              </div>
              {/* Main Content */}
              <div className="col-span-10 space-y-4">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <div className="h-6 bg-slate-700 rounded w-48" />
                  <div className="flex gap-2">
                    <div className="h-8 w-24 bg-teal-500/30 rounded" />
                    <div className="h-8 w-8 bg-slate-700 rounded" />
                  </div>
                </div>
                {/* Stats Cards */}
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-slate-800 rounded-lg p-4">
                      <div className="h-3 bg-slate-700 rounded w-1/2 mb-2" />
                      <div className="h-6 bg-teal-500/30 rounded w-3/4" />
                    </div>
                  ))}
                </div>
                {/* Chart Area */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 bg-slate-800 rounded-lg p-4 h-40">
                    <div className="h-3 bg-slate-700 rounded w-1/4 mb-4" />
                    <div className="flex items-end gap-2 h-24">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-teal-500 to-cyan-500 rounded-t opacity-70"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="h-3 bg-slate-700 rounded w-1/2 mb-4" />
                    <div className="relative w-24 h-24 mx-auto">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="48" cy="48" r="40" stroke="#334155" strokeWidth="8" fill="none" />
                        <circle cx="48" cy="48" r="40" stroke="url(#gradient)" strokeWidth="8" fill="none" strokeDasharray="251" strokeDashoffset="50" strokeLinecap="round" />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#14b8a6" />
                            <stop offset="100%" stopColor="#06b6d4" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xl font-bold text-white">80%</span>
                        <span className="text-[8px] text-slate-400">Development</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Play Button Overlay */}
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="relative z-10 w-20 h-20 rounded-full bg-teal-500/90 flex items-center justify-center hover:bg-teal-500 transition-colors hover:scale-110 duration-300 shadow-lg shadow-teal-500/30"
            >
              <PlayCircleIcon className="w-10 h-10 text-white ml-1" />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">
            Ready to transform your compliance program?
          </p>
          <Link
            href="/contact?product=forgecomply360"
            className="inline-flex items-center gap-2 text-teal-400 font-semibold hover:text-teal-300 transition-colors"
          >
            Schedule a personalized demo
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            onClick={() => setIsVideoModalOpen(false)}
          />
          <div className="relative bg-slate-900 rounded-2xl overflow-hidden max-w-5xl w-full border border-slate-700 shadow-2xl">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 bg-slate-800/90 rounded-full text-white hover:bg-slate-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Embedded Animated Overview */}
            <div className="aspect-video w-full">
              <iframe
                key={isVideoModalOpen ? 'open' : 'closed'}
                src={`/forgecomply360-overview.html?t=${Date.now()}`}
                className="w-full h-full border-0"
                title="ForgeComply 360 Overview"
                allow="autoplay"
              />
            </div>

            {/* Bottom CTA Bar */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-700">
              <div className="text-center sm:text-left">
                <p className="text-white font-semibold">Ready to see it in action?</p>
                <p className="text-slate-400 text-sm">Schedule a personalized demo with our team</p>
              </div>
              <a
                href="/contact?product=forgecomply360"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Schedule Demo
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
