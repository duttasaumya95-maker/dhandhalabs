import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
export const metadata: Metadata = { title: "Refund Policy" };
export default function Refund(){return <LegalPage title="Refund Policy" intro="Payments are not enabled in this prototype. A final, legally reviewed refund policy will be presented to applicants before any enrollment payment is requested." sections={[
  {heading:"Current status",body:"No live payment collection is connected. This page does not create a refund entitlement or payment obligation."},
  {heading:"Policy details to confirm",body:"The final policy must state the cooling-off period (if any), cancellation deadlines, eligible and non-eligible amounts, taxes and gateway fees, program postponement rules, transfer or deferral options, processing time, and request procedure."},
  {heading:"Before payment",body:"Applicants should receive the final program dates, session schedule, participation expectations, fee and tax details, included benefits, exclusions, and refund terms before completing payment."},
  {heading:"Contact",body:"A verified support email, business legal name, address, and escalation process must be added before launch."}
]}/>}
