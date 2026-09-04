"use client";

import React from "react";
import {
  ShieldCheck,
  Building2,
  TrendingUp,
  Award,
  Lock,
  PhoneCall,
  Mail,
  MapPin,
  ChevronRight,
  Calculator,
  UserCheck,
  Sparkles,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Coins,
  CreditCard
} from "lucide-react";

export default function LandingPageSkeleton() {
  return (
    <div className="relative w-full min-h-screen bg-slate-50 text-slate-800 overflow-hidden select-none">
      {/* Background Enhanced Dynamic Glow Meshes */}
      <div className="absolute top-0 left-1/4 w-[750px] h-[750px] bg-emerald-200/45 rounded-full blur-[140px] pointer-events-none animate-mesh-slow" />
      <div className="absolute top-[30%] right-5 w-[650px] h-[650px] bg-amber-100/60 rounded-full blur-[150px] pointer-events-none animate-mesh-slow" />
      <div className="absolute bottom-10 left-10 w-[700px] h-[700px] bg-teal-100/50 rounded-full blur-[160px] pointer-events-none" />

      {/* Modern Financial Dot & Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.07] pointer-events-none" />

      {/* 1. TOP CORPORATE NAVBAR SKELETON */}
      <header className="sticky top-0 z-20 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md px-6 py-3.5 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-md">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="w-36 h-4 bg-slate-800/80 rounded font-serif mb-1" />
              <div className="w-28 h-2.5 bg-amber-600/70 rounded" />
            </div>
          </div>

          {/* Nav Items */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-semibold text-slate-600">
            <span className="w-16 h-3 bg-slate-200 rounded" />
            <span className="w-20 h-3 bg-slate-200 rounded" />
            <span className="w-24 h-3 bg-slate-200 rounded" />
            <span className="w-20 h-3 bg-slate-200 rounded" />
            <span className="w-16 h-3 bg-slate-200 rounded" />
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Multi-State Regulated</span>
            </div>
            <div className="w-24 h-9 bg-emerald-700 text-white font-medium text-xs rounded-lg flex items-center justify-center shadow-sm">
              Member Portal
            </div>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION SKELETON */}
      <section className="relative pt-12 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-300/80 text-emerald-900 text-xs font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Urban Credit Co-Operative Financial Portal</span>
            </div>

            <div className="space-y-3">
              <div className="w-full h-11 sm:h-13 bg-slate-200 rounded-xl skeleton-shimmer-light" />
              <div className="w-4/5 h-11 sm:h-13 bg-emerald-100 rounded-xl skeleton-shimmer-light" />
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
              Empowering members across multi-state regions with zero-hidden-fee savings, high returns on fixed deposits, and doorstep executive banking services.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <div className="w-40 h-11 rounded-xl bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md">
                <span>Explore Accounts</span>
                <ChevronRight className="w-4 h-4" />
              </div>
              <div className="w-36 h-11 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold text-xs flex items-center justify-center shadow-sm">
                View Interest Rates
              </div>
            </div>

            {/* Financial Stat Counters Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                  <Coins className="w-4 h-4 text-amber-500" />
                  <span>Up to 12.5%</span>
                </div>
                <div className="text-xs text-slate-500 font-medium">Max Fixed Deposit</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                  <Building2 className="w-4 h-4 text-emerald-600" />
                  <span>25+ Branches</span>
                </div>
                <div className="text-xs text-slate-500 font-medium">Multi-State Network</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                  <UserCheck className="w-4 h-4 text-amber-500" />
                  <span>15,000+</span>
                </div>
                <div className="text-xs text-slate-500 font-medium">Active Society Members</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Card with Mock Chart SVG */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-5 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">FD & RD Annual Growth</div>
                    <div className="text-[10px] text-slate-500">Compound Return Rate</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                  +12.5% APY
                </span>
              </div>

              {/* Mock Vector Yield Curve Chart SVG */}
              <div className="relative w-full h-36 bg-slate-50 rounded-xl border border-slate-100 p-3 flex flex-col justify-end overflow-hidden">
                <svg className="w-full h-full text-emerald-500" viewBox="0 0 300 100" fill="none">
                  <path
                    d="M 0 80 Q 75 50 150 60 T 300 15"
                    stroke="#059669"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M 0 80 Q 75 50 150 60 T 300 15 L 300 100 L 0 100 Z"
                    fill="url(#emeraldGradient)"
                    opacity="0.15"
                  />
                  <defs>
                    <linearGradient id="emeraldGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#059669" />
                      <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-mono">
                  <span>Year 1</span>
                  <span>Year 2</span>
                  <span>Year 3</span>
                  <span>Year 5</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                  <div className="text-slate-500 text-[11px]">Regular Savings</div>
                  <div className="font-bold text-slate-800 mt-0.5">Daily Interest</div>
                </div>
                <div className="p-3 rounded-lg bg-amber-50/60 border border-amber-200/60 text-xs">
                  <div className="text-amber-800 text-[11px]">Co-op Dividend</div>
                  <div className="font-bold text-amber-900 mt-0.5">Annual Payout</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS & SERVICES GRID SKELETON */}
      <section className="py-16 px-6 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-lg mx-auto space-y-2 mb-12">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Co-Operative Products
            </span>
            <h2 className="text-2xl font-bold font-serif text-slate-900">Financial Solutions For Members</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Fixed Deposits (FD)", tag: "Up to 12.5%", desc: "Flexible tenure options with quarterly or monthly interest payouts.", icon: TrendingUp },
              { title: "Recurring Deposit (RD)", tag: "Daily Savings", desc: "Build wealth systematically with automated monthly installment options.", icon: Lock },
              { title: "Gold & Mortgage Loans", tag: "Low Interest", desc: "Instant valuation, minimal paperwork, and quick doorstep disbursal.", icon: Award },
              { title: "Society Share Capital", tag: "Member Rights", desc: "Become a licensed shareholder member with voting rights & annual dividend.", icon: Building2 }
            ].map((prod, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4 hover:border-emerald-300 transition-all shadow-2xs">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <prod.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                    {prod.tag}
                  </span>
                </div>
                <h3 className="font-bold text-slate-800 text-base">{prod.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{prod.desc}</p>
                <div className="pt-2 flex items-center text-xs font-semibold text-emerald-700 gap-1">
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOOTER SKELETON */}
      <footer className="py-12 px-6 bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-amber-400" />
              <span className="font-bold text-white text-sm">SIA SECURE UNITED</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Urban Credit Co-Operative Society Ltd. Authorized multi-state credit society.
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-slate-200 font-semibold mb-2">Quick Navigation</div>
            <div>About Society</div>
            <div>Fixed Deposit Rates</div>
            <div>Branch Locator</div>
          </div>
          <div className="space-y-2">
            <div className="text-slate-200 font-semibold mb-2">Member Support</div>
            <div>Doorstep Banking</div>
            <div>KYC Requirements</div>
            <div>Grievance Redressal</div>
          </div>
          <div className="space-y-2">
            <div className="text-slate-200 font-semibold mb-2">Registered HQ</div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Multi-State HQ, Sector 18, Commercial Hub.</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
              <span>1800-SIA-SECURE</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-6 border-t border-slate-800 flex justify-between text-[11px] text-slate-500">
          <span>&copy; {new Date().getFullYear()} SIA Secure United Urban Credit Co-Operative Society Ltd.</span>
          <span>Privacy Policy • Terms of Service</span>
        </div>
      </footer>
    </div>
  );
}
