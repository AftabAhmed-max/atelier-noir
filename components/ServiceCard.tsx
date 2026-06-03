import Image from "next/image";
import MotionWrapper from "@/components/MotionWrapper";
import type { Service } from "@/data/content";

export default function ServiceCard({
  service,
  reversed = false,
}: {
  service: Service;
  reversed?: boolean;
}) {
  return (
    <MotionWrapper>
      <div
        className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
          reversed ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="relative aspect-[5/4] w-full overflow-hidden bg-taupe/20">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <span className="font-display text-5xl font-light text-taupe">
            {service.number}
          </span>
          <h3 className="mt-3 font-display text-3xl font-light leading-tight text-ink md:text-4xl">
            {service.title}
          </h3>
          <p className="mt-4 max-w-md font-body text-base font-light leading-relaxed text-ink/65">
            {service.summary}
          </p>
          <ul className="mt-7 flex flex-col gap-3 border-t border-rule pt-7">
            {service.includes.map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 font-body text-sm text-ink/70"
              >
                <span className="mt-1 text-clay">—</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MotionWrapper>
  );
}
