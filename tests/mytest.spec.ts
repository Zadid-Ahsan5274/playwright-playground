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

test("Google Search",async({page})=>{
    await page.goto("https://www.google.com/");
    // handle popup - like accept cookies
    const accept_all_button = page.locator("button:has-text('Accept All')");
    if(await accept_all_button.isVisible()){
        await accept_all_button.click(); // click on accept all button
        console.log("Popup accepted"); // print popup accepted
    }

    await page.locator("textarea[name='q']").fill("checks radio");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(3000);
    const results = await page.locator("h3").allTextContents();
    expect(results.length).toBeGreaterThan(0);
})