// app/cards/hovercard/page.tsx

import { BarChart3, MousePointer2, ShieldCheck, Swords } from 'lucide-react';
import { HoverCard } from '../../ui/_components/cards/HoverCard';

export default function Page() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-20">
      <section className="mb-12">
        <h1 className="text-2xl font-bold text-violet-700">Hover Card</h1>
        <p className="mt-2 text-gray-500">호버 효과 카드</p>
      </section>

        {/** KOR */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <HoverCard
          title="간편한 시작"
          description="복잡한 설정 없이 필요한 기능을 바로 사용해 보세요."
          icon={MousePointer2}
          href="/getting-started"
        />

        <HoverCard
          title="실시간 분석"
          description="중요한 데이터를 확인하고 더 나은 결정을 내려보세요."
          icon={BarChart3}
          href="/analytics"
        />

        <HoverCard
          title="안전한 관리"
          description="계정과 데이터를 안전하게 보호 할 수 있습니다."
          icon={ShieldCheck}
          href="/security"
        />
        
        <HoverCard
          title="게임"
          description="어쌔씬 크리드 오디세이"
          icon={Swords}
          href="/game"
        />
      </section>

      <div className="mt-8" />

        {/** ENG */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <HoverCard
          title="Getting Started Made Easy"
          description="Start using the features you need right away—no complex setup required."
          icon={MousePointer2}
          href="/getting-started"
        />

        <HoverCard
          title="Real-time analysis"
          description="Review important data and make better decisions."
          icon={BarChart3}
          href="/analytics"
        />

        <HoverCard
          title="Safe Management"
          description="You can keep your account and data safe."
          icon={ShieldCheck}
          href="/security"
        />

        <HoverCard
          title="Game"
          description="Assassin'sCreed Odyssey"
          icon={Swords}
          href="/game"
        />        
      </section> 
    </main>
  );
}