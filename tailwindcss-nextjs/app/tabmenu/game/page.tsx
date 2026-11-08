// app/tabmenu/page.tsx

import { TabMenu } from '../../ui/_components/navigation/TabMenu';

export default function Page() {
  return (
    <>
    <TabMenu />
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-2xl font-bold mb-4">Category Selection</h1>
        <h1 className="text-4xl font-bold">Game / 게임</h1>
        <p className="text-gray-500 mt-2">게임페이지 / Game Page</p>
    </main>
    </>
  );
}