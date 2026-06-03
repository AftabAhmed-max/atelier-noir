import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import MotionWrapper from "@/components/MotionWrapper";
import ContactForm from "@/components/ContactForm";
import { contact, studio } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Begin a conversation with Atelier Noir. Visit the studio in Colaba, Mumbai, or send us a note about your space or commission.",
};

export default function ContactPage() {
  return (
    <>
      <section className="px-6 pb-12 pt-36 md:px-10 md:pt-44 lg:px-16">
        <div className="container-editorial">
          <SectionHeading
            eyebrow={contact.eyebrow}
            heading={contact.heading}
            body={contact.body}
          />
        </div>
      </section>

      <section className="px-6 pb-28 md:px-10 lg:px-16">
        <div className="container-editorial grid gap-16 md:grid-cols-12">
          {/* Form */}
          <div className="md:col-span-7">
            <ContactForm />
          </div>

          {/* Details */}
          <div className="md:col-span-5 md:pl-8">
            <MotionWrapper className="flex flex-col gap-10">
              <div>
                <h3 className="font-body text-[11px] uppercase tracking-widest text-clay">
                  The Studio
                </h3>
                <address className="mt-4 not-italic font-body text-base leading-relaxed text-ink/70">
                  {studio.address.line1}
                  <br />
                  {studio.address.line2}
                  <br />
                  {studio.address.city}
                </address>
              </div>

              <div>
                <h3 className="font-body text-[11px] uppercase tracking-widest text-clay">
                  Reach Us
                </h3>
                <div className="mt-4 flex flex-col gap-1 font-body text-base text-ink/70">
                  <a href={`mailto:${studio.email}`} className="link-underline w-fit">
                    {studio.email}
                  </a>
                  <a href={`tel:${studio.phone.replace(/\s/g, "")}`} className="link-underline w-fit">
                    {studio.phone}
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-body text-[11px] uppercase tracking-widest text-clay">
                  Studio Hours
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {studio.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between gap-6 font-body text-sm text-ink/70"
                    >
                      <span>{h.day}</span>
                      <span className="text-ink/50">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-body text-[11px] uppercase tracking-widest text-clay">
                  Follow
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {studio.social.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        className="link-underline font-body text-sm text-ink/70"
                      >
                        {s.label} — {s.handle}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-28 md:px-10 lg:px-16">
        <MotionWrapper className="container-editorial">
          <div className="relative aspect-[21/9] w-full overflow-hidden border border-rule bg-taupe/20">
            <iframe
              title="Atelier Noir studio location, Colaba, Mumbai"
              src={studio.mapEmbed}
              loading="lazy"
              className="absolute inset-0 h-full w-full grayscale"
              style={{ border: 0 }}
            />
          </div>
          <p className="mt-3 font-body text-[12px] uppercase tracking-widest text-ink/40">
            {studio.address.line1}, {studio.address.line2}, {studio.address.city}
          </p>
        </MotionWrapper>
      </section>
    </>
  );
}
