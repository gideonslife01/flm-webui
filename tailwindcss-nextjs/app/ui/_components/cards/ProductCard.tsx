// app/ui/_components/cards/ProductCard.tsx
// npm install lucide-react

import React from 'react';
import Image from 'next/image';
import { ShoppingCart, Heart } from 'lucide-react';

// 상품 데이터 타입 / Product Data Type
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number; // 할인 전 가격 / Price before discount
  discountRate?: number;  // 할인율 (예: 20) / Discount rate (e.g., 20)
  image: string;
  badge?: string;         // '신상품', 'Best', 'Sale' 등 / Terms like 'New Product', 'Best', and 'Sale'
  rating: number;         // 별점 (0~5) / Rating (0–5)
}

// 샘플 데이터 / Sample data
export const products: Product[] = [
  {
    id: 1,
    name: "프리미엄 무선 노이즈캔슬링 헤드폰",
    price: 350000,
    originalPrice: 450000,
    discountRate: 22,
    image: "https://picsum.photos/seed/picsum/200/300",
    badge: "BEST",
    rating: 4.8,
  },
  {
    id: 2,
    name: "미니멀리즘 데스크테리어 조명",
    price: 89000,
    image: "https://picsum.photos/seed/picsum/200/300",
    badge: "NEW",
    rating: 4.5,
  },
  {
    id: 3,
    name: "메모리폼 편안한 사무용 의자",
    price: 210000,
    originalPrice: 280000,
    discountRate: 25,
    image: "https://picsum.photos/seed/picsum/200/300",
    badge: "SALE",
    rating: 4.9,
  },
];

export const ProductCard = ({ product }: { product: Product }) => {

  // 가격 포맷팅 함수 (예: 350,000) / Price formatting function (Example: 350,000)
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ko-KR').format(price);
  };

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
      
      {/* 배지 / Badge  */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10 bg-black text-white text-[10px] font-bold px-2 py-1 rounded-full">
          {product.badge}
        </div>
      )}

      {/* 이미지 영역 / image area */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* 찜하기 버튼 / Add to Favorites Button */}
        <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
          <Heart size={18} className="text-gray-600 hover:text-red-500" />
        </button>
      </div>

      {/* 상세 정보 / Details */}
      <div className="p-4">
        <div className="flex items-center mb-1">
          <span className="text-xs text-yellow-500">★ {product.rating}</span>
          <span className="mx-1 text-gray-300 text-xs">•</span>
          <span className="text-[10px] text-gray-400">리뷰 120+</span>
        </div>
        
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 h-10">
          {product.name}
        </h3>

        <div className="flex items-end justify-between">
          <div>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through mr-2">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="text-lg font-bold text-red-500">
              {formatPrice(product.price)}
            </span>
            {product.discountRate && (
              <span className="ml-1 text-xs text-red-500">
                ({product.discountRate}%)
              </span>
            )}
          </div>
          
          <button className="p-2 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export function ProductList() {
  return (
    <>
      <section>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </>
  );
};
