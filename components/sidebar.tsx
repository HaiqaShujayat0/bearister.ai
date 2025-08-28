"use client"

import { FileText, Users, Scale, BookOpen, Shield, Plus, Search, ChevronDown, LogOut, User } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { Link } from "react-router"
import { useState } from "react"

const menuItems = [
  { icon: FileText, label: "New Case File" },
  { icon: Users, label: "Consumer Rights Violation" },
  { icon: Scale, label: "Rent Dispute" },
  { icon: BookOpen, label: "Breach of Contract" },
  { icon: Shield, label: "Defamation Claim" },
]

const recentChats = [
  "Summarize and Title Request",
  "Legal Consultation Sum...",
  "Breach of Contract Summary R...",
  "Defamation Claim Overview Re...",
  "Rent Dispute Overview Request",
  "Consumer Rights Summary Re...",
  "Privacy Policy Overview",
  "Product Return Guidelines",
]

export default function Sidebar({ recentLimit, extraAboveProfile, profileSlot }: { recentLimit?: number; extraAboveProfile?: React.ReactNode; profileSlot?: React.ReactNode }) {
  const { user, logout, isAuthenticated } = useAuth()
  const [showUserMenu, setShowUserMenu] = useState(false)

  return ( <aside className="w-[280px] flex flex-col min-h-screen" style={{ backgroundColor: 'var(--sidebar)', color: 'var(--sidebar-foreground)', borderRight: '1px solid var(--sidebar-border)'}}>
      {/* Logo & Menu Icon */}
  <div className="h-14 px-4 border-b flex items-center justify-between" style={{ borderBottom: '1px solid var(--sidebar-border)'}}>
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="BearisterAI Logo" className="w-6 h-6 rounded-md object-cover" />
          <span className="text-base font-semibold text-white">BearisterAI</span>
        </div>
  <button className="p-1 rounded transition-colors" style={{ color: 'var(--muted-foreground)', background: 'transparent' }}>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>

      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto sidebar-scroll">

      {/* New Chat Button */}
      <div className="px-3 pt-4">
        <button className="w-full flex items-center space-x-2 px-3 py-2 rounded-md transition-colors text-sm font-medium" style={{ background: 'transparent', color: 'var(--color-orange)' }}>
          <Plus className="w-3.5 h-3.5" style={{ color: 'var(--color-orange)'}} />
          <span>New Chat</span>
        </button>
      </div>

  {/* Search */}
  <div className="px-3 pb-3 mt-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-2.5" style={{ color: 'var(--muted-foreground)'}} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-9 pr-3 py-2 rounded-lg text-sm placeholder:tracking-normal"
            style={{ backgroundColor: 'var(--input)', border: '1px solid var(--sidebar-border)', color: 'var(--sidebar-foreground)', paddingLeft: '2.5rem' }}
          />
        </div>
      </div>

  {/* Menu Items */}
  <div className="px-3 space-y-1 mt-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors text-left text-sm hover:bg-[rgba(255,255,255,0.04)]`}
            style={{ color: 'var(--muted-foreground)', background: 'transparent' }}
          >
            <item.icon className="w-4 h-4" style={{ color: 'var(--muted-foreground)'}} />
            <span>{item.label}</span>
          </button>
        ))}

        {/* See More */}
  <button className="w-full text-left px-3 py-2 text-sm" style={{ color: 'var(--color-orange)'}}>
          See More...
        </button>
      </div>

  {/* Recent Chats */}
  <div className="px-2 mt-3 pt-3" style={{ borderTop: '1px solid var(--sidebar-border)'}}>
        <h3 className="text-[11px] font-medium mb-2 uppercase tracking-wide" style={{ color: 'var(--muted-foreground)'}}>Recent Chats</h3>
        {recentLimit ? (
          <div className="space-y-1">
            {recentChats.slice(0, recentLimit).map((chat, index) => (
              <button
                key={index}
                className="w-full text-left px-3 py-2 text-sm rounded-lg transition-colors font-medium tracking-tight hover:bg-[rgba(255,255,255,0.04)]"
                style={{ color: 'var(--sidebar-foreground)', background: 'transparent' }}
              >
                {chat}
              </button>
            ))}
          </div>
        ) : (
          <>
            <div className="mb-3">
              <h4 className="text-[11px] mb-1 uppercase tracking-wide" style={{ color: 'var(--muted-foreground)'}}>TODAY</h4>
              <div className="space-y-1">
                {recentChats.slice(0, 2).map((chat, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-3 py-2 text-sm rounded-lg transition-colors font-medium tracking-tight hover:bg-[rgba(255,255,255,0.04)]"
                    style={{ color: 'var(--sidebar-foreground)', background: 'transparent' }}
                  >
                    {chat}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-3">
              <h4 className="text-[11px] mb-1 uppercase tracking-wide" style={{ color: 'var(--muted-foreground)'}}>YESTERDAY</h4>
              <div className="space-y-1">
                {recentChats.slice(2, 4).map((chat, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-3 py-2 text-sm text-[#cdd5df] hover:text-white hover:bg-[rgba(255,255,255,0.04)] rounded-lg transition-colors font-medium tracking-tight"
                  >
                    {chat}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-2">
              <h4 className="text-[11px] mb-1 uppercase tracking-wide" style={{ color: 'var(--muted-foreground)'}}>THIS WEEK</h4>
              <div className="space-y-1 pb-2">
                {recentChats.slice(4).map((chat, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-3 py-2 text-sm text-[#cdd5df] hover:text-white hover:bg-[rgba(255,255,255,0.04)] rounded-lg transition-colors font-medium tracking-tight"
                  >
                    {chat}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      {/* end scrollable content */}
      </div>

  {/* User Profile (anchored bottom) */}
  <div className="p-3" style={{ borderTop: '1px solid var(--sidebar-border)'}}>
  {extraAboveProfile}
  {profileSlot ? (
        <>{profileSlot}</>
      ) : isAuthenticated && user ? (
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="w-full flex items-center space-x-2 p-2 hover:bg-gray-800 rounded-md transition-colors"
            >
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-white">
                  {user.full_name?.charAt(0)?.toUpperCase() || "U"}
                </span>
              </div>
              <div className="flex-1 min-w-0 text-left">
                <p className="text-sm font-medium text-white truncate">{user.full_name || "User"}</p>
                <p className="text-xs text-gray-500">Free • 250 Msgs, 4 Docs</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {/* User Dropdown Menu */}
            {showUserMenu && (
              <div className="absolute bottom-full left-0 right-0 mb-2 bg-gray-800 border border-gray-700 rounded-md shadow-lg">
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
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
                  className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-2">
            <Link
              to="/signin"
              className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="block w-full text-center border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white text-sm font-medium py-2 px-4 rounded-md transition-colors"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </aside>
  )
}