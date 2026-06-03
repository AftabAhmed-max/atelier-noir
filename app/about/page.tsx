import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import MotionWrapper from "@/components/MotionWrapper";
import ConsultationCTA from "@/components/ConsultationCTA";
import { about } from "@/data/content";

export const metadata: Metadata = {
  title: "The Studio",
  description:
    "Atelier Noir is a small, deliberately unhurried interior design and furniture studio working between Mumbai and Milan. Meet the founder, the team, and the philosophy.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="px-6 pb-12 pt-36 md:px-10 md:pt-44 lg:px-16">
        <div className="container-editorial">
          <SectionHeading
            eyebrow={about.hero.eyebrow}
            heading={about.hero.heading}
            body={about.hero.body}
          />
        </div>
      </section>

      {/* Hero image */}
      <section className="px-6 md:px-10 lg:px-16">
        <MotionWrapper className="container-editorial">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-taupe/20">
            <Image
              src={about.hero.image}
              alt="Inside the Atelier Noir studio"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </MotionWrapper>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container-editorial grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow">{about.story.eyebrow}</span>
            <h2 className="mt-5 font-display text-3xl font-light leading-tight text-ink md:text-4xl">
              {about.story.heading}
            </h2>
          </div>
          <div className="md:col-span-8 md:pt-2">
            <MotionWrapper className="grid max-w-3xl gap-6">
              {about.story.body.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="font-body text-lg font-light leading-relaxed text-ink/70"
                >
                  {p}
                </p>
              ))}
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section bg-ink text-bone">
        <div className="container-editorial grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <MotionWrapper>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-bone/10">
              <Image
                src={about.philosophy.image}
                alt="A detail of material and light"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </MotionWrapper>
          <SectionHeading
            eyebrow={about.philosophy.eyebrow}
            heading={about.philosophy.heading}
            body={about.philosophy.body}
            light
          />
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-editorial">
          <SectionHeading eyebrow="What Guides Us" heading="Four principles, quietly held." />
          <div className="mt-14 grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v, i) => (
              <MotionWrapper key={v.number} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col gap-4 bg-bone p-8">
                  <span className="font-display text-4xl font-light text-taupe">
                    {v.number}
                  </span>
                  <h3 className="font-display text-2xl font-light leading-tight text-ink">
                    {v.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-ink/60">
                    {v.body}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-taupe/10">
        <div className="container-editorial">
          <SectionHeading
            eyebrow={about.team.eyebrow}
            heading={about.team.heading}
          />
          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {about.team.members.map((m, i) => (
              <MotionWrapper key={m.name} delay={i * 0.08}>
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-taupe/20 grayscale transition-all duration-700 hover:grayscale-0">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl font-light text-ink">
                  {m.name}
                </h3>
                <p className="font-body text-[11px] uppercase tracking-widest text-clay">
                  {m.role}
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-ink/60">
                  {m.bio}
                </p>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-bone">
        <div className="container-editorial px-6 py-24 text-center md:px-10 md:py-32 lg:px-16">
          <MotionWrapper className="mx-auto flex max-w-xl flex-col items-center gap-6">
            <h2 className="font-display text-4xl font-light leading-tight text-bone md:text-5xl">
              We would love to hear about your space.
            </h2>
            <ConsultationCTA label="Book a Consultation" variant="light" />
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}
