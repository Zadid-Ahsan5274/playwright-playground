import { test, expect, Page, Browser, BrowserContext, chromium } from "@playwright/test";

test("Mouse Events", async ({}) => {
    test.setTimeout(90000);

    const browser: Browser = await chromium.launch({ headless: false, channel: "chrome" });
    const context: BrowserContext = await browser.newContext({
        permissions: ["geolocation"],
        geolocation: { latitude: 23.8103, longitude: 90.4125 },
    });
    const page: Page = await context.newPage();

    page.on("dialog", async (dialog) => {
        console.log("Alert text:", dialog.message());
        await dialog.accept();
    });

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    // double click
    await page.getByText("Double-Click Me To See Alert").dblclick();
    await page.waitForTimeout(2000);

    // right click — dispatch contextmenu event to avoid native OS popup
    await page.getByText("right click me").dispatchEvent("contextmenu");
    await page.waitForTimeout(1000);

    // shift+click
    await page.goto("https://the-internet.herokuapp.com/shifting_content");
    await page.getByText("Example 1: Menu Element").click({ modifiers: ["Shift"] });
    await page.waitForTimeout(2000);

    // mouse hover
    await page.goto("https://www.spicejet.com/");
    await page.getByText("Add-ons").first().hover();
    await page.getByRole("link", { name: "Visa Services", exact: true }).click();
    await page.waitForTimeout(2000);

    await page.goto("https://www.spicejet.com/");
    await page.getByText("SpiceClub").first().hover();
    await page.getByRole("link", { name: "Tiers", exact: true }).click();
    await page.waitForTimeout(2000);

    await page.close();
    await browser.close();
});