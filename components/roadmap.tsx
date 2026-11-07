"use client";

import { useState } from "react";
import { Check, Flag } from "lucide-react";
import { curriculum } from "@/lib/config";
import { track } from "@/lib/analytics";

export function Roadmap() {
  const [active, setActive] = useState(0);
  const item = curriculum[active];
  return (
    <div>
      <div className="grid gap-3 md:grid-cols-3" role="tablist" aria-label="Curriculum months">
        {curriculum.map((month, index) => (
          <button key={month.month} role="tab" aria-selected={active === index} onClick={() => { setActive(index); track("curriculum_viewed", { month: month.month }); }} className={`focus-ring rounded-2xl border p-5 text-left transition ${active === index ? "border-[#ff6b35] bg-[#ff6b35] text-[#101114]" : "border-white/12 bg-white/[.035] text-white hover:bg-white/[.07]"}`}>
            <span className="text-xs font-black uppercase tracking-[.14em]">{month.month}</span><span className="mt-2 block text-lg font-black">{month.phase}</span>
          </button>
        ))}
      </div>
      <div className="mt-5 grid overflow-hidden rounded-[28px] border border-white/10 bg-[#1c1e24] lg:grid-cols-[.92fr_1.08fr]">
        <div className="p-7 sm:p-10"><p className="eyebrow orange">{item.month} outcome</p><h3 className="mt-4 text-4xl font-black tracking-[-.05em] sm:text-5xl">{item.title}</h3><p className="mt-5 max-w-xl leading-7 text-white/60">{item.description}</p><div className="mt-8 rounded-2xl bg-white/[.05] p-5"><Flag className="orange" size={22}/><p className="mt-3 text-sm font-bold leading-6">{item.outcome}</p></div></div>
        <div className="border-t border-white/10 bg-[#15161a] p-7 sm:p-10 lg:border-l lg:border-t-0"><p className="eyebrow text-white/35">What you’ll work on</p><ul className="mt-6 grid gap-4 sm:grid-cols-2">{item.topics.map((topic) => <li key={topic} className="flex items-start gap-3 text-sm font-semibold text-white/75"><span className="mt-.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#ff6b35]/15 text-[#ff6b35]"><Check size={13}/></span>{topic}</li>)}</ul></div>
      </div>
    </div>
  );
}
