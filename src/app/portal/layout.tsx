'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { LayoutDashboard, FolderOpen, Lock } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

const portalEnabled = process.env.NEXT_PUBLIC_PORTAL_ENABLED === 'true';

const portalNav = [
  { label: 'Dashboard', href: '/portal', icon: LayoutDashboard },
  { label: 'Resources', href: '/portal/resources', icon: FolderOpen },
];

export default function PortalLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (!portalEnabled) {
    return (
      <div className="pt-[72px] min-h-screen bg-gray-50 flex items-center justify-center px-8">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-navy-700/10 flex items-center justify-center mx-auto mb-6"><Lock className="w-10 h-10 text-navy-700" /></div>
          <h1 className="text-3xl font-extrabold text-navy-700 mb-4">Employee Portal</h1>
          <p className="text-gray-500 mb-6">The employee portal is currently being configured. Authentication will be available soon.</p>
          <p className="text-sm text-gray-400">If you need immediate access to internal resources, please contact your administrator.</p>
          <Link href="/" className="inline-block mt-8 bg-teal-500 text-white no-underline text-sm font-semibold px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[72px] min-h-screen bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
          <aside className="bg-white border border-gray-200 rounded-2xl p-4 h-fit lg:sticky lg:top-[104px]">
            <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 px-3 mb-3">Employee Portal</div>
            <nav className="space-y-1">
              {portalNav.map((item) => (
                <Link key={item.href} href={item.href} className={clsx('flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium no-underline transition-colors', pathname === item.href ? 'bg-teal-500/10 text-teal-600' : 'text-gray-600 hover:bg-gray-50 hover:text-navy-700')}>
                  <item.icon className="w-4 h-4" />{item.label}
                </Link>
              ))}
            </nav>
          </aside>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
