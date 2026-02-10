import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem { label: string; href?: string; }

export default function Breadcrumbs({ items, dark = false }: { items: BreadcrumbItem[]; dark?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 flex-wrap mb-6">
      <Link href="/" className={`text-sm no-underline transition-colors ${dark ? 'text-gray-400 hover:text-teal-400' : 'text-gray-500 hover:text-teal-500'}`}>Home</Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <ChevronRight className={`w-3.5 h-3.5 ${dark ? 'text-gray-600' : 'text-gray-400'}`} />
          {item.href ? (
            <Link href={item.href} className={`text-sm no-underline transition-colors ${dark ? 'text-gray-400 hover:text-teal-400' : 'text-gray-500 hover:text-teal-500'}`}>{item.label}</Link>
          ) : (
            <span className={`text-sm font-medium ${dark ? 'text-white' : 'text-navy-700'}`}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
