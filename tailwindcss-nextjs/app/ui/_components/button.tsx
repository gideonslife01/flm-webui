// update : 26.10.18

'use client'
type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      {...props}
      className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold active:bg-blue-700 touch-manipulation"
    >
      {children}
    </button>
  )
}
