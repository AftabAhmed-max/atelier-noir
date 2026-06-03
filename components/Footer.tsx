import Link from "next/link";
import { nav, studio } from "@/data/content";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="container-editorial px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="grid gap-14 md:grid-cols-12">
          {/* Wordmark + tagline */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="font-display text-2xl tracking-[0.32em] text-bone"
            >
              {studio.wordmark}
            </Link>
            <p className="mt-6 max-w-sm font-display text-2xl font-light leading-snug text-bone/80">
              {studio.tagline}
            </p>
            <p className="mt-6 font-body text-[12px] uppercase tracking-widest text-bone/40">
              {studio.established}
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-2">
            <h3 className="font-body text-[11px] uppercase tracking-widest text-bone/40">
              Navigate
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline font-body text-sm text-bone/75 hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + social */}
          <div className="md:col-span-2">
            <h3 className="font-body text-[11px] uppercase tracking-widest text-bone/40">
              Connect
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {studio.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="link-underline font-body text-sm text-bone/75 hover:text-bone"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={`mailto:${studio.email}`}
                  className="link-underline font-body text-sm text-bone/75 hover:text-bone"
                >
                  {studio.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <NewsletterSignup light />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-inkrule pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-body text-xs text-bone/40">
            © {new Date().getFullYear()} {studio.name}. All rights reserved.
          </p>
          <p className="font-body text-xs text-bone/40">
            {studio.address.line1}, {studio.address.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
