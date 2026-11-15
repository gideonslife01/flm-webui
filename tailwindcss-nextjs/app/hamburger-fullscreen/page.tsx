'use client'
import { HamburgerFullscreen } from '../ui/_components/navigation/Hamburger-Fullscreen'

export default function HamburgerFullscreenPage() {
  return (
    <div>
      <HamburgerFullscreen />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-black mb-4">풀 스크린메뉴 / Fullscreen Menu</h1>
        <p className="text-gray-500">화면 전체를 덮는 햄버거 메뉴입니다.</p>
        <p className="text-gray-500 mt-2">This is a hamburger menu that covers the entire screen.</p>
      </main>
    </div>
  )
}