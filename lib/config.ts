export const siteConfig = {
  brandName: "LaunchFoundry",
  brandStatus: "Working brand — replace before launch",
  tagline: "Don't Just Learn AI. Build Something With It.",
  description: "India's AI-powered entrepreneurship program: build your business, create an AI team, and launch in 90 days.",
  price: 15000,
  priceLabel: "Founding Program Fee",
  programStart: "To be announced",
  programSchedule: "Schedule to be confirmed before enrollment",
  enrollmentOpen: true,
  contactEmail: "hello@example.com",
  socialLinks: { linkedin: "", instagram: "", youtube: "" },
} as const;

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);

export const navigation = [
  ["The Program", "/program"],
  ["Curriculum", "/#curriculum"],
  ["Mentorship", "/#mentorship"],
  ["Founder Circle", "/#community"],
  ["Pricing", "/#pricing"],
  ["FAQs", "/#faqs"],
] as const;

export const curriculum = [
  {
    month: "Month 1",
    phase: "Discover & Validate",
    title: "Find a Business Worth Building.",
    description: "Explore opportunities, understand your customers, validate demand, and define a viable business offering.",
    topics: ["Entrepreneurial thinking", "Idea generation", "Market & competitor research", "Customer discovery", "Business models", "Pricing & revenue models", "Idea validation"],
    outcome: "A defined business idea supported by customer research and a clear initial offering.",
  },
  {
    month: "Month 2",
    phase: "Build & Prepare",
    title: "Turn Your Idea Into Something Real.",
    description: "Create the foundations of your business and develop something that customers can evaluate.",
    topics: ["Product & service development", "Minimum viable products", "AI & no-code tools", "Brand positioning", "Landing pages", "Payments & operations", "Launch preparation"],
    outcome: "A testable prototype or launch-ready product or service.",
  },
  {
    month: "Month 3",
    phase: "Launch & Sell",
    title: "Take Your Business to Market.",
    description: "Reach potential customers, test your sales approach, and improve your offering using real feedback.",
    topics: ["Marketing fundamentals", "Customer acquisition", "Sales & outreach", "Content & lead generation", "Paid marketing basics", "Sales funnels", "Customer feedback", "Unit economics", "Founder Demo Day"],
    outcome: "A launched offering, documented market feedback, and a practical 90-day growth roadmap.",
  },
] as const;

export const benefits = [
  ["Live Interactive Sessions", "Practical sessions designed around real business decisions."],
  ["Founder Mentorship", "Guidance and feedback from entrepreneurs and business operators."],
  ["Weekly Execution Assignments", "Practical tasks that contribute directly to your business."],
  ["Founder Circle Community", "Share progress, exchange feedback, and stay accountable."],
  ["AI and No-Code Tools", "Tools for research, branding, websites, marketing, and productivity."],
  ["Business Templates", "Worksheets, interview guides, frameworks, and launch checklists."],
  ["Launch Review and Demo Day", "Present your progress and identify what to improve next."],
  ["Business Launch Roadmap", "Finish with a clear plan for the next stage of your business."],
  ["Grant and Scheme Navigation", "Understand relevant government programmes, eligibility, and application pathways."],
  ["Investor Readiness", "Prepare your story, numbers, and pitch for relevant investor conversations."],
] as const;

export const faqs = [
  ["Do I need a business idea before joining?", "No. The program begins with opportunity identification and idea validation."],
  ["Is this suitable for beginners?", "Yes. The program is designed for aspiring first-time entrepreneurs."],
  ["Can I join while studying or working?", "Yes, provided you can meet the participation requirements. The final session schedule and expected workload will be confirmed before enrollment."],
  ["Will you build my business for me?", "No. You will build your own business while receiving structured learning, guidance, feedback, and accountability."],
  ["Will I definitely earn ₹15,000?", "No. The First Revenue Challenge is a learning goal, not an income guarantee."],
  ["Will I need additional money to start a business?", "Possibly. Business expenses depend on your chosen model. Advertising, software, inventory, registration, and other external costs are not automatically included."],
  ["Will I receive funding?", "Funding is not included or guaranteed. We provide information and navigation support for relevant grant, aid, credit, and investment pathways. Some specialised government programmes advertise support of ₹2.5 crore or more, but eligibility, availability, selection, structure, and award amounts are decided entirely by the relevant programme or institution."],
  ["Will you connect me with investors?", "For selected businesses that become investment-ready, we will help prepare for and seek relevant investor conversations where there is a credible fit. An introduction, meeting, due diligence process, term sheet, or investment is not guaranteed and remains subject to investor interest and availability."],
  ["Will I own my business?", "The program does not take equity in participants’ businesses. Ownership of participant-created work remains subject to applicable laws, contracts, and third-party service terms."],
  ["Is this an MBA or degree program?", "No. It is a practical entrepreneurship training and mentorship program."],
  ["What happens after the program?", "Participants receive their completed work and a roadmap for further business development. Any continuing alumni benefits will be specified separately."],
  ["What is the refund policy?", "The applicable refund policy will be published before payments are enabled."],
  ["When does the next program start?", `The next program start date is ${siteConfig.programStart.toLowerCase()}.`],
] as const;

export const mentors = [1, 2, 3].map((id) => ({ id, name: "Mentor profile coming soon", title: "Verified details will be added before launch", expertise: "Expertise to be confirmed", linkedIn: "" }));

export const founder = {
  name: "Founder profile coming soon",
  title: "Verified founder details will be added before launch",
  story: "This section is reserved for the founder’s background, startup experience, previous ventures, achievements, and personal story.",
  linkedIn: "",
};
