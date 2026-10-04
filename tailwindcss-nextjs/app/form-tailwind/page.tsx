'use client'
import { useState } from 'react'

export default function Page() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

{/* flex : items-center justify-center  */}
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold">문의하기/Send Message-(Tailwind)</h2>
        <p className="text-sm text-gray-400 mt-1">메시지 보내기/Send Message</p>

        {/* 폼 시작 / Form Start */}
        <div className="mt-6 flex flex-col gap-4">
          {/* 이름 / Name Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold text-gray-700">이름/Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({...form, name: e.target.value})}
              placeholder="홍길동/John Doe"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>
          {/* 이메일 / Email Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold text-gray-700">이메일/Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
              placeholder="example@email.com"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>
          {/* 메시지 / Message Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold text-gray-700">메시지/Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({...form, message: e.target.value})}
              placeholder="메시지를 입력하세요/Please enter your message..."
              rows={4}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
            />
          </div>

          <button 
            onClick={() => alert(`보냄/Sent! \n${form.name} / ${form.email}`)}
            className="mt-2 w-full py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-600 active:scale-95 transition-all"
          >
            보내기/Send
          </button>
        </div>
      </div>
    </main>
  )
}