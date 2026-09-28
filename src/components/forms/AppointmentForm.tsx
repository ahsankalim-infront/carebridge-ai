"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { readResponseJson } from "@/lib/http";

const times = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"];

type Status =
  | { state: "idle" }
  | { state: "saving" }
  | { state: "success"; source: "mysql" | "json" }
  | { state: "error"; message: string };

export function AppointmentForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ state: "saving" });

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = await readResponseJson<{
        error?: string;
        source?: "mysql" | "json";
      }>(response);
      if (!response.ok || !payload?.source) {
        throw new Error(payload?.error || "Unable to book this consultation.");
      }
      form.reset();
      setStatus({ state: "success", source: payload.source });
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error instanceof Error ? error.message : "Something went wrong.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="glass-strong space-y-4 rounded-[1.5rem] p-5 sm:rounded-[2rem] sm:p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-2 block text-mist">Name</span>
          <input name="name" required className="field" placeholder="Your name" />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block text-mist">Email</span>
          <input name="email" type="email" required className="field" placeholder="you@practice.com" />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block text-mist">Phone</span>
          <input name="phone" required className="field" placeholder="+1 737-443-5680" />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block text-mist">Preferred Date</span>
          <input name="preferredDate" type="date" required className="field" />
        </label>
        <label className="block text-sm sm:col-span-2">
          <span className="mb-2 block text-mist">Preferred Time</span>
          <select name="preferredTime" required className="field" defaultValue="">
            <option value="" disabled>
              Select time
            </option>
            {times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-2 block text-mist">Reason for Consultation</span>
        <textarea
          name="reason"
          required
          rows={5}
          className="field resize-none"
          placeholder="Credentialing, A/R recovery, new location, specialty expansion..."
        />
      </label>
      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status.state === "saving"}>
        {status.state === "saving" ? "Booking..." : "Book Appointment"}
      </button>

      {status.state === "success" ? (
        <p className="rounded-2xl bg-teal/10 px-4 py-3 text-sm text-teal">
          Consultation reserved. Stored in {status.source === "mysql" ? "MySQL" : "JSON fallback"} and
          our team will confirm shortly.
        </p>
      ) : null}
      {status.state === "error" ? (
        <p className="rounded-2xl bg-red-500/10 px-4 py-3 text-sm text-red-700">
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
