import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { PageShell } from "./page-shell";
import { siteConfig } from "@/lib/config";

export type LegalSection = { heading: string; body: string };
export function LegalPage({ title, intro, sections }: { title: string; intro: string; sections: LegalSection[] }) {
  return <PageShell><section className="paper py-18 sm:py-24"><div className="container-site max-w-4xl"><p className="eyebrow text-[#ff6b35]">Draft legal document</p><h1 className="mt-5 text-5xl font-black tracking-[-.055em] sm:text-7xl">{title}</h1><div className="mt-8 flex gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm leading-6 text-amber-950"><AlertTriangle className="shrink-0" size={20}/><p>This is placeholder content for website development and requires review by qualified Indian legal counsel before publication or payment collection.</p></div><p className="mt-8 text-lg leading-8 text-black/60">{intro}</p><div className="mt-12 grid gap-10">{sections.map(s=><section key={s.heading}><h2 className="text-2xl font-black tracking-[-.03em]">{s.heading}</h2><p className="mt-3 whitespace-pre-line leading-7 text-black/60">{s.body}</p></section>)}</div><p className="mt-12 border-t border-black/10 pt-6 text-sm text-black/45">Last updated: 7 November 2026 (draft). Contact: {siteConfig.contactEmail} (placeholder). <Link href="/" className="font-bold underline">Return home</Link>.</p></div></section></PageShell>;
}
