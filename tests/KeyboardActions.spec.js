const{test,expect} = require("@playwright/test");

test("Handling keyboard actions",async({page})=>{
    await page.goto("https://gotranscript.com/text-compare");
   // await page.locator("[name='text1']").fill("Welcome to automation");
    await page.fill("[name='text1']","Welcome to automation");

    //Cntrl + A -> Select the text
    await page.keyboard.press("Meta+A");

    //Cntrl + C -> Copy the text
    await page.keyboard.press("Meta+C");

    //Tab
    await page.keyboard.down("Tab");
    await page.keyboard.up("Tab");

    //Cntrl + V -> paste the text
    await page.keyboard.press("Meta+V");

    await page.waitForTimeout(5000);
});