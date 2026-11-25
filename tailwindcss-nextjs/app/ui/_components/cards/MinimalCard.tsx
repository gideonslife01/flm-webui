//app/ui/_components/cards/MinimalCard.tsx

import Image from 'next/image';

export const pinskor = [
  {
    title: '따뜻한 거실 인테리어',
    image: 'https://picsum.photos/seed/minimal-living/600/900',
    tall: true,
  },
  {
    title: '감성적인 카페 공간',
    image: 'https://picsum.photos/seed/minimal-cafe/600/700',
  },
  {
    title: '숲속의 조용한 공간',
    image: 'https://picsum.photos/seed/minimal-forest/600/850',
    tall: true,
  },
  {
    title: '미니멀한 작업 공간',
    image: 'https://picsum.photos/seed/minimal-desk/600/650',
  },
  {
    title: '모던한 주방 디자인',
    image: 'https://picsum.photos/seed/minimal-kitchen/600/800',
    tall: true,
  },
  {
    title: '아늑한 침실 아이디어',
    image: 'https://picsum.photos/seed/minimal-bedroom/600/700',
  },
];

export const pinseng = [
  {
    title: 'Cozy Living Room Interior',
    image: 'https://picsum.photos/seed/minimal-living/600/900',
    tall: true,
  },
  {
    title: 'An atmospheric café space',
    image: 'https://picsum.photos/seed/minimal-cafe/600/700',
  },
  {
    title: 'A quiet space in the forest',
    image: 'https://picsum.photos/seed/minimal-forest/600/850',
    tall: true,
  },
  {
    title: 'Minimalist workspace',
    image: 'https://picsum.photos/seed/minimal-desk/600/650',
  },
  {
    title: 'Modern Kitchen Design',
    image: 'https://picsum.photos/seed/minimal-kitchen/600/800',
    tall: true,
  },
  {
    title: 'Cozy Bedroom Ideas',
    image: 'https://picsum.photos/seed/minimal-bedroom/600/700',
  },
    {
    title: 'Cozy Bedroom Ideas0',
    image: 'https://picsum.photos/seed/minimal-bedroom/600/700',
    tall: true,
  },
];
// for MinimalCard
export interface MinimalCardProps {
  title: string;
  image: string;
  href: string;
  tall?: boolean;
}

// for MinimalCardList
export interface MinimalCardData {
  title: string;
  image: string;
  tall?: boolean;
}

// for MinimalCardList
export interface MinimalCardListProps {
    pindata: MinimalCardData[];
}

export function MinimalCard({
  title,
  image,
  href,
  tall = false,
}: MinimalCardProps) {
  return (
    <a
      href={href}
      className="group block break-inside-avoid"
    >
      <article className="overflow-hidden rounded-2xl bg-gray-100">
        <div className={tall ? 'relative h-96' : 'relative h-64'}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>

        <h2 className="p-3 text-sm font-semibold leading-5 text-gray-950">
          {title}
        </h2>
      </article>
    </a>
  );
}

export function MinimalCardList({ pindata } : MinimalCardListProps){

    return(
        <section className="columns-1 gap-5 md:columns-2 lg:columns-3 xl:columns-3">
            {pindata.map((pin) => (
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
    );
}