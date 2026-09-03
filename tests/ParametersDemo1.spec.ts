import { test, expect } from "@playwright/test";

const search_items: string[] = ['laptop', 'Gift Card', 'Monitor', 'Smartphone'];

test.describe("Searching Items", () => {   // ✅ no async
    for (const item of search_items) {
        test(`Parameters Test 1 - Search ${item}`, async ({ page }) => {
            await page.goto("https://demowebshop.tricentis.com/");
            await page.locator("#small-searchterms").fill(item);
            await page.click("//input[@type='submit' and @value='Search']");
            await page.waitForLoadState('networkidle');
            await expect.soft(page.locator("h2 a").nth(0)).toContainText(item, { ignoreCase: true });
        });
    }

    search_items.forEach((item) => {
        test(`Parameters Test 2 - Search ${item}`, async ({ page }) => {
            await page.goto("https://demowebshop.tricentis.com/");
            await page.locator("#small-searchterms").fill(item);
            await page.click("//input[@type='submit' and @value='Search']");
            await page.waitForLoadState('networkidle');
            await expect.soft(page.locator("h2 a").nth(0)).toContainText(item, { ignoreCase: true });
        });
    });
});