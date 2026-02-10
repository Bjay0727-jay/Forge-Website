'use client';

import { useState } from 'react';
import {
  DocumentArrowDownIcon,
  ClipboardDocumentListIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  XMarkIcon,
  CheckCircleIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';

import { BuildingOffice2Icon } from '@heroicons/react/24/outline';

const resources = [
  {
    id: 'fedramp-checklist',
    title: 'FedRAMP Readiness Checklist',
    description: 'A comprehensive 50-point checklist to assess your organization\'s readiness for FedRAMP authorization. Covers documentation, technical controls, and process requirements.',
    icon: ClipboardDocumentListIcon,
    category: 'Checklist',
    pages: '12 pages',
    format: 'PDF',
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-500',
    lightBg: 'bg-teal-50',
    fileName: 'FedRAMP-Readiness-Checklist-Forge.pdf'
  },
  {
    id: 'cmmc-gap-template',
    title: 'CMMC 2.0 Gap Assessment Template',
    description: 'Self-assessment template covering all 110 NIST SP 800-171 controls required for CMMC Level 2. Includes scoring guidance and remediation planning worksheets.',
    icon: DocumentCheckIcon,
    category: 'Template',
    pages: '24 pages',
    format: 'PDF',
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-500',
    lightBg: 'bg-blue-50',
    fileName: 'CMMC-Gap-Assessment-Template-Forge.pdf'
  },
  {
    id: 'fisma-checklist',
    title: 'FISMA Readiness Checklist',
    description: 'Complete FISMA compliance checklist aligned with NIST Risk Management Framework. Covers all RMF steps from categorization through continuous monitoring.',
    icon: BuildingOffice2Icon,
    category: 'Checklist',
    pages: '16 pages',
    format: 'PDF',
    color: 'from-emerald-500 to-green-500',
    bgColor: 'bg-emerald-500',
    lightBg: 'bg-emerald-50',
    fileName: 'FISMA-Readiness-Checklist-Forge.pdf'
  },
  {
    id: 'compliance-timeline',
    title: 'Federal Compliance Timeline Guide',
    description: 'Realistic timeline expectations for FedRAMP, CMMC, and FISMA authorizations. Includes resource planning estimates and milestone definitions.',
    icon: ShieldCheckIcon,
    category: 'Guide',
    pages: '8 pages',
    format: 'PDF',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500',
    lightBg: 'bg-purple-50',
    fileName: 'Federal-Compliance-Timeline-Guide-Forge.pdf'
  }
];

interface DownloadModalProps {
  resource: typeof resources[0] | null;
  onClose: () => void;
}

function DownloadModal({ resource, onClose }: DownloadModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!resource) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call - in production, this would send to your email service
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // In production, trigger actual download here
    // For now, we'll show success state
  };

  const handleDownload = () => {
    // In production, this would download the actual PDF
    // For demo, we'll create a placeholder download
    const link = document.createElement('a');
    link.href = `/resources/${resource.fileName}`;
    link.download = resource.fileName;
    link.click();
    onClose();
  };

  const Icon = resource.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {isSuccess ? (
          /* Success State */
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Thank You!
            </h3>
            <p className="text-slate-600 mb-6">
              Your download is ready. We&apos;ve also sent a copy to your email.
            </p>
            <button
              onClick={handleDownload}
              className={`
                inline-flex items-center gap-2 px-6 py-3 rounded-lg
                bg-gradient-to-r ${resource.color} text-white font-semibold
                hover:shadow-lg transition-all duration-300
              `}
            >
              <ArrowDownTrayIcon className="w-5 h-5" />
              Download {resource.title}
            </button>
            <p className="text-sm text-slate-500 mt-4">
              Check your inbox for compliance insights from Forge Cyber Defense.
            </p>
          </div>
        ) : (
          /* Form State */
          <div className="p-8">
            {/* Resource Preview */}
            <div className={`${resource.lightBg} rounded-xl p-4 mb-6 flex items-start gap-4`}>
              <div className={`
                w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0
                bg-gradient-to-br ${resource.color}
              `}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  {resource.category} • {resource.pages}
                </span>
                <h4 className="font-bold text-slate-900 mt-1">
                  {resource.title}
                </h4>
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Get Your Free Download
            </h3>
            <p className="text-slate-600 text-sm mb-6">
              Fill out the form below to access this resource instantly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className={`
                      w-full px-4 py-2.5 rounded-lg border bg-white
                      focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none
                      transition-all
                      ${errors.firstName ? 'border-red-500' : 'border-slate-300'}
                    `}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className={`
                      w-full px-4 py-2.5 rounded-lg border bg-white
                      focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none
                      transition-all
                      ${errors.lastName ? 'border-red-500' : 'border-slate-300'}
                    `}
                    placeholder="Smith"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`
                    w-full px-4 py-2.5 rounded-lg border bg-white
                    focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none
                    transition-all
                    ${errors.email ? 'border-red-500' : 'border-slate-300'}
                  `}
                  placeholder="john.smith@company.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Company *
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className={`
                    w-full px-4 py-2.5 rounded-lg border bg-white
                    focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none
                    transition-all
                    ${errors.company ? 'border-red-500' : 'border-slate-300'}
                  `}
                  placeholder="Acme Corp"
                />
                {errors.company && (
                  <p className="text-red-500 text-xs mt-1">{errors.company}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Role (Optional)
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white
                    focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none
                    transition-all"
                >
                  <option value="">Select your role</option>
                  <option value="ciso">CISO / Security Executive</option>
                  <option value="isso">ISSO / Security Manager</option>
                  <option value="compliance">Compliance Officer</option>
                  <option value="it-director">IT Director</option>
                  <option value="engineer">Security Engineer</option>
                  <option value="consultant">Consultant</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-3 rounded-lg font-semibold text-white
                  bg-gradient-to-r ${resource.color}
                  hover:shadow-lg transition-all duration-300
                  disabled:opacity-70 disabled:cursor-not-allowed
                  flex items-center justify-center gap-2
                `}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <DocumentArrowDownIcon className="w-5 h-5" />
                    Download Free Resource
                  </>
                )}
              </button>

              <p className="text-xs text-slate-500 text-center">
                By downloading, you agree to receive occasional compliance insights from Forge Cyber Defense.
                You can unsubscribe anytime.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ResourceDownloads() {
  const [selectedResource, setSelectedResource] = useState<typeof resources[0] | null>(null);

  return (
    <>
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-teal-600 font-semibold tracking-wide uppercase mb-3">
              Free Resources
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Compliance Tools & Templates
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Download our expert-crafted resources to jumpstart your compliance journey.
              Built from real-world experience helping organizations achieve authorization.
            </p>
          </div>

          {/* Resource Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <div
                  key={resource.id}
                  className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden
                    hover:shadow-xl hover:border-slate-300 transition-all duration-300 group"
                >
                  {/* Card Header */}
                  <div className={`bg-gradient-to-r ${resource.color} p-6`}>
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium">
                        {resource.format}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`
                        px-2.5 py-0.5 rounded-full text-xs font-semibold
                        ${resource.lightBg} ${resource.bgColor.replace('bg-', 'text-')}
                      `}>
                        {resource.category}
                      </span>
                      <span className="text-slate-400 text-sm">{resource.pages}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                      {resource.title}
                    </h3>

                    <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                      {resource.description}
                    </p>

                    <button
                      onClick={() => setSelectedResource(resource)}
                      className={`
                        w-full py-3 rounded-lg font-semibold
                        bg-gradient-to-r ${resource.color} text-white
                        hover:shadow-lg transition-all duration-300
                        flex items-center justify-center gap-2
                        group-hover:scale-[1.02]
                      `}
                    >
                      <DocumentArrowDownIcon className="w-5 h-5" />
                      Download Free
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-4">
              Need help implementing these frameworks?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
            >
              Schedule a free consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Download Modal */}
      {selectedResource && (
        <DownloadModal
          resource={selectedResource}
          onClose={() => setSelectedResource(null)}
        />
      )}
    </>
  );
}
