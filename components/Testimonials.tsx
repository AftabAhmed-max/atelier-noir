import MotionWrapper from "@/components/MotionWrapper";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-3">
      {testimonials.map((t, i) => (
        <MotionWrapper key={t.name} delay={i * 0.12} className="h-full">
          <figure className="flex h-full flex-col justify-between bg-bone p-8 md:p-10">
            <blockquote className="font-display text-xl font-light leading-relaxed text-ink/90 md:text-2xl">
              <span className="text-clay">“</span>
              {t.quote}
              <span className="text-clay">”</span>
            </blockquote>
            <figcaption className="mt-8 border-t border-rule pt-5">
              <p className="font-body text-sm font-medium text-ink">{t.name}</p>
              <p className="font-body text-[12px] uppercase tracking-widest text-ink/45">
                {t.detail}
              </p>
            </figcaption>
          </figure>
        </MotionWrapper>
      ))}
    </div>
  );
}
