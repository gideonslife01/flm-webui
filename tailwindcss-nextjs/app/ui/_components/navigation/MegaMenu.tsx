'use client'
import Link from 'next/link'
import { useState } from 'react'

const MEGA_DATA = [
  {
    title: '카테코리/Category',
    id: 'category',
    columns: [
      {
        heading: '게임/Game',
        links: [
          { label: '2B', desc: 'Nier:Automata', href: '/megamenu/2b' },
          { label: '9S', desc: 'Nier:Automata', href: '/megamenu/branding' },
          { label: '아서모건/Arthor Morgan', desc: 'Red Dead Redemption2', href: '/megamenu/branding' },
        ],
      },
      {
        heading: '음악/Music',
        links: [
          { label: 'Spotify', desc: 'Spotify', href: '/megamenu/web' },
          { label: 'Apple Music', desc: 'Apple Music', href: '/megamenu/ui' },
        ],
      },
      {
        heading: '개발/Development',
        links: [
          { label: '코틀린/Kotlin', desc: 'Android', href: '/megamenu/sns' },
          { label: '스위프트/Swift', desc: 'IOS', href: '/megamenu/seo' },
        ],
      },
    ],
    banner: { title: 'Freelifemakers 1.2 ', desc: '새로운 UI 라이브러리/New UI Library', href: '/megamenu/new' },
  },
  { title: 'SNS', href: 'https://freelifemakers.org', id: 'sns' },
  { title: '웹사이트/website', href: 'https://freelifemakers.org', id: 'website' },
]

export function MegaMenu() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b sticky top-0 z-[100]">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/megamenu" className="text-xl font-black">freelifemakers</Link>

        {/* PC - 메가메뉴 메인 / Mega menu main */}
        <nav className="hidden md:flex items-center h-16">
          {MEGA_DATA.map((item) => (
            <div
              key={item.id}
              className="h-16 flex items-center"
              onMouseEnter={() => setOpenId(item.id)}
              onMouseLeave={() => setOpenId(null)}
            >
              {item.columns ? (
                <button className={`px-4 text-sm font-medium ${openId === item.id ? 'text-black font-bold' : 'text-gray-600'}`}>
                  {item.title} {openId === item.id ? '▲' : '▼'}
                </button>
              ) : (
                <Link href={item.href!} className="px-4 text-sm font-medium text-gray-600">
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/megamenu/start" className="hidden md:block bg-black text-white px-4 py-2 rounded-full text-sm font-bold">시작하기/Start</Link>
          <button onPointerUp={() => setMobileOpen(v => !v)} className="md:hidden w-11 h-11 bg-gray-100 rounded-full">
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* 메가메뉴 패널 / Mega Menu Panel - PC */}
      {openId && MEGA_DATA.find(i => i.id === openId)?.columns && (
        <div
          className="hidden md:block absolute left-0 w-full bg-white border-b shadow-xl"
          onMouseEnter={() => setOpenId(openId)}
          onMouseLeave={() => setOpenId(null)}
        >
          <div className="mx-auto max-w-6xl px-6 py-8 grid grid-cols-4 gap-8">
            {MEGA_DATA.find(i => i.id === openId)!.columns!.map((col) => (
              <div key={col.heading}>
                <h4 className="font-bold text-sm mb-3">{col.heading}</h4>
                <div className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <Link key={link.label} href={link.href} className="group">
                      <div className="text-sm font-medium group-hover:text-black">{link.label}</div>
                      <div className="text-xs text-gray-400">{link.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            {/* 배너 영역 / Banner area */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-sm font-bold">{MEGA_DATA.find(i => i.id === openId)!.banner!.title}</div>
              <div className="text-xs text-gray-500 mt-1">{MEGA_DATA.find(i => i.id === openId)!.banner!.desc}</div>
              <Link href={MEGA_DATA.find(i => i.id === openId)!.banner!.href} className="mt-4 inline-block text-xs bg-black text-white px-3 py-1.5 rounded-full">보러가기</Link>
            </div>
          </div>
        </div>
      )}

      {/* 모바일 메뉴 / Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-t px-6 py-6 flex flex-col gap-6 shadow-xl">
          {MEGA_DATA.map(item => (
            <div key={item.id}>
              {item.columns ? (
                <>
                  <div className="font-bold mb-2">{item.title}</div>
                  <div className="ml-4 flex flex-col gap-2">
                    {item.columns.flatMap(c => c.links).map(l => (
                      <Link key={l.label} href={l.href} onClick={() => setMobileOpen(false)} className="text-sm text-gray-600 py-1">{l.label}</Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={item.href!} onClick={() => setMobileOpen(false)} className="font-bold">{item.title}</Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  )
}