export const company = {
  name: "CareBridge Solutions",
  shortName: "CareBridge",
  tagline: "Transforming Healthcare Revenue",
  description:
    "Empowering healthcare providers with innovative revenue cycle management solutions.",
  phone: "+1 737-443-5680",
  phoneHref: "tel:+17374435680",
  email: "info@carebridgesolutions.com",
  emailHref: "mailto:info@carebridgesolutions.com",
  address: "5900 Balcones Dr STE 100, Austin, TX",
  hours: "Mon–Fri, 8:00 AM – 6:00 PM CT",
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/appointments", label: "Appointments" },
] as const;

export const partners = [
  "Tebra",
  "AdvancedMD",
  "athenahealth",
  "RXNT",
] as const;

export const stats = [
  { value: "98%", label: "Clean claim rate" },
  { value: "32%", label: "Faster collections" },
  { value: "15+", label: "Clinical specialties" },
  { value: "24/7", label: "Claim visibility" },
] as const;

export const values = [
  {
    title: "Expert Team",
    body: "Certified medical coders and billing specialists dedicated to accuracy, payer rules, and specialty nuance.",
  },
  {
    title: "Technology-Driven",
    body: "Advanced RCM automation and analytics that speed collections and surface leakage before it becomes A/R.",
  },
  {
    title: "Transparent Reporting",
    body: "Real-time dashboards offering clarity, KPI tracking, and insights leadership can act on the same day.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    body: "We audit claims, denials, enrollment, and cash flow to map leakage and quick wins.",
  },
  {
    step: "02",
    title: "Onboard",
    body: "Credentialing, EHR/PM connections, and specialty playbooks go live with a dedicated manager.",
  },
  {
    step: "03",
    title: "Optimize",
    body: "Clean claims, eligibility, and denial loops run daily with root-cause fixes—not just follow-up.",
  },
  {
    step: "04",
    title: "Grow",
    body: "Dashboards, monthly reviews, and specialty expansion keep reimbursement climbing.",
  },
] as const;
