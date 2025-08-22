"use client"

import { Link, useNavigate, useSearchParams } from "react-router"
import logo from "/logo.png"
import { ArrowLeft, Check, TriangleAlert, Timer } from "lucide-react"
import { useEffect, useState } from "react"
import { api } from "@/lib/api"

const DEFAULT_COOLDOWN_SEC = 105;

export default function EmailSentPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const email = params.get("email") || "";

  const [cooldown, setCooldown] = useState<number>(() => {
    const key = `pw_reset_cd_${email}`;
    const until = Number(localStorage.getItem(key) || "0");
    const remaining = Math.max(0, Math.floor((until - Date.now()) / 1000));
    return remaining;
  });

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setInterval(() => setCooldown((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [cooldown]);

  function startCooldown(seconds: number) {
    const key = `pw_reset_cd_${email}`;
    const until = Date.now() + seconds * 1000;
    localStorage.setItem(key, String(until));
    setCooldown(seconds);
  }

  async function resend() {
    if (!email) return;
    const res = await api.requestPasswordReset(email);
    if (res.success) startCooldown(DEFAULT_COOLDOWN_SEC);
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#121926] overflow-hidden py-10 md:py-16">
      <div className="w-[520px] max-w-full">
        <button onClick={() => navigate(-1)} className="inline-flex items-center text-[#cdd5df] hover:text-white mb-8 transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        <div
          className="relative mx-auto"
          style={{ ['--card-scale' as any]: 'min(0.35, calc((100vh - 240px) / 468px))', width: 'calc(520px * var(--card-scale))', height: 'calc(468px * var(--card-scale))' }}
        >
          <div className="bg-[#202939] rounded-2xl pt-10 pr-8 pb-8 pl-8 border border-[#364152] shadow-lg flex flex-col gap-6" style={{ transform: 'scale(var(--card-scale))', transformOrigin: 'top center' }}>
            <div className="flex justify-center">
              <img src={logo} alt="BearisterAI Logo" className="w-16 h-16 rounded-full shadow-lg object-cover" style={{marginTop: '-8px'}} />
            </div>

            <div className="text-center">
              <h1 className="text-2xl font-bold text-white mb-2">Forgot Password</h1>
              <p className="text-[#cdd5df] text-base">Enter your email to receive a password reset link</p>
            </div>

            <div className="rounded-xl border border-[#1e6f3a] bg-[#05180f] p-6 text-center">
              <div className="flex items-center justify-center mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#22c55e]">
                  <Check className="w-5 h-5 text-[#0a0f0c]" />
                </span>
              </div>
              <p className="text-[#cdd5df] text-[15px] leading-relaxed">
                If <span className="text-white font-semibold">adam@gmail.com</span> is registered with BearisterAI
                account, you’ll receive a password reset link. Be sure to
                check your spam folder as well.
              </p>
            </div>

            <div className="rounded-xl border border-[#f59e0b] bg-[#1a1309] p-4">
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#2a1b0a] border border-[#f59e0b] mr-3">
                  <TriangleAlert className="w-4 h-4 text-[#f59e0b]" />
                </span>
                <p className="text-[#cdd5df] text-sm">The reset link in the email can only be used once and expires in the next 2 hours.</p>
              </div>
            </div>

            <div className="text-center text-sm text-[#cdd5df]">
              <span>Don't get the link? </span>
              <button
                className="text-[#a2aab6] hover:text-[#e5e7eb] font-medium inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={cooldown > 0}
                onClick={resend}
              >
                Resend Link
                <Timer className="w-4 h-4 ml-2 mr-1 text-[#f59e0b]" />
                {cooldown > 0 && (
                  <span className="text-[#f59e0b] ml-1">
                    {String(Math.floor(cooldown / 60)).padStart(2, '0')}:{String(cooldown % 60).padStart(2, '0')}
                  </span>
                )}
              </button>
            </div>

            <div className="text-center">
              <Link to="/signin" className="text-[#cdd5df] hover:text-white text-sm font-medium">Back to login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


