import {test,expect} from "@playwright/test";

test.skip("Handling alerts with OK",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Enabling dialog window handler
    page.on('dialog',async dialog =>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain("I am an alert box!");
        await dialog.accept();
    })

    await page.locator("//button[@id='alertBtn']").click();

    await page.waitForTimeout(5000);

})

test.skip("Handling confirmation dialog with OK and Cancel",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Enabling dialog window handler
    page.on('dialog',async dialog =>{
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain("Press a button!");
        await dialog.accept();  // close by using OK button
        //await dialog.dismiss();  // close by using cancel button
    })

    await page.locator("//button[@id='confirmBtn']").click();
    await expect(await page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");
    await page.waitForTimeout(5000);

})

test("Prompt Alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Enabling dialog window handler
    page.on('dialog',async dialog =>{
        await expect(dialog.type()).toContain('prompt');
        await expect(dialog.message()).toContain("Please enter your name:");
        await expect(dialog.defaultValue()).toContain("Harry Potter");
        await dialog.accept('John');  // close by using OK button
    })

    await page.locator("//button[@id='promptBtn']").click();
    await expect(await page.locator("//p[@id='demo']")).toHaveText("Hello John! How are you today?");
    await page.waitForTimeout(5000);

})