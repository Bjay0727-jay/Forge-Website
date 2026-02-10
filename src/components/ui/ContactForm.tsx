'use client';

import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';
import Button from './Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', organization: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => { e.preventDefault(); setSubmitted(true); };

  if (submitted) {
    return (
      <div className="bg-teal-500/10 border border-teal-500/30 rounded-2xl p-8 text-center">
        <div className="text-teal-500 text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-bold text-navy-700 mb-2">Message Sent</h3>
        <p className="text-gray-500">We&apos;ll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">First Name <span className="text-red-500">*</span></label>
          <input id="firstName" type="text" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all" placeholder="First name" />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">Last Name <span className="text-red-500">*</span></label>
          <input id="lastName" type="text" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all" placeholder="Last name" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email <span className="text-red-500">*</span></label>
          <input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all" placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="org" className="block text-sm font-medium text-gray-700 mb-1.5">Organization</label>
          <input id="org" type="text" value={formData.organization} onChange={(e) => setFormData({ ...formData, organization: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all" placeholder="Your company" />
        </div>
      </div>
      <div>
        <label htmlFor="svc" className="block text-sm font-medium text-gray-700 mb-1.5">Service Interest</label>
        <select id="svc" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all">
          <option value="">Select a service</option>
          <optgroup label="Security Compliance">
            <option value="fedramp">FedRAMP Authorization</option>
            <option value="fisma">FISMA / RMF Compliance</option>
            <option value="cmmc">CMMC 2.0 Certification</option>
            <option value="hipaa">HIPAA Security</option>
            <option value="soc2">SOC 2 / ISO 27001</option>
            <option value="isso">ISSO Consulting</option>
          </optgroup>
          <optgroup label="Application Development">
            <option value="saas">Custom SaaS Platform</option>
            <option value="govportal">Government Portal</option>
            <option value="compliance-platform">Compliance Platform</option>
            <option value="enterprise">Enterprise Web Application</option>
            <option value="mobile">Mobile Application</option>
            <option value="api">API Development</option>
          </optgroup>
          <option value="both">Compliance + Development</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>
      <div>
        <label htmlFor="msg" className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
        <textarea id="msg" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all resize-none" placeholder="Tell us about your project or compliance needs..." />
      </div>
      <Button type="submit" variant="primary" size="lg" icon={<Send className="w-5 h-5" />}>Send Message</Button>
    </form>
  );
}
