import { MediaCard } from '../../ui/_components/cards/MediaCard';

export default function Page() {
  return (
    <main className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-8">최신 동영상 리스트 / List of Latest Videos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* 이미지 썸네일이 있는 경우 / If an image thumbnail is present */}
        <MediaCard
          title="Next.js로 만드는 인터랙티브 웹"
          description="Next.js의 강력한 기능들을 활용하여 멋진 웹사이트를 만드는 방법을 배워보세요."
          thumbnailUrl="https://picsum.photos/seed/picsum/200/300"
          tags={['Next.js', 'React', 'WebDev']}
        />

        {/* 실제 비디오 파일이 있는 경우 / If the actual video file exists */}
        <MediaCard
          title="자연의 소리 (ASMR)"
          description="편안하게 감상할 수 있는 숲속의 소리입니다."
          thumbnailUrl="https://picsum.photos/seed/picsum/200/300"
          videoUrl="https://download.samplelib.com/mp4/sample-5s.mp4"
          tags={['Nature', 'Relax']}
        />

        {/* 유투브 영상 / Youtube Video */}
        <MediaCard
          title="Nier Automata"
          description="Nier Automata Live 2-5"
          thumbnailUrl="https://picsum.photos/seed/picsum/200/300"
          videoUrl="https://www.youtube.com/live/OrJToVfFcgU?si=SOnWvd_9L1iwdg9x"
          tags={['NierAutomata', '9S','2B']}
        />

      </div>
    </main>
  );
}
