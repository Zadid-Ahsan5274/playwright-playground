import {test,expect} from "@playwright/test";
import LoginPage from "../pages/LoginPage";

const email = "zadid.ahsan@email.com";
const password = "123456";

test("Valid Login Test",async({page})=>{
    const loginPage = new LoginPage(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    await loginPage.enterEmail(email);
    await loginPage.enterPassword(password);
    await loginPage.clickLoginButton();
    await expect(page.getByRole("heading",{name:"My Account"})).toBeVisible();
});

test("Invalid Login Test",async({page})=>{
    const loginPage = new LoginPage(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    await loginPage.enterEmail("zadid@mail.com");
    await loginPage.enterPassword("12344");
    await loginPage.clickLoginButton();
    await expect(page.locator("//div[@class='alert alert-danger alert-dismissible']")).toBeVisible();
});