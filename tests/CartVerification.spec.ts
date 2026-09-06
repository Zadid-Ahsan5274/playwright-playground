import {test,expect} from "@playwright/test";
import {LoginPage} from "../pages/LoginPage";
import {HomePage} from "../pages/HomePage";
import {CartPage} from "../pages/CartPage";

test("Verification of cart",async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.openApplication();
    await loginPage.login("standard_user","secret_sauce");
    const homePage = new HomePage(page);
    await expect(homePage.homePageHeading).toHaveText("Swag Labs");
    await homePage.backpackAddToCart();
    await expect(homePage.cartIcon).toHaveText("1");
    await expect(homePage.backpackRemoveButton).toBeVisible();
    await homePage.goToCart();
    const cartPage = new CartPage(page);
    await expect(cartPage.backpackItemLink).toHaveText("Sauce Labs Backpack");
});