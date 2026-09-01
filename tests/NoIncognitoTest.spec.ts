import {test,expect,Locator,Page,Browser,BrowserContext,FrameLocator,chromium,firefox,webkit} from "@playwright/test";

test("No Incognito Test",async({})=>{
    // const browser:Browser = await chromium.launch({headless:false,channel:"chromium"});
    const browser:BrowserContext = await chromium.launchPersistentContext("./session",{headless:false,channel:"chromium"});
    //const context:BrowserContext = await browser.newContext();
    const pages = browser.pages();
    const page:Page = pages[0];

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    await page.locator("id=input-firstname").fill("Davis");
    await page.locator("id=input-lastname").fill("Marcos");
    
    await page.waitForTimeout(5000);
});