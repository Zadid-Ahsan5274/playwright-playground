const {test,expect} = require("@playwright/test");

test("page screenshot",async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage.png'});
});

test("full page screenshot",async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
    await page.waitForTimeout(5000);
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomePage_Full.png', fullPage: true});
});

test.only("element screenshot",async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
    const element = await page.locator("//*[@id='tbodyid']/div[8]/div");
    await page.waitForTimeout(5000);
    await element.screenshot({path:'tests/screenshots/'+Date.now()+'Sony Vaio i5.png'}); 
});