"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { track } from "@/lib/analytics";

export function MobileApply() {
  return <div className="fixed inset-x-3 bottom-3 z-40 rounded-full border border-white/10 bg-[#101114]/92 p-1.5 shadow-2xl backdrop-blur-xl sm:hidden"><Link href="/apply" onClick={() => track("apply_click", { source: "mobile_sticky" })} className="button-primary w-full">Apply for the Program <ArrowUpRight size={17}/></Link></div>;
}
