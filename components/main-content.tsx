"use client"

import ActionButton from "./action-button"
import ChatInterface from "./chat-interface"
import { Scale, FileText, CheckCircle, Shield } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

const actionButtons = [
  {
    icon: Scale,
    title: "Get Jury Instructions",
    description: "Generate comprehensive jury instruction sets",
    // teal icon (#14b8a6)
    color: "from-[#14b8a6] to-[#0f9b8f]",
    iconColor: '#14b8a6',
  cardClassExtra: 'hover:bg-teal-500/10',
  },
  {
    icon: FileText,
    title: "Draft a Motion",
    description: "Create legal motions and court filings",
    // blue icon (#3b82f6)
    color: "from-[#60a5fa] to-[#3b82f6]",
    iconColor: '#3b82f6',
  cardClassExtra: 'hover:bg-blue-500/10',
  },
  {
    icon: CheckCircle,
    title: "Check Precedents",
    description: "Search through case law and precedents",
    // purple icon (#8b5cf6)
    color: "from-[#a78bfa] to-[#8b5cf6]",
    iconColor: '#8b5cf6',
  cardClassExtra: 'hover:bg-purple-500/10',
  },
  {
    icon: Shield,
    title: "Analyze Police Report",
    description: "Review and analyze police reports",
    // pink icon (#ec4899)
    color: "from-[#f472b6] to-[#ec4899]",
    iconColor: '#ec4899',
  cardClassExtra: 'hover:bg-pink-500/10',
  },
]

export default function MainContent() {
  const { user } = useAuth()
  const userName = user?.full_name?.split(" ")[0] || "there"

  return (
    <main className="flex-1 flex flex-col min-h-0">
  <div className="flex-1 flex flex-col justify-start items-center px-6 sm:px-8 lg:px-10 py-6 sm:py-8 app-scrollable" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)'}}>
        <div className="w-full max-w-[740px] mx-auto">
          <div className="text-center mb-4 sm:mb-6 mt-[32px]">
            <h1 className="text-xl sm:text-2xl font-semibold mb-2" style={{ color: 'var(--foreground)'}}>Hey {userName}, Welcome to BearisterAI</h1>
            <p className="text-sm sm:text-base max-w-2xl mx-auto px-4" style={{ color: 'var(--muted-foreground)'}}>
              I'm Obie—your sleepless, non-billing AI with Supreme Court smarts and a sarcastic law-professor edge.
              Let's dive into the fine print!
            </p>
          </div>

          <div className="mb-2 w-full max-w-[740px] mx-auto">
            <ChatInterface />
          </div>

          {/* Align buttons' left/right edges with the chat input by mirroring its outer padding (p-3.5) */}
          <div className="w-full max-w-[740px] mx-auto grid grid-cols-4 gap-2 mb-4 px-3.5">
            {actionButtons.map((button, index) => (
            <ActionButton
                key={index}
                icon={button.icon}
                title={button.title}
                description={button.description}
          color={button.color}
          /* pill styling with slightly reduced rounding and a touch more horizontal padding */
        cardClass={button.cardClassExtra ? `group relative overflow-hidden bg-[var(--card)] hover:bg-[color-mix(in oklab, var(--card) 85%, black 15%)] border ${button.cardClassExtra} rounded-[8px] px-1.5 py-0.5 transition-all duration-150 hover:scale-[1.02] h-auto w-full flex items-center justify-center gap-2` : `group relative overflow-hidden bg-[var(--card)] hover:bg-[color-mix(in oklab, var(--card) 85%, black 15%)] border border-[var(--sidebar-border)] hover:border-[var(--sidebar-ring)] rounded-[8px] px-1.5 py-0.5 transition-all duration-150 hover:scale-[1.02] h-auto w-full flex items-center justify-center gap-2`}
      /* iconClass uses a subtle translucent bg using the iconColor with 12% opacity */
        iconClass={`inline-flex w-6 h-6 items-center justify-center rounded-md mb-0`} 
        iconColor={button.iconColor} 
                titleClass={`text-[12px] font-medium leading-none text-[var(--foreground)] whitespace-nowrap truncate text-center`}
        descClass={`hidden`}
      />
            ))}
          </div>

          <div className="h-8 sm:h-16"></div>
        </div>
      </div>
    </main>
  )
}