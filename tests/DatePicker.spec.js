const{test,expect} = require("@playwright/test");

test("Date picker",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.fill("#datepicker","08/13/2025");

    //date picker
    const year = "2025";
    const month = "December";
    const date = "20";
    await page.click("#datepicker");
    while(true){
       const currentYear = await page.locator(".ui-datepicker-year").textContent();
       const currentMonth = await page.locator(".ui-datepicker-month").textContent();

       if(currentYear == year && currentMonth == month){
        break;
       }
       await page.locator("[title='Next']").click();
       //await page.locator("[title='Prev']").click();
    }
    const dates = await page.$$("//a[@class='ui-state-default']")
    // date selection using loops
    /*for(const dt of dates){
        if(await dt.textContent()==date){
            await dt.click();
            break;
        }
    }*/

        // date selection - without loop
        await page.click("//a[@class='ui-state-default'][text()='${date}']")
    await page.waitForTimeout(5000);
});