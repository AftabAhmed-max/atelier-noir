# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: functional.spec.ts >> Contact form >> valid fill shows the fake success state AND fires no network request
- Location: tests\functional.spec.ts:177:7

# Error details

```
Error: Form should be client-side only, but observed: GET fetch https://tile.openstreetmap.org/16/46026/29258.png, GET fetch https://tile.openstreetmap.org/16/46026/29259.png, GET fetch https://tile.openstreetmap.org/16/46027/29258.png, GET fetch https://tile.openstreetmap.org/16/46027/29259.png, GET fetch https://tile.openstreetmap.org/16/46025/29258.png, GET fetch https://tile.openstreetmap.org/16/46025/29259.png, GET fetch https://tile.openstreetmap.org/16/46028/29258.png, GET fetch https://tile.openstreetmap.org/16/46028/29259.png, GET fetch https://tile.openstreetmap.org/16/46024/29258.png, GET fetch https://tile.openstreetmap.org/16/46024/29259.png, GET fetch https://tile.openstreetmap.org/16/46029/29258.png, GET fetch https://tile.openstreetmap.org/16/46029/29259.png

expect(received).toHaveLength(expected)

Expected length: 0
Received length: 12
Received array:  ["GET fetch https://tile.openstreetmap.org/16/46026/29258.png", "GET fetch https://tile.openstreetmap.org/16/46026/29259.png", "GET fetch https://tile.openstreetmap.org/16/46027/29258.png", "GET fetch https://tile.openstreetmap.org/16/46027/29259.png", "GET fetch https://tile.openstreetmap.org/16/46025/29258.png", "GET fetch https://tile.openstreetmap.org/16/46025/29259.png", "GET fetch https://tile.openstreetmap.org/16/46028/29258.png", "GET fetch https://tile.openstreetmap.org/16/46028/29259.png", "GET fetch https://tile.openstreetmap.org/16/46024/29258.png", "GET fetch https://tile.openstreetmap.org/16/46024/29259.png", …]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - navigation [ref=e3]:
      - link "ATELIER NOIR" [ref=e4] [cursor=pointer]:
        - /url: /
      - list [ref=e5]:
        - listitem [ref=e6]:
          - link "Home" [ref=e7] [cursor=pointer]:
            - /url: /
        - listitem [ref=e8]:
          - link "Studio" [ref=e9] [cursor=pointer]:
            - /url: /about
        - listitem [ref=e10]:
          - link "Collections" [ref=e11] [cursor=pointer]:
            - /url: /collections
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: /services
        - listitem [ref=e14]:
          - link "Contact" [ref=e15] [cursor=pointer]:
            - /url: /contact
      - link "Book a Consultation" [ref=e16] [cursor=pointer]:
        - /url: /contact
  - main [ref=e17]:
    - generic [ref=e20]:
      - generic [ref=e21]: Contact
      - heading "Let us begin a conversation." [level=2] [ref=e22]
      - paragraph [ref=e23]: Whether it is a single commissioned piece or an entire residence, we would be glad to hear what you have in mind. Tell us a little about the space and we will be in touch shortly.
    - generic [ref=e25]:
      - generic [ref=e27]:
        - generic [ref=e28]: ✓
        - heading "Thank you — we’ll be in touch shortly." [level=3] [ref=e29]
        - paragraph [ref=e30]: Your message has reached the studio. Expect a reply from one of us within two working days.
      - generic [ref=e32]:
        - generic [ref=e33]:
          - heading "The Studio" [level=3] [ref=e34]
          - generic [ref=e35]:
            - text: Ground Floor, The Linseed House
            - text: 14 Apollo Bunder Marg, Colaba
            - text: Mumbai 400001, India
        - generic [ref=e36]:
          - heading "Reach Us" [level=3] [ref=e37]
          - generic [ref=e38]:
            - link "studio@ateliernoir.example" [ref=e39] [cursor=pointer]:
              - /url: mailto:studio@ateliernoir.example
            - link "+91 22 4000 0900" [ref=e40] [cursor=pointer]:
              - /url: tel:+912240000900
        - generic [ref=e41]:
          - heading "Studio Hours" [level=3] [ref=e42]
          - list [ref=e43]:
            - listitem [ref=e44]:
              - generic [ref=e45]: Monday – Friday
              - generic [ref=e46]: 10:00 – 19:00
            - listitem [ref=e47]:
              - generic [ref=e48]: Saturday
              - generic [ref=e49]: 11:00 – 17:00
            - listitem [ref=e50]:
              - generic [ref=e51]: Sunday
              - generic [ref=e52]: By appointment
        - generic [ref=e53]:
          - heading "Follow" [level=3] [ref=e54]
          - list [ref=e55]:
            - listitem [ref=e56]:
              - link "Instagram — @ateliernoir.studio" [ref=e57] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e58]:
              - link "Pinterest — /ateliernoir" [ref=e59] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e60]:
              - link "LinkedIn — /atelier-noir" [ref=e61] [cursor=pointer]:
                - /url: "#"
    - generic [ref=e63]:
      - iframe [ref=e65]:
        - generic [ref=f1e2]:
          - img
          - generic:
            - region "Map" [ref=f1e3]
            - button "[missing \"en-US.javascripts.map.marker.title\" translation]" [ref=f1e4]:
              - img [ref=f1e5]
          - generic:
            - generic [ref=f1e8]:
              - button "Zoom In" [ref=f1e9] [cursor=pointer]
              - button "Zoom Out" [ref=f1e11] [cursor=pointer]
            - group [ref=f1e13]:
              - generic [ref=f1e14]:
                - link "Report a problem" [ref=f1e15] [cursor=pointer]:
                  - /url: /fixthemap?lat=18.92200&lon=72.83300&zoom=15
                - text: "| ©"
                - link "OpenStreetMap contributors" [ref=f1e16] [cursor=pointer]:
                  - /url: /copyright
                - text: ♥️
                - link "Make a Donation" [ref=f1e17] [cursor=pointer]:
                  - /url: https://supporting.openstreetmap.org
                - text: .
                - link "Website and API terms" [ref=f1e18] [cursor=pointer]:
                  - /url: https://wiki.osmfoundation.org/wiki/Terms_of_Use
      - paragraph [ref=e66]: Ground Floor, The Linseed House, 14 Apollo Bunder Marg, Colaba, Mumbai 400001, India
  - contentinfo [ref=e67]:
    - generic [ref=e68]:
      - generic [ref=e69]:
        - generic [ref=e70]:
          - link "ATELIER NOIR" [ref=e71] [cursor=pointer]:
            - /url: /
          - paragraph [ref=e72]: Interiors composed, not decorated.
          - paragraph [ref=e73]: Est. 2009 · Mumbai & Milan
        - generic [ref=e74]:
          - heading "Navigate" [level=3] [ref=e75]
          - list [ref=e76]:
            - listitem [ref=e77]:
              - link "Home" [ref=e78] [cursor=pointer]:
                - /url: /
            - listitem [ref=e79]:
              - link "Studio" [ref=e80] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e81]:
              - link "Collections" [ref=e82] [cursor=pointer]:
                - /url: /collections
            - listitem [ref=e83]:
              - link "Services" [ref=e84] [cursor=pointer]:
                - /url: /services
            - listitem [ref=e85]:
              - link "Contact" [ref=e86] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e87]:
          - heading "Connect" [level=3] [ref=e88]
          - list [ref=e89]:
            - listitem [ref=e90]:
              - link "Instagram" [ref=e91] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e92]:
              - link "Pinterest" [ref=e93] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e94]:
              - link "LinkedIn" [ref=e95] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e96]:
              - link "studio@ateliernoir.example" [ref=e97] [cursor=pointer]:
                - /url: mailto:studio@ateliernoir.example
        - generic [ref=e99]:
          - generic [ref=e100]: The Studio Letter
          - generic [ref=e101]:
            - textbox "your@email.com" [ref=e102]
            - button "Join →" [ref=e103] [cursor=pointer]
      - generic [ref=e104]:
        - paragraph [ref=e105]: © 2026 Atelier Noir. All rights reserved.
        - paragraph [ref=e106]: Ground Floor, The Linseed House, Mumbai 400001, India
  - alert [ref=e107]
```

# Test source

```ts
  106 |     for (const s of services) {
  107 |       await expect(page.getByRole("heading", { name: s.title }).first()).toBeVisible();
  108 |     }
  109 |   });
  110 | 
  111 |   test("contact loads with form + studio details", async ({ page }) => {
  112 |     await page.goto("/contact");
  113 |     await expect(page.getByRole("heading", { name: "Let us begin a conversation." })).toBeVisible();
  114 |     await expect(page.getByLabel("Name")).toBeVisible();
  115 |     await expect(page.getByLabel("Email")).toBeVisible();
  116 |     await expect(page.getByLabel("Your message")).toBeVisible();
  117 |   });
  118 | });
  119 | 
  120 | // ── Collections: counts + filtering ──────────────────────────────────────────
  121 | test.describe("Collections grid", () => {
  122 |   test("renders all collection cards (count matches data)", async ({ page }) => {
  123 |     await page.goto("/collections");
  124 |     // Cards are <article> elements rendered by CollectionCard.
  125 |     await expect(page.locator("article")).toHaveCount(COLLECTIONS_COUNT);
  126 |   });
  127 | 
  128 |   test("filter bar has a button per category (incl. All)", async ({ page }) => {
  129 |     await page.goto("/collections");
  130 |     for (const cat of collectionCategories) {
  131 |       await expect(page.getByRole("button", { name: cat, exact: true })).toBeVisible();
  132 |     }
  133 |   });
  134 | 
  135 |   test("filtering by Furniture narrows the grid to the data-derived count", async ({ page }) => {
  136 |     await page.goto("/collections");
  137 |     await page.getByRole("button", { name: "Furniture", exact: true }).click();
  138 |     await expect(page.locator("article")).toHaveCount(furnitureCount);
  139 |   });
  140 | });
  141 | 
  142 | // ── Services count ───────────────────────────────────────────────────────────
  143 | test("services page renders one card per service", async ({ page }) => {
  144 |   await page.goto("/services");
  145 |   // Each ServiceCard has the includes list; assert title count instead.
  146 |   for (const s of services) {
  147 |     await expect(page.getByRole("heading", { name: s.title }).first()).toBeVisible();
  148 |   }
  149 |   expect(SERVICES_COUNT).toBeGreaterThan(0);
  150 | });
  151 | 
  152 | // ── Contact form: validation, fake success, no network ───────────────────────
  153 | test.describe("Contact form", () => {
  154 |   test("required-field validation fires on empty submit", async ({ page }) => {
  155 |     await page.goto("/contact");
  156 |     await page.getByRole("button", { name: /Send Message/i }).click();
  157 |     await expect(page.getByText("Please tell us your name.")).toBeVisible();
  158 |     await expect(page.getByText("Please enter a valid email address.")).toBeVisible();
  159 |     await expect(
  160 |       page.getByText("A sentence or two about the project, please.")
  161 |     ).toBeVisible();
  162 |   });
  163 | 
  164 |   test("invalid email is rejected", async ({ page }) => {
  165 |     await page.goto("/contact");
  166 |     await page.getByLabel("Name").fill("Aanya Desai");
  167 |     await page.getByLabel("Email").fill("not-an-email");
  168 |     await page.getByLabel("Your message").fill("I would like to discuss a residence project.");
  169 |     await page.getByRole("button", { name: /Send Message/i }).click();
  170 |     await expect(page.getByText("Please enter a valid email address.")).toBeVisible();
  171 |     // Success must NOT appear.
  172 |     await expect(
  173 |       page.getByRole("heading", { name: /Thank you — we/i })
  174 |     ).toHaveCount(0);
  175 |   });
  176 | 
  177 |   test("valid fill shows the fake success state AND fires no network request", async ({ page }) => {
  178 |     await page.goto("/contact");
  179 | 
  180 |     // Record any POST / fetch / xhr that occurs after we submit.
  181 |     const networkCalls: string[] = [];
  182 |     page.on("request", (req) => {
  183 |       const type = req.resourceType();
  184 |       if (req.method() === "POST" || type === "fetch" || type === "xhr") {
  185 |         networkCalls.push(`${req.method()} ${type} ${req.url()}`);
  186 |       }
  187 |     });
  188 | 
  189 |     await page.getByLabel("Name").fill("Aanya Desai");
  190 |     await page.getByLabel("Email").fill("aanya@example.com");
  191 |     await page
  192 |       .getByLabel("Your message")
  193 |       .fill("We are reworking a sea-facing apartment in Colaba and would love your input.");
  194 |     await page.getByRole("button", { name: /Send Message/i }).click();
  195 | 
  196 |     // Fake success appears.
  197 |     await expect(
  198 |       page.getByRole("heading", { name: /Thank you — we/i })
  199 |     ).toBeVisible();
  200 | 
  201 |     // Give any stray request a beat to surface, then assert none happened.
  202 |     await page.waitForTimeout(500);
  203 |     expect(
  204 |       networkCalls,
  205 |       `Form should be client-side only, but observed: ${networkCalls.join(", ")}`
> 206 |     ).toHaveLength(0);
      |       ^ Error: Form should be client-side only, but observed: GET fetch https://tile.openstreetmap.org/16/46026/29258.png, GET fetch https://tile.openstreetmap.org/16/46026/29259.png, GET fetch https://tile.openstreetmap.org/16/46027/29258.png, GET fetch https://tile.openstreetmap.org/16/46027/29259.png, GET fetch https://tile.openstreetmap.org/16/46025/29258.png, GET fetch https://tile.openstreetmap.org/16/46025/29259.png, GET fetch https://tile.openstreetmap.org/16/46028/29258.png, GET fetch https://tile.openstreetmap.org/16/46028/29259.png, GET fetch https://tile.openstreetmap.org/16/46024/29258.png, GET fetch https://tile.openstreetmap.org/16/46024/29259.png, GET fetch https://tile.openstreetmap.org/16/46029/29258.png, GET fetch https://tile.openstreetmap.org/16/46029/29259.png
  207 |   });
  208 | });
  209 | 
  210 | // ── Responsive (375px) ───────────────────────────────────────────────────────
  211 | test.describe("Responsive @375px", () => {
  212 |   test.use({ viewport: { width: 375, height: 812 } });
  213 | 
  214 |   test("hamburger opens mobile menu and links work", async ({ page }) => {
  215 |     await page.goto("/");
  216 |     // Desktop nav list is hidden at this width; hamburger is visible.
  217 |     const hamburger = page.getByRole("button", { name: "Open menu" });
  218 |     await expect(hamburger).toBeVisible();
  219 |     await hamburger.click();
  220 | 
  221 |     // Mobile overlay repeats the nav links — pick a non-home one to verify routing.
  222 |     await page.getByRole("link", { name: "Collections", exact: true }).first().click();
  223 |     await expect(page).toHaveURL(/\/collections/);
  224 |   });
  225 | 
  226 |   test("layout intact — no horizontal overflow on home", async ({ page }) => {
  227 |     await page.goto("/");
  228 |     const overflow = await page.evaluate(
  229 |       () => document.documentElement.scrollWidth - document.documentElement.clientWidth
  230 |     );
  231 |     // Allow a 1px rounding tolerance.
  232 |     expect(overflow).toBeLessThanOrEqual(1);
  233 |   });
  234 | });
  235 | 
  236 | 
```