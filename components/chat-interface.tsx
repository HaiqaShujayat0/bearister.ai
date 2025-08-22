"use client"

import type React from "react"

import { SendHorizontal, Link2 } from "lucide-react"
import { useState } from "react"

export default function ChatInterface() {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle message submission here
    console.log("Message:", message)
    setMessage("")
  }

  return (
    <div className="w-full max-w-[740px] mx-auto">
      <form onSubmit={handleSubmit} className="rounded-[22px] p-3.5" style={{ backgroundColor: 'transparent' }}>
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            {/* inner input container (lighter card) */}
            <div className="relative rounded-[18px] px-4 pt-7 pb-5" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)'}}>
              {/* top label with star and text (hides when typing) */}
              {message.length === 0 && (
                <div className="absolute left-4 top-3 flex items-center gap-2 pointer-events-none select-none">
                  <span
                    className="text-base"
                    style={{
                      background: 'var(--brand-gradient)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}
                  >
                    ✨
                  </span>
                  <span className="text-[13px] font-medium" style={{ color: 'var(--muted-foreground)'}}>Ask Anything...</span>
                </div>
              )}

              {/* link button inside input (left) */}
              <button
                type="button"
                className="absolute left-4 bottom-2 w-9 h-9 flex items-center justify-center rounded-full text-gray-300/90 hover:text-white transition-colors"
                aria-label="add link"
                style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)'}}
              >
                <Link2 className="w-3.5 h-3.5" />
              </button>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={1}
                className="w-full pl-10 pr-16 text-[13px] text-white focus:outline-none focus:ring-0 resize-none overflow-hidden min-h-[72px] max-h-[160px] font-medium bg-transparent pb-7"
                style={{
                  height: 'auto',
                }}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement
                  target.style.height = 'auto'
                  target.style.height = Math.min(target.scrollHeight, 160) + 'px'
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSubmit(e)
                  }
                }}
              />

              {/* send button inside inner field (right) */}
              <button
                type="submit"
                className="absolute right-3 bottom-2 w-10 h-10 flex items-center justify-center rounded-full focus:outline-none focus:ring-0 shadow-[0_6px_18px_rgba(251,146,60,0.25)] transition-transform duration-150 hover:scale-105 cursor-pointer"
                aria-label="send"
                style={{ background: 'var(--brand-gradient)', color: 'var(--color-white)' }}
              >
                <SendHorizontal className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
        {/* attachment control moved inside input (left button above) */}
      </form>
    </div>
  )
}
