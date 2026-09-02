import {test, expect} from '@playwright/test';
import RegisterPage from '../pages/RegisterPage';
import {faker} from '@faker-js/faker';

test("Register Test 01",async({page})=>{
    const regPage = new RegisterPage(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register");
    await regPage.enterFirstName(faker.person.firstName());
    await regPage.enterLastName(faker.person.lastName());
    await regPage.enterEmail(faker.internet.email());
    await regPage.enterPhone(faker.phone.number());
    await regPage.enterPWD("123456");
    await regPage.enterConfirmPWD("123456");
    await regPage.clickedTermsAndConditions();
    await regPage.clickContinueToRegister();
    await expect(page.getByRole('heading', { name: 'Your Account Has Been Created!' })).toBeVisible();
});