// app/hamburger-fullscreen/music/page.tsx

import Link from 'next/link'
export default function GamePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Link href="/hamburger-fullscreen" className="text-sm text-gray-400">← 돌아가기 / Go back</Link>
      <h1 className="text-4xl font-black mt-4">음악 / Music</h1>
      <p className="text-gray-500 mt-2">음악페이지 / Music Page</p>
    </div>
  )
}