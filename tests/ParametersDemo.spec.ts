import {test,expect,Locator} from "@playwright/test";

const search_items:string[] = ['laptop','Gift Cards','Monitor','Smartphone'];

for(const item of search_items){
    test(`Parameters Test 1 - Search ${item}`,async({page})=>{
        await page.goto("https://demowebshop.tricentis.com/");
        await page.locator("#small-searchterms").fill(item);
        await page.click("//input[@type='submit' and @value='Search']");
        await page.waitForLoadState('networkidle');
        await expect.soft(page.locator("h2 a").nth(0)).toContainText(item,{ignoreCase: true});
    });
}
