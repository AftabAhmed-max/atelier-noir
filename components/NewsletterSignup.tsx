"use client";

import { useState } from "react";

export default function NewsletterSignup({ light = false }: { light?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setDone(true); // Faked — stores nothing.
  };

  const labelColor = light ? "text-bone/60" : "text-ink/60";
  const borderColor = light ? "border-bone/30" : "border-ink/25";
  const textColor = light ? "text-bone placeholder:text-bone/40" : "text-ink placeholder:text-ink/40";

  if (done) {
    return (
      <p className={`font-body text-sm leading-relaxed ${light ? "text-bone/80" : "text-ink/70"}`}>
        Thank you — you are on the list. We write rarely, and only when there is
        something worth saying.
      </p>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-2">
      <label className={`font-body text-[11px] uppercase tracking-widest ${labelColor}`}>
        The Studio Letter
      </label>
      <div className={`flex items-center border-b ${borderColor}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className={`w-full bg-transparent py-2 font-body text-sm outline-none ${textColor}`}
        />
        <button
          type="submit"
          className={`shrink-0 pl-4 font-body text-[12px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60 ${
            light ? "text-bone" : "text-ink"
          }`}
        >
          Join →
        </button>
      </div>
      {error && <span className="font-body text-xs text-clay">{error}</span>}
    </form>
  );
}
