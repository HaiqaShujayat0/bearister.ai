"use client"

import type React from "react"

import { Link } from "react-router"
import logo from "/logo.png"
import { ArrowLeft, Scale, Eye, EyeOff } from "lucide-react"
import { useState, useEffect } from "react"
import { useAuth } from "@/contexts/auth-context"
import { useNavigate, useSearchParams } from "react-router"

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const message = searchParams.get("message")
    if (message) {
      setSuccessMessage(message)
    }
  }, [searchParams])

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/")
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const result = await login(formData.email, formData.password)

    if (result.success) {
      navigate("/")
    } else {
      setError(result.message || "Failed to sign in")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#121926] overflow-hidden py-10 md:py-16">
      <div className="w-[520px] max-w-full">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-[#cdd5df] hover:text-white mb-8 transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Link>

        {/* Scale wrapper ensures the card always fully fits viewport height without scroll and with extra top/bottom room */}
        <div
          className="relative mx-auto"
          style={{
            ['--card-scale' as any]: 'min(0.35, calc((100vh - 200px) / 593px))',
            width: 'calc(520px * var(--card-scale))',
            height: 'calc(593px * var(--card-scale))',
          }}
        >
          <div className="bg-[#202939] rounded-2xl pt-10 pr-8 pb-8 pl-8 border border-[#364152] shadow-lg flex flex-col gap-6" style={{ transform: 'scale(var(--card-scale))', transformOrigin: 'top center' }}>
            {/* Logo - centered, spaced, and sized exactly like screenshot */}
            <div className="flex justify-center">
            <img src={logo} alt="BearisterAI Logo" className="w-16 h-16 rounded-full shadow-lg object-cover" style={{marginTop: '-8px'}} />
          </div>

          {/* Header */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-[#cdd5df] text-base">Sign in to your BearisterAI account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#e3e8ef] mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="adam@gmail.com"
                className="w-full px-4 py-3 bg-[#121926] border border-[#364152] rounded-lg text-white placeholder-[#cdd5df] focus:outline-none focus:border-[#db610a] transition-colors text-base"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[#e3e8ef] mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-[#121926] border border-[#364152] rounded-lg text-white placeholder-[#cdd5df] focus:outline-none focus:border-[#db610a] transition-colors pr-10 text-base"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#cdd5df] hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Forgot Password - move to left */}
            <div className="text-left">
              <Link to="/forgot-password" className="text-sm text-[#db610a] hover:text-[#f1750f] transition-colors font-medium">
                Forgot Password?
              </Link>
            </div>

            {successMessage && (
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-md">
                <p className="text-sm text-green-400">{successMessage}</p>
              </div>
            )}

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-md">
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#db610a] hover:bg-[#f1750f] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors text-base shadow-md"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-sm text-[#cdd5df]">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#db610a] hover:text-[#f1750f] font-medium">
                Sign up
              </Link>
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}






