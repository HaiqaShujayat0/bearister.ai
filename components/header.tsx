import React from "react";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate()
  return (
  <header className="px-6 py-6" style={{ backgroundColor: 'var(--background)'}}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center">
             <button
               className="flex items-center space-x-2.5 px-3.5 py-1.5 md:px-4 md:py-1.5 text-white text-xs md:text-sm font-semibold rounded-full shadow-[0_8px_28px_rgba(225,29,72,0.36)] transition-transform hover:scale-[1.03]"
               style={{
                 background:
                   'linear-gradient(90deg, #6D28D9 0%, #C026D3 18%, #E11D48 50%, #F97316 100%)',
                 color: 'var(--color-white)',
                 marginTop: '0.5rem'
               }}
              onClick={() => navigate('/subscription')}
          >
            <span className="w-4 h-4 text-white">⚡</span>
            <span>Upgrade Plan</span>
          </button>
        </div>
      </div>
    </header>
  )
}