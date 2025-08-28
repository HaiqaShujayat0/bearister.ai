"use client"

import Sidebar from "@/components/sidebar"
import MainContent from "@/components/main-content"
import Header from "@/components/header"
import { useAuth } from "@/contexts/auth-context"
import { useEffect } from "react"
import { useNavigate } from "react-router"

export default function UserDashboard() {
  const { isAuthenticated, isAdmin, isLoading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) navigate("/signin", { replace: true })
      else if (isAdmin) navigate("/admin", { replace: true })
    }
  }, [isAuthenticated, isAdmin, isLoading, navigate])

  if (isLoading) return null

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


