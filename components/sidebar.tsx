import { MessageSquare, FileText, Users, Scale, BookOpen, Shield, Plus, Search } from "lucide-react"

const menuItems = [
  { icon: MessageSquare, label: "New Chat", active: true },
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

export default function Sidebar() {
  return (
    <aside className="w-72 bg-black border-r border-gray-800 flex flex-col h-screen">
      {/* Logo */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-orange-500 rounded-md flex items-center justify-center">
            <Scale className="w-3 h-3 text-white" />
          </div>
          <span className="text-lg font-semibold text-white">BearisterAI</span>
        </div>
      </div>

      {/* New Chat Button */}
      <div className="p-3">
        <button className="w-full flex items-center space-x-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors text-white text-sm">
          <Plus className="w-4 h-4" />
          <span>New Chat</span>
        </button>
      </div>

      {/* Search */}
      <div className="px-3 pb-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-9 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
          />
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 px-3 space-y-1">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md transition-colors text-left text-sm ${
              item.active ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.label}</span>
          </button>
        ))}

        {/* See More */}
        <button className="w-full text-left px-3 py-2 text-sm text-orange-500 hover:text-orange-400 transition-colors">
          See More...
        </button>
      </div>

      {/* Recent Chats */}
      <div className="p-3 border-t border-gray-700">
        {/* TODO: Remove mock recent chats when real chat data is connected. Ensure layout adjusts seamlessly without empty gaps. */}
        <h3 className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Recent Chats</h3>

        {/* Today */}
        <div className="mb-3">
          <h4 className="text-xs text-gray-600 mb-1 uppercase tracking-wide">TODAY</h4>
          <div className="space-y-1">
            {recentChats.slice(0, 2).map((chat, index) => (
              <button
                key={index}
                className="w-full text-left px-2 py-1.5 text-xs text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors"
              >
                {chat}
              </button>
            ))}
          </div>
        </div>

        {/* Yesterday */}
        <div className="mb-3">
          <h4 className="text-xs text-gray-600 mb-1 uppercase tracking-wide">YESTERDAY</h4>
          <div className="space-y-1">
            {recentChats.slice(2, 4).map((chat, index) => (
              <button
                key={index}
                className="w-full text-left px-2 py-1.5 text-xs text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors"
              >
                {chat}
              </button>
            ))}
          </div>
        </div>

        {/* This Week */}
        <div>
          <h4 className="text-xs text-gray-600 mb-1 uppercase tracking-wide">THIS WEEK</h4>
          <div className="space-y-1">
            {recentChats.slice(4).map((chat, index) => (
              <button
                key={index}
                className="w-full text-left px-2 py-1.5 text-xs text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors"
              >
                {chat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-3 border-t border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-xs font-medium text-white">AS</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Adam Smith</p>
            <p className="text-xs text-gray-500">Free • 250 Msgs, 4 Docs</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
