import type { LucideIcon } from 'lucide-react';

export interface WidgetCardProps {
  title: string;
  value: string;
  description?: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: LucideIcon;
  chart?: number[];
  href?: string;
}

export function WidgetCard({
  title,
  value,
  description,
  change,
  trend = 'neutral',
  icon: Icon,
  chart = [],
  href,
}: WidgetCardProps) {
  const changeColor =
    trend === 'up'
      ? 'text-cyan-600'
      : trend === 'down'
        ? 'text-violet-600'
        : 'text-gray-500';

  const content = (
    <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-2 text-3xl font-bold text-gray-950">{value}</p>
        </div>

        {Icon && (
          <div className="rounded-lg bg-gray-100 p-2.5 text-gray-700">
            <Icon className="size-5" aria-hidden="true" />
          </div>
        )}
      </div>

      {chart.length > 1 && (
        <div className="mt-5 flex h-14 items-end gap-1" aria-label={`${title} 변화 차트`}>
          {chart.map((item, index) => (
            <div
              key={index}
              className="flex-1 rounded-sm bg-blue-500/70"
              style={{ height: `${item}%` }}
            />
          ))}
        </div>
      )}

      {(change || description) && (
        <div className="mt-4 flex items-center justify-between gap-3 text-sm">
          {change && <span className={`font-semibold ${changeColor}`}>{change}</span>}
          {description && <span className="text-gray-500">{description}</span>}
        </div>
      )}
    </article>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : content;
}