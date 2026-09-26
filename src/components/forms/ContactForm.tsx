"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type Status =
  | { state: "idle" }
  | { state: "saving" }
  | { state: "success"; source: "mysql" | "json" }
  | { state: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ state: "saving" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || "Unable to send your message.");
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
          <span className="mb-2 block text-mist">Full Name</span>
          <input name="fullName" required className="field" placeholder="Dr. Jordan Hale" />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block text-mist">Email</span>
          <input
            name="email"
            type="email"
            required
            className="field"
            placeholder="you@practice.com"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block text-mist">Phone</span>
          <input name="phone" required className="field" placeholder="+1 737-443-5680" />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block text-mist">Organization</span>
          <input
            name="organization"
            required
            className="field"
            placeholder="Hale Family Practice"
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-2 block text-mist">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          className="field resize-none"
          placeholder="Tell us about your billing volume, specialties, and goals."
        />
      </label>
      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status.state === "saving"}>
        {status.state === "saving" ? "Sending..." : "Send Message"}
      </button>

      {status.state === "success" ? (
        <p className="rounded-2xl bg-teal/10 px-4 py-3 text-sm text-teal">
          Message received. Saved to {status.source === "mysql" ? "MySQL" : "JSON fallback"} while
          we route it to the team.
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
