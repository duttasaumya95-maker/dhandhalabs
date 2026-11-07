import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().trim().min(2).max(100),
  email: z.email().max(200),
  phone: z.string().refine((v) => /^[6-9]\d{9}$/.test(v.replace(/\D/g, "").replace(/^91/, "")), "Invalid Indian mobile number"),
  occupation: z.string().min(1).max(80),
});

export async function POST(request: Request) {
  try {
    const body = schema.parse(await request.json());
    const webhook = process.env.LEAD_STORAGE_WEBHOOK_URL;
    if (!webhook) return NextResponse.json({ ok: true, mode: "demo", message: "Validated in demo mode; not stored." });
    const response = await fetch(webhook, { method: "POST", headers: { "content-type": "application/json", ...(process.env.LEAD_STORAGE_API_KEY ? { authorization: `Bearer ${process.env.LEAD_STORAGE_API_KEY}` } : {}) }, body: JSON.stringify({ ...body, submittedAt: new Date().toISOString(), source: "website_application" }), cache: "no-store" });
    if (!response.ok) throw new Error("Lead storage rejected the application");
    return NextResponse.json({ ok: true, mode: "connected" });
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ error: "Please review the highlighted fields.", issues: error.issues }, { status: 400 });
    console.error("Application submission failed", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Application could not be submitted." }, { status: 502 });
  }
}
