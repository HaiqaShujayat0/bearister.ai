"use client"

import type React from "react"

import { Link } from "react-router"
import logo from "/logo.png"
import { ArrowLeft, Scale, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { useNavigate } from "react-router"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    agreeToTerms: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const result = await register({
      full_name: formData.fullName,
      email: formData.email,
      password: formData.password,
      agree_terms: formData.agreeToTerms,
    })

    if (result.success) {
      navigate(
        "/signin?message=Account created successfully! Please check your email to verify your account before signing in.",
      )
    } else {
      setError(result.message || "Failed to create account")
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
            ['--card-scale' as any]: 'min(0.35, calc((100vh - 200px) / 725px))',
            width: 'calc(520px * var(--card-scale))',
            height: 'calc(725px * var(--card-scale))',
          }}
        >
          <div
            className="bg-[#202939] rounded-2xl pt-10 pr-8 pb-8 pl-8 border border-[#364152] shadow-lg flex flex-col gap-6"
            style={{ transform: 'scale(var(--card-scale))', transformOrigin: 'top center' }}
          >
          {/* Logo */}
          <div className="flex justify-center">
            <img src={logo} alt="BearisterAI Logo" className="w-16 h-16 rounded-full shadow-lg object-cover" style={{marginTop: '-8px'}} />
          </div>

          {/* Header */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-2">Create Account</h1>
            <p className="text-[#cdd5df] text-base">Start your journey with BearisterAI</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-[#e3e8ef] mb-2">Full Name</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Adam Smith"
                className="w-full px-4 py-3 bg-[#121926] border border-[#364152] rounded-lg text-white placeholder-[#cdd5df] focus:outline-none focus:border-[#db610a] transition-colors text-base"
                required
              />
            </div>

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
              <p className="text-xs text-[#cdd5df] mt-1">
                Your new password must be at least 8 characters with letters, numbers & symbols.
              </p>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreeToTerms}
                onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                className="mt-1 w-4 h-4 accent-[#db610a] bg-[#121926] border-[#364152] rounded focus:ring-[#db610a] focus:ring-2"
                required
              />
              <label htmlFor="terms" className="text-xs text-[#cdd5df]">
                I agree to the{' '}
                <Link to="/terms" className="text-[#db610a] hover:text-[#f1750f] font-medium">
                  Terms & Conditions
                </Link>{' '}and{' '}
                <Link to="/privacy" className="text-[#db610a] hover:text-[#f1750f] font-medium">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Error Message Display */}
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
              {isLoading ? "Creating account..." : "Create account"}
            </button>
          </form>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-sm text-[#cdd5df]">
              Already have an account?{' '}
              <Link to="/signin" className="text-[#db610a] hover:text-[#f1750f] font-medium">
                Sign in
              </Link>
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}






