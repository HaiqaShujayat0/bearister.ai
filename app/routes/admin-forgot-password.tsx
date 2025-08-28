"use client"

import type React from "react"

import { Link, useNavigate } from "react-router"
import logo from "/logo.png"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { api } from "@/lib/api"

export default function AdminForgotPasswordPage() {
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
      const key = `admin_pw_reset_cd_${email}`
      const until = Date.now() + 105 * 1000 // 01:45
      localStorage.setItem(key, String(until))
    } catch {}

    // Navigate immediately to success screen regardless of backend state
    navigate(`/admin-email-sent?email=${encodeURIComponent(email)}`)

    // Fire-and-forget the request; do not block UI
    void api.requestAdminPasswordReset(email).catch(() => {})

    setIsSubmitting(false)
  }

  return (
    <div className="admin-auth min-h-screen flex items-center justify-center p-4 bg-white overflow-hidden py-10 md:py-16">
      <style>{`
        input[type="email"], input[type="password"], input[type="text"] {
          background-color: white !important;
          color: #111827 !important;
        }
        input[type="email"]::placeholder, input[type="password"]::placeholder, input[type="text"]::placeholder {
          color: #9CA3AF !important;
        }
      `}</style>
      <div className="w-[520px] max-w-full">
        {/* Back Button */}
        <Link to="/admin-login" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>

        {/* Scale wrapper (mirrors Admin Login) */}
        <div
          className="relative mx-auto"
          style={{
            ['--card-scale' as any]: 'min(0.35, calc((100vh - 240px) / 408px))',
            width: 'calc(520px * var(--card-scale))',
            height: 'calc(408px * var(--card-scale))',
          }}
        >
          <div className="bg-gray-50 rounded-2xl pt-10 pr-8 pb-8 pl-8 border border-gray-200 shadow-lg flex flex-col gap-6" style={{ transform: 'scale(var(--card-scale))', transformOrigin: 'top center' }}>
            {/* Logo */}
            <div className="flex justify-center">
              <img src={logo} alt="BearisterAI Logo" className="w-16 h-16 rounded-full shadow-lg object-cover" style={{marginTop: '-8px'}} />
            </div>

            {/* Header */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Password Reset</h1>
              <p className="text-gray-600 text-base">Enter your admin email to receive a password reset link</p>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Admin Email</label>
                                 <input
                   type="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   placeholder="admin@bearisterai.com"
                   className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#db610a] focus:ring-1 focus:ring-[#db610a] transition-colors text-base"
                   style={{ backgroundColor: 'white' }}
                   required
                 />
              </div>

              {message && (
                <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-sm text-green-700">{message}</p>
                </div>
              )}

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-700">{error}</p>
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
