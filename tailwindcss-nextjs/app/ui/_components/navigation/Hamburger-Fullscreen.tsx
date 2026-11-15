'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export function HamburgerFullscreen() {
  const [open, setOpen] = useState(false)
  const [render, setRender] = useState(false)

  useEffect(() => {
    if (open) {
      setRender(true) // 풀스크린 메뉴 오픈 / Open full-screen menu
      document.body.style.overflow = 'hidden' // 페이지 스크롤 막기 / Prevent page scrolling
    } else {
      const t = setTimeout(() => setRender(false), 400) // 풀스크린 메뉴 닫힘 / Full-screen menu closed
      document.body.style.overflow = ''      // 페이지 스크롤 활성화 / Enable page scrolling
      return () => clearTimeout(t)
    }
  }, [open])

  const menus = [
    { href: '/hamburger-fullscreen/game', ko: '게임', en: 'Game' },
    { href: '/hamburger-fullscreen/music', ko: '음악', en: 'Music' },
    { href: '/hamburger-fullscreen/profile', ko: '프로필', en: 'Profile' },
    { href: '/hamburger-fullscreen/help', ko: '도움말', en: 'Help' },
  ]

  return (
    <>
      {/** 햄버거 메뉴 영역 / Hamburger menu area */}
      <header className="w-full bg-white border-b sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link href="/hamburger-fullscreen" className="text-xl font-black">freelifemakers</Link>
          <button onClick={() => setOpen(true)} className="w-11 h-11 bg-black text-white rounded-full text-lg">☰</button>
        </div>
      </header>

      {/** 풀스크린 메뉴 영역 / Full-screen menu area */}
      {render && (
        <div className={`fixed inset-0 bg-white z-50 flex flex-col ${open ? 'animate-full-in' : 'animate-full-out'}`}>
          <div className="mx-auto w-full max-w-6xl px-6 h-16 flex items-center justify-between border-b">
            <Link href="/hamburger-fullscreen" className="text-xl font-black">freelifemakers</Link>
            <button onClick={() => setOpen(false)} className="w-11 h-11 bg-black text-white rounded-full text-lg">✕</button>
          </div>

          <nav className="flex-1 mx-auto w-full max-w-6xl px-6 py-12 flex flex-col gap-2">
            {menus.map((m, i) => (
              <Link
                key={m.href}
                href={m.href}
                onClick={() => setOpen(false)}
                className={`text-5xl font-black tracking-tight py-4 hover:opacity-30 transition-opacity ${open ? 'animate-link-in' : 'animate-link-out'}`}
                style={{ animationDelay: open ? `${i * 80}ms` : '0ms' }}
              >
                {m.ko} <span className="text-2xl font-normal text-gray-400 ml-2">{m.en}</span>
              </Link>
            ))}
          </nav>

          <div className="mx-auto w-full max-w-6xl px-6 h-20 flex items-center text-sm text-gray-400 border-t">
            © freelifemakers / Fullscreen Menu
          </div>
        </div>
      )}

      <style>{`
        @keyframes full-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes full-out {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(20px); }
        }
        @keyframes link-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-full-in { animation: full-in 0.4s ease-out forwards; }
        .animate-full-out { animation: full-out 0.3s ease-in forwards; }
        .animate-link-in { opacity: 0; animation: link-in 0.5s ease-out forwards; }
        .animate-link-out { opacity: 0; }
      `}</style>
    </>
  )
}