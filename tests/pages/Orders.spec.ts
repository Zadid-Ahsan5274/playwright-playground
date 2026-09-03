import { test, expect } from "@playwright/test";
import { Home_Page } from "./Home-Page";
import { Product_Page } from "./Product-Page";
test("Verify Product Order Test", async ({ page, context }) => {
    const homePage = new Home_Page(page);
    await homePage.goto();
    await homePage.searchProduct("iphone 16");

    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        homePage.clickOnProductLink("iphone 16"),
    ]);

    await newPage.waitForLoadState();
    const productPage = new Product_Page(newPage);

    await expect(newPage.locator("#productTitle")).toContainText(/iphone 16/i);
    await productPage.clickAddToCartButton();
});