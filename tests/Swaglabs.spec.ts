import {test,expect,Locator} from "@playwright/test";

test("Login to Swag Labs",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    const username_text_field:Locator = page.locator("#user-name");
    const password_text_field:Locator = page.locator("#password");
    const login_button:Locator = page.locator("#login-button");
    await username_text_field.fill("standard_user");
    await password_text_field.fill("secret_sauce");
    await login_button.click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");


});