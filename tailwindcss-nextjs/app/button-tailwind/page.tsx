'use client'

import { useState } from 'react'

export default function Page() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-blue-500 text-white rounded-xl font-bold shadow-md hover:bg-blue-600 hover:-translate-y-0.5 active:scale-95 transition-all"
      >
        {clicked ? '클릭됨/Clicked 🎉' : 'tailwind 시작하기/Start'}
      </button>
      <p className="mt-4 text-sm text-gray-400">Next.js + Tailwind CSS</p>
    </main>
  )
}