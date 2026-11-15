// app/hamburger-fullscreen/game/page.tsx

import Link from 'next/link'
export default function GamePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Link href="/hamburger-fullscreen" className="text-sm text-gray-400">← 돌아가기 / Go back</Link>
      <h1 className="text-4xl font-black mt-4">게임 / Game</h1>
      <p className="text-gray-500 mt-2">게임페이지 / Game Page</p>
    </div>
  )
}