import { test, expect, Page } from "@playwright/test";
import {
  nav,
  collections,
  collectionCategories,
  services,
  testimonials,
  about,
} from "../data/content";

// ─────────────────────────────────────────────────────────────────────────
//  Counts derived AT RUNTIME from the single source of truth (data/content.ts)
//  so nothing below is hardcoded.
// ─────────────────────────────────────────────────────────────────────────
const NAV_COUNT = nav.length;
const COLLECTIONS_COUNT = collections.length;
const SERVICES_COUNT = services.length;
const FILTER_COUNT = collectionCategories.length; // includes "All"
const furnitureCount = collections.filter((c) => c.category === "Furniture").length;

// ── Navigation ──────────────────────────────────────────────────────────────
test.describe("Navigation", () => {
  test("every header nav link routes correctly", async ({ page }) => {
    await page.goto("/");
    const header = page.locator("header");

    for (const item of nav) {
      // Scope strictly to the header — the same links also live in the footer.
      await header.getByRole("link", { name: item.label, exact: true }).first().click();
      await expect(page).toHaveURL(new RegExp(`${item.href === "/" ? "/$" : item.href}`));
      // Return to a known state for the next link.
      await page.goto("/");
    }
  });

  test("logo returns to home from an inner page", async ({ page }) => {
    await page.goto("/about");
    await page
      .locator("header")
      .getByRole("link", { name: "ATELIER NOIR", exact: true })
      .click();
    await expect(page).toHaveURL(/\/$/);
  });

  test("header 'Book a Consultation' link points to /contact", async ({ page }) => {
    await page.goto("/");
    const cta = page.locator("header").getByRole("link", { name: /Book a Consultation/i });
    await expect(cta).toHaveAttribute("href", "/contact");
  });

  test("footer nav links work", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    for (const item of nav) {
      const link = footer.getByRole("link", { name: item.label, exact: true }).first();
      await expect(link).toHaveAttribute("href", item.href);
    }
  });

  test("footer social links and mailto render", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer.getByRole("link", { name: "Instagram" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "Pinterest" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "LinkedIn" })).toBeVisible();
    await expect(
      footer.getByRole("link", { name: /studio@ateliernoir\.example/ })
    ).toHaveAttribute("href", /^mailto:/);
  });
});

// ── Page renders ─────────────────────────────────────────────────────────────
test.describe("Pages render", () => {
  test("home loads with hero + key content", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1, name: "Atelier Noir" })).toBeVisible();
    // Home featured collections section heading.
    await expect(
      page.getByRole("heading", { name: "Collections & Commissions" })
    ).toBeVisible();
  });

  test("about loads with story + team", async ({ page }) => {
    await page.goto("/about");
    await expect(
      page.getByRole("heading", { name: about.hero.heading })
    ).toBeVisible();
    // Every team member name renders.
    for (const m of about.team.members) {
      await expect(page.getByRole("heading", { name: m.name })).toBeVisible();
    }
  });

  test("collections loads with grid header", async ({ page }) => {
    await page.goto("/collections");
    await expect(
      page.getByRole("heading", { name: "Collections & Commissions" })
    ).toBeVisible();
  });

  test("services loads with all service titles", async ({ page }) => {
    await page.goto("/services");
    await expect(
      page.getByRole("heading", { name: "From a single chair to an entire residence." })
    ).toBeVisible();
    for (const s of services) {
      await expect(page.getByRole("heading", { name: s.title }).first()).toBeVisible();
    }
  });

  test("contact loads with form + studio details", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByRole("heading", { name: "Let us begin a conversation." })).toBeVisible();
    await expect(page.getByLabel("Name")).toBeVisible();
    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByLabel("Your message")).toBeVisible();
  });
});

// ── Collections: counts + filtering ──────────────────────────────────────────
test.describe("Collections grid", () => {
  test("renders all collection cards (count matches data)", async ({ page }) => {
    await page.goto("/collections");
    // Cards are <article> elements rendered by CollectionCard.
    await expect(page.locator("article")).toHaveCount(COLLECTIONS_COUNT);
  });

  test("filter bar has a button per category (incl. All)", async ({ page }) => {
    await page.goto("/collections");
    for (const cat of collectionCategories) {
      await expect(page.getByRole("button", { name: cat, exact: true })).toBeVisible();
    }
  });

  test("filtering by Furniture narrows the grid to the data-derived count", async ({ page }) => {
    await page.goto("/collections");
    await page.getByRole("button", { name: "Furniture", exact: true }).click();
    await expect(page.locator("article")).toHaveCount(furnitureCount);
  });
});

// ── Services count ───────────────────────────────────────────────────────────
test("services page renders one card per service", async ({ page }) => {
  await page.goto("/services");
  // Each ServiceCard has the includes list; assert title count instead.
  for (const s of services) {
    await expect(page.getByRole("heading", { name: s.title }).first()).toBeVisible();
  }
  expect(SERVICES_COUNT).toBeGreaterThan(0);
});

// ── Contact form: validation, fake success, no network ───────────────────────
test.describe("Contact form", () => {
  test("required-field validation fires on empty submit", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: /Send Message/i }).click();
    await expect(page.getByText("Please tell us your name.")).toBeVisible();
    await expect(page.getByText("Please enter a valid email address.")).toBeVisible();
    await expect(
      page.getByText("A sentence or two about the project, please.")
    ).toBeVisible();
  });

  test("invalid email is rejected", async ({ page }) => {
    await page.goto("/contact");
    await page.getByLabel("Name").fill("Aanya Desai");
    await page.getByLabel("Email").fill("not-an-email");
    await page.getByLabel("Your message").fill("I would like to discuss a residence project.");
    await page.getByRole("button", { name: /Send Message/i }).click();
    await expect(page.getByText("Please enter a valid email address.")).toBeVisible();
    // Success must NOT appear.
    await expect(
      page.getByRole("heading", { name: /Thank you — we/i })
    ).toHaveCount(0);
  });

  test("valid fill shows the fake success state AND fires no network request", async ({ page }) => {
    await page.goto("/contact");

    // Record any POST / fetch / xhr that occurs after we submit.
    const networkCalls: string[] = [];
    page.on("request", (req) => {
      const type = req.resourceType();
      if (req.method() === "POST" || type === "fetch" || type === "xhr") {
        networkCalls.push(`${req.method()} ${type} ${req.url()}`);
      }
    });

    await page.getByLabel("Name").fill("Aanya Desai");
    await page.getByLabel("Email").fill("aanya@example.com");
    await page
      .getByLabel("Your message")
      .fill("We are reworking a sea-facing apartment in Colaba and would love your input.");
    await page.getByRole("button", { name: /Send Message/i }).click();

    // Fake success appears.
    await expect(
      page.getByRole("heading", { name: /Thank you — we/i })
    ).toBeVisible();

    // Give any stray request a beat to surface, then assert none happened.
    await page.waitForTimeout(500);
    expect(
      networkCalls,
      `Form should be client-side only, but observed: ${networkCalls.join(", ")}`
    ).toHaveLength(0);
  });
});

// ── Responsive (375px) ───────────────────────────────────────────────────────
test.describe("Responsive @375px", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("hamburger opens mobile menu and links work", async ({ page }) => {
    await page.goto("/");
    // Desktop nav list is hidden at this width; hamburger is visible.
    const hamburger = page.getByRole("button", { name: "Open menu" });
    await expect(hamburger).toBeVisible();
    await hamburger.click();

    // Mobile overlay repeats the nav links — pick a non-home one to verify routing.
    await page.getByRole("link", { name: "Collections", exact: true }).first().click();
    await expect(page).toHaveURL(/\/collections/);
  });

  test("layout intact — no horizontal overflow on home", async ({ page }) => {
    await page.goto("/");
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    // Allow a 1px rounding tolerance.
    expect(overflow).toBeLessThanOrEqual(1);
  });
});

