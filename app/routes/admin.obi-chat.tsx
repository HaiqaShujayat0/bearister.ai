"use client"

import { useEffect, useMemo } from "react"
import { useAuth } from "@/contexts/auth-context"
import { useNavigate, Link } from "react-router"
import Sidebar from "@/components/sidebar"
import MainContent from "@/components/main-content"

export default function AdminObiChatPage() {
  const { isAuthenticated, isAdmin } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated && !isAdmin) navigate("/", { replace: true })
  }, [isAuthenticated, isAdmin, navigate])

  // Orange used across admin portal
  const adminOrange = useMemo(() => "#db610a", [])

  return (
    <div className="admin-auth min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)'}}>
      <div className="flex min-h-screen">
        {/* Sidebar clone with inline back link injected above profile */}
        <Sidebar
          recentLimit={2}
          extraAboveProfile={(
            <Link
              to="/admin"
              className="block w-full text-center text-sm font-medium rounded-md mb-2"
              style={{ backgroundColor: adminOrange, color: '#fff', padding: '8px 12px' }}
            >
              ← Back to dashboard
            </Link>
          )}
          profileSlot={(
            <div className="relative">
              <button
                className="w-full flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-md transition-colors"
              >
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-white">A</span>
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
                  <p className="text-xs text-gray-500">support@bearister.ai</p>
                </div>
              </button>
            </div>
          )}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* No global header/footer – this page mirrors user dashboard content only */}
          <MainContent />
        </div>
      </div>
    </div>
  )
}
