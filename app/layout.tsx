import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const url = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: { default: `${siteConfig.brandName} — Build Your Business. Hire AI. Launch in 90 Days.`, template: `%s | ${siteConfig.brandName}` },
  description: siteConfig.description,
  openGraph: { title: `${siteConfig.brandName} — Build Your Business. Hire AI. Launch in 90 Days.`, description: siteConfig.description, type: "website", locale: "en_IN" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
