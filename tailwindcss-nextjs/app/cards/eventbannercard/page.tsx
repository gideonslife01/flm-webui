// app/cards/eventbannercard/page.tsx

import {
  Gift,
  Megaphone,
  Sparkles,
  CalendarDays,
  TicketPercent,
} from 'lucide-react';
import { EventBannerCard } from '../../ui/_components/cards/EventBannerCard';

export default function Page() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-20">
      <section className="mb-12">
        <h1 className="text-2xl font-bold text-violet-600">
          Event / Banner Card
        </h1>
        <p className="mt-2 text-gray-500">
          이벤트 및 배너 카드
        </p>
      </section>
        {/** KOR */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <EventBannerCard
          title="신규 가입자를 위한 30% 할인"
          description="이번 달에 가입하면 프리미엄 플랜을 한 달간 30% 할인된 가격으로 이용할 수 있습니다."
          badge="LIMITED OFFER"
          icon={Gift}
          ctaText="혜택 받기"
          href="/signup"
          variant="violet"
        />

        <EventBannerCard
          title="온라인 라이브 세미나"
          description="업계 전문가와 함께 디지털 전환의 성공 전략을 알아보세요."
          badge="11월 28일 오후 2시"
          icon={CalendarDays}
          ctaText="참석 등록"
          href="/events"
          variant="blue"
        />

        <EventBannerCard
          title="여름 프로모션이 시작되었습니다"
          description="선별된 서비스와 콘텐츠를 특별한 가격으로 만나보세요."
          badge="SPECIAL EVENT"
          icon={TicketPercent}
          ctaText="프로모션 보기"
          href="/promotion"
          variant="orange"
        />

        <EventBannerCard
          title="새로운 기능을 먼저 만나보세요"
          description="얼리액세스에 참여하고 개선된 기능과 최신 업데이트를 경험하세요."
          badge="새 기능 출시"
          icon={Sparkles}
          ctaText="얼리액세스 신청"
          href="/early-access"
          variant="violet"
        />
      </section>
      
      <div className="mt-8"></div>

      {/** ENG */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <EventBannerCard
          title="30% discount for new subscribers"
          description="If you sign up this month, you can get a 30% discount on the Premium plan for one month."
          badge="LIMITED OFFER"
          icon={Gift}
          ctaText="Get Benefits"
          href="/signup"
          variant="violet"
        />

        <EventBannerCard
          title="Online Live Seminar"
          description="Discover successful strategies for digital transformation with industry experts."
          badge="November 28, 2:00 PM"
          icon={CalendarDays}
          ctaText="Registration"
          href="/events"
          variant="blue"
        />

        <EventBannerCard
          title="The winter promotion has begun."
          description="Discover curated services and content at special prices."
          badge="SPECIAL EVENT"
          icon={TicketPercent}
          ctaText="View Promotions"
          href="/promotion"
          variant="orange"
        />

        <EventBannerCard
          title="Be the first to experience new features"
          description="Participate in Early Access to experience improved features and the latest updates."
          badge="New feature launch"
          icon={Sparkles}
          ctaText="Apply for Early Access"
          href="/early-access"
          variant="violet"
        />
      </section>
    </main>
  );
}