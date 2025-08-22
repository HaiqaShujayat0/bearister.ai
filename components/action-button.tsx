import type { LucideIcon } from "lucide-react"

interface ActionButtonProps {
  icon: LucideIcon
  title: string
  description: string
  color: string
  iconColor?: string
  cardClass?: string
  iconClass?: string
  titleClass?: string
  descClass?: string
}

export default function ActionButton({ icon: Icon, title, description, color, iconColor, cardClass, iconClass, titleClass, descClass }: ActionButtonProps) {
  const isPill = !!cardClass && (cardClass.includes('rounded-full') || cardClass.match(/rounded-\[/))

  return (
    <button
      className={
        cardClass ||
        (isPill
          ? 'group relative overflow-hidden rounded-[8px] px-1.5 py-[1.25rem] text-left transition-all duration-150 hover:scale-[1.02] h-auto flex items-center gap-1'
          : 'group relative overflow-hidden rounded-[18px] px-4 py-4 text-left transition-all duration-200 hover:scale-[1.02] w-[210px] h-[170px] flex flex-col items-center justify-center')
      }
      style={!cardClass ? { backgroundColor: 'var(--card)', border: '1px solid var(--border)', color: 'var(--foreground)'} : undefined}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-200`} />

  <div className={isPill ? 'relative z-10 w-full flex items-center justify-center gap-2' : 'relative z-10 flex flex-col items-center justify-center'}>
        {(() => {
          const defaultIconClass = isPill
            ? `inline-flex w-6 h-6 items-center justify-center rounded-md bg-gradient-to-r ${color} mb-0 shrink-0`
    : `inline-flex p-2 rounded-lg bg-gradient-to-r ${color} mb-2`

          return (
            <div className={iconClass || defaultIconClass}>
              <Icon
                className={isPill ? 'w-5 h-5' : 'w-10 h-10'}
                style={iconColor ? { color: iconColor } : undefined}
              />
            </div>
          )
        })()}

  <h3 className={titleClass || (isPill ? 'text-sm font-medium mb-0 group-hover:opacity-95 transition-colors text-left whitespace-nowrap truncate' : 'text-sm font-semibold mb-1 group-hover:opacity-95 transition-colors text-center')} style={!titleClass ? { color: 'var(--foreground)' } : undefined}>{title}</h3>

        {!isPill && (
          <p className={descClass || 'text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-tight text-center'}>{description}</p>
        )}
      </div>
    </button>
  )
}
