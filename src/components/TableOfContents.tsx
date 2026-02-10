'use client';

import { useEffect, useState } from 'react';
import { ListBulletIcon } from '@heroicons/react/24/outline';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    // Parse headings from content
    const headingRegex = /^(#{2,3})\s+(.+)$/gm;
    const matches: TOCItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].replace(/\*\*/g, '').trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-');

      matches.push({ id, text, level });
    }

    setHeadings(matches);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (headings.length < 3) return null;

  return (
    <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 w-full text-left mb-3 lg:cursor-default"
        >
          <ListBulletIcon className="w-5 h-5 text-teal-600" />
          <span className="font-semibold text-slate-900 text-sm uppercase tracking-wide">
            On This Page
          </span>
          <svg
            className={`w-4 h-4 text-slate-400 ml-auto lg:hidden transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <ul className={`space-y-1 ${isExpanded ? 'block' : 'hidden lg:block'}`}>
          {headings.map((heading) => (
            <li key={heading.id}>
              <button
                onClick={() => scrollToHeading(heading.id)}
                className={`
                  block w-full text-left text-sm py-1.5 px-3 rounded-lg transition-all duration-200
                  ${heading.level === 3 ? 'ml-3' : ''}
                  ${activeId === heading.id
                    ? 'bg-teal-100 text-teal-700 font-medium'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }
                `}
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="mt-4 p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border border-teal-100">
        <p className="text-sm font-semibold text-slate-900 mb-2">Need Help?</p>
        <p className="text-xs text-slate-600 mb-3">
          Our compliance experts can help you navigate this framework.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-1 text-sm text-teal-600 font-medium hover:text-teal-700"
        >
          Schedule a consultation
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
