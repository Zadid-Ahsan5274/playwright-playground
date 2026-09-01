import { test, expect, Page, Browser, BrowserContext, chromium } from "@playwright/test";

test("Handle Dropdown",async({})=>{
    const browser:Browser = await chromium.launch({headless:false,channel:"chrome"});
    const context:BrowserContext = await browser.newContext();
    const page:Page = await context.newPage();
    await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");

    const country_dropdown = "select#Contact_CountryCode";
    // await page.selectOption(country_dropdown,{value:'AD'});
    // await page.selectOption(country_dropdown,{label:'AD'});
    // await page.selectOption(country_dropdown,{value:'AD'});
    // await page.selectOption(country_dropdown,{label:'Australia'});
    // await page.selectOption(country_dropdown,{index:5});
    const all_options = await page.$$(country_dropdown+' > option');
    console.log(all_options.length);
    for(const e of all_options){
        const text = await e.textContent();
        console.log(text);
        if(text == 'Vanuatu'){
            await page.selectOption(country_dropdown,{label:text}); 
        }
    }
    await page.waitForTimeout(3000);
});