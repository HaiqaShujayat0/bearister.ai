export default function Header() {
  return (
    <header className="bg-black border-b border-gray-800 px-6 py-3">
      <div className="flex items-center justify-end">
        <button className="flex items-center space-x-2 px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-md transition-colors">
          <span className="w-4 h-4 text-orange-200">⚡</span>
          <span>Upgrade Plan</span>
        </button>
      </div>
    </header>
  )
}
