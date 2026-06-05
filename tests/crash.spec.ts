import { test, expect } from "@playwright/test";
import { nav } from "../data/content";

// ─────────────────────────────────────────────────────────────────────────
//  Crash / robustness suite. Each test is labelled [CRITICAL] / [WARNING] /
//  [MINOR] to reflect the severity if it fails.
//  Target form: the client-side-only contact form at /contact.
// ─────────────────────────────────────────────────────────────────────────

const XSS = `<img src=x onerror="window.__xss=1">`;
const XSS_SCRIPT = `<script>window.__xss=1<\/script>`;

test.describe("Contact form robustness", () => {
  test("[CRITICAL] XSS payload in fields is not executed", async ({ page }) => {
    let dialogFired = false;
    page.on("dialog", (d) => {
      dialogFired = true;
      d.dismiss().catch(() => {});
    });

    await page.goto("/contact");
    await page.getByLabel("Name").fill(XSS);
    await page.getByLabel("Email").fill("safe@example.com");
    await page.getByLabel("Your message").fill(XSS_SCRIPT + " plus a long enough message body.");
    await page.getByRole("button", { name: /Send Message/i }).click();

    // Success state should appear (payload passes JS length/regex checks via name>=2).
    // The injected marker must never have been set, and no <img>/<script> injected
    // into the DOM as live nodes.
    const xssExecuted = await page.evaluate(() => (window as any).__xss === 1);
    expect(xssExecuted, "XSS marker should never be set").toBeFalsy();
    expect(dialogFired, "No script-driven dialog should fire").toBeFalsy();

    // No injected <img onerror> element should exist as a real node.
    const injectedImg = await page.locator('img[src="x"]').count();
    expect(injectedImg, "Raw <img> from payload must not be live in DOM").toBe(0);
  });

  test("[WARNING] oversized input (10k chars) is handled without crash", async ({ page }) => {
    const big = "A".repeat(10_000);
    await page.goto("/contact");
    await page.getByLabel("Name").fill("Valid Name");
    await page.getByLabel("Email").fill("big@example.com");
    await page.getByLabel("Your message").fill(big);
    await page.getByRole("button", { name: /Send Message/i }).click();
    // Should still reach the fake success state, page must remain responsive.
    await expect(page.getByRole("heading", { name: /Thank you — we/i })).toBeVisible();
  });

  test("[CRITICAL] empty submit is blocked (no fake success)", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: /Send Message/i }).click();
    await expect(page.getByRole("heading", { name: /Thank you — we/i })).toHaveCount(0);
    await expect(page.getByText("Please tell us your name.")).toBeVisible();
  });

  test("[WARNING] rapid double-submit does not double-fire or crash", async ({ page }) => {
    await page.goto("/contact");
    await page.getByLabel("Name").fill("Aanya Desai");
    await page.getByLabel("Email").fill("aanya@example.com");
    await page.getByLabel("Your message").fill("A sufficiently long project description here.");
    const btn = page.getByRole("button", { name: /Send Message/i });
    await btn.click();
    // Second click — the button is replaced by the success view, so this is a
    // best-effort double-tap; it must not throw or produce duplicate success nodes.
    await btn.click({ timeout: 1000 }).catch(() => {});
    await expect(page.getByRole("heading", { name: /Thank you — we/i })).toHaveCount(1);
  });
});

test.describe("Routing robustness", () => {
  test("[CRITICAL] non-existent route returns 404 and not a white screen", async ({ page }) => {
    const resp = await page.goto("/this-route-does-not-exist-xyz");
    expect(resp?.status(), "Unknown route should return HTTP 404").toBe(404);
    // Default Next.js 404 must render visible text, not a blank body.
    await expect(page.getByText(/404|could not be found/i).first()).toBeVisible();
    const bodyText = (await page.locator("body").innerText()).trim();
    expect(bodyText.length, "404 body must not be blank (white screen)").toBeGreaterThan(0);
  });

  test("[MINOR] malformed deep link under a real route returns 404", async ({ page }) => {
    // No [param] dynamic routes exist, so a deep path under /collections is unknown.
    const resp = await page.goto("/collections/%2e%2e/not-real/../garbage");
    expect([404, 400]).toContain(resp?.status() ?? 0);
    const bodyText = (await page.locator("body").innerText()).trim();
    expect(bodyText.length).toBeGreaterThan(0);
  });
});

test.describe("Console / page errors per route", () => {
  const routes = ["/", ...nav.filter((n) => n.href !== "/").map((n) => n.href)];

  for (const route of routes) {
    test(`[WARNING] no console errors or page crashes on ${route}`, async ({ page }) => {
      const consoleErrors: string[] = [];
      const pageErrors: string[] = [];

      page.on("console", (msg) => {
        if (msg.type() === "error") consoleErrors.push(msg.text());
      });
      page.on("pageerror", (err) => pageErrors.push(err.message));

      await page.goto(route, { waitUntil: "networkidle" });

      // pageerror (uncaught JS exceptions) is more severe than console noise.
      expect(pageErrors, `Uncaught JS errors on ${route}`).toHaveLength(0);

      // Filter out benign noise: third-party image CDN / favicon / map iframe 4xx
      // are not app crashes. We flag only app-origin / genuine errors.
      const meaningful = consoleErrors.filter((e) => {
        const lower = e.toLowerCase();
        const benign =
          lower.includes("favicon") ||
          lower.includes("the resource") || // preload warnings
          lower.includes("downloadable font") ||
          (lower.includes("failed to load resource") &&
            (lower.includes("images.unsplash.com") ||
              lower.includes("openstreetmap.org")));
        return !benign;
      });
      expect(meaningful, `Console errors on ${route}: ${meaningful.join(" | ")}`).toHaveLength(0);
    });
  }
});

