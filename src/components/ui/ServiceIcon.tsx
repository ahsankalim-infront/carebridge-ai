import {
  BadgeCheck,
  LineChart,
  Receipt,
  RefreshCcw,
  ShieldCheck,
  Wallet,
} from "lucide-react";

const icons = {
  billing: Receipt,
  credentialing: BadgeCheck,
  ar: Wallet,
  eligibility: ShieldCheck,
  denial: RefreshCcw,
  analytics: LineChart,
} as const;

export function ServiceIcon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name as keyof typeof icons] ?? Receipt;
  return <Icon className={className} />;
}
