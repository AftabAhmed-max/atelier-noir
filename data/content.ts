// ─────────────────────────────────────────────────────────────────────────
//  ATELIER NOIR — single source of truth for all site copy & data.
//  Fictional luxury interior design & bespoke furniture studio.
// ─────────────────────────────────────────────────────────────────────────

export const studio = {
  name: "Atelier Noir",
  wordmark: "ATELIER NOIR",
  tagline: "Interiors composed, not decorated.",
  established: "Est. 2009 · Mumbai & Milan",
  shortIntro:
    "A design house for those who treat a home as a long conversation between light, material, and time.",
  email: "studio@ateliernoir.example",
  phone: "+91 22 4000 0900",
  address: {
    line1: "Ground Floor, The Linseed House",
    line2: "14 Apollo Bunder Marg, Colaba",
    city: "Mumbai 400001, India",
  },
  hours: [
    { day: "Monday – Friday", time: "10:00 – 19:00" },
    { day: "Saturday", time: "11:00 – 17:00" },
    { day: "Sunday", time: "By appointment" },
  ],
  social: [
    { label: "Instagram", handle: "@ateliernoir.studio", href: "#" },
    { label: "Pinterest", handle: "/ateliernoir", href: "#" },
    { label: "LinkedIn", handle: "/atelier-noir", href: "#" },
  ],
  // OpenStreetMap embed — no API key required.
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=72.8285%2C18.9180%2C72.8375%2C18.9260&layer=mapnik&marker=18.9220%2C72.8330",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Studio", href: "/about" },
  { label: "Collections", href: "/collections" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

// ── Home ──────────────────────────────────────────────────────────────────
export const home = {
  heroImage:
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=80",
  heroEyebrow: studio.established,
  heroTitle: "Atelier Noir",
  heroTagline:
    "Interiors composed, not decorated — for those who measure a home in decades.",
  intro: {
    eyebrow: "The Studio",
    heading: "We design rooms that age the way good things do.",
    body: [
      "Atelier Noir is a Mumbai- and Milan-based studio working at the meeting point of architecture, furniture, and the quiet rituals of everyday life. We take on a small number of residences and private spaces each year, and we stay with each one from the first sketch to the final placed object.",
      "Our work is unhurried and material-led. We favour honest stone, oiled timber, hand-troweled plaster and aged brass — surfaces that record time rather than resist it.",
    ],
  },
  collectionsTeaser: {
    eyebrow: "Selected Work",
    heading: "Collections & Commissions",
    body: "A study in restraint — furniture and interiors shaped for a single home, then refined until nothing remains to remove.",
  },
  servicesTeaser: {
    eyebrow: "What We Do",
    heading: "From a single chair to an entire residence.",
    body: "Four disciplines, one continuous hand. We can join a project at any stage — or carry it from raw shell to the last cushion.",
  },
  closingCta: {
    eyebrow: "Begin",
    heading: "Every Atelier Noir project starts with a conversation.",
    body: "Tell us about the space, the life it needs to hold, and the feeling you are chasing. We will tell you, honestly, whether we are the right studio for it.",
  },
};

// ── Collections / Portfolio ────────────────────────────────────────────────
export type Collection = {
  id: string;
  title: string;
  category: "Furniture" | "Interiors" | "Lighting" | "Full Spaces";
  caption: string;
  image: string;
};

export const collectionCategories = [
  "All",
  "Furniture",
  "Interiors",
  "Lighting",
  "Full Spaces",
] as const;

export const collections: Collection[] = [
  {
    id: "linnea-lounge",
    title: "Linnéa Lounge Chair",
    category: "Furniture",
    caption: "Steam-bent ash, hand-stitched saddle leather. A single commission, 2023.",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "colaba-residence",
    title: "Colaba Sea-Facing Residence",
    category: "Full Spaces",
    caption: "A 340 m² apartment reworked around the light off the Arabian Sea.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "monolith-dining",
    title: "Monolith Dining Table",
    category: "Furniture",
    caption: "A single slab of Kandla grey limestone on a blackened steel cradle.",
    image:
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "plaster-living",
    title: "The Plaster Living Room",
    category: "Interiors",
    caption: "Hand-troweled lime walls, a sunken seat, and one very old olive tree.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ember-pendant",
    title: "Ember Pendant",
    category: "Lighting",
    caption: "Spun brass and mouth-blown amber glass, dimmed to candlelight.",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "reading-corner",
    title: "The Reading Corner",
    category: "Interiors",
    caption: "A study in shadow — oak shelving, a low lamp, and room to think.",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "halo-sconce",
    title: "Halo Wall Sconce",
    category: "Lighting",
    caption: "A thin ring of light in patinated bronze, made to wash plaster.",
    image:
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "milan-pied",
    title: "Milan Pied-à-Terre",
    category: "Full Spaces",
    caption: "A compact city flat layered in walnut, travertine and warm shadow.",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "quiet-bedroom",
    title: "The Quiet Bedroom",
    category: "Interiors",
    caption: "Linen, lime-wash and a headboard wrapped in undyed wool.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "spindle-stool",
    title: "Spindle Counter Stool",
    category: "Furniture",
    caption: "Turned teak, woven cane seat. Built for forty years of mornings.",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "atrium-house",
    title: "The Atrium House",
    category: "Full Spaces",
    caption: "A courtyard home organised around a single shaft of falling light.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "totem-floor-lamp",
    title: "Totem Floor Lamp",
    category: "Lighting",
    caption: "Stacked travertine discs, a soft uplight, a deliberate weight.",
    image:
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=80",
  },
];

// ── Services ────────────────────────────────────────────────────────────────
export type Service = {
  id: string;
  number: string;
  title: string;
  summary: string;
  includes: string[];
  image: string;
};

export const services: Service[] = [
  {
    id: "interior-design",
    number: "01",
    title: "Interior Design",
    summary:
      "Full creative authorship of a space — concept, material palette, lighting, furniture and styling, resolved as one coherent whole.",
    includes: [
      "Concept direction & mood narrative",
      "Material, finish & colour palettes",
      "Lighting design & specification",
      "Furniture selection & bespoke pieces",
      "On-site art direction through to handover",
    ],
    image:
      "https://images.unsplash.com/photo-1618219740975-d40978bb7378?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "bespoke-furniture",
    number: "02",
    title: "Bespoke Furniture",
    summary:
      "Pieces designed for one room and made by hand with our workshop partners in India and Italy — yours alone, built to outlive trends.",
    includes: [
      "Original design developed to your brief",
      "Material sourcing & joinery detailing",
      "Maker-built prototypes & finish samples",
      "Hand-finishing in oiled timber, stone & brass",
      "White-glove delivery & placement",
    ],
    image:
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "consultation",
    number: "03",
    title: "Design Consultation",
    summary:
      "A focused engagement for those who want expert direction without full delegation — clarity on what to keep, change, and commission.",
    includes: [
      "Half-day studio or on-site session",
      "Spatial & material assessment",
      "Curated palette & sourcing direction",
      "Prioritised, written action plan",
      "One follow-up review",
    ],
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "space-planning",
    number: "04",
    title: "Space Planning",
    summary:
      "Re-drawing how a home is lived in — circulation, proportion and light — often before a single finish is chosen.",
    includes: [
      "Measured survey & existing-condition study",
      "Layout & circulation options",
      "Joinery & storage strategy",
      "Daylight & sightline analysis",
      "Drawings ready for your contractor",
    ],
    image:
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1400&q=80",
  },
];

// ── About ─────────────────────────────────────────────────────────────────
export const about = {
  hero: {
    eyebrow: "The Studio",
    heading: "A small studio, by design.",
    body: "We have stayed deliberately small for fifteen years. It is the only way we know to give each project the attention it deserves.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80",
  },
  story: {
    eyebrow: "Our Story",
    heading: "Founded on a single, stubborn belief.",
    body: [
      "Atelier Noir began in 2009 in a borrowed workshop in Colaba, with one carpenter, a drawing board, and a conviction that good interiors are not assembled from catalogues but composed, slowly, from the life that will happen inside them.",
      "Fifteen years on, we work between Mumbai and Milan, but little else has changed. We still draw by hand before we draw by machine. We still take only a handful of projects a year. And we still believe the best compliment a room can receive is that it feels as though it could not have been any other way.",
    ],
  },
  philosophy: {
    eyebrow: "Philosophy",
    heading: "Warm minimalism — but never cold.",
    body: "We are minimalists who distrust the word. Restraint, to us, is not the absence of warmth; it is the discipline that lets warmth be felt. We edit hard so that what remains can breathe.",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1600&q=80",
  },
  values: [
    {
      number: "01",
      title: "Material Honesty",
      body: "We use real things — stone, timber, lime, brass — and let them show their grain, their seams, their age. Nothing pretends to be what it is not.",
    },
    {
      number: "02",
      title: "Considered Restraint",
      body: "We remove until removing more would break the room. The luxury is in the space we leave empty as much as the objects we place.",
    },
    {
      number: "03",
      title: "Built to Last",
      body: "Every piece is made to be repaired, not replaced. We design for the patina of decades, not the applause of a season.",
    },
    {
      number: "04",
      title: "One Studio, Start to Finish",
      body: "The hand that sketches the concept is the hand that places the final object. No outsourced taste, no diluted vision.",
    },
  ],
  team: {
    eyebrow: "The People",
    heading: "Few hands, fully committed.",
    members: [
      {
        name: "Ishaan Varma",
        role: "Founder & Principal Designer",
        bio: "Trained as an architect in Mumbai and Milan, Ishaan founded Atelier Noir to work at a slower, more material scale than buildings allowed. He leads every project personally.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Sofia Marchetti",
        role: "Design Director",
        bio: "Milan-born and Florence-trained, Sofia shapes the studio's material language and oversees our Italian workshop partners. She has an unforgiving eye for proportion.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Rohan Pillai",
        role: "Head of Workshop",
        bio: "A third-generation cabinetmaker, Rohan turns drawings into objects. If a joint can be made stronger or a curve made truer, he will find the way.",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Aanya Desai",
        role: "Studio & Client Director",
        bio: "Aanya keeps every project honest to its budget and its timeline, and is the calm voice clients reach first. Nothing leaves the studio without passing her.",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
};

// ── Testimonials ────────────────────────────────────────────────────────────
export const testimonials = [
  {
    quote:
      "They listened for a long time before they drew anything. The home they gave us feels less like a project and more like a portrait of how we actually live.",
    name: "Meera & Karan Shah",
    detail: "Colaba Sea-Facing Residence",
  },
  {
    quote:
      "I have bought furniture my whole life. This is the first time I have owned a piece I expect my daughter to keep. The dining table is, quite simply, perfect.",
    name: "Alessandro Conti",
    detail: "Private Collector, Milan",
  },
  {
    quote:
      "Restrained, warm, and utterly uncompromising on the details no one else would have noticed. Atelier Noir gave our flat a stillness we did not know we were missing.",
    name: "Dr. Naina Rao",
    detail: "Milan Pied-à-Terre",
  },
];

// ── Contact ──────────────────────────────────────────────────────────────────
export const contact = {
  eyebrow: "Contact",
  heading: "Let us begin a conversation.",
  body: "Whether it is a single commissioned piece or an entire residence, we would be glad to hear what you have in mind. Tell us a little about the space and we will be in touch shortly.",
};
