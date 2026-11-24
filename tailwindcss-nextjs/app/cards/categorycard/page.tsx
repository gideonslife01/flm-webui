import {
  Coffee,
  CookingPot,
  Hamburger,
  ShoppingBasket,
  Smartphone,
  Utensils,
} from 'lucide-react';
import { CategoryCard } from '../../ui/_components/cards/CategoryCard';

export default function Page() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-20">
      <section className="mb-12">
        <h1 className="text-2xl font-bold text-neutral-500">
          Category Card
        </h1>
        <p className="mt-2 text-gray-500">
          카테고리 카드
        </p>
      </section>
      {/** KOR */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CategoryCard
          title="한식"
          description="집밥과 식당 메뉴"
          icon={CookingPot}
          href="/category/korean"
          count={184}
          accent="orange"
        />

        <CategoryCard
          title="카페·디저트"
          description="커피와 빵, 디저트"
          icon={Coffee}
          href="/category/cafe"
          count={96}
          accent="pink"
        />

        <CategoryCard
          title="편의점·마트"
          description="일상용품과 간편식"
          icon={ShoppingBasket}
          href="/category/mart"
          count={72}
          accent="green"
        />

        <CategoryCard
          title="컴퓨터"
          description="본체와 모니터"
          icon={Utensils}
          href="/category/desktop"
          count={0} // count== 0 --> description
          accent="blue"
        />

        <CategoryCard
          title="스마트 폰"
          description="안드로이드,IOS"
          icon={Smartphone}
          href="/category/스마트폰"
          count={58}
          accent="yellow"
        />

        <CategoryCard
          title="양식"
          description="버거와 스테이크"
          icon={Hamburger}
          href="/category/westernfood"
          count={41}
          accent="slate"
        />
      </section>

      <div className="mt-8"></div>

      {/** ENG */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CategoryCard
          title="Korean food"
          description="Home-cooked meals"
          icon={CookingPot}
          href="/category/korean"
          count={184}
          accent="orange"
        />

        <CategoryCard
          title="Café, Dessert"
          description="Coffee, bread, and desserts"
          icon={Coffee}
          href="/category/cafe"
          count={96}
          accent="pink"
        />

        <CategoryCard
          title="C-store,Grocery store"
          description="일상용품과 간편식"
          icon={ShoppingBasket}
          href="/category/mart"
          count={72}
          accent="green"
        />

        <CategoryCard
          title="Computer"
          description="Desktop and monitor"
          icon={Utensils}
          href="/category/desktop"
          count={0} // count == 0 --> description
          accent="blue"
        />

        <CategoryCard
          title="Smart Phone"
          description="Android,IOS"
          icon={Smartphone}
          href="/category/smartphone"
          count={58}
          accent="yellow"
        />

        <CategoryCard
          title="Western food"
          description="Burger,Steak"
          icon={Hamburger}
          href="/category/westernfood"
          count={41}
          accent="slate"
        />
      </section>
    </main>
  );
}