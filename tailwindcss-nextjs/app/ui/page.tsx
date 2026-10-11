// compoents
import { Button }  from './_components/button'
import { Dropdown } from './_components/dropdown';

export default function UIPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6">
        <h1 className="text-xl font-bold">UI 라이브러리 / UI Library</h1>

        <Dropdown />
        <Button>저장하기/Save</Button>
      </div>
    </main>
  )
}