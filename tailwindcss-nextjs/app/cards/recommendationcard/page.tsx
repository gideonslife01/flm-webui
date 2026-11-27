import {
  RecommendationCard,RecommendationCardList,
  recommendeng,recommendkor,
  type Recommendation,RecommendataionList,
} from '../../ui/_components/cards/RecommendationCard';


export default function Page() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-20">
      <section className="mb-10">
        <h1 className="mt-2 text-2xl font-bold text-violet-600">
          Recommendation Card
        </h1>
        <p className="mt-2 text-gray-500">
          추천 인기 카드
        </p>
      </section>

        {/** KOR */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {recommendkor.map((item) => (
          <RecommendationCard key={item.id} item={item} />
        ))}
      </section>

        <div className="mt-8"></div>

        {/* ENG */}
        <RecommendationCardList data={recommendeng} />

    </main>
  );
}