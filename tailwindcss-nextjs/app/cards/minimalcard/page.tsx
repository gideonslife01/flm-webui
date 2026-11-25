// app/cards/minimalcard/page.tsx

import { MinimalCard ,MinimalCardList ,pinskor ,pinseng} from '../../ui/_components/cards/MinimalCard';

export default function Page() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-20">
      <section className="mb-12">
        <h1 className="text-2xl font-bold text-blue-600">
          Minimal Card
        </h1>
        <p className="mt-2 text-gray-500">
          미니멀 카드
        </p>
      </section>

     {/** MinimalCard - KOR */}
      <section className="columns-1 gap-5 md:columns-2 lg:columns-3  xl:columns-3">
        {pinskor.map((pin) => (
          <div key={pin.title} className="mb-5">
            <MinimalCard
              title={pin.title}
              image={pin.image}
              href={`/ideas/${pin.title}`}
              tall={pin.tall}
            />
          </div>
        ))}
      </section>

      {/** MinimalCardList - ENG */}
      <MinimalCardList pindata={pinseng} />
   
    </main>
  );
}