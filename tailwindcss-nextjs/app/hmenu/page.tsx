'use client'
import { Button } from '../ui/_components/button'

export default function MainPage() {
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl font-bold">HorizontalNavMenu</h1>
          <p className="text-gray-500 mt-2">기본 네비게이션 메뉴입니다.</p>
          <p className="text-gray-500 mt-2">This is the default navigation menu.</p>
          <div className="flex gap-x-4 m-4">
            <div>
            <Button onClick={() => alert('button test')} >Button test</Button>
            </div>
            <div>
            <Button onClick={() => console.log('Game Start')}>Game STart</Button>
            </div>
            </div>
        </div>
      </main>
    </>
  )
}