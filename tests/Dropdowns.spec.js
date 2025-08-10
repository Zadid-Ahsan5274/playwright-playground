import {test, expect} from '@playwright/test';

test("Handle dropdowns",async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

   // approach 1 -> to handle dropdown -> lable
    // await page.locator("#country").selectOption({label:'Canada'}); 

   // approach 2 -> to handle dropdown -> visible text
    // await page.locator("#country").selectOption('Canada');

    // approach 3 -> to handle dropdown -> value
    // await page.locator("#country").selectOption({value:'japan'});
    
    // approach 4 -> to handle dropdown -> index
    // await page.locator("#country").selectOption({index:8});
    
     // await page.selectOption("#country","France"); //by text

     // Assertions
     // 1. check number of options in the dropdown - approach 1
    /*const optionsCount = await page.locator("#country option");
    await expect(optionsCount).toHaveCount(10);*/
    
    // 2. check number of options in the dropdown - approach 2
      /*const options = await page.$$("#country option");
      console.log("Number of options: ",options.length);
      await expect(options.length).toBe(10);*/

    // 3. Check presence of a specific dropdown options - approach 1
     // const content = await page.locator("#country").textContent();
      // await expect(content.includes('Canada')).toBeTruthy();
        // await expect(content.includes('xyz')).toBeTruthy();

       // 4. Check presence of a specific dropdown options - approach 2 - using looping
       /*const options = await page.$$("#country option");
       let status = false;
       for(const option of options){
        // console.log(await option.textContent());
        let value = await option.textContent();
        if(value.includes('France')){
            status = true;
            break;
        }
       }
       expect(status).toBeTruthy();*/

       // 5. Select option from dropdown using loop
       const options = await page.$$("#country option");
       for(const option of options){
        // console.log(await option.textContent());
        let value = await option.textContent();
        if(value.includes('France')){
            await page.selectOption("#country",value);
            break;
        }
       }
    await page.waitForTimeout(5000);
})