import {test,expect} from "@playwright/test";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const email = "zadid.ahsan@email.com";
const password = "123456";

test("Add to Cart Test",async({page})=>{
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    await loginPage.enterEmail(email);
    await loginPage.enterPassword(password);
    await loginPage.clickLoginButton();
    await page.locator('span:has-text("Home")').click();
    await homePage.addFirstProductToCart();
    await homePage.isToastVisible();
});