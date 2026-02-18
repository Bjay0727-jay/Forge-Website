'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageSquare, X } from 'lucide-react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~600px (past the hero section)
      const shouldShow = window.scrollY > 600;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[45] sticky-cta-enter">
      <div className="bg-navy-800/95 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between h-12">
          <p className="text-sm text-white/70 hidden sm:block">
            <span className="text-teal-400 font-semibold">Security Forged. Trust Proven.</span>
            <span className="mx-2 text-white/30">|</span>
            Let&apos;s discuss your compliance and development needs.
          </p>
          <div className="flex items-center gap-3 ml-auto">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-teal-500 text-white text-sm font-semibold px-5 py-1.5 rounded-md no-underline hover:bg-teal-600 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Schedule a Consultation
            </Link>
            <button
              onClick={() => setIsDismissed(true)}
              className="text-white/40 hover:text-white/70 transition-colors bg-transparent border-none cursor-pointer p-1"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
