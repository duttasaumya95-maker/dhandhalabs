"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/config";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="divide-y divide-black/10 border-y border-black/10">{faqs.map(([q, a], i) => <div key={q}><button className="focus-ring flex w-full items-center justify-between gap-5 rounded py-6 text-left font-black" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}><span>{q}</span><ChevronDown className={`shrink-0 transition ${open === i ? "rotate-180" : ""}`} size={20}/></button>{open === i && <p className="max-w-3xl pb-6 pr-10 leading-7 text-black/60">{a}</p>}</div>)}</div>;
}
