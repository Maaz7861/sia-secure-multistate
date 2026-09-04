"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function ComingSoonOverlay() {
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
      <div className="relative pointer-events-auto w-full max-w-lg glass-card-executive rounded-2xl p-5 sm:p-7 border border-emerald-500/25 ring-1 ring-amber-400/25 shadow-[0_25px_60px_-15px_rgba(6,78,59,0.22)] animate-executive-glow flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-6 my-auto transition-all">
        
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

        {/* RIGHT SIDE: Sleek Text Content */}
        <div className="flex-1 text-center sm:text-left space-y-2.5">
          {/* Top Status Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold tracking-wide uppercase shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span>Coming Soon</span>
          </div>

          {/* Title */}
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold font-serif tracking-tight text-[#044e3a]">
              SIA SECURE UNITED MULTISTATE
            </h1>
          </div>

          {/* Short Description */}
          <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
            Our multi-state digital banking portal is launching soon to empower member security, savings & financial growth.
          </p>

          {/* Minimal Key Feature Badges */}
          <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[10px] font-medium text-slate-500">
            <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 border border-slate-200">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>Multi-State Regulated</span>
            </span>
            <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-amber-50 border border-amber-200 text-amber-900">
              <span>High Return FD</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
