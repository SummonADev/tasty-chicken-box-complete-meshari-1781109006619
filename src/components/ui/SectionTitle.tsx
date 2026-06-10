import clsx from 'clsx';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
};

export default function SectionTitle({ title, subtitle, centered = false, light = false }: SectionTitleProps) {
  return (
    <div className={clsx('mb-12', centered && 'text-center')}>
      <h2 className={clsx(
        'font-bebas text-4xl md:text-5xl leading-tight mb-3',
        light ? 'text-white' : 'text-[#111827]'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={clsx('text-base md:text-lg', light ? 'text-gray-300' : 'text-gray-500')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
