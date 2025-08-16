import ActionButton from "./action-button"
import ChatInterface from "./chat-interface"
import { Scale, FileText, Search, Shield } from "lucide-react"

const actionButtons = [
  {
    icon: Scale,
    title: "Get Jury Instructions",
    description: "Generate comprehensive jury instruction sets",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: FileText,
    title: "Draft a Motion",
    description: "Create legal motions and court filings",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Search,
    title: "Check Precedents",
    description: "Search through case law and precedents",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Shield,
    title: "Analyze Police Report",
    description: "Review and analyze police reports",
    color: "from-orange-500 to-orange-600",
  },
]

export default function MainContent() {
  return (
    <main className="flex-1 flex flex-col min-h-0">
      <div className="flex-1 flex flex-col justify-center p-4 sm:p-6 overflow-auto">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">Hey Adam, Welcome to BearisterAI</h1>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              I'm Obie—your sleepless, non-billing AI with Supreme Court smarts and a sarcastic law-professor edge.
              Let's dive into the fine print!
            </p>
          </div>

          <div className="mb-6">
            <ChatInterface />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 px-4 sm:px-0">
            {actionButtons.map((button, index) => (
              <ActionButton
                key={index}
                icon={button.icon}
                title={button.title}
                description={button.description}
                color={button.color}
              />
            ))}
          </div>

          <div className="h-8 sm:h-16"></div>
        </div>
      </div>
    </main>
  )
}
