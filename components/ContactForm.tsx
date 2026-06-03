"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Form = { name: string; email: string; message: string };

export default function ContactForm() {
  const [form, setForm] = useState<Form>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Form>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Partial<Form> = {};
    if (form.name.trim().length < 2) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10)
      next.message = "A sentence or two about the project, please.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true); // Faked — stores nothing.
    }
  };

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-start gap-5 border border-rule p-10"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-clay text-clay">
            ✓
          </div>
          <h3 className="font-display text-3xl font-light text-ink">
            Thank you — we&rsquo;ll be in touch shortly.
          </h3>
          <p className="max-w-md font-body text-sm leading-relaxed text-ink/60">
            Your message has reached the studio. Expect a reply from one of us
            within two working days.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={submit}
          noValidate
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col gap-7"
        >
          <Field
            label="Name"
            value={form.name}
            onChange={(v) => setForm({ ...form, name: v })}
            error={errors.name}
          />
          <Field
            label="Email"
            type="email"
            value={form.email}
            onChange={(v) => setForm({ ...form, email: v })}
            error={errors.email}
          />
          <Field
            label="Your message"
            textarea
            value={form.message}
            onChange={(v) => setForm({ ...form, message: v })}
            error={errors.message}
          />
          <button
            type="submit"
            className="mt-2 inline-flex w-fit items-center gap-3 border border-ink bg-ink px-9 py-4 font-body text-[12px] uppercase tracking-[0.2em] text-bone transition-all duration-500 hover:bg-transparent hover:text-ink"
          >
            Send Message →
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  textarea = false,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  error?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-body text-[11px] uppercase tracking-widest text-ink/50">
        {label}
      </span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
          className="resize-none border-b border-ink/25 bg-transparent py-3 font-body text-base text-ink outline-none transition-colors focus:border-clay"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border-b border-ink/25 bg-transparent py-3 font-body text-base text-ink outline-none transition-colors focus:border-clay"
        />
      )}
      {error && <span className="font-body text-xs text-clay">{error}</span>}
    </label>
  );
}
