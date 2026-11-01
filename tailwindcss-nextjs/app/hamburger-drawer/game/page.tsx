import { DrawerMenu } from '../../ui/_components/navigation/Hamburger-Drawer'

export default function DrawerPage() {
  return (
    <>
      <DrawerMenu />
      <main className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-bold">게임페이지 메뉴 / Game Page Menu</h1>
        <p className="text-gray-500 mt-1">PC, 모바일 둘 다 동일한 방식 / The same method applies to both PC and mobile..</p>
      </main>
    </>
  )
}