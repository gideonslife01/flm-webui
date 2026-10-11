'use client'

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold">
      {children}
    </button>
  )
}