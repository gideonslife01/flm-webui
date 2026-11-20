import Image from 'next/image';
import { Play } from 'lucide-react'; // 아이콘 라이브러리 / icons library

interface MediaCardProps {
  title: string;
  description?: string;
  thumbnailUrl: string;
  videoUrl?: string; // mp4,youtube ID
  tags?: string[];
}

export function MediaCard({ title, description, thumbnailUrl, videoUrl, tags }: MediaCardProps) {

  // 유튜브 링크인지 확인하는 함수
  // Function to check if it is a YouTube link
  const isYouTube = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 transition-transform hover:scale-[1.02]">

      {/* 미디어 영역 (이미지 또는 비디오) / Media area (image or video)*/}
      <div className="relative aspect-video bg-black">
        {videoUrl ? (
          isYouTube(videoUrl) ? (
                     // 유튜브 링크인 경우: iframe 사용
                     // For YouTube links: use an iframe
                     <iframe
                       src={`${videoUrl.replace('watch?v=', 'embed/').replace('live/', 'embed/').split('?')[0]}`}
                       className="w-full h-full"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; {1000,1000000}"
                       allowFullScreen
                       title={title}
                     ></iframe>
                   ) : (
                     // 일반 비디오 파일인 경우: <video> 태그 사용
                     // For standard video files: use the <video> tag
                     <video
                       className="w-full h-full object-cover"
                       controls
                       poster={thumbnailUrl}
                     >
                       <source src={videoUrl} type="video/mp4" />
                       Your browser does not support the video tag.
                     </video>
          )//isYouTube

      ) : (
          // 비디오가 없을 경우 (이미지 썸네일)
          // When there is no video (image thumbnail)
          <div className="relative w-full h-full">
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
              />

            {/* 재생 버튼 오버레이 / Play button overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="bg-white/30 p-3 rounded-full backdrop-blur-sm">
                <Play className="w-8 h-8 text-white fill-white" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 정보 영역 / Information Area */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        {description && <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>}

        { /* 태그 영역 / Tags Area */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tags && tags.map((tag, i) => (
            <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
