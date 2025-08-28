"use client"

import { useAuth } from "@/contexts/auth-context";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import AdminHeader from "../../components/admin/admin-header";
import AdminSidebar from "../../components/admin/admin-sidebar";
import AdminMainContent from "../../components/admin/admin-main-content";
import { Button } from "@/components/ui/button";
import logo from "/logo.png";
import { Link } from "react-router"

export default function AdminDashboard() {
  const { isAuthenticated, isLoading, isAdmin } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated && !isAdmin) navigate("/", { replace: true })
  }, [isAuthenticated, isAdmin, navigate])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-6">
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              <img src={logo} alt="BearisterAI Logo" className="w-16 h-16 rounded-xl shadow-lg object-cover" />
            </div>
            <h1 className="text-3xl font-bold mb-2 text-gray-900">BearisterAI</h1>
            <p className="text-gray-600">Your AI-powered legal assistant</p>
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
                className="w-full text-gray-700 hover:bg-gray-50 py-3 text-lg font-medium bg-white border-gray-300"
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
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen">
        <AdminSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <AdminHeader />
          <AdminMainContent />
        </div>
      </div>
    </div>
  )
}


