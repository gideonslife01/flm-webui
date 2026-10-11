'use client'
import { useState } from 'react'

const OPTIONS = [
  { value: '9s', label: '9S' },
  { value: '2b', label: '2B' },
  { value: '4b', label: '4B' },
]

export function Dropdown() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(OPTIONS[0])

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm"
      >
        {value.label} <span className={open? 'rotate-180' : ''}>▼</span>
      </button>
      {open && (
        <div className="absolute mt-2 w-full bg-white border rounded-xl shadow-lg overflow-hidden">
          {OPTIONS.map(opt => (
            <button key={opt.value} onClick={() => { setValue(opt); setOpen(false) }} className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50">
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}