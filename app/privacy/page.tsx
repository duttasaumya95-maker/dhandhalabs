import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
export const metadata: Metadata = { title: "Privacy Policy" };
export default function Privacy(){return <LegalPage title="Privacy Policy" intro="This draft describes how application and website information may be handled once the business’s final systems and service providers are confirmed." sections={[
  {heading:"Information we collect",body:"Application details include your name, email address, phone number, and current occupation."},
  {heading:"How we use information",body:"Information may be used to review your application, communicate application or enrollment steps, administer the program, respond to inquiries, improve the website, prevent abuse, and meet legal obligations."},
  {heading:"Storage and service providers",body:"Lead storage is not configured in this prototype. Before launch, this section must identify the actual processors, storage locations, retention periods, safeguards, and international transfer arrangements, if any."},
  {heading:"Your choices",body:"Subject to applicable law, you may request access, correction, deletion, or information about the handling of your personal data. The final policy must provide a verified privacy contact and grievance process."},
  {heading:"Cookies and analytics",body:"No advertising pixels are included in this prototype. If analytics or cookies are added, the final policy and consent experience must describe them before tracking is enabled."}
]}/>}
