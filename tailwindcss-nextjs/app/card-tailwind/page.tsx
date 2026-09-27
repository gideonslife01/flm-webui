'use client'
import { useState } from 'react'

export default function Page() {
  const [liked, setLiked] = useState(false)

  return (

    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      {/* 카드 시작 / Start Card */}
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* 이미지 영역 / Image Area */}
        <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
          <span className="text-5xl">🚀</span>
        </div>

        {/* 텍스트 영역 / Text area */}
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Freelifemakers</h2>
            <span className="px-2 py-1 text-xs font-bold bg-blue-100 text-blue-600 rounded-full">NEW</span>
          </div>
          <p className="mt-2 text-sm text-gray-400">
            Next.js + Tailwind로 만든 소개 카드입니다.<br></br>
            This is an introductory card built with Next.js and Tailwind.
          </p>


          <div className="mt-6 flex gap-3">
            <button
              onClick={() => setLiked(!liked)}
              className={`w-full py-3 rounded-xl font-bold transition-all active:scale-95 ${liked ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {liked ? '❤️ 좋아요/like' : '🤍 좋아요/like'}
            </button>
            <button className="w-full py-3 bg-blue-500 text-white rounded-xl font-bold shadow-md hover:bg-blue-600 hover:-translate-y-0.5 transition-all active:scale-95">
              시작하기 / Start
            </button>
          </div>

          {/* 버튼 / Button */}
          {/* <div className="mt-6 flex-col gap-3">
            <button
              onClick={() => setLiked(!liked)}
              className={`w-full py-3 rounded-xl font-bold transition-all active:scale-95 ${liked ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {liked ? '❤️ 좋아요/like' : '🤍 좋아요/like'}
            </button>
            <button className="w-full py-3 bg-blue-500 text-white rounded-xl font-bold shadow-md hover:bg-blue-600 hover:-translate-y-0.5 transition-all active:scale-95">
              시작하기 / Start
            </button>
          </div> */}

          {/* 버튼 flex / Button flex */}
          {/* <div className="mt-6 flex">
            <button
              onClick={() => setLiked(!liked)}
              className={`w-full py-3  ${liked ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {liked ? '❤️ 좋아요/like' : '🤍 좋아요/like'}
            </button>
            <button className="w-full py-3 bg-blue-500 ">
              시작하기 / Start
            </button>
          </div> */}
          
        </div>
      </div>
      {/* 카드 끝 / card end */}
    </main>
    
  )
}