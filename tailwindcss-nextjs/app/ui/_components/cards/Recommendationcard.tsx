import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Star } from 'lucide-react';


export const recommendkor: Recommendation[] = [
  {
    id: 1,
    name: '프리미엄 무선 노이즈 캔슬링 헤드폰',
    image: 'https://picsum.photos/seed/recommended-headphones/600/450',
    price: 350000,
    rating: 4.8,
    recommendationReason: '최근 본 오디오 상품과 비슷해요',
    href: '/products/headphones',
  },
  {
    id: 2,
    name: '미니멀 우드 데스크 조명',
    image: 'https://picsum.photos/seed/recommended-lamp/600/450',
    price: 89000,
    rating: 4.6,
    recommendationReason: '관심 있는 홈오피스 아이템이에요',
    href: '/products/desk-lamp',
  },
  {
    id: 3,
    name: '인체공학 메모리폼 사무용 의자',
    image: 'https://picsum.photos/seed/recommended-chair/600/450',
    price: 210000,
    rating: 4.9,
    recommendationReason: '비슷한 취향의 고객이 많이 선택했어요',
    href: '/products/office-chair',
  },
  {
    id: 4,
    name: '데일리 텀블러 세트',
    image: 'https://picsum.photos/seed/recommended-tumbler/600/450',
    price: 42000,
    rating: 4.7,
    recommendationReason: '최근 관심 상품과 함께 보기 좋아요',
    href: '/products/tumbler',
  },
];

export const recommendeng: Recommendation[] = [
  {
    id: 1,
    name: 'Premium Wireless Noise-Canceling Headphones',
    image: 'https://picsum.photos/seed/recommended-headphones/600/450',
    price: 350000,
    rating: 4.8,
    recommendationReason: 'It’s similar to the audio products you’ve viewed recently.',
    href: '/products/headphones',
  },
  {
    id: 2,
    name: 'Minimalist Wooden Desk Lamp',
    image: 'https://picsum.photos/seed/recommended-lamp/600/450',
    price: 89000,
    rating: 4.6,
    recommendationReason: 'These are home office items I’m interested in.',
    href: '/products/desk-lamp',
  },
  {
    id: 3,
    name: 'Ergonomic Memory Foam Office Chair',
    image: 'https://picsum.photos/seed/recommended-chair/600/450',
    price: 210000,
    rating: 4.9,
    recommendationReason: 'Customers with similar tastes have frequently chosen this.',
    href: '/products/office-chair',
  },
  {
    id: 4,
    name: 'Daily Tumbler Set',
    image: 'https://picsum.photos/seed/recommended-tumbler/600/450',
    price: 42000,
    rating: 4.7,
    recommendationReason: 'Great to view alongside your recently interested items',
    href: '/products/tumbler',
  },
];


// card
export interface Recommendation {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  recommendationReason: string;
  href: string;
}
// card list
export interface RecommendataionList {
    data : Recommendation[];
}

export function RecommendationCard({
  item,
}: {
  item: Recommendation;
}) {
  const price = new Intl.NumberFormat('ko-KR').format(item.price);

  return (
    <Link
      href={item.href}
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-violet-700 backdrop-blur-sm">
          <Sparkles className="size-3.5" aria-hidden="true" />
          추천 / recommendation
        </span>
      </div>

      <div className="p-4">
        <p className="mb-2 text-xs font-medium text-violet-600">
          {item.recommendationReason}
        </p>

        <h2 className="line-clamp-2 min-h-10 font-semibold text-gray-950">
          {item.name}
        </h2>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-950">₩{price}</span>
          <span className="inline-flex items-center gap-1 text-sm text-gray-500">
            <Star
              className="size-4 fill-amber-400 text-amber-400"
              aria-hidden="true"
            />
            {item.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </Link>
  );
}

//export function recommendationCardList({data}:{data:Recommendation[]}){
export function RecommendationCardList({data}:RecommendataionList){
    return(
         <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.map((item) => (
                <RecommendationCard key={item.id} item={item} />
            ))}
        </section>
    );
}
