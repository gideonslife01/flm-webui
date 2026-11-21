import { DollarSign, ShoppingBag, Users } from 'lucide-react';
import { WidgetCard } from '../../ui/_components/cards/WidgetCard';

export default function Page() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-20">
      <section className="mb-12">
        <h1 className="text-2xl font-bold text-red-600">Widget Card</h1>
        <p className="mt-2 text-gray-500">위젯 카드</p>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <WidgetCard
          title="이번 달 수익" // This month's earnings
          value="₩8,420,000"
          change="+12.5%"
          trend="up"
          description="전월 대비" // Compared to the previous month
          icon={DollarSign}
          chart={[35, 48, 42, 62, 55, 78, 72, 88]}
          href="/dashboard/revenue"
        />

        <WidgetCard
          title="주문" // order
          value="1,284"
          change="+8.2%"
          trend="up"
          description="이번 달" // This month
          icon={ShoppingBag}
          chart={[42, 38, 55, 48, 62, 58, 74, 80]}
          href="/dashboard/orders"
        />

        <WidgetCard
          title="활성 사용자" // Active Users
          value="5,892"
          change="-2.1%"
          trend="down"
          description="전주 대비" // Compared to the previous week
          icon={Users}
          chart={[70, 76, 68, 72, 60, 64, 58, 54]}
          href="/dashboard/users"
        />
      </section>
    </main>
  );
}