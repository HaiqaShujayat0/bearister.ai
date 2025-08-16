import type { LucideIcon } from "lucide-react"

interface ActionButtonProps {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export default function ActionButton({ icon: Icon, title, description, color }: ActionButtonProps) {
  return (
    <button className="group relative overflow-hidden bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-lg px-4 py-6 text-left transition-all duration-200 hover:scale-[1.02] min-h-[120px] flex-1 max-w-[200px]">
      <div
        className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-200`}
      />

      <div className="relative z-10">
        <div className={`inline-flex p-1.5 rounded-md bg-gradient-to-r ${color} mb-3`}>
          <Icon className="w-4 h-4 text-white" />
        </div>

        <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-white transition-colors">{title}</h3>

        <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-tight">{description}</p>
      </div>
    </button>
  )
}
