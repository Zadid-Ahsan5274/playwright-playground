import {test,expect,Locator,Browser,Page,chromium,firefox,webkit} from "@playwright/test";

test("Login Page Test",async({})=>{
   const browser:Browser = await chromium.launch();
   const page:Page = await browser.newPage();

   await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");

   const email_field:Locator = page.locator("#input-email");
   const password_field:Locator = page.locator("#input-password");
   const loginBtn:Locator = page.locator("//input[@type='submit' and @value='Login']");

   await email_field.fill("zadid.ahsan@email.com");
   await password_field.fill("123456");
   await loginBtn.click();

   const title = await page.title();
   console.log("Home Page Title: ",title);
   await page.screenshot({path:"homePage.png"});
   expect(title).toEqual("My Account");
   await browser.close();
});