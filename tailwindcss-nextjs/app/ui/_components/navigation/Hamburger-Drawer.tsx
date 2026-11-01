'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export function DrawerMenu() {
  const [open, setOpen] = useState(false)    // 메뉴 열림,닫힘 / Menu open,close
  const [render, setRender] = useState(false) // 메뉴가 화면에 그려져있는지 확인 / Check if the menu is rendered on the screen

  useEffect(() => {
    if (open) {
      setRender(true)
      document.body.style.overflow = 'hidden'
    } else {
      // 메뉴 닫을때 , 0.3초 후에 setRender함수 실행 
      // When closing the menu, execute the `setRender` function after 0.3 seconds.
      const t = setTimeout(() => setRender(false), 300)
      document.body.style.overflow = ''
      return () => clearTimeout(t)
    }
  }, [open])

  return (
    <>
      <header className="w-full bg-white border-b sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link href="/hamburger-drawer" className="text-xl font-black">freelifemakers</Link>
          <button onClick={() => setOpen(true)} className="w-11 h-11 bg-black text-white rounded-full">☰</button>
        </div>
      </header>

      {render && (
        <>
          <div
            className={`fixed inset-0 bg-black/50 z-40 ${open ? 'animate-fade-in' : 'animate-fade-out'}`}
            onClick={() => setOpen(false)}
          />

          {/** 오른쪽에서 메뉴 나오는 설정 / Setting to make the menu appear from the right */}
        <div className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 shadow-2xl flex flex-col ${open ? 'animate-slide-in' : 'animate-slide-out'}`}>
          
          {/** 왼쪽에서 메뉴 나오는 설정 / Setting to make the menu appear from the left */}
          {/* <div className={`fixed top-0 left-0 h-full w-[300px] bg-white z-50 shadow-2xl flex flex-col ${open ? 'animate-slide-in' : 'animate-slide-out'}`}> */}

            <div className="h-16 px-6 flex items-center justify-between border-b">
              <span className="font-bold">메뉴/Menu</span>
              <button onClick={() => setOpen(false)} className="w-9 h-9 bg-gray-100 rounded-full">✕</button>
            </div>
            <nav className="flex-1 p-6 flex flex-col gap-2">
              <Link href="/hamburger-drawer/game" className="py-3 px-4 rounded-xl hover:bg-gray-50">게임/Game</Link>
              <Link href="/hamburger-drawer/music" className="py-3 px-4 rounded-xl hover:bg-gray-50">음악/Music</Link>
            </nav>

        </div>
        </>
      )}
      <style>{`
        /* 들어갈 때 - 오른쪽 / When entering from the right */
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        /* 들어갈 때 - 왼쪽 / When entering from the left */
        /*@keyframes slide-in {
           from { transform: translateX(-100%); }
           to { transform: translateX(0); }
        }*/

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* 나갈 때-오른쪽 / When exiting to the right */
        @keyframes slide-out {
          from { transform: translateX(0); }
          to { transform: translateX(100%); }
        }

        /* 나갈 때-왼쪽 / When exiting to the left */
       /* @keyframes slide-out {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        } */
    
        @keyframes fade-out {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        .animate-slide-in { animation: slide-in 0.3s ease-out forwards; }
        .animate-slide-out { animation: slide-out 0.3s ease-out forwards; }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-fade-out { animation: fade-out 0.3s ease-out forwards; }
      `}</style>


    </>
  )
}