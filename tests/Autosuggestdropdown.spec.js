const {test,expect} = require("@playwright/test");

test("Handling auto suggest dropdown",async ({page}) => {
    await page.goto("https://www.redbus.in/");
    await page.locator("//div[contains(text(),'From')]").fill("Bangalore");
    await page.waitForSelector("//div[contains(text(),'Bangalore')]");

    const fromCityOptions = await page.$$("//div[contains(text(),'Bangalore')]");

    for(let option of fromCityOptions){
        const value = await option.textContent();
        //console.log(value);
        if(value.includes('Bangalore')){
            await option.click();
            break;
        }
    }
    await page.waitForTimeout(5000);

})