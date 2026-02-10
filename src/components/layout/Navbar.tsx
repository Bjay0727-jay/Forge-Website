'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Shield } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-700/[0.98] shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : 'bg-navy-700/95'} backdrop-blur-xl border-b border-white/[0.08]`} aria-label="Main navigation">
        <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center no-underline" aria-label="Forge Cyber Defense - Home">
            <Image src="/logos/forge-original-128px.png" alt="Forge Cyber Defense" width={240} height={64} priority className="h-16 w-auto" />
          </Link>
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const hasDropdown = item.groups || item.children;
              return (
                <div key={item.label} className="relative" onMouseEnter={() => hasDropdown ? setActiveDropdown(item.label) : undefined} onMouseLeave={() => setActiveDropdown(null)}>
                  <Link href={item.href} className="text-white/80 no-underline text-sm font-medium px-4 py-2 rounded-md transition-all hover:text-white hover:bg-white/10 flex items-center gap-1">
                    {item.label}
                    {hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>
                  {/* Grouped dropdown (Security Compliance + Forge Personnel) */}
                  {item.groups && activeDropdown === item.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-navy-800 border border-white/10 rounded-xl shadow-2xl py-3 min-w-[480px] z-50 grid grid-cols-2 gap-0">
                      {item.groups.map((group) => (
                        <div key={group.heading} className="px-2">
                          <h4 className="text-[11px] font-bold uppercase tracking-wider text-teal-400 px-3 py-2 mb-1">{group.heading}</h4>
                          {group.items.map((child) => (
                            <Link key={child.href} href={child.href} className="block px-3 py-2 text-sm text-white/70 no-underline hover:text-white hover:bg-white/[0.06] rounded-md transition-colors">{child.label}</Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Simple dropdown fallback */}
                  {item.children && !item.groups && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 bg-navy-800 border border-white/10 rounded-xl shadow-2xl py-2 min-w-[220px] z-50">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="block px-4 py-2.5 text-sm text-white/70 no-underline hover:text-white hover:bg-white/[0.06] transition-colors">{child.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link href="/portal" className="text-white/60 no-underline text-sm font-medium px-4 py-2 rounded-md transition-all hover:text-white hover:bg-white/10 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />Portal
            </Link>
            <Link href="/contact" className="ml-2 bg-teal-500 text-white no-underline text-sm font-semibold px-6 py-2.5 rounded-lg transition-all hover:bg-teal-600">Get Started</Link>
          </div>
          <button className="lg:hidden bg-transparent border-none text-white cursor-pointer p-2" onClick={() => setIsMobileOpen(!isMobileOpen)} aria-label={isMobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMobileOpen}>
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-navy-900/95 backdrop-blur-xl pt-[72px] overflow-y-auto lg:hidden">
          <div className="px-6 py-8 space-y-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <Link href={item.href} onClick={() => setIsMobileOpen(false)} className="block text-white text-lg font-medium py-3 no-underline border-b border-white/10">{item.label}</Link>
                {item.groups && (
                  <div className="pl-4 space-y-4 pb-2 pt-2">
                    {item.groups.map((group) => (
                      <div key={group.heading}>
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-teal-400 mb-2">{group.heading}</h4>
                        <div className="space-y-1">
                          {group.items.map((child) => (
                            <Link key={child.href} href={child.href} onClick={() => setIsMobileOpen(false)} className="block text-white/60 text-sm py-2 no-underline hover:text-teal-400 transition-colors">{child.label}</Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {item.children && !item.groups && (
                  <div className="pl-4 space-y-1 pb-2">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={() => setIsMobileOpen(false)} className="block text-white/60 text-sm py-2 no-underline hover:text-teal-400 transition-colors">{child.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/portal" onClick={() => setIsMobileOpen(false)} className="block text-white/60 text-lg font-medium py-3 no-underline border-b border-white/10">Employee Portal</Link>
            <div className="pt-6">
              <Link href="/contact" onClick={() => setIsMobileOpen(false)} className="block bg-teal-500 text-white text-center no-underline font-semibold py-3.5 rounded-lg hover:bg-teal-600 transition-colors">Get Started</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
