import { DrawerMenu } from '../ui/_components/navigation/Hamburger-Drawer'

export default function DrawerPage() {
  return (
    <>
      <DrawerMenu />
      <main className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-bold">햄버거+드로어 메뉴 / Hamburger+Drawer Menu</h1>
        <p className="text-gray-500 mt-1">PC, 모바일 둘 다 동일한 방식 / The same method applies to both PC and mobile..</p>
      </main>
    </>
  )
}