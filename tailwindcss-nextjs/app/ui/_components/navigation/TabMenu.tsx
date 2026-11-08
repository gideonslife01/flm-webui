"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TABS = [
  { label: 'Home', href: '/tabmenu' },
  { label: 'Game', href: '/tabmenu/game' },
  { label: 'Music', href: '/tabmenu/music' },
  { label: 'Profile', href: '/tabmenu/profile' },
  { label: 'Help', href: '/tabmenu/help' },
]

export function TabMenu() {
  const pathname = usePathname()

  return (
    <div className="w-full border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-6 py-2 flex items-center justify-between">

        {/* 왼쪽 탭 영역 */}
        <div className="flex gap-8">
          {TABS.map((tab) => {
            const isActive = pathname === tab.href
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`py-4 text-sm font-medium transition-all duration-200 border-b-2 ${
                  isActive 
                    ? 'border-black text-black font-bold' 
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab.label}
              </Link>
            )
          })}
        </div>

        {/* 오른쪽 로고,링크 영역 / Right-hand logo and link area */}
        {/* <Link 
          href="/megamenu" 
          className="py-4 text-xl font-medium font-black pr-4"
        >
          freelifemakers
        </Link> */}
      </div>
    </div>
  )
}