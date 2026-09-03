import {test,expect} from "@playwright/test";

test.beforeEach("launching app",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
});

test("Logo Presence Test",async({page})=>{
    await expect(page.locator("img[alt='Tricentis Demo Web Shop']")).toBeVisible();
});

test("Page Title Test",async({page})=>{
   await expect(page).toHaveTitle("Demo Web Shop");
});

test("Search Test",async({page})=>{
    await page.locator("#small-searchterms").fill("laptop");
    await page.click("//input[@type='submit' and @value='Search']");
    await expect.soft(page.locator("h2 a")).toContainText("laptop",{ignoreCase: true});
});