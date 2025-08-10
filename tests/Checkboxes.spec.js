const { test, expect } = require('@playwright/test');

test.describe('Checkboxes', () => {
    test('Handle  checkbox', async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/');
        
        //single checkbox
        await page.locator("//input[@id='sunday' and @type='checkbox']").check();
        await expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeTruthy();
        await expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeFalsy();


        //multiple checkboxes
        const checkboxLocators = ["//input[@id='sunday' and @type='checkbox']","//input[@id='monday' and @type='checkbox']","//input[@id='saturday' and @type='checkbox']"]
        
        for(const locator of checkboxLocators){   // select multiple checkboxes
            await page.locator(locator).check();
        }
       await page.waitForTimeout(5000);
        for(const locator of checkboxLocators){   // unselect multiple checkboxes which are already checked
            if(await page.locator(locator).isChecked()){
                await page.locator(locator).uncheck();
            }
            
        }
        await page.waitForTimeout(5000);
    });
});