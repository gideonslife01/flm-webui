// app/ui/_components/cards/CategoryCard.tsx

import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  count?: number;
  accent?: 'orange' | 'blue' | 'green' | 'pink' | 'yellow' | 'slate';
}

const accentStyles = {
  orange: 'bg-orange-50 text-orange-600',
  blue: 'bg-blue-50 text-blue-600',
  green: 'bg-emerald-50 text-emerald-600',
  pink: 'bg-pink-50 text-pink-600',
  yellow: 'bg-yellow-50 text-yellow-600',
  slate: 'bg-slate-50 text-slate-600',
};

export function CategoryCard({
  title,
  description,
  icon: Icon,
  href,
  count,
  accent = 'slate',
}: CategoryCardProps) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
    >
      <div
        className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${accentStyles[accent]}`}
      >
        <Icon className="size-7" aria-hidden="true" />
      </div>

      <div className="min-w-0 flex-1">
        <h2 className="font-bold text-gray-950">{title}</h2>

        <p className="mt-1 text-sm text-gray-500">
          {count ? `${count}` : description}
        </p>
      </div>

      <ArrowRight
        className="size-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-gray-950"
        aria-hidden="true"
      />
    </a>
  );
}