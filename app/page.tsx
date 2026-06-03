import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import MotionWrapper from "@/components/MotionWrapper";
import Testimonials from "@/components/Testimonials";
import ConsultationCTA from "@/components/ConsultationCTA";
import { home, collections, services } from "@/data/content";

const featured = collections.filter((c) =>
  ["colaba-residence", "monolith-dining", "plaster-living", "ember-pendant"].includes(c.id)
);

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Editorial intro */}
      <section className="section">
        <div className="container-editorial grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow">{home.intro.eyebrow}</span>
          </div>
          <div className="md:col-span-8">
            <MotionWrapper>
              <h2 className="max-w-2xl font-display text-3xl font-light leading-[1.12] tracking-tight text-ink md:text-5xl">
                {home.intro.heading}
              </h2>
              <div className="mt-8 grid max-w-3xl gap-6 md:grid-cols-2">
                {home.intro.body.map((p) => (
                  <p
                    key={p.slice(0, 24)}
                    className="font-body text-base font-light leading-relaxed text-ink/65"
                  >
                    {p}
                  </p>
                ))}
              </div>
              <Link
                href="/about"
                className="link-underline mt-10 inline-block font-body text-[12px] uppercase tracking-[0.2em] text-ink"
              >
                More about the studio →
              </Link>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Featured collections */}
      <section className="section bg-ink text-bone">
        <div className="container-editorial">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow={home.collectionsTeaser.eyebrow}
              heading={home.collectionsTeaser.heading}
              body={home.collectionsTeaser.body}
              light
            />
            <Link
              href="/collections"
              className="link-underline shrink-0 font-body text-[12px] uppercase tracking-[0.2em] text-bone"
            >
              View all work →
            </Link>
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((item, i) => (
              <MotionWrapper key={item.id} delay={i * 0.08}>
                <Link href="/collections" className="group block">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-bone/10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-light text-bone">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-body text-[12px] uppercase tracking-widest text-bone/40">
                    {item.category}
                  </p>
                </Link>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="section">
        <div className="container-editorial">
          <SectionHeading
            eyebrow={home.servicesTeaser.eyebrow}
            heading={home.servicesTeaser.heading}
            body={home.servicesTeaser.body}
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <MotionWrapper key={s.id} delay={i * 0.08} className="h-full">
                <Link
                  href="/services"
                  className="group flex h-full flex-col gap-4 bg-bone p-8 transition-colors duration-500 hover:bg-ink hover:text-bone"
                >
                  <span className="font-display text-4xl font-light text-taupe transition-colors group-hover:text-bone/50">
                    {s.number}
                  </span>
                  <h3 className="font-display text-2xl font-light leading-tight">
                    {s.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-ink/55 transition-colors group-hover:text-bone/60">
                    {s.summary}
                  </p>
                </Link>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-taupe/10">
        <div className="container-editorial">
          <SectionHeading
            eyebrow="In Their Words"
            heading="What our clients carry with them."
            align="center"
          />
          <div className="mt-14">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="container-editorial px-6 py-28 text-center md:px-10 md:py-40 lg:px-16">
          <MotionWrapper className="mx-auto flex max-w-2xl flex-col items-center gap-6">
            <span className="font-body text-[11px] uppercase tracking-widest text-clay">
              {home.closingCta.eyebrow}
            </span>
            <h2 className="font-display text-4xl font-light leading-[1.1] tracking-tight text-bone md:text-6xl">
              {home.closingCta.heading}
            </h2>
            <p className="max-w-xl font-body text-base font-light leading-relaxed text-bone/65">
              {home.closingCta.body}
            </p>
            <div className="mt-4">
              <ConsultationCTA label="Book a Consultation" variant="light" />
            </div>
          </MotionWrapper>
        </div>
      </section>
    </>
  );
}
