// const {test,expect} = require('@playwright/test');
import {test,expect} from '@playwright/test';

test('Locators',async( {page})=>{
    await page.goto("https://demoblaze.com/");

    // click on login button - property
    // await page.locator('id=login2').click();
    await page.click('id=login2');
    //provide username - CSS
    //await page.locator('#loginusername').fill('pavanol');
    await page.fill('#loginusername','pavanol');
    //await page.type('#loginusername','pavanol');

    // provide password - CSS
    await page.fill("input[id='loginpassword']",'test@123')

    // click on login button - XPATH
    await page.click("//button[normalize-space()='Log in']")

    // verify logout link presence - XPATH
    const logoutlink = await page.locator("//a[@id='logout2']")

    await expect(logoutlink).toBeVisible();
    await page.close();
})