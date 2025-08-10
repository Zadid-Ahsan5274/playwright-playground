import {test,expect} from '@playwright/test';

test('handle inputbox',async({page})=>{
    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
   
    await page.locator("//input[@id='gender']").check(); //male
    await expect(await page.locator("//input[@id='gender']")).toBeChecked();
    await expect(await page.locator("//input[@id='gender']")).isChecked().toBeTruthy();

    //await expect(await page.locator("(//input[@type='radio'])[2]")).toBeChecked();
    await expect(await page.locator("(//input[@type='radio'])[2]")).isChecked().toBeFalsy();//female

    await page.waitForTimeout(5000); //pausing code
})