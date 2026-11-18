// app/cards/blogcards/page.tsx

import { BlogList } from '../../ui/_components/cards/BlogCard';

export default function Page() {
  return (
    <>
    <main className="mx-auto max-w-6xl px-6 py-20">

      {/* 상단 제목 영역 / Top Title Area */}
      <section className="mb-12">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Blog Card</h1>
        <p className="text-gray-500 mt-2">블로그 카드</p>
      </section>

      {/* 블로그 카드 섹션 / Blog Card Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Latest Articles</h2>
        <BlogList /> 
      </section>
    </main>
    </>
  );
}