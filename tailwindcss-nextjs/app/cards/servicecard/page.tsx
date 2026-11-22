// app/cards/servicecard/page.tsx

import { BarChart3, Layers3, ShieldCheck } from 'lucide-react';
import { ServiceCard } from '../../ui/_components/cards/ServiceCard';

export default function Page() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-20">
      <section className="mb-12">
        <h1 className="text-2xl font-bold text-blue-600">Service and Feature Introduction Card</h1>
        <p className="mt-2 text-pink-500">서비스,기능 소개 카드</p>
      </section>

        {/** Kor Card */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <ServiceCard
          title="자동화 워크플로"
          description="반복 업무를 자동화하고 팀의 운영 효율을 높입니다."
          icon={Layers3}
          features={['조건 기반 자동 실행', '다양한 앱 연동', '실시간 알림']}
          href="/signup"
        />

        <ServiceCard
          title="실시간 분석"
          description="핵심 지표를 한눈에 확인하고 빠르게 의사결정하세요."
          icon={BarChart3}
          features={['실시간 대시보드', '맞춤형 리포트', '팀 공유']}
          href="/signup"
          featured // --> true , featured={false} --> false
        />

        <ServiceCard
          title="기업용 보안"
          description="민감한 데이터를 안전하게 보호하고 규정을 준수합니다."
          icon={ShieldCheck}
          features={['역할 기반 권한', '데이터 암호화', '활동 감사 로그']}
          href="/contact"
          ctaText="도입 문의"
        />
      </section>

      <div className = "mt-8"> </div>

        {/** Eng Card */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <ServiceCard
          title="Automated Workflow"
          description="Automate repetitive tasks and increase your team's operational efficiency."
          icon={Layers3}
          features={['Condition-based automatic execution', 'Integration with various apps', 'Real-time notifications']}
          href="/signup"
          ctaText="Start"
        />

        <ServiceCard
          title="Real-time analysis"
          description="View key metrics at a glance and make decisions quickly."
          icon={BarChart3}
          features={['Real-time Dashboard', 'Customized Report', 'Share with Team']}
          href="/signup"
          featured          // --> true , featured={false} --> false
          ctaText="Start"
        />

        <ServiceCard
          title="Enterprise Security"
          description="Securely protect sensitive data and ensure regulatory compliance."
          icon={ShieldCheck}
          features={['Role-based permissions', 'Data Encryption', 'Activity Audit Log']}
          href="/contact"
          ctaText="Inquiry"
        />
      </section>
    </main>
  );
}