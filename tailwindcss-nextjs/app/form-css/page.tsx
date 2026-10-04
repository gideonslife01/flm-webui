'use client'
import { useState } from 'react'

export default function Page() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  return (
    <>
      <main className="form-page">
        {/* flex : items-center justify-center - 화면 가운데 정렬 */}
        <div className="form-card">
          <h2 className="form-title">문의하기/Send Message-(CSS)</h2>
          <p className="form-subtitle">메시지 보내기/Send Message</p>

          <div className="form-fields">
            {/* 이름 / Name Input */}
            <div className="field">
              <label className="label">이름/Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                placeholder="홍길동/John Doe"
                className="input"
              />
            </div>
            {/* 이메일 / Email Input */}
            <div className="field">
              <label className="label">이메일/Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                placeholder="example@email.com"
                className="input"
              />
            </div>
            {/* 메시지 / Message Input */}
            <div className="field">
              <label className="label">메시지/Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({...form, message: e.target.value})}
                placeholder="메시지를 입력하세요/Please enter your message..."
                rows={4}
                className="input textarea"
              />
            </div>

            <button 
              onClick={() => alert(`보냄/Sent! \n${form.name} / ${form.email}`)}
              className="submit-btn"
            >
              보내기/Send
            </button>
          </div>
        </div>
      </main>

      <style>{`
        /* 전체 화면 가운데 / flex center */
        .form-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f9fafb;
          padding: 16px;
        }
        /* 카드 본체 / Card */
        .form-card {
          width: 100%;
          max-width: 384px;
          background-color: white;
          border-radius: 16px;
          box-shadow: 0 10px 15px rgba(0,0,0,0.1);
          padding: 24px;
        }
        .form-title {
          font-size: 20px;
          font-weight: 700;
        }
        .form-subtitle {
          font-size: 14px;
          color: #9ca3af;
          margin-top: 4px;
        }
        /* 폼 필드들 세로 쌓기 / flex-col gap-4 */
        .form-fields {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        /* 라벨+인풋 세로 쌓기 / flex-col gap-1.5 */
        .field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .label {
          font-size: 14px;
          font-weight: 700;
          color: #374151;
        }
        /* 입력칸 / input */
        .input {
          width: 100%;
          padding: 12px 16px;
          background-color: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          font-size: 14px;
          outline: none;
          transition: all 0.2s;
          box-sizing: border-box;
        }
        .input:focus {
          background-color: white;
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59,130,246,0.3);
        }
        .textarea {
          resize: none;
        }
        /* 버튼 / button */
        .submit-btn {
          margin-top: 8px;
          width: 100%;
          padding: 12px;
          background-color: #3b82f6;
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }
        .submit-btn:hover {
          background-color: #2563eb;
        }
        .submit-btn:active {
          transform: scale(0.95);
        }
      `}</style>
    </>
  )
}