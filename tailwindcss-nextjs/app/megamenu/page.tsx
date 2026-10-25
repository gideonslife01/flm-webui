import { MegaMenu } from '../ui/_components/navigation/MegaMenu'

export default function MegaMenuPage() {
  return (
    <>
      <MegaMenu />
      <main className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl font-bold">Mega Menu / 메가메뉴</h1>
        <p className="text-gray-500 mt-2">메뉴에 마우스 올리면 메뉴 패널이 펼쳐짐,PC버전</p>
        <p className="text-gray-500 mt-2">Hover your mouse over the menu to expand the menu panel, PC version</p>
        <p className="text-gray-500 mt-1">모바일에서는 햄버거 메뉴 안에 카테고리별로 펼쳐짐.</p>
        <p className="text-gray-500 mt-1">On mobile, categories are displayed in an expandable format within the hamburger menu.</p>
      </main>
    </>
  )
}