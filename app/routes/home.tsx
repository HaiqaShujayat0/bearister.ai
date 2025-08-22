"use client"

import { useAuth } from "@/contexts/auth-context"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import MainContent from "@/components/main-content"
import { Button } from "@/components/ui/button"
import logo from "/logo.png"
import { Link } from "react-router"

export default function Dashboard() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)'}}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p style={{ color: 'var(--muted-foreground)'}}>Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)'}}>
        <div className="text-center space-y-6">
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              <img src={logo} alt="BearisterAI Logo" className="w-16 h-16 rounded-xl shadow-lg object-cover" />
            </div>
            <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--foreground)'}}>BearisterAI</h1>
            <p style={{ color: 'var(--muted-foreground)'}}>Your AI-powered legal assistant</p>
          </div>

          <div className="space-y-4 w-80">
            <Link to="/signin">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-medium">
                Sign In
              </Button>
            </Link>

            <Link to="/signup">
              <Button
                variant="outline"
                className="w-full text-white hover:bg-gray-800 py-3 text-lg font-medium bg-transparent"
              >
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)'}}>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <MainContent />
        </div>
      </div>
    </div>
  )
}







