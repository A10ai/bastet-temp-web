import { cn } from '@/lib/utils';

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

export default function FeatureCard({ icon, title, description, className }: Props) {
  return (
    <div className={cn(
      'group p-6 md:p-8 rounded-lg bg-white border border-bastet-sand transition-all duration-300 hover:shadow-xl hover:border-bastet-gold cursor-pointer',
      className
    )}>
      <div className="mb-4 text-bastet-gold group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-display font-bold text-bastet-navy mb-3">
        {title}
      </h3>
      <p className="text-bastet-charcoal-light leading-relaxed">
        {description}
      </p>
    </div>
  );
}
