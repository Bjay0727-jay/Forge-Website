'use client';

import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';
import Button from './Button';

// Formspree endpoint - replace YOUR_FORM_ID with your actual Formspree form ID
// Get your form ID at https://formspree.io (free tier: 50 submissions/month)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqedaoko';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
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
          name: formData.name,
          email: formData.email,
          organization: formData.organization || 'Not provided',
          message: formData.message,
          _subject: `New Contact: ${formData.name} - General Inquiry`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', organization: '', message: '' });
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
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
            placeholder="Your name"
            disabled={status === 'submitting'}
          />
        </div>
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
        {status === 'submitting' ? 'Sending...' : 'Schedule a Consultation'}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to be contacted regarding your inquiry.
        We respect your privacy and will never share your information.
      </p>
    </form>
  );
}
