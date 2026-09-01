import {test, chromium, firefox, webkit, FrameLocator, expect, Page, Browser, BrowserContext} from "@playwright/test";

test("Locator Concepts",async({})=>{
    const browser:Browser = await chromium.launch({headless:false,channel:"chrome"});
    const context:BrowserContext = await browser.newContext();
    const page:Page = await context.newPage();
    await page.goto("https://orangehrm.com/30-day-free-trial");
    // await page.locator("form#Form_getForm >> #Form_getForm_Name").fill("Naveen");
    // await page.locator("form#Form_getForm >> text=Get Your Free Trial").click();
    // const form = page.locator("form#Form_getForm");
    // const get_your_free_tr_button = page.getByRole("button",{name:"Get Your Free Trial"});
    await page.locator("form#Form_getForm").getByRole("textbox",{name:"Full Name"}).fill("ABC");
    await page.locator("form#Form_getForm").locator("#Form_getForm_Name").fill("ABC");
    await page.locator("form#Form_getForm").getByRole("button",{name:"Get Your Free Trial"}).click();
    // await form.locator(get_your_free_tr_button).click();

    await page.waitForTimeout(3000);
});