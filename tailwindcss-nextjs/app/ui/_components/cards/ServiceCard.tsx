// app/ui/_components/cards/ServiceCard.tsx

import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  ctaText?: string;
  href: string;
  featured?: boolean;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  features,
  ctaText = '시작하기',
  href,
  featured = false,
}: ServiceCardProps) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        featured
          ? 'border-blue-600 bg-blue-50'
          : 'border-gray-200 bg-white'
      }`}
    >
      {featured && (
        <span className="absolute right-5 top-5 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
          인기 / popularity 💜
        </span>
      )}

      <div className="flex size-12 items-center justify-center rounded-xl bg-blue-600 text-white">
        <Icon className="size-6" aria-hidden="true" />
      </div>

      <h2 className="mt-5 text-xl font-bold text-gray-950">{title}</h2>
      <p className="mt-3 leading-7 text-gray-500">{description}</p>

      <ul className="mt-5 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center text-sm text-gray-700">
            <span className="mr-2 size-1.5 rounded-full bg-blue-600" />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={href}
        className={`mt-8 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 font-semibold transition-colors ${
          featured
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {ctaText}
        <ArrowRight className="size-4" aria-hidden="true" />
      </a>
    </article>
  );
}