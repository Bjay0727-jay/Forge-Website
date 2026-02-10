import Link from 'next/link';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  accentColor?: 'teal' | 'blue' | 'red' | 'amber' | 'none';
  className?: string;
  hover?: boolean;
  href?: string;
}

export default function Card({ children, accentColor = 'none', className, hover = true, href }: CardProps) {
  const accent: Record<string, string> = {
    teal: 'before:bg-teal-500',
    blue: 'before:bg-blue-500',
    red: 'before:bg-red-500',
    amber: 'before:bg-amber-500',
    none: '',
  };
  const classes = clsx(
    'bg-gray-50 border border-gray-200 rounded-2xl p-8 transition-all duration-300 relative overflow-hidden',
    accentColor !== 'none' && 'before:content-[""] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:scale-x-0 before:origin-left before:transition-transform before:duration-300',
    accentColor !== 'none' && accent[accentColor],
    hover && 'hover:border-teal-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:before:scale-x-100',
    className
  );
  if (href) return <Link href={href} className={clsx(classes, 'block no-underline text-inherit')}>{children}</Link>;
  return <div className={classes}>{children}</div>;
}
