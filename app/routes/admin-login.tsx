"use client"

import type React from "react"

import { Link } from "react-router"
import logo from "/logo.png"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import { useState, useEffect } from "react"
import { useAuth } from "@/contexts/auth-context"
import { useNavigate, useSearchParams } from "react-router"

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const { adminLogin, isAuthenticated } = useAuth()
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
      // Don't auto-redirect here, let the login handler decide where to go
      console.log("User is already authenticated, but letting login handler decide redirect")
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const result = await adminLogin(formData.email, formData.password)

    if (result.success) {
      console.log("Admin login successful")
      // Admin login always redirects to admin dashboard
      navigate("/admin")
    } else {
      console.log("Admin login failed:", result.message)
      setError(result.message || "Failed to sign in as admin")
    }

    setIsLoading(false)
  }

  return (
    <div className="admin-auth min-h-screen flex items-center justify-center p-4 bg-white overflow-hidden py-10 md:py-16">
      <div className="w-[520px] max-w-full">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors text-sm font-medium">
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
          <div className="bg-gray-50 rounded-2xl pt-10 pr-8 pb-8 pl-8 border border-gray-200 shadow-lg flex flex-col gap-6" style={{ transform: 'scale(var(--card-scale))', transformOrigin: 'top center' }}>
            {/* Logo - centered, spaced, and sized exactly like screenshot */}
            <div className="flex justify-center">
            <img src={logo} alt="BearisterAI Logo" className="w-16 h-16 rounded-full shadow-lg object-cover" style={{marginTop: '-8px'}} />
          </div>

          {/* Header */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Access</h1>
            <p className="text-gray-600 text-base">Sign in to BearisterAI Admin Panel</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                             <input
                 type="email"
                 value={formData.email}
                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                 placeholder="admin@bearisterai.com"
                 className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#db610a] focus:ring-1 focus:ring-[#db610a] transition-colors text-base"
                 style={{ backgroundColor: 'white' }}
                 required
               />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                                 <input
                   type={showPassword ? "text" : "password"}
                   value={formData.password}
                   onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                   placeholder="••••••••"
                   className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#db610a] focus:ring-1 focus:ring-[#db610a] transition-colors pr-10 text-base"
                   style={{ backgroundColor: 'white' }}
                   required
                 />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Forgot Password - move to left */}
            <div className="text-left">
              <Link to="/admin-forgot-password" className="text-sm text-[#db610a] hover:text-[#f1750f] transition-colors font-medium">
                Forgot Password?
              </Link>
            </div>

            {successMessage && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                <p className="text-sm text-green-700">{successMessage}</p>
              </div>
            )}

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#db610a] hover:bg-[#f1750f] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors text-base shadow-md"
            >
              {isLoading ? "Signing in..." : "Sign In as Admin"}
            </button>
          </form>

          {/* Note about admin access */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              This page is for administrators only. Regular users should use the{' '}
              <Link to="/signin" className="text-[#db610a] hover:text-[#f1750f] font-medium">
                regular sign in
              </Link>
            </p>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Don't have an admin account?{' '}
              <Link to="/admin-signup" className="text-[#db610a] hover:text-[#f1750f] font-medium">
                Create admin account
              </Link>
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
