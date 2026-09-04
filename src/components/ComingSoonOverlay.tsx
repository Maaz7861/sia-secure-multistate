"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, BellRing, CheckCircle2, ShieldCheck, Mail } from "lucide-react";

export default function ComingSoonOverlay() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Light Theme Soft Backdrop Blur Curtain */}
      <div className="absolute inset-0 bg-slate-900/18 backdrop-blur-[6px] pointer-events-none" />

      {/* Floating Particles in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-2.5 h-2.5 rounded-full bg-emerald-500/30 blur-[1px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-amber-500/30 blur-[1px] animate-ping" />
      </div>

      {/* Executive Horizontal Split Floating Card */}
      <div className="relative pointer-events-auto w-full max-w-xl glass-card-executive rounded-2xl p-5 sm:p-7 border border-emerald-500/25 ring-1 ring-amber-400/25 shadow-[0_25px_60px_-15px_rgba(6,78,59,0.22)] animate-executive-glow flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-6 my-auto transition-all">
        
        {/* LEFT SIDE: Floating Logo Container */}
        <div className="relative shrink-0 flex items-center justify-center">
          {/* Subtle Ambient Halo */}
          <div className="absolute -inset-3 bg-gradient-to-tr from-emerald-200/60 via-amber-200/40 to-emerald-200/60 rounded-full blur-md animate-pulse" />
          
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 p-2.5 rounded-2xl bg-white border border-emerald-200/80 shadow-md animate-float-sleek flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="SIA Secure United Logo"
              width={105}
              height={105}
              priority
              className="object-contain drop-shadow-sm"
            />
          </div>
        </div>

        {/* RIGHT SIDE: Sleek Text Content & Form */}
        <div className="flex-1 text-center sm:text-left space-y-2">
          {/* Top Status Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold tracking-wide uppercase shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span>Coming Soon</span>
          </div>

          {/* Heading & Subheading */}
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold font-serif tracking-tight text-[#044e3a]">
              SIA SECURE UNITED
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-amber-700 tracking-normal mt-0.5">
              URBAN CREDIT CO-OPERATIVE SOCIETY LTD.
            </p>
          </div>

          {/* Short Description */}
          <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
            Our multi-state digital banking portal is launching soon to empower member security, savings & financial growth.
          </p>

          {/* Email VIP Notification Form */}
          <div className="pt-2">
            {submitted ? (
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Thank you! You will receive launch updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-center gap-2 max-w-xs mx-auto sm:mx-0">
                <div className="relative flex-1">
                  <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address..."
                    required
                    className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-800 placeholder:text-slate-400 text-xs focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 shadow-2xs"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs shadow-sm transition-all active:scale-95 cursor-pointer shrink-0"
                >
                  Notify
                </button>
              </form>
            )}
          </div>

          {/* Minimal Key Feature Badges */}
          <div className="pt-1.5 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[10px] font-medium text-slate-500">
            <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>Multi-State Regulated</span>
            </span>
            <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-900">
              <span>High Return FD</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
