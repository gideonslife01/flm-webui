// UI Library List

export default function UIPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6">
        <h1 className="text-xl font-bold">📋 UI Library List</h1>
        <label className="font-bold"> - Components</label>
        <a href="/button-tailwind" target="_blank">Button</a>
        <a href="/dropdown" target="_blank">Dropdown</a>
        <a href="/form-tailwind" target="_blank">Form</a>
        <a href="/checkbox" target="_blank">Check Box</a>

        <label className="font-bold"> - Navigation</label>
        <a href="/megamenu" target="_blank">Mega Menu</a>
        <a href="/tabmenu" target="_blank">Tab Menu</a>
        <a href="/hmenu" target="_blank">Horizontal Nav Menu</a>
        <a href="/hamburger-drawer" target="_blank">Hanburger Drawer Menu</a>
        <a href="/hamburger-fullscreen" target="_blank">Hanburger Fullscreen Menu</a>

        <label className="font-bold"> - Card</label>
        <a href="/cards/blogcard" target="_blank">Blog Card</a>
        <a href="/cards/categorycard" target="_blank">Category Card</a>
        <a href="/cards/eventbannercard" target="_blank">Event Banner Card</a>
        <a href="/cards/hovercard" target="_blank">Hover Card</a>
        <a href="/cards/mediacard" target="_blank">Media Card</a>
        <a href="/cards/productcard" target="_blank">Product Card</a>
        <a href="/cards/recommendationcard" target="_blank">Recommendation Card</a>
        <a href="/cards/servicecard" target="_blank">Service Card</a>
        <a href="/cards/widgetcard" target="_blank">Widget Card</a>
      </div>
    </main>
  )
}