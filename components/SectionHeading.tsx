import MotionWrapper from "@/components/MotionWrapper";

export default function SectionHeading({
  eyebrow,
  heading,
  body,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  heading: string;
  body?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  const alignment =
    align === "center" ? "text-center mx-auto items-center" : "text-left";

  return (
    <MotionWrapper className={`flex max-w-2xl flex-col gap-5 ${alignment}`}>
      {eyebrow && (
        <span className="font-body text-[11px] uppercase tracking-widest text-clay">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-4xl font-light leading-[1.08] tracking-tight md:text-5xl lg:text-[3.4rem] ${
          light ? "text-bone" : "text-ink"
        }`}
      >
        {heading}
      </h2>
      {body && (
        <p
          className={`max-w-xl text-base font-light leading-relaxed md:text-lg ${
            light ? "text-bone/70" : "text-ink/70"
          }`}
        >
          {body}
        </p>
      )}
    </MotionWrapper>
  );
}
