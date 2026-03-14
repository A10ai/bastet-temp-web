import { cn } from '@/lib/utils';

type Props = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
};

export default function SectionHeader({ title, subtitle, centered = true, light = false }: Props) {
  return (
    <div className={cn('space-y-4 md:space-y-6', centered && 'text-center')}>
      <h2 className={cn(
        'text-display-md md:text-display-lg font-display font-bold',
        light ? 'text-bastet-cream' : 'text-bastet-navy'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-lg md:text-xl max-w-2xl leading-relaxed',
          centered && 'mx-auto',
          light ? 'text-bastet-sand' : 'text-bastet-charcoal-light'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
