const {test,expect} = require("@playwright/test");

test("TEST1",async ({page}) => {
    await page.goto("https://demoblaze.com/");
    await expect(page).toHaveTitle("STORE");
});

test("TEST2",async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveTitle("OrangeHRM");
});

test("TEST3",async ({page}) => {
    await page.goto("https://demo.nopcommerce.com/");
    await expect(page).toHaveTitle("nopCommerce demo store. Home page titlee");
});