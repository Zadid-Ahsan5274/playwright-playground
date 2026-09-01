import {test,expect,Locator,Page,Browser,BrowserContext,FrameLocator,chromium,firefox,webkit} from "@playwright/test";

test("Auth Test",async({})=>{
    const browser:Browser = await chromium.launch({headless:false,channel:"chromium"});
    const context:BrowserContext = await browser.newContext();
    const page:Page = await context.newPage();

    const username = 'admin';
    const password = 'admin';
    // const authHeader = 'Basic '+btoa(username+":"+password);

    page.setExtraHTTPHeaders({Authorization:createAuthHeader(username,password)});

    await page.goto("https://the-internet.herokuapp.com/basic_auth");
});

function createAuthHeader(username:any,password:any){
    return 'Basic '+btoa(username+":"+password);
}

test("Browser Context Test",async({})=>{
    const browser:Browser = await chromium.launch({headless:false,channel:"chromium"});

    // BrowserContext 1
    const context1:BrowserContext = await browser.newContext();
    const page1:Page = await context1.newPage();

    // browser 1
    await page1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    await page1.fill("#input-email","zadid.ahsan@email.com");
    await page1.fill("#input-password","123456");
    await page1.click("//input[@type='submit' and @value='Login']");

    // BrowserContext 2
    const context2:BrowserContext = await browser.newContext();
    const page2:Page = await context2.newPage();

    // browser 2
    await page2.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    await page2.fill("#input-email","zadid.ahsan@email.com");
    await page2.fill("#input-password","1234566");
    await page2.click("//input[@type='submit' and @value='Login']");

    await page1.close();
    await page2.close();
    await context1.close(); 
    await context2.close();
    await browser.close();
});