import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ConsultationCTA from "@/components/ConsultationCTA";
import MotionWrapper from "@/components/MotionWrapper";
import { services } from "@/data/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior design, bespoke furniture, design consultation and space planning. Four disciplines, one continuous hand — from a single chair to an entire residence.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-36 md:px-10 md:pt-44 lg:px-16">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="What We Do"
            heading="From a single chair to an entire residence."
            body="Four disciplines, one continuous hand. We can join a project at any stage — or carry it from raw shell to the last placed object."
          />
        </div>
      </section>

      <section className="px-6 pb-28 md:px-10 lg:px-16">
        <div className="container-editorial flex flex-col gap-24 md:gap-32">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-editorial px-6 py-24 text-center md:px-10 md:py-32 lg:px-16">
          <MotionWrapper className="mx-auto flex max-w-xl flex-col items-center gap-6">
            <span className="font-body text-[11px] uppercase tracking-widest text-clay">
              Begin
            </span>
            <h2 className="font-display text-4xl font-light leading-tight text-bone md:text-5xl">
              Not sure which is right for your project?
            </h2>
            <p className="max-w-md font-body text-base font-light leading-relaxed text-bone/65">
              Start with a conversation. We will help you find the engagement
              that fits the space, the budget, and the ambition.
            </p>
            <ConsultationCTA label="Book a Consultation" variant="light" />
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}
