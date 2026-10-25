import { MegaMenu } from '../../ui/_components/navigation/MegaMenu'

export default function Page() {
  return (
    <>
      <MegaMenu />
      <main className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-3xl font-bold">2B</h1>
        <p className="text-gray-500 mt-2">여기는 /megamenu/2B 페이지.</p>
        <p className="text-gray-500 mt-2">This is the /megamenu/2B page.</p>
      </main>
    </>
  )
}