const { test, expect } = require("@playwright/test");

test.use({ launchOptions: { executablePath: process.env.CHROME_BIN } });

const viewports = [
  { name: "small-mobile", width: 360, height: 800 },
  { name: "iphone-mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 },
];

async function expectInsideViewport(page, selector) {
  const viewportWidth = await page.evaluate(() => window.innerWidth);
  const rects = await page.locator(selector).evaluateAll((elements) =>
    elements
      .filter((element) => {
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
      })
      .map((element) => {
        const rect = element.getBoundingClientRect();
        return { left: rect.left, right: rect.right, width: rect.width };
      })
  );

  for (const rect of rects) {
    expect(rect.left, selector + " escaped the left viewport edge").toBeGreaterThanOrEqual(-1);
    expect(rect.right, selector + " escaped the right viewport edge").toBeLessThanOrEqual(viewportWidth + 1);
    expect(rect.width, selector + " is wider than the viewport").toBeLessThanOrEqual(viewportWidth + 1);
  }
}

for (const viewport of viewports) {
  test.describe(viewport.name, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });

    test("core UI, interactions, and responsive bounds", async ({ page }, testInfo) => {
      const pageErrors = [];
      const consoleErrors = [];
      page.on("pageerror", (error) => pageErrors.push(error.message));
      page.on("console", (message) => {
        if (message.type() === "error") consoleErrors.push(message.text());
      });

      await page.goto("http://127.0.0.1:3000/", { waitUntil: "networkidle" });

      await expect(page.locator(".site-header")).toBeVisible();
      await expect(page.locator("#home .hero-copy")).toBeVisible();
      await expect(page.locator("#home .hero-visual")).toBeVisible();

      const documentWidths = await page.evaluate(() => ({
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        bodyScrollWidth: document.body.scrollWidth,
      }));
      expect(documentWidths.scrollWidth).toBeLessThanOrEqual(documentWidths.clientWidth + 1);
      expect(documentWidths.bodyScrollWidth).toBeLessThanOrEqual(documentWidths.clientWidth + 1);

      for (const selector of [
        ".site-header",
        ".shell",
        ".hero-copy",
        ".hero-visual",
        ".browser-window--hero",
        ".project-showcase",
        ".project-reel",
        ".profile-console",
        ".achievement-card",
        ".timeline-item",
        ".build-log-card",
        ".skill-card",
        ".terminal-card",
      ]) {
        await expectInsideViewport(page, selector);
      }

      if (viewport.width <= 820) {
        await expect(page.locator(".mobile-toggle")).toBeVisible();
        await expect(page.locator(".desktop-nav")).toBeHidden();

        await page.locator(".mobile-toggle").click();
        await expect(page.locator(".mobile-nav")).toHaveClass(/mobile-nav--open/);
        await expect(page.locator(".mobile-nav a[href='#projects']")).toBeVisible();
        await page.locator(".mobile-nav a[href='#projects']").click();
        await expect(page).toHaveURL(/#projects$/);
        await expect(page.locator("#projects")).toBeInViewport();

        const browserRect = await page.locator(".browser-window--hero").boundingBox();
        const cards = await page.locator(".hero-visual > .floating-card").evaluateAll((elements) =>
          elements.map((element) => {
            const rect = element.getBoundingClientRect();
            return { top: rect.top, left: rect.left, right: rect.right };
          })
        );
        if (browserRect) {
          for (const card of cards) {
            expect(card.top, "mobile hero card overlaps the system preview").toBeGreaterThanOrEqual(browserRect.y + browserRect.height - 1);
            expect(card.left).toBeGreaterThanOrEqual(-1);
            expect(card.right).toBeLessThanOrEqual(viewport.width + 1);
          }
        }
      } else {
        await expect(page.locator(".desktop-nav")).toBeVisible();
        await expect(page.locator(".mobile-toggle")).toBeHidden();
      }

      const projectCards = page.locator(".project-showcase");
      await expect(projectCards).toHaveCount(3);

      for (let index = 0; index < 3; index += 1) {
        const card = projectCards.nth(index);
        await expect(card.locator("video")).toHaveCount(1);
        await expect(card.locator(".project-reel-image")).toHaveCount(1);
        await expect(card.locator(".project-reel-playback")).toHaveCount(1);
        const videoSrc = await card.locator("video source").getAttribute("src");
        expect(videoSrc).toMatch(/^\/videos\/.+\.mp4$/);
        const response = await page.request.get("http://127.0.0.1:3000" + videoSrc);
        expect(response.status(), videoSrc + " should load").toBe(200);
        expect(response.headers()["content-type"] || "").toContain("video/mp4");
        await expect(card.locator(".project-reel-caption strong")).toHaveCount(1);
        if (viewport.width <= 600) {
          await expect(card.locator(".project-reel-mobile-caption")).toBeVisible();
          await expect(card.locator(".project-reel-caption")).toBeHidden();
        }
      }
      await expect(projectCards.nth(2).locator(".project-reel-concept")).toContainText("concept recreation");


      if (viewport.width <= 820) {
        const sideQuestColumns = await page.locator(".other-project-grid").evaluate(
          (element) => getComputedStyle(element).gridTemplateColumns.split(" ").filter(Boolean).length
        );
        expect(sideQuestColumns, "side quests should stack on mobile/tablet").toBe(1);

        const firstSideQuest = await page.locator(".other-project-card").first().boundingBox();
        if (firstSideQuest) {
          expect(firstSideQuest.width).toBeGreaterThan(viewport.width * 0.75);
        }
      }
      for (let index = 0; index < 3; index += 1) {
        const card = projectCards.nth(index);
        await card.scrollIntoViewIfNeeded();
        await expect(card).toBeVisible();
        const widths = await card.evaluate((element) => ({
          clientWidth: element.clientWidth,
          scrollWidth: element.scrollWidth,
        }));
        expect(widths.scrollWidth).toBeLessThanOrEqual(widths.clientWidth + 1);
      }

      const firstAchievement = page.locator(".achievement-card").first();
      await firstAchievement.scrollIntoViewIfNeeded();
      await expect(firstAchievement).toHaveAttribute("aria-pressed", "false");
      await firstAchievement.click();
      await expect(firstAchievement).toHaveAttribute("aria-pressed", "true");
      await expect(firstAchievement).toContainText("Unlocked");
      await expect(page.locator(".profile-progress strong")).toHaveText("1/5");

      await page.locator("#experience").scrollIntoViewIfNeeded();
      await expect(page.locator("#experience")).toBeVisible();
      await expect(page.locator(".build-log-section")).toBeVisible();

      await page.locator("#skills").scrollIntoViewIfNeeded();
      await expect(page.locator("#skills")).toBeVisible();
      const skillsWidth = await page.locator("#skills").evaluate((element) => ({
        clientWidth: element.clientWidth,
        scrollWidth: element.scrollWidth,
      }));
      expect(skillsWidth.scrollWidth).toBeLessThanOrEqual(skillsWidth.clientWidth + 1);

      await page.locator("#contact").scrollIntoViewIfNeeded();
      await expect(page.locator("#contact")).toBeVisible();
      await expect(page.locator("#contact a[href^='mailto:']")).toHaveCount(1);
      await expect(page.locator("#contact a[href*='linkedin.com/in/vini-berger']")).toHaveCount(1);
      await expect(page.locator("#contact a[href*='github.com/ViniciusBerger']")).toHaveCount(1);

      expect(pageErrors, "uncaught page errors").toEqual([]);
      expect(consoleErrors, "browser console errors").toEqual([]);

      await page.screenshot({
        path: testInfo.outputPath(viewport.name + "-full-page.png"),
        fullPage: true,
      });
    });
  });
}

test.describe("reduced motion", () => {
  test.use({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });

  test("disables decorative motion without hiding content", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("http://127.0.0.1:3000/", { waitUntil: "networkidle" });
    await expect(page.locator("#home")).toBeVisible();
    await expect(page.locator(".project-showcase").first()).toBeAttached();

    const reducedMotionMatches = await page.evaluate(
      () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
    expect(reducedMotionMatches).toBe(true);

    const animationState = await page.locator(".project-reel-image").first().evaluate((element) => {
      const style = getComputedStyle(element);
      return {
        duration: style.animationDuration,
        iterations: style.animationIterationCount,
      };
    });
    expect(animationState.iterations).toBe("1");
    await expect(page.locator(".project-reel-cursor").first()).toBeHidden();
    const firstReel = page.locator(".project-reel").first();
    await firstReel.scrollIntoViewIfNeeded();
    await expect(firstReel.locator("video")).toHaveCount(1);
    await page.waitForTimeout(400);
    expect(await firstReel.locator("video").evaluate((video) => video.paused)).toBe(true);

  });
});
