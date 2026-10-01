export const company = {
  name: "CareBridge Solutions",
  shortName: "CareBridge",
  tagline: "Medical Billing That Gets Practices Paid",
  description:
    "Full-service medical billing and coding for clinics, labs, and specialty groups.",
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
  { value: "98%", label: "First-pass clean claims" },
  { value: "32%", label: "Faster patient collections" },
  { value: "15+", label: "Specialties we bill" },
  { value: "24/7", label: "Claim status visibility" },
] as const;

export const values = [
  {
    title: "Certified billers & coders",
    body: "CPC- and CPB-trained specialists who code CPT, ICD-10, and HCPCS against current payer rules — not generic claim pushers.",
  },
  {
    title: "Payer enrollment & follow-up",
    body: "We enroll providers, verify eligibility, submit claims daily, and work denials until the balance is paid or closed with a reason.",
  },
  {
    title: "Clear collection reporting",
    body: "Owners see clean-claim rate, A/R days, denial mix, and cash posted — without waiting for a month-end spreadsheet.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Review your billing",
    body: "We audit claim volume, denial reasons, enrollment gaps, and aged A/R so you know where money is leaking.",
  },
  {
    step: "02",
    title: "Set up the billing file",
    body: "Credentialing, clearinghouse, and EHR/PM connections go live with a dedicated billing manager.",
  },
  {
    step: "03",
    title: "Submit and follow up",
    body: "Charges are coded, scrubbed, and submitted daily. Rejections and denials are worked the same week.",
  },
  {
    step: "04",
    title: "Collect and report",
    body: "Payments are posted, underpayments are appealed, and you get a simple scorecard of what was billed and collected.",
  },
] as const;
