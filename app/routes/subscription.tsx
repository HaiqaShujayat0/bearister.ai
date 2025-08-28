"use client"

import { Link, useNavigate } from "react-router"
import { ArrowLeft } from "lucide-react"

export default function SubscriptionPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <button onClick={() => navigate(-1)} className="inline-flex items-center text-[var(--muted-foreground)] hover:opacity-90 transition-colors text-sm font-medium mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>Upgrade Your Plan</h1>
          <p className="text-sm sm:text-base" style={{ color: 'var(--muted-foreground)' }}>
            Select the perfect plan for your legal practice needs
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-3 text-xs sm:text-sm px-3 py-1.5 rounded-full" style={{ backgroundColor: 'var(--input)', border: '1px solid var(--sidebar-border)' }}>
            <span className="px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: 'var(--card)', color: 'var(--foreground)' }}>Monthly</span>
            <span className="px-2 py-0.5 rounded-full font-medium" style={{ color: 'var(--muted-foreground)' }}>Yearly <span className="ml-1 opacity-80">(Save 20%)</span></span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 justify-items-center items-start">
          {/* Basic */}
          <div className="rounded-2xl p-5 border transition-all duration-200 hover:translate-y-[-3px] hover:shadow-[0_28px_80px_rgba(236,72,153,0.35)] hover:border-[#ec4899] md:w-[340px] min-h-[560px]" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--sidebar-border)' }}>
            <div className="text-xs uppercase tracking-wide mb-2" style={{ color: 'var(--muted-foreground)' }}>Basic</div>
            <div className="text-3xl font-semibold mb-1" style={{ color: 'var(--foreground)' }}>Free</div>
            <button className="w-full mt-4 text-sm font-semibold py-2 rounded-lg" style={{ backgroundColor: 'var(--input)', color: 'var(--muted-foreground)', border: '1px solid var(--sidebar-border)' }}>Current Plan</button>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                '250 Message Cap',
                '4 Document Uploads/mo',
                'Detailed Law Student Outlines',
                'Case Law Research',
                'Save Past Chats/Research',
                'Simple Motion Drafting (Template)'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2" style={{ color: 'var(--muted-foreground)' }}>
                  <span className="mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Plus */}
          <div className="rounded-2xl p-5 border relative transition-all duration-200 hover:translate-y-[-3px] hover:shadow-[0_32px_90px_rgba(236,72,153,0.45)] md:w-[340px] min-h-[560px]" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))', backgroundColor: 'var(--card)', borderColor: '#ec4899' }}>
            <div className="text-xs uppercase tracking-wide mb-2" style={{ color: 'var(--muted-foreground)' }}>Plus</div>
            <div className="text-3xl font-semibold mb-1" style={{ color: 'var(--foreground)' }}>$20<span className="text-base font-medium ml-1" style={{ color: 'var(--muted-foreground)' }}>/Month</span></div>
            <div className="absolute right-4 top-4 text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: '#f1750f20', color: '#f1750f', border: '1px solid #f1750f' }}>Popular</div>
            <button className="w-full mt-4 text-sm font-semibold py-2 rounded-lg hover:opacity-95" style={{ backgroundColor: '#db610a', color: '#fff' }}>Upgrade to Plus</button>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                '600 Message Cap',
                '12 Document Uploads/mo',
                'Detailed Law Student Outlines (Exportable)',
                'Police Report Analysis',
                'Cross-Examination Builder',
                'Voir Dire Question Builder',
                'Juror Profile Creator',
                'Everything in Basic'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2" style={{ color: 'var(--muted-foreground)' }}>
                  <span className="mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro */}
          <div className="rounded-2xl p-5 border transition-all duration-200 hover:translate-y-[-3px] hover:shadow-[0_28px_80px_rgba(236,72,153,0.35)] hover:border-[#ec4899] md:w-[340px] min-h-[560px]" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--sidebar-border)' }}>
            <div className="text-xs uppercase tracking-wide mb-2" style={{ color: 'var(--muted-foreground)' }}>Pro</div>
            <div className="text-3xl font-semibold mb-1" style={{ color: 'var(--foreground)' }}>$60<span className="text-base font-medium ml-1" style={{ color: 'var(--muted-foreground)' }}>/Month</span></div>
            <button className="w-full mt-4 text-sm font-semibold py-2 rounded-lg" style={{ backgroundColor: '#db610a', color: '#fff' }}>Upgrade to Pro</button>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                '1000 Message Cap',
                '20 Document Uploads/mo',
                'Detailed Law Student Outlines (Exportable)',
                'Detailed Motion Drafting (Case-tailored)',
                'Batch Upload/Multi-file Search',
                'Everything in Plus'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2" style={{ color: 'var(--muted-foreground)' }}>
                  <span className="mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


