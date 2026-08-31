import { test, expect } from "@playwright/test";

test.describe("Google Search Tests", () => {
    test("HomePage Should Load Successfully @smoke", async ({ page }) => {
        await page.goto("https://www.google.com");
        await expect(page).toHaveTitle("Google");
    });

    test("Search Box Should Be Visible @regression", async ({ page }) => {
        await page.goto("https://www.google.com");
        const searchbox = page.locator("textarea[name='q']");
        await expect(searchbox).toBeVisible();
    });

    test("Should Show Results After Searching a Keyword @smoke", async ({ page }) => {
        await page.goto("https://www.google.com");
        const searchbox = page.locator("textarea[name='q']");
        await searchbox.fill("Playwright");
        await searchbox.press("Enter");
    });


});