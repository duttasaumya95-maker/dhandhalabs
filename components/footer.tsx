import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0c0e] py-14">
      <div className="container-site grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div><p className="text-2xl font-black tracking-[-.04em]">{siteConfig.brandName}<span className="orange">.</span></p><p className="mt-3 max-w-sm text-sm font-bold leading-6 text-white/75">{siteConfig.tagline}</p><p className="mt-2 max-w-sm text-xs leading-5 text-white/38">India&apos;s AI-powered 90-day business launch program. {siteConfig.brandStatus}.</p></div>
        <div><p className="eyebrow text-white/40">Explore</p><div className="mt-4 grid gap-3 text-sm font-semibold"><Link href="/program">The Program</Link><Link href="/#curriculum">Curriculum</Link><Link href="/apply">Apply</Link></div></div>
        <div><p className="eyebrow text-white/40">Legal</p><div className="mt-4 grid gap-3 text-sm font-semibold"><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms & Conditions</Link><Link href="/refund">Refund Policy</Link></div></div>
      </div>
      <div className="container-site mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</p><p>Draft website — business and legal review required before launch.</p></div>
    </footer>
  );
}
