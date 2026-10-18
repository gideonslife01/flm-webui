'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const LINKS = [
  { label: '게임/Game', href: '/hmenu/game' },
  { label: '음악/Music', href: '/hmenu/music' },
  { label: '프로필/Profile', href: '/hmenu/profile' },
  { label: '문의/Help', href: '/hmenu/help' },
]

export function NavMenu() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-[100]">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="/hmenu" className="text-xl font-black">freelifemakers</a>
        
        {/** PC */}
        <nav className="hidden md:flex gap-6">
          {LINKS.map(l => (
            <Link 
              key={l.href} 
              href={l.href}
              className={`text-sm font-medium ${pathname === l.href ? 'text-black font-bold underline' : 'text-gray-600'}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        
        <div className="flex items-center gap-3">
          <button
            type="button"
            onPointerUp={() => setMobileOpen(v => !v)} // onClick 대신 onPointerUp(모바일에 최적) / Use onPointerUp instead of onClick (optimized for mobile)
            // mobile 
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-full bg-gray-100 active:bg-gray-200 touch-manipulation"
          >
            <span className="text-xl">{mobileOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-t px-6 py-6 flex flex-col gap-2 shadow-xl">
          <div className="text-xs text-green-600 bg-green-50 p-2 rounded">Menu</div>
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="py-3 font-medium">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
