import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
export const metadata: Metadata = { title: "Terms & Conditions" };
export default function Terms(){return <LegalPage title="Terms & Conditions" intro="These draft terms outline the intended scope of the entrepreneurship training program. Final terms must be completed before accepting enrollments or payments." sections={[
  {heading:"Program nature",body:"The program is practical entrepreneurship training and mentorship. It is not a degree, MBA, investment service, business partnership, franchise, or guarantee of business performance."},
  {heading:"Eligibility and enrollment",body:"Final age, participation, scheduling, application review, acceptance, payment, tax, and program requirements will be confirmed before enrollment. Submitting an application does not guarantee acceptance."},
  {heading:"Participant responsibilities",body:"Participants are responsible for their business decisions, attendance, assignments, legal and regulatory compliance, third-party services, expenses, taxes, and the accuracy of information they provide."},
  {heading:"No guarantees",body:"Revenue, profit, customers, funding, employment, launch, or business success are not guaranteed. The First ₹15,000 Revenue Challenge is an aspirational learning milestone only."},
  {heading:"Intellectual property",body:"Final terms must distinguish program materials from participant-created work and address licenses, confidentiality, recordings, community conduct, and third-party tool terms."},
  {heading:"Changes and cancellation",body:"The final terms must explain how schedule, mentor, curriculum, program postponement, cancellation, and force-majeure changes will be handled."}
]}/>}
