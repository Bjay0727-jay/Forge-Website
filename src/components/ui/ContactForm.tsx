'use client';

import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';
import Button from './Button';

// Formspree endpoint - replace YOUR_FORM_ID with your actual Formspree form ID
// Get your form ID at https://formspree.io (free tier: 50 submissions/month)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          organization: formData.organization || 'Not provided',
          service: formData.service || 'Not specified',
          message: formData.message,
          _subject: `New Contact: ${formData.firstName} ${formData.lastName} - ${formData.service || 'General Inquiry'}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          organization: '',
          service: '',
          message: ''
        });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Form submission failed');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-teal-500/10 border border-teal-500/30 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
        <p className="text-slate-600 mb-4">
          Thank you for reaching out. We&apos;ll review your message and get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-teal-600 font-medium hover:text-teal-700 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
          <strong>Error:</strong> {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
            placeholder="First name"
            disabled={status === 'submitting'}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
            placeholder="Last name"
            disabled={status === 'submitting'}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
            placeholder="you@company.com"
            disabled={status === 'submitting'}
          />
        </div>
        <div>
          <label htmlFor="org" className="block text-sm font-medium text-gray-700 mb-1.5">
            Organization
          </label>
          <input
            id="org"
            name="organization"
            type="text"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
            placeholder="Your company"
            disabled={status === 'submitting'}
          />
        </div>
      </div>

      <div>
        <label htmlFor="svc" className="block text-sm font-medium text-gray-700 mb-1.5">
          Service Interest
        </label>
        <select
          id="svc"
          name="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
          disabled={status === 'submitting'}
        >
          <option value="">Select a service</option>
          <optgroup label="Security Compliance">
            <option value="FedRAMP Authorization">FedRAMP Authorization</option>
            <option value="FISMA / RMF Compliance">FISMA / RMF Compliance</option>
            <option value="CMMC 2.0 Certification">CMMC 2.0 Certification</option>
            <option value="HIPAA Security">HIPAA Security</option>
            <option value="SOC 2 / ISO 27001">SOC 2 / ISO 27001</option>
            <option value="ISSO Consulting">ISSO Consulting</option>
          </optgroup>
          <optgroup label="Application Development">
            <option value="Custom SaaS Platform">Custom SaaS Platform</option>
            <option value="Government Portal">Government Portal</option>
            <option value="Compliance Platform">Compliance Platform</option>
            <option value="Enterprise Web Application">Enterprise Web Application</option>
            <option value="Mobile Application">Mobile Application</option>
            <option value="API Development">API Development</option>
          </optgroup>
          <option value="Compliance + Development">Compliance + Development</option>
          <option value="Other / General Inquiry">Other / Not Sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="msg" className="block text-sm font-medium text-gray-700 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="msg"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all resize-none"
          placeholder="Tell us about your project or compliance needs..."
          disabled={status === 'submitting'}
        />
      </div>

      {/* Honeypot field for spam protection */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        icon={
          status === 'submitting' ? (
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          ) : (
            <Send className="w-5 h-5" />
          )
        }
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to be contacted regarding your inquiry.
        We respect your privacy and will never share your information.
      </p>
    </form>
  );
}
