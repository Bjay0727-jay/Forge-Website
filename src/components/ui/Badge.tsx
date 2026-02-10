import { clsx } from 'clsx';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'teal' | 'blue' | 'outline' | 'dark';
  size?: 'sm' | 'md';
  icon?: ReactNode;
}

export default function Badge({ children, variant = 'teal', size = 'sm', icon }: BadgeProps) {
  const variants = {
    teal: 'bg-teal-500/15 text-teal-600 border-teal-500/40',
    blue: 'bg-blue-500/10 text-blue-600 border-blue-500/30',
    outline: 'bg-white/[0.08] text-white/70 border-white/20',
    dark: 'bg-teal-500/15 border-teal-500/40 text-teal-400',
  };
  const sizes = { sm: 'text-[11px] px-2.5 py-1', md: 'text-[13px] px-4 py-1.5' };
  return (
    <span className={clsx('inline-flex items-center gap-2 font-semibold rounded-full border', variants[variant], sizes[size])}>
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </span>
  );
}
