'use client'
import { useState } from 'react'

const OPTIONS = [
  { value: '9s', label: '9S' },
  { value: '2b', label: '2B' },
  { value: '4b', label: '4B' },
]

export default function Page() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(OPTIONS[0])

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-base font-bold">드롭다운/Drop down(Tailwindcss)</h2>
        <p className="text-sm text-gray-400 mt-1">freelifemakers</p>

        <div className="mt-6 flex flex-col gap-1.5">
          <label className="text-sm font-bold text-gray-700">직업 / Role</label>

          {/* Select */}
          <div className="relative">
            {/* 1. 버튼 - 항상 보이는 부분 / Button - Always visible part */}
            <button
              onClick={() => setOpen(!open)}
              className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            >
              <span>{value.label}</span>
              <span className={`transition-transform ${open? 'rotate-180' : ''}`}>▼</span>
            </button>

            {/* 2. 리스트 - open일 때만 보이는 부분 / List – section visible only when open */}
            {open && (
              <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                {OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setValue(opt)
                      setOpen(false)
                    }}
                    className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${
                      value.value === opt.value? 'bg-blue-50 text-blue-600 font-bold' : 'text-gray-700'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <p className="text-xs text-gray-400 mt-2">선택된 값/Selected Value : {value.value}</p>
        </div>
      </div>
    </main>
  )
}