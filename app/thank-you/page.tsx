import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";

export default async function ThankYou({ searchParams }: { searchParams: Promise<{ mode?: string }> }) {
  const { mode } = await searchParams; const demo = mode !== "connected";
  return <PageShell><section className="grid-noise min-h-[70vh] py-24"><div className="container-site max-w-3xl text-center"><CheckCircle2 className="mx-auto orange" size={58}/><p className="eyebrow orange mt-7">Application complete</p><h1 className="mt-5 text-5xl font-black tracking-[-.06em] sm:text-7xl">Thanks for taking the first step.</h1><p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/58">{demo ? "This prototype validated your application in demo mode, but did not save or send it. Connect lead storage before accepting real applications." : "Your application has been received. The team will review it and share next steps; this does not guarantee acceptance or confirm payment."}</p><Link href="/" className="button-primary mt-9">Back to Home <ArrowRight size={18}/></Link></div></section></PageShell>;
}
