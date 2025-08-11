import {test,expect} from "@playwright/test";

test("Mouse hover actions",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/");
    const computers = await page.locator("//a[contains(text(),'Computers')]");
    const desktops = await page.locator("//a[contains(text(),'desktops')]");

    //mouse hover
    await computers.hover();
    await desktops.hover();
    await page.waitForTimeout(5000);
})