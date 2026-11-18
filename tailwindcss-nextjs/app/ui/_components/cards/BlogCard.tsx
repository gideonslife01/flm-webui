import React from 'react';
import Image from 'next/image';

// 데이터 타입 정의 / Data Type Definition
interface Post {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  imageUrl: string;
}

// 샘플 데이터(나중에 API에서 데이터 가져올 것)
// Sample data (data will be fetched from an API later)
const posts: Post[] = [
  {
    id: 1,
    title: "Next.js와 Tailwind CSS로 만드는 현대적인 웹 디자인",
    description: "강력한 프레임워크와 스타일링 도구를 결합하여 사용자 경험을 극대화하는 방법을 알아봅니다.",
    category: "Technology",
    date: "2023.10.24",
    imageUrl: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    id: 2,
    title: "디지털 마케팅의 트렌드 분석 2024",
    description: "올해 가장 주목해야 할 마케팅 전략과 변화하는 소비자 행동 패턴을 분석합니다.",
    category: "Marketing",
    date: "2023.10.25",
    imageUrl: "https://picsum.photos/seed/picsum/200/300?grayscale&blur=2",
  },
  {
    id: 3,
    title: "성공적인 브랜딩을 위한 디자인 원칙",
    description: "일관된 시각적 언어가 어떻게 브랜드의 신뢰도를 높이는지 사례를 통해 살펴봅니다.",
    category: "Design",
    date: "2023.10.26",
    imageUrl: "https://picsum.photos/seed/picsum/200/300",
  },
];

export const BlogCard = ({ post }: { post: Post }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200">
      
      {/* 이미지 영역 / Image area */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* 카테고리 배지 / Category Badge */}
        <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-600 backdrop-blur-sm">
          {post.category}
        </div>
      </div>

      {/* 콘텐츠 영역 / Content Area */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs text-gray-500">{post.date}</span>
        </div>
        
        <h3 className="mb-2 h-14 line-clamp-2 text-lg font-bold text-gray-900 group-hover:text-blue-600">
          {post.title}
        </h3>
        
        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-3">
          {post.description}
        </p>

        {/* 버튼,링크 / Button, link */}
        <div className="mt-auto">
          <div className="inline-flex items-center text-sm font-semibold text-blue-600">
            자세히 보기 
            <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export  function BlogList() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-2xl font-bold text-center text-gray-900">최신 뉴스 및 블로그 / Latest News and Blog</h2>
        
        {/* 그리드 레이아웃: 모바일 1열, 태블릿 2열, 데스크탑 3열 */}
        {/* Grid layout: 1 column for mobile, 2 columns for tablet, 3 columns for desktop */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}