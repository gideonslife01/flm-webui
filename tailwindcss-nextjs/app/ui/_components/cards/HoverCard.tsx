// app/ui/_components/cards/HoverCard.tsx

import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

interface HoverCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export function HoverCard({
  title,
  description,
  icon: Icon,
  href,
}: HoverCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600"
    >
      <article className="h-full min-h-64 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-violet-50 hover:shadow-lg motion-reduce:transition-none">
        <div className="flex items-start justify-between">

          <div className="flex size-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700 transition-colors group-hover:bg-violet-600 group-hover:text-white">
            <Icon className="size-6" aria-hidden="true" />
          </div>

          <ArrowUpRight
            className="size-5 text-gray-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-700"
            aria-hidden="true"
          />
        </div>

        <h2 className="mt-5 text-lg font-bold text-gray-950">{title}</h2>
        <p className="mt-3 min-h-12 leading-6 text-gray-500">{description}</p>
      </article>
    </Link>
  );
}