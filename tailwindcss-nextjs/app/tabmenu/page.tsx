// app/tabmenu/page.tsx

import { TabMenu } from '../ui/_components/navigation/TabMenu';

export default function Page() {
  return (
    <>
    <TabMenu />
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-2xl font-bold mb-4">Category Selection</h1>
        <h1 className="text-4xl font-bold">Tab Menu / 탭 메뉴</h1>
        <p className="text-gray-500 mt-2">tab menu / 탭 메뉴</p>
    </main>
    </>
  );
}