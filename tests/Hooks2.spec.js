const {test,expect} = require("@playwright/test");
let page;

test.beforeEach(async ({browser})=>{
    page = await browser.newPage();
    await page.goto("https://demoblaze.com/");

    //login
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.locator("//button[normalize-space()='Log in']").click();
});

test.afterEach(async () => {
    //logout
    await page.locator("#logout2").click();
    await page.close();
});

test("Home Page Test",async({})=>{
    //homepage
    const products = await page.$$(".hrefch");
    await expect(products).toHaveLength(9);
});

test("Add Product to Cart Test",async({})=>{
    //add product to cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();

    page.on('dialog',async dialog => {
        await expect(dialog.message()).toContain("Product added.");
        await dialog.accept();
    });
});