"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, siteConfig } from "@/lib/config";
import { track } from "@/lib/analytics";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101114]/90 backdrop-blur-xl">
      <div className="container-site flex h-18 items-center justify-between">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md" aria-label={`${siteConfig.brandName} home`}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#ff6b35] text-sm font-black text-[#101114]">LF</span>
          <span className="font-black tracking-[-.035em]">{siteConfig.brandName}<span className="orange">.</span></span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navigation.map(([label, href]) => <Link key={label} href={href} className="focus-ring rounded text-sm font-semibold text-white/70 hover:text-white">{label}</Link>)}
        </nav>
        <div className="hidden lg:block">
          <Link href="/apply" onClick={() => track("apply_click", { source: "header" })} className="button-primary focus-ring">Apply Now <ArrowUpRight size={17}/></Link>
        </div>
        <button className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/15 lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
      </div>
      {open && (
        <nav id="mobile-nav" className="container-site border-t border-white/10 py-5 lg:hidden" aria-label="Mobile navigation">
          <div className="grid gap-1">
            {navigation.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-bold text-white/80 hover:bg-white/5">{label}</Link>)}
            <Link href="/apply" onClick={() => { setOpen(false); track("apply_click", { source: "mobile_menu" }); }} className="button-primary mt-3">Apply Now <ArrowUpRight size={17}/></Link>
          </div>
        </nav>
      )}
    </header>
  );
}
