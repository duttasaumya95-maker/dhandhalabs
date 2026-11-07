"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AlertCircle, ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { track } from "@/lib/analytics";

type Fields = { fullName: string; email: string; phone: string; occupation: string };
const initial: Fields = { fullName: "", email: "", phone: "", occupation: "" };

export function ApplicationForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [status, setStatus] = useState<"idle"|"submitting"|"error">("idle");
  const [started, setStarted] = useState(false);
  const router = useRouter();
  const set = (name: keyof Fields, value: string) => { setForm(v => ({...v,[name]:value})); if (!started) { setStarted(true); track("application_started"); } };
  const validate = () => {
    const e: Record<string,string> = {};
    if (form.fullName.trim().length < 2) e.fullName = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email address.";
    const digits = form.phone.replace(/\D/g, "").replace(/^91/, "");
    if (!/^[6-9]\d{9}$/.test(digits)) e.phone = "Enter a valid 10-digit Indian mobile number.";
    if (!form.occupation) e.occupation = "Select your current occupation.";
    setErrors(e); return Object.keys(e).length === 0;
  };
  async function submit(event: React.FormEvent) {
    event.preventDefault(); if (!validate()) return;
    setStatus("submitting");
    try {
      const response = await fetch("/api/applications", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(form) });
      const data = await response.json(); if (!response.ok) throw new Error(data.error || "Submission failed");
      track("application_submitted", { mode: data.mode || "unknown" });
      router.push(`/thank-you?mode=${encodeURIComponent(data.mode || "demo")}`);
    } catch { setStatus("error"); }
  }
  const input = "focus-ring mt-2 min-h-12 w-full rounded-xl border border-black/15 bg-white px-4 text-[#171717] placeholder:text-black/30";
  return <form onSubmit={submit} noValidate className="rounded-[30px] bg-[#f8f7f3] p-6 text-[#171717] shadow-2xl sm:p-9">
    <div className="grid gap-6 sm:grid-cols-2">
      <Field label="Full name" required error={errors.fullName}><input className={input} value={form.fullName} onChange={e=>set("fullName",e.target.value)} autoComplete="name"/></Field>
      <Field label="Email address" required error={errors.email}><input className={input} type="email" value={form.email} onChange={e=>set("email",e.target.value)} autoComplete="email"/></Field>
      <Field label="Phone number" required hint="Indian mobile number" error={errors.phone}><input className={input} type="tel" placeholder="98765 43210" value={form.phone} onChange={e=>set("phone",e.target.value)} autoComplete="tel"/></Field>
      <Field label="Current occupation" required error={errors.occupation}><select className={input} value={form.occupation} onChange={e=>set("occupation",e.target.value)}><option value="">Select one</option><option>Student</option><option>Working professional</option><option>Freelancer</option><option>Business owner</option><option>Other</option></select></Field>
    </div>
    <div className="mt-7 border-t border-black/10 pt-6 text-sm leading-6 text-black/60">
      By submitting, you agree that we may use these details to review your application and contact you, as described in the <Link href="/privacy" className="font-bold text-black underline">Privacy Policy</Link>.
    </div>
    {status === "error" && <div role="alert" className="mt-5 flex gap-3 rounded-xl bg-red-50 p-4 text-sm font-bold text-red-800"><AlertCircle size={19}/>We couldn’t submit your application. Please check your connection and try again.</div>}
    <button disabled={status === "submitting"} className="button-primary focus-ring mt-7 w-full disabled:cursor-wait disabled:opacity-70">{status === "submitting" ? <><LoaderCircle className="animate-spin" size={18}/>Submitting…</> : <>Submit Application <ArrowRight size={18}/></>}</button>
    <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs font-semibold text-black/45"><CheckCircle2 size={15}/>Submission does not guarantee acceptance or confirm payment.</div>
  </form>;
}

function Field({label, required, hint, error, children}:{label:string;required?:boolean;hint?:string;error?:string;children:React.ReactNode}) {
  return <label className="block text-sm font-bold">{label}{required && <span className="text-[#ff6b35]"> *</span>}{hint && <span className="ml-2 font-normal text-black/40">{hint}</span>}{children}{error && <span className="mt-1 block text-xs text-red-700">{error}</span>}</label>;
}
