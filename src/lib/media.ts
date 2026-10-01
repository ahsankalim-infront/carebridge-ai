export const images = {
  clinic: "/images/clinic.jpg",
  team: "/images/team.jpg",
  doctor: "/images/doctor.jpg",
  hospital: "/images/hospital.jpg",
  analytics: "/images/analytics.jpg",
  lab: "/images/lab.jpg",
  consult: "/images/consult.jpg",
  billing: "/images/billing.jpg",
  cta: "/images/cta.jpg",
  officeFloor: "/images/office-floor.jpg",
  officeTeam: "/images/office-team.jpg",
  officeDesk: "/images/office-desk.jpg",
  officeWorkstations: "/images/office-workstations.jpg",
  officeClaims: "/images/office-claims.jpg",
  officeMeeting: "/images/office-meeting.jpg",
} as const;

export const serviceImages: Record<string, string> = {
  "medical-billing-coding": "/images/billing.jpg",
  "credentialing-enrollment": "/images/credentialing.jpg",
  "ar-recovery": "/images/analytics.jpg",
  "eligibility-verification": "/images/consult.jpg",
  "denial-management": "/images/hospital.jpg",
  "revenue-analytics": "/images/dashboard.jpg",
};

export const portraitImages: Record<string, string> = {
  "Dr. Emily Smith": "/images/portrait-emily.jpg",
  "Dr. Michael Johnson": "/images/portrait-michael.jpg",
  "Dr. Sophia Lee": "/images/portrait-sophia.jpg",
};

export function serviceImage(slug: string) {
  return serviceImages[slug] ?? images.clinic;
}

export function portraitImage(name: string) {
  return portraitImages[name] ?? images.doctor;
}
