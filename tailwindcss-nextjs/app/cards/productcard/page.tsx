// app/cards/productcard/page.tsx

import  { ProductCard, products, ProductList }  from '../../ui/_components/cards/ProductCard';

export default function Page() {
  return (
    <>
    <main className="mx-auto max-w-6xl px-6 py-20">

      {/* 상단 제목 영역 / Top Title Area */}
      <section className="mb-12">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Product Card</h1>
        <p className="text-gray-500 mt-2">상품 카드</p>
      </section>

      {/* 상품 카드 섹션 / Product Card Section */}
      <section>
        <h2 className="text-xl font-semibold mb-6">New Products</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      <section>
        <div className="mt-6"></div>
      </section>

      {/* 상품 카드 리스트 / Product Card List */}
      <section>
        <h2 className="text-xl font-semibold mb-6">New Products</h2>
          <ProductList />
      </section>
      
    </main>
    </>
  );
}