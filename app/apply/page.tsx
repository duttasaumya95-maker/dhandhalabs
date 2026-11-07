import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { ApplicationForm } from "@/components/application-form";
import { Check, LockKeyhole } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = { title: "Apply", description: `Apply to the ${siteConfig.brandName} founder program.` };

export default function ApplyPage() {
  return <PageShell><section className="grid-noise py-16 sm:py-24"><div className="container-site grid items-start gap-12 lg:grid-cols-[.72fr_1.28fr]"><div className="lg:sticky lg:top-28"><p className="eyebrow orange">Applications</p><h1 className="mt-5 text-5xl font-black leading-[.95] tracking-[-.06em] sm:text-7xl">Build your second option before you need it.</h1><p className="mt-6 text-lg leading-8 text-white/58">A job can change faster than your financial responsibilities. Share your basic contact details and current occupation to take the first step.</p><div className="mt-8 grid gap-4 text-sm font-bold text-white/70">{["Takes about 1 minute","No payment required","Reviewed before the next enrollment step"].map(x=><p key={x} className="flex gap-3"><Check className="orange" size={18}/>{x}</p>)}</div><div className="mt-8 flex gap-3 rounded-2xl border border-white/10 bg-white/[.035] p-5 text-xs leading-5 text-white/45"><LockKeyhole className="shrink-0 orange" size={18}/><p>Demo mode is active unless lead storage environment variables are configured. In demo mode, the application is validated but not saved.</p></div></div><ApplicationForm/></div></section></PageShell>;
}
