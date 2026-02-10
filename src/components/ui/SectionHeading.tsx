import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface SectionHeadingProps {
  label?: string;
  labelIcon?: ReactNode;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeading({ label, labelIcon, title, titleHighlight, subtitle, align = 'left', dark = false }: SectionHeadingProps) {
  return (
    <div className={clsx(align === 'center' && 'text-center')}>
      {label && (
        <div className={clsx('inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[1.5px] mb-4', dark ? 'text-teal-400' : 'text-teal-500')}>
          {labelIcon && <span className="w-[18px] h-[18px]">{labelIcon}</span>}
          {label}
        </div>
      )}
      <h2 className={clsx('text-4xl font-extrabold tracking-tight mb-4 leading-tight', dark ? 'text-white' : 'text-navy-700')}>
        {titleHighlight ? (
          <>{title.split(titleHighlight)[0]}<span className={dark ? 'text-teal-400' : 'text-teal-500'}>{titleHighlight}</span>{title.split(titleHighlight)[1]}</>
        ) : title}
      </h2>
      {subtitle && (
        <p className={clsx('text-lg leading-relaxed mb-12', dark ? 'text-white/70' : 'text-gray-500', align === 'left' && 'max-w-[640px]')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
