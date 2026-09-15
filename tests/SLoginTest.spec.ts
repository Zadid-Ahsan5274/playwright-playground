import {test,expect} from "@playwright/test";
import {SLoginPage} from "../pages/SLoginPage";
import { SLoginPageDDT } from "../pages/SLoginPageDDT";
import loginData from "./testData/loginData.json";

test("Login Test",async({page})=>{
    const sLoginPage = new SLoginPage(page);
    await sLoginPage.navigateToApp();
    await sLoginPage.setUserName("standard_user");
    await sLoginPage.setPassword("secret_sauce");
    await sLoginPage.clickLoginButton();
    await sLoginPage.isLoginSuccessful();
});

test("Valid Login Test DDT",async({page})=>{
    const sLoginPage = new SLoginPageDDT(page);
    await sLoginPage.navigateToApp();
    await sLoginPage.setUserName(loginData.valid_user.username);
    await sLoginPage.setPassword(loginData.valid_user.password);
    await sLoginPage.clickLoginButton();
    // await sLoginPage.isLoginSuccessful();
    await sLoginPage.isLoginSuccessful();
});

test("Invalid Login Test DDT",async({page})=>{
    const sLoginPage = new SLoginPageDDT(page);
    await sLoginPage.navigateToApp();
    await sLoginPage.setUserName(loginData.invalid_user.username);
    await sLoginPage.setPassword(loginData.invalid_user.password);
    await sLoginPage.clickLoginButton();
    // await sLoginPage.isLoginSuccessful();
    expect(sLoginPage.error_message).toBeVisible();
});


