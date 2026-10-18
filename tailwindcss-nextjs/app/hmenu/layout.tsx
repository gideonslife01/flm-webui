import { NavMenu } from '../ui/_components/navigation/HorizontalNavMenu'

export default function HmenuLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMenu />
      <main className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          {children}
        </div>
      </main>
    </>
  )
}