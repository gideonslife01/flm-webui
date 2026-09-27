'use client'
import { useState } from 'react'

export default function Page() {
  const [liked, setLiked] = useState(false)

  return (
    <>
      <main className="page-center">
        {/* 카드 시작 / Start Card */}
        <div className="card">

          {/* 이미지 영역 / Image Area */}
          <div className="card-image">
            <span className="card-emoji">🚀</span>
          </div>

          {/* 텍스트 영역 / Text area */}
          <div className="card-body">
            <div className="card-header">
              <h2 className="card-title">Freelifemakers</h2>
              <span className="badge">NEW</span>
            </div>
            
            <p className="card-desc">
              Next.js + CSS로 만든 소개 카드입니다.<br></br>
              This is an introduction card created with Next.js and CSS.
            </p>

            {/* 버튼 / Button */}
            <div className="card-actions">
              <button
                onClick={() => setLiked(!liked)}
                className={`btn ${liked ? 'btn-like-active' : 'btn-like'}`}
              >
                {liked ? '❤️ 좋아요/like' : '🤍 좋아요/like'}
              </button>
              <button className="btn btn-primary">
                시작하기
              </button>
            </div>
            
          </div>

        </div>{/* 카드 끝 / Card End */}
      </main>

      <style>{`

        /* 전체 가운데 정렬 / Center-align everything */
        .page-center {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f9fafb;
          padding: 16px;
        }
        /* 카드 본체 / Card body */
        .card {
          width: 100%;
          max-width: 384px; /* max-w-sm = 384px */
          background-color: white;
          border-radius: 16px; /* rounded-2xl */
          box-shadow: 0 10px 15px rgba(0,0,0,0.1);
          overflow: hidden;
        }
        .card-image {
          height: 192px; /* h-48 = 192px */
          background: linear-gradient(to bottom right, #60a5fa, #a855f7);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card-emoji {
          font-size: 48px;
        }
        .card-body {
          padding: 24px; /* p-6 */
        }
        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .card-title {
          font-size: 20px; /* text-xl */
          font-weight: 700;
          color: #111827;
          margin: 0;
        }
        .badge {
          padding: 4px 8px;
          font-size: 12px;
          font-weight: 700;
          background-color: #dbeafe;
          color: #2563eb;
          border-radius: 9999px;
        }
        .card-desc {
          margin-top: 8px;
          font-size: 14px; /* text-sm */
          color: #9ca3af; /* text-gray-400 */
        }
        .card-actions {
          margin-top: 24px;
          display: flex;
          gap: 12px;
        }
        /* 버튼 공통 / Common Button */
        .btn {
          flex: 1;
          padding: 12px 0;
          border-radius: 12px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn:active {
          transform: scale(0.95);
        }
        .btn-like {
          background-color: #f3f4f6;
          color: #374151;
        }
        .btn-like:hover {
          background-color: #e5e7eb;
        }
        .btn-like-active {
          background-color: #ef4444;
          color: white;
        }
        .btn-primary {
          background-color: #3b82f6;
          color: white;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .btn-primary:hover {
          background-color: #2563eb;
          transform: translateY(-2px);
        }
      `}</style>
    </>
  )
}