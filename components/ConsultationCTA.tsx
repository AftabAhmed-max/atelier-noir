"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Variant = "light" | "dark" | "outline";

const styles: Record<Variant, string> = {
  light: "border-bone bg-bone text-ink hover:bg-transparent hover:text-bone",
  dark: "border-ink bg-ink text-bone hover:bg-transparent hover:text-ink",
  outline: "border-ink/40 text-ink hover:bg-ink hover:text-bone",
};

export default function ConsultationCTA({
  label = "Book a Consultation",
  variant = "dark",
}: {
  label?: string;
  variant?: Variant;
}) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", note: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const close = () => {
    setOpen(false);
    // Reset after the exit animation.
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", note: "" });
      setErrors({});
    }, 400);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "A valid email, please.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true); // Faked — sends nothing.
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`group inline-flex items-center gap-3 border px-8 py-4 font-body text-[12px] uppercase tracking-[0.2em] transition-all duration-500 ${styles[variant]}`}
      >
        {label}
        <span className="transition-transform duration-500 group-hover:translate-x-1">
          →
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-5"
          >
            <div
              className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
              onClick={close}
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg bg-bone p-8 md:p-12"
            >
              <button
                aria-label="Close"
                onClick={close}
                className="absolute right-6 top-6 font-body text-2xl leading-none text-ink/40 transition-colors hover:text-ink"
              >
                ×
              </button>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <span className="eyebrow">Book a Consultation</span>
                    <h3 className="mt-4 font-display text-3xl font-light leading-tight text-ink md:text-4xl">
                      Let us begin a conversation.
                    </h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-ink/60">
                      Share a few details and we will be in touch within two
                      working days to arrange a first meeting.
                    </p>

                    <form onSubmit={submit} noValidate className="mt-8 flex flex-col gap-5">
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
                        label="A little about the project (optional)"
                        textarea
                        value={form.note}
                        onChange={(v) => setForm({ ...form, note: v })}
                      />
                      <button
                        type="submit"
                        className="mt-2 inline-flex items-center justify-center gap-3 border border-ink bg-ink px-8 py-4 font-body text-[12px] uppercase tracking-[0.2em] text-bone transition-all duration-500 hover:bg-transparent hover:text-ink"
                      >
                        Request a Consultation →
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-6 text-center"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-clay text-clay">
                      ✓
                    </div>
                    <h3 className="mt-6 font-display text-3xl font-light text-ink">
                      Thank you, {form.name.split(" ")[0] || "and welcome"}.
                    </h3>
                    <p className="mx-auto mt-3 max-w-sm font-body text-sm leading-relaxed text-ink/60">
                      Your request has reached the studio. We will be in touch
                      shortly to arrange a first conversation.
                    </p>
                    <button
                      onClick={close}
                      className="mt-8 font-body text-[12px] uppercase tracking-[0.2em] text-ink underline-offset-4 hover:underline"
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
          rows={3}
          className="resize-none border-b border-ink/25 bg-transparent py-2 font-body text-sm text-ink outline-none transition-colors focus:border-clay"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border-b border-ink/25 bg-transparent py-2 font-body text-sm text-ink outline-none transition-colors focus:border-clay"
        />
      )}
      {error && <span className="font-body text-xs text-clay">{error}</span>}
    </label>
  );
}
