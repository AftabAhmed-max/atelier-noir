# Atelier Noir

A premium demo website for a fictional luxury interior design & bespoke furniture studio. Built as a Stackwork portfolio piece.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — custom warm-minimal palette & editorial type scale
- **Framer Motion** — subtle scroll reveals, hover micro-interactions, modal flow
- **next/font** (Cormorant Garamond + Inter) and **next/image** for optimised, lazy-loaded imagery

## Pages

| Route | Page |
|-------|------|
| `/` | Home — full-bleed hero, intro, featured collections, services, testimonials, closing CTA |
| `/about` | The studio story, philosophy, four values, founder + team |
| `/collections` | Portfolio grid with client-side category filter (Furniture / Interiors / Lighting / Full Spaces) |
| `/services` | Four service sections with details and CTA |
| `/contact` | Validated (faked) contact form, studio details, no-key OpenStreetMap embed |

## Notes

- **No backend.** All forms (contact, newsletter, consultation modal) are validated client-side and resolve to a polished success state — they store and send nothing.
- **All content** lives in [`data/content.ts`](data/content.ts) as a single source of truth.
- **Images** are remote (Unsplash); domains are allow-listed in `next.config.js`.
- **Map** is a no-API-key OpenStreetMap `export/embed.html` iframe.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy

Push to GitHub and import into Vercel. No environment variables are required.
