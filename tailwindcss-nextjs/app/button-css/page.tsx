'use client'

import { useState } from 'react'

export default function Page() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  }

  return (
    <>
      <main className="wrapper">
        <button
          onClick={handleClick}
          className="btn-primary"
        >
          {clicked ? '클릭됨/Clicked 🎉' : 'CSS 시작하기/Start'}
        </button>
        <p className="helper">Next.js + Pure CSS</p>
      </main>

      <style>{`
        /* 컨테이너 / Container */
        .wrapper {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #f9fafb;
        }
        /* 버튼 기본 / Button Basic */
        .btn-primary {
          padding: 12px 24px;
          background-color: #3b82f6;
          color: white;
          border-radius: 12px;
          font-weight: 700;
          font-size: 16px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: all 0.2s ease;
        }
        /* 버튼 마우스 오버 / Button mouseover */
        .btn-primary:hover {
          background-color: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 6px 10px rgba(0,0,0,0.15);
        }
        /* 버튼 클릭 / Button active */
        .btn-primary:active {
          transform: scale(0.95);
        }
        /* 버튼 하단 텍스트 / Text below the button */
        .helper {
          margin-top: 16px;
          font-size: 14px;
          color: #9ca3af;
        }
      `}</style>
    </>
  )
}