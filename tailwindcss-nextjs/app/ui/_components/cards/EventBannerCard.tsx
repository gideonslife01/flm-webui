// app/ui/_components/cards/EventBannerCard.tsx

import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export interface EventBannerCardProps {
  title: string;
  description: string;
  badge?: string;
  icon: LucideIcon;
  ctaText?: string;
  href: string;
  variant?: 'violet' | 'blue' | 'orange';
}

export function EventBannerCard({
  title,
  description,
  badge,
  icon: Icon,
  ctaText = '자세히 보기',
  href,
  variant = 'violet',
}: EventBannerCardProps) {
  const backgrounds = {
    violet: 'from-violet-600 via-purple-600 to-fuchsia-500',
    blue: 'from-blue-600 via-cyan-500 to-sky-400',
    orange: 'from-orange-500 via-amber-500 to-yellow-400',
  };

  return (
    <article
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${backgrounds[variant]} p-6 text-white shadow-lg sm:p-8`}
    >
      <div className="absolute -right-16 -top-16 size-52 rounded-full border-[32px] border-white/10" />
      <div className="absolute bottom-[-70px] right-20 size-40 rounded-full bg-white/10 blur-sm" />

      <div className="relative z-10 flex h-full flex-col">
        {badge && (
          <span className="mb-5 w-fit rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur-sm">
            {badge}
          </span>
        )}

        <div className="flex size-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
          <Icon className="size-6" aria-hidden="true" />
        </div>

        <h2 className="mt-6 max-w-md text-2xl font-bold sm:text-3xl">
          {title}
        </h2>

        <p className="mt-3 max-w-md leading-7 text-white/85">
          {description}
        </p>

        <a
          href={href}
          className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-gray-950 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        >
          {ctaText}
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}