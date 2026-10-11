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
    <>
      <main className="page">
        <div className="card">
          <h2 className="title">드롭다운/Drop down(CSS)</h2>
          <p className="subtitle">freelifemakers</p>

          <div className="field-group">
            <label className="label">직업 / Role</label>

            {/* Select 본체 - relative 기준점 */}
            <div className="select-wrap">
              {/* 1. 버튼 - 항상 보이는 부분 / Button - Always visible part */}
              <button
                onClick={() => setOpen(!open)}
                className="select-btn"
              >
                <span>{value.label}</span>
                <span className={`arrow ${open? 'arrow-open' : ''}`}>▼</span>
              </button>

              {/* 2. 리스트 - open일 때만 보이는 부분 / List – section visible only when open */}
              {open && (
                <div className="select-list">
                  {OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setValue(opt)
                        setOpen(false)
                      }}
                      className={`select-option ${value.value === opt.value? 'selected' : ''}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <p className="hint">선택된 값/Selected Value : {value.value}</p>
          </div>
        </div>
      </main>

      <style>{`
       .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f9fafb;
          padding: 16px;
        }
       .card {
          width: 100%;
          max-width: 384px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 15px rgba(0,0,0,0.1);
          padding: 24px;
        }
       .title { font-size: 16px; font-weight: 700; }
       .subtitle { font-size: 14px; color: #9ca3af; margin-top: 4px; }

       .field-group {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
       .label {
          font-size: 14px;
          font-weight: 700;
          color: #374151;
        }
       .hint {
          font-size: 12px;
          color: #9ca3af;
          margin-top: 8px;
        }

        /* Select 기준점 - relative */
       .select-wrap {
          position: relative;
        }

        /* 1. 버튼 - w-full flex justify-between */
       .select-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          font-size: 14px;
          text-align: left;
          cursor: pointer;
          transition: all 0.15s;
        }
       .select-btn:focus {
          outline: none;
          background: white;
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59,130,246,0.3);
        }

        /* 화살표 회전 */
       .arrow {
          transition: transform 0.2s;
          font-size: 12px;
        }
       .arrow-open {
          transform: rotate(180deg);
        }

        /* 2. 리스트 - absolute z-10 mt-2 */
       .select-list {
          position: absolute;
          z-index: 10;
          margin-top: 8px;
          width: 100%;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          box-shadow: 0 10px 15px rgba(0,0,0,0.1);
          overflow: hidden;
        }

        /* 옵션 하나 */
       .select-option {
          width: 100%;
          text-align: left;
          padding: 12px 16px;
          font-size: 14px;
          border: none;
          background: white;
          color: #374151;
          cursor: pointer;
          transition: background 0.15s;
        }
       .select-option:hover {
          background: #f9fafb;
        }
       .select-option.selected {
          background: #eff6ff;
          color: #2563eb;
          font-weight: 700;
        }
      `}</style>
    </>
  )
}