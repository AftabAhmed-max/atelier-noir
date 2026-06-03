import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CollectionsGrid from "@/components/CollectionsGrid";
import ConsultationCTA from "@/components/ConsultationCTA";
import MotionWrapper from "@/components/MotionWrapper";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Selected furniture, lighting, interiors and full residences by Atelier Noir — each piece a single commission, refined until nothing remains to remove.",
};

export default function CollectionsPage() {
  return (
    <>
      <section className="px-6 pb-10 pt-36 md:px-10 md:pt-44 lg:px-16">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="Selected Work"
            heading="Collections & Commissions"
            body="A study in restraint. Every piece here was designed for one room and one life — furniture, lighting, interiors and whole residences, shown as they were made."
          />
        </div>
      </section>

      <section className="px-6 pb-28 md:px-10 lg:px-16">
        <div className="container-editorial">
          <CollectionsGrid />
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-editorial px-6 py-24 text-center md:px-10 md:py-32 lg:px-16">
          <MotionWrapper className="mx-auto flex max-w-xl flex-col items-center gap-6">
            <h2 className="font-display text-4xl font-light leading-tight text-bone md:text-5xl">
              Have a piece — or a place — in mind?
            </h2>
            <p className="max-w-md font-body text-base font-light leading-relaxed text-bone/65">
              Every commission begins as a conversation. Tell us what you are
              imagining and we will tell you how we would make it real.
            </p>
            <ConsultationCTA label="Commission a Piece" variant="light" />
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}
