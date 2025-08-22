"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router"
import { Button } from "@/components/ui/button"
import logo from "/logo.png"
import { Link } from "react-router"
import { apiClient } from "@/lib/api"

export default function VerifyEmail() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState("")
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const token = searchParams.get("token")

  useEffect(() => {
    if (token) {
      verifyEmail(token)
    } else {
      setStatus("error")
      setMessage("Invalid verification link")
    }
  }, [token])

  const verifyEmail = async (verificationToken: string) => {
    try {
      console.log("[v0] Verifying email with token:", verificationToken)
      const response = await apiClient.verifyEmail(verificationToken)
      console.log("[v0] Verification response:", response)

      if (response.success) {
        setStatus("success")
        setMessage("Email verified successfully! You can now sign in.")
      } else {
        setStatus("error")
        setMessage(response.message || "Email verification failed")
      }
    } catch (error) {
      console.error("[v0] Verification error:", error)
      setStatus("error")
      setMessage("An error occurred during verification")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-800 rounded-2xl p-8 text-center">
          <div className="mb-6">
            <div className="flex justify-center mb-4">
              <img src={logo} alt="BearisterAI Logo" className="w-16 h-16 rounded-full shadow-lg object-cover" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">BearisterAI</h1>
          </div>

          {status === "loading" && (
            <div>
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-4"></div>
              <h2 className="text-xl font-semibold mb-2">Verifying Email</h2>
              <p className="text-gray-400">Please wait while we verify your email address...</p>
            </div>
          )}

          {status === "success" && (
            <div>
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-green-400">Email Verified!</h2>
              <p className="text-gray-400 mb-2">Your account has been successfully verified.</p>
              <p className="text-gray-400 mb-6">Back to Login</p>
              <Link to="/signin">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3">
                  Sign In Now
                </Button>
              </Link>
            </div>
          )}

          {status === "error" && (
            <div>
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-red-400">Verification Failed</h2>
              <p className="text-gray-400 mb-2">{message}</p>
              <p className="text-gray-400 mb-6">Back to Login</p>
              <div className="space-y-3">
                <Link to="/signup">
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    Sign Up Again
                  </Button>
                </Link>
                <Link to="/signin">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3">
                    Back to Sign In
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}







