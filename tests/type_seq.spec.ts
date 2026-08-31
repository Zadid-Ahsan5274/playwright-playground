import {test,expect,Browser,Page, chromium} from '@playwright/test';

test("Type characters sequentially",async({})=>{
    const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    const page:Page = await browser.newPage();
    await page.goto("https://www.flipkart.com/");
    await page.getByText('✕').click();
    await page.getByPlaceholder("Search for Products, Brands and More").first().pressSequentially("Macbook",{delay:500});
    await page.waitForTimeout(3000);
});

test("Drag and Drop",async({})=>{
    const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    const page:Page = await browser.newPage();
    await page.goto("https://jqueryui.com/droppable/");

    // Navigating inside iFrame
    const frame = await page.frameLocator('iframe.demo-frame');

    // Single
    await frame.locator("#draggable").dragTo(frame.locator("#droppable"));
    await page.waitForTimeout(15000);
});

test("Move to element",async({})=>{
    const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    const page:Page = await browser.newPage();
    await page.goto("https://jqueryui.com/droppable/");

    // Navigating inside iFrame
    const frame = await page.frameLocator('iframe.demo-frame');

    // Single
   // await frame.locator("#draggable").dragTo(frame.locator("#droppable"));

   // Multiple commands
   await frame.locator("#draggable").hover();
    await page.mouse.down();
    await frame.locator("#droppable").hover();
    await page.mouse.up();
    await page.waitForTimeout(5000);
});