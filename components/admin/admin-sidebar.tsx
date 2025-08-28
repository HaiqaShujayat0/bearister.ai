"use client"

import { Home, Users, FileText, MessageCircle, LogOut, User } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { Link } from "react-router"
import { useState } from "react"

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/admin" },
  { icon: Users, label: "Users", href: "/admin/users" },
  { icon: FileText, label: "AI Training", href: "/admin/ai-training" },
  { icon: MessageCircle, label: "User Feedback", href: "/admin/feedback" },
  { icon: MessageCircle, label: "Obi Chat", href: "/admin/obi-chat" },
]

export default function AdminSidebar() {
  const { user, logout, isAuthenticated } = useAuth()
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <aside className="w-[240px] flex flex-col min-h-screen bg-gray-50 border-r border-gray-200">
      {/* Logo & Brand */}
      <div className="h-12 px-3 border-b border-gray-200 flex items-center justify-between bg-white">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="BearisterAI Logo" className="w-5 h-5 rounded-md object-cover" />
          <div>
            <span className="text-sm font-semibold text-gray-900">BearisterAI</span>
            <div className="text-xs text-gray-500">Admin Panel</div>
          </div>
        </div>
        <button className="p-1 rounded transition-colors text-gray-500 hover:text-gray-700 hover:bg-gray-100">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 overflow-y-auto sidebar-scroll p-3">
        <nav className="space-y-1">
          {menuItems.map((item, index) => (
                         <Link
               key={index}
               to={item.href}
               className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-all duration-200 text-sm font-medium ${
                 item.href === "/admin" 
                   ? "bg-orange-500 text-white shadow-sm" 
                   : "text-gray-700 hover:bg-orange-50 hover:text-orange-700"
               }`}
             >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Admin User Profile */}
      <div className="p-3 border-t border-gray-200 bg-white">
        {isAuthenticated && user ? (
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="w-full flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-md transition-colors"
            >
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-white">
                  {user.full_name?.charAt(0)?.toUpperCase() || "A"}
                </span>
              </div>
              <div className="flex-1 min-w-0 text-left">
                <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
                <p className="text-xs text-gray-500">support@bearister.ai</p>
              </div>
            </button>

            {/* User Dropdown Menu */}
            {showUserMenu && (
              <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-gray-200 rounded-md shadow-lg">
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                  onClick={() => setShowUserMenu(false)}
                >
                  <User className="w-4 h-4" />
                  <span>Profile Settings</span>
                </Link>
                <button
                  onClick={() => {
                    logout()
                    setShowUserMenu(false)
                  }}
                  className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-2">
            {/* Development mode: Show admin access without login */}
            <div className="text-center">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xs font-medium text-white">A</span>
              </div>
              <p className="text-sm font-medium text-gray-900">Admin User</p>
              <p className="text-xs text-gray-500">support@bearister.ai</p>
              <p className="text-xs text-orange-600 mt-1">Development Mode</p>
            </div>
            
            <button
              onClick={() => logout()}
              className="w-full text-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </aside>
  )
}
