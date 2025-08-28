"use client"

import { Link, useNavigate, useSearchParams } from "react-router"
import logo from "/logo.png"
import { ArrowLeft, Eye, EyeOff, CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { api } from "@/lib/api"

export default function AdminResetPasswordPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  
  // Remove token from URL for security - we'll handle it via POST
  const [token, setToken] = useState("")

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [debugMode, setDebugMode] = useState(false)

  useEffect(() => {
    console.log("=== ADMIN RESET PASSWORD PAGE DEBUG ===")
    console.log("Current URL:", window.location.href)
    console.log("Search params:", window.location.search)
    console.log("Pathname:", window.location.pathname)
    
    // Check if we have a token in URL (for backward compatibility)
    const urlToken = params.get("token")
    if (urlToken) {
      console.log("⚠️ Token found in URL - this is not secure!")
      console.log("Token from URL:", urlToken.substring(0, 20) + "...")
      
      // Extract the actual token if it's nested in another URL
      let actualToken = urlToken
      if (urlToken.includes("http://") || urlToken.includes("https://")) {
        try {
          const url = new URL(urlToken);
          const nestedToken = url.searchParams.get("token");
          if (nestedToken) {
            console.log("✅ Extracted nested token:", nestedToken.substring(0, 20) + "...")
            actualToken = nestedToken;
          }
        } catch (error) {
          console.error("❌ Failed to parse nested URL:", error)
        }
      }
      
      // Store the token and redirect to clean URL without query for security
      setToken(actualToken)
      const cleanUrl = window.location.pathname
      if (window.location.href !== cleanUrl) {
        console.log("🔄 Redirecting to clean URL for security")
        window.history.replaceState({}, '', cleanUrl)
      }
    } else {
      console.log("✅ No token in URL - this is secure")
    }
    
    // Enable debug mode for testing
    if (window.location.search.includes("debug=true")) {
      setDebugMode(true)
      console.log("✅ Debug mode enabled")
    }
    
    console.log("=== END DEBUG ===")
  }, [params])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)
    setError(null)

    console.log("Submitting admin password reset with token:", token ? token.substring(0, 20) + "..." : "NO TOKEN")
    console.log("Debug mode:", debugMode)

    if (!token && !debugMode) {
      setError("Reset token is required. Please open the link from your email again.")
      setIsSubmitting(false)
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setIsSubmitting(false)
      return
    }

    // Client-side strength check: at least one letter, one number, one symbol, min length 6
    // Updated to match the image requirements: "at least 6 characters with letters, numbers & symbols"
    const hasLetter = /[A-Za-z]/.test(password)
    const hasNumber = /\d/.test(password)
    const hasSymbol = /[^A-Za-z0-9]/.test(password)
    
    if (password.length < 6 || !hasLetter || !hasNumber || !hasSymbol) {
      setError("Password must be at least 6 characters and include letters, numbers and symbols.")
      setIsSubmitting(false)
      return
    }

    // If in debug mode, skip API call and show success
    if (debugMode) {
      console.log("Debug mode: skipping API call and showing success")
      setSuccess(true)
      setIsSubmitting(false)
      return
    }

    try {
      console.log("Calling API resetAdminPassword with token length:", token.length)
      const res = await api.resetAdminPassword(token, password)
      console.log("API response:", res)
      console.log("API response success:", res.success)
      console.log("API response message:", res.message)
      
      if (!res.success) {
        console.error("API returned error:", res.message)
        throw new Error(res.message || "Failed to reset admin password")
      }
      // Show inline success panel instead of immediate redirect
      setSuccess(true)
    } catch (err) {
      console.error("Admin password reset error:", err)
      console.error("Error type:", typeof err)
      console.error("Error message:", err instanceof Error ? err.message : err)
      
      // Provide more specific error messages
      if (err instanceof Error) {
        if (err.message.includes("404")) {
          setError("Reset link not found. Please request a new password reset.")
        } else if (err.message.includes("Invalid reset token")) {
          setError("Invalid or expired reset token. Please request a new password reset.")
        } else if (err.message.includes("Failed to fetch")) {
          setError("Network error. Please check your connection and try again.")
        } else {
          setError(err.message || "Failed to reset admin password. Please try again.")
        }
      } else {
        setError("Failed to reset admin password. The link may have expired or been used.")
      }
    } finally {
      setIsSubmitting(false)
    }
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
        <Link to="/admin-login" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors text-sm font-medium">
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
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Reset Admin Password</h1>
            </div>

            {/* Inline warning when token is missing */}
            {!debugMode && !token && (
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                <p className="text-sm text-yellow-700">Reset token missing. Please open the password reset link from your email again.</p>
              </div>
            )}

            {!success ? (
              <form onSubmit={onSubmit} className="space-y-6">
                {/* New Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                  <div className="relative">
                                         <input
                       type={show1 ? "text" : "password"}
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#db610a] focus:ring-1 focus:ring-[#db610a] transition-colors pr-10 text-base"
                       style={{ backgroundColor: 'white' }}
                       required
                       minLength={6}
                     />
                    <button 
                      type="button" 
                      onClick={() => setShow1((s) => !s)} 
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {show1 ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Your new password must be at least 6 characters with letters, numbers & symbols.</p>
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                  <div className="relative">
                                         <input
                       type={show2 ? "text" : "password"}
                       value={confirmPassword}
                       onChange={(e) => setConfirmPassword(e.target.value)}
                       placeholder="Rewrite new password"
                       className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#db610a] focus:ring-1 focus:ring-[#db610a] transition-colors pr-10 text-base"
                       style={{ backgroundColor: 'white' }}
                       required
                       minLength={6}
                     />
                    <button 
                      type="button" 
                      onClick={() => setShow2((s) => !s)} 
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {show2 ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
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

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || (!token && !debugMode)}
                  className="w-full bg-[#db610a] hover:bg-[#f1750f] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors text-base shadow-md"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                
                {debugMode && (
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                    <p className="text-sm text-yellow-700 mb-2">Debug Mode Active</p>
                    <button
                      type="button"
                      onClick={() => {
                        console.log("Test button clicked")
                        setSuccess(true)
                      }}
                      className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
                    >
                      Test Success Screen
                    </button>
                  </div>
                )}
              </form>
            ) : (
              /* Success Screen - matches the image exactly */
              <div className="flex flex-col items-center justify-center py-8">
                <div className="bg-[#4CAF50] rounded-full p-3 mb-6 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Password Changed</h2>
                <p className="text-gray-600 mb-8 text-center">Your Admin Password has been changed successfully</p>
                <button 
                  onClick={() => navigate('/admin-login')} 
                  className="w-full bg-[#db610a] hover:bg-[#f1750f] text-white font-semibold py-3 px-4 rounded-lg transition-colors text-base shadow-md"
                >
                  Log in
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
