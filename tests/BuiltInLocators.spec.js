const {test,expect} = require('@playwright/test');

test('Builtin Locators', async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const logo = await page.getByAltText("company-branding");  // getByAltText
    await expect(logo).toBeVisible();

    await page.getByPlaceholder("Username").fill("Admin");  // getByPlaceholder
    await page.getByPlaceholder("Password").fill("admin123");  // getByPlaceholder
    await page.getByRole("button",{type:'submit'}).click();  // getByRole

    const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    await expect(await page.getByText(name)).toBeVisible(); // getByText
})