"use client"

import type React from "react"

import { Link, useNavigate } from "react-router"
import logo from "/logo.png"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { api } from "@/lib/api"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)
    setError(null)

    // Start local cooldown immediately so the next page shows the timer
    try {
      const key = `pw_reset_cd_${email}`
      const until = Date.now() + 105 * 1000 // 01:45
      localStorage.setItem(key, String(until))
    } catch {}

    // Navigate immediately to success screen regardless of backend state
    navigate(`/email-sent?email=${encodeURIComponent(email)}`)

    // Fire-and-forget the request; do not block UI
    void api.requestPasswordReset(email).catch(() => {})

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#121926] overflow-hidden py-10 md:py-16">
      <div className="w-[520px] max-w-full">
        {/* Back Button */}
        <Link to="/signin" className="inline-flex items-center text-[#cdd5df] hover:text-white mb-8 transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>

        {/* Scale wrapper (mirrors Sign In) */}
        <div
          className="relative mx-auto"
          style={{
            ['--card-scale' as any]: 'min(0.35, calc((100vh - 240px) / 408px))',
            width: 'calc(520px * var(--card-scale))',
            height: 'calc(408px * var(--card-scale))',
          }}
        >
          <div className="bg-[#202939] rounded-2xl pt-10 pr-8 pb-8 pl-8 border border-[#364152] shadow-lg flex flex-col gap-6" style={{ transform: 'scale(var(--card-scale))', transformOrigin: 'top center' }}>
            {/* Logo */}
            <div className="flex justify-center">
              <img src={logo} alt="BearisterAI Logo" className="w-16 h-16 rounded-full shadow-lg object-cover" style={{marginTop: '-8px'}} />
            </div>

            {/* Header */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white mb-2">Forgot Password</h1>
              <p className="text-[#cdd5df] text-base">Enter your email to receive a password reset link</p>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#e3e8ef] mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="adam@gmail.com"
                  className="w-full px-4 py-3 bg-[#121926] border border-[#364152] rounded-lg text-white placeholder-[#cdd5df] focus:outline-none focus:border-[#db610a] transition-colors text-base"
                  required
                />
              </div>

              {message && (
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-md">
                  <p className="text-sm text-green-400">{message}</p>
                </div>
              )}

              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-md">
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#db610a] hover:bg-[#f1750f] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors text-base shadow-md"
              >
                {isSubmitting ? "Sending..." : "Send Reset Link"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


