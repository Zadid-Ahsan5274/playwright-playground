import {test,expect,Locator,Page,Browser,BrowserContext,FrameLocator,chromium,firefox,webkit} from "@playwright/test";

test.skip("Aria Role Locator Test",async({})=>{
    const browser:Browser = await chromium.launch({headless:false,channel:"chromium"});
    const context:BrowserContext = await browser.newContext();
    const page:Page = await context.newPage();

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    await expect(page.getByRole("heading",{name:"Register Account"})).toBeVisible();
    await expect(page.getByRole("link",{name:"Forgotten Password"})).toBeVisible();
    await expect(page.getByRole("radio",{name:"Yes"})).toBeVisible();
    await expect(page.getByRole("checkbox")).toBeVisible();
    await page.getByRole("checkbox").click();
    await expect(page.getByRole("button",{name:"Continue"})).toBeVisible();
    await page.getByRole("button",{name:"Continue"}).click();
    await page.waitForTimeout(5000);
});

test.skip("Data Test ID Locator Test",async({})=>{
    const browser:Browser = await chromium.launch({headless:false,channel:"chrome"});
    const context:BrowserContext = await browser.newContext();
    const page:Page = await context.newPage();

    await page.goto("http://127.0.0.1:5500/app/app.html");

    // await page.locator("data-naveenid=username").fill("a_automation");

    await page.getByTestId("username").fill("Naveen");
    await page.getByTestId("password").fill("Naveen@123");
    await page.getByTestId("login").click();
    await expect(page.getByTestId("welcome")).toBeVisible(); 
});

test("ID Locator Test",async({})=>{
    const browser:Browser = await chromium.launch({headless:false,channel:"chromium"});
    const context:BrowserContext = await browser.newContext();
    const page:Page = await context.newPage();

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
    // 1. ID: unique
    const firstName = page.locator("id=input-firstname");
    const lastName = page.locator("id=input-lastname");

    await firstName.fill("Naveen");
    await lastName.fill("Automation");

    // 2. class name: not unique
    const logo:Locator = page.locator(".img-responsive");
    // const logo:Locator = page.locator("class=img-responsive");
    const logoExist = await logo.isEnabled();
    console.log(logoExist);

    // 3. text
    const header:Locator = page.locator("text=Register Account");
    const headerExist = await header.isEnabled();
    console.log(headerExist);

    const continueBtn:Locator = page.locator("text=Continue");
    const continueBtnExist = await continueBtn.isEnabled();
    console.log(continueBtnExist);

    const forgotPWDLink:Locator = page.locator("text=Forgotten Password");
    const forgottenPWDLinkExist = await forgotPWDLink.isEnabled();
    console.log(forgottenPWDLinkExist);
    
    // 4. css
    const email:Locator = page.locator("css=input#input-email");
    const telephone:Locator = page.locator("css=input[id='input-telephone']");
    const privacyCheckbox:Locator = page.locator("css=input[type='checkbox']");

    await email.fill("abc@xyz.com");
    await telephone.fill("123456789");
    await privacyCheckbox.click();

    // xpath:
    const password:Locator = page.locator("xpath=//input[@id='input-password']");
    const search:Locator = page.locator("xpath=//input[@name='search' and @type='text']");
    await password.fill("Test@123");
    await search.fill("Macbook");


    // await new Promise(() => {});  // Prevents script from existing before the page is loaded

});

