import Link from 'next/link';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon,
  className,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2.5 font-semibold rounded-lg transition-all duration-200 cursor-pointer no-underline';
  const variants = {
    primary: 'bg-teal-500 text-white hover:bg-teal-600 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(13,148,136,0.3)]',
    outline: 'bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/5',
    ghost: 'bg-transparent text-navy-700 hover:bg-gray-100',
    white: 'bg-white text-navy-800 hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-lg',
  };
  const sizes = { sm: 'px-5 py-2.5 text-sm', md: 'px-8 py-3.5 text-[15px]', lg: 'px-10 py-4 text-base' };
  const disabledStyles = disabled ? 'opacity-60 cursor-not-allowed hover:transform-none hover:shadow-none' : '';
  const classes = clsx(base, variants[variant], sizes[size], disabledStyles, className);

  if (href) return <Link href={href} className={classes}>{icon}{children}</Link>;
  return <button type={type} onClick={onClick} className={classes} disabled={disabled}>{icon}{children}</button>;
}
