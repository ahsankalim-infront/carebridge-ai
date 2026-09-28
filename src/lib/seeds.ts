import appointments from "../../data/appointments.json";
import messages from "../../data/messages.json";
import services from "../../data/services.json";
import specialties from "../../data/specialties.json";
import testimonials from "../../data/testimonials.json";

const bundled: Record<string, unknown> = {
  "appointments.json": appointments,
  "messages.json": messages,
  "services.json": services,
  "specialties.json": specialties,
  "testimonials.json": testimonials,
};

export function getBundledJson<T>(filename: string): T | null {
  if (!(filename in bundled)) return null;
  return structuredClone(bundled[filename]) as T;
}
