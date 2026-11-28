// compoents
import { Checkbox } from '../ui/_components/checkbox';

export default function UIPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6">
        <h1 className="text-xl font-bold">체크 박스 / Check Box</h1>

        {/** CheckBox */}
        <Checkbox lang="kor" />
        <Checkbox lang="eng" />
      </div>
    </main>
  )
}