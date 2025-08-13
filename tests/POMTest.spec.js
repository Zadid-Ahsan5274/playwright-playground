const{test,expect} = require("@playwright/test");
import {LoginPage} from "../pages/LoginPage.js";
import {HomePage} from "../pages/HomePage.js";
import {CartPage} from "../pages/CartPage.js";
test("test",async({page})=>{
    ////////////// Without Using POM //////////////
    /*await page.goto("https://demoblaze.com/");
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator(" //button[normalize-space()='Log in']").click();*/

    // Login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login("pavanol","test@123");
    await page.waitForTimeout(3000);

    // Home
    const home = new HomePage(page);
    await home.addProductToCart("HTC One M9");
    await page.waitForTimeout(5000);
    await home.gotoCart();

    // Cart
    const cart = new CartPage(page);
    await page.waitForTimeout(5000);
    const status = await cart.checkProductInCart("HTC One M9");
    await expect(status).toBe(true);
});