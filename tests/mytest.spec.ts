import {test,expect} from "@playwright/test";

// fixture - global variable: page, browser
test("Verify title of the page",async({page})=>{
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    let title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle("Your Store");
});

test("Verify URL of the page",async({page})=>{
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    let URL = page.url();
    console.log(URL);
    await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/");
});