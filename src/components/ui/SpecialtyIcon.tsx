import {
  Accessibility,
  AudioLines,
  Bandage,
  Brain,
  Building2,
  Dna,
  FlaskConical,
  Handshake,
  HeartPulse,
  Microscope,
  Scan,
  Stethoscope,
  Users,
  PersonStanding,
} from "lucide-react";

const icons = {
  "Internal Medicine": Stethoscope,
  "Family Practice": Users,
  "Primary Care": HeartPulse,
  "Wound Care": Bandage,
  Radiology: Scan,
  Hospital: Building2,
  "Mental Health": Brain,
  Psychology: Brain,
  Prosthesis: Accessibility,
  "Courtesy Billing": Handshake,
  "Laboratory Billing": FlaskConical,
  "Pathology Lab": Microscope,
  "Molecular Lab": Dna,
  "Physical Therapy": PersonStanding,
  "Speech Therapy": AudioLines,
} as const;

export function SpecialtyIcon({
  name,
  className = "h-4 w-4",
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name as keyof typeof icons] ?? Stethoscope;
  return <Icon className={className} />;
}
