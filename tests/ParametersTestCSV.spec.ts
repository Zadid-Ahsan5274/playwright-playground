import { test, expect } from '@playwright/test';
import fs from "fs";
import { parse } from "csv-parse/sync";

// Reading data from CSV
const csvPath = "tests/testData/testData.csv";
const fileContent = fs.readFileSync(csvPath, 'utf-8');
const records = parse(fileContent, { columns: true, skip_empty_lines: true });

test.describe("Login Test Data Driven from CSV", () => {
    for (const data of records) {
        const { email, password, expected } = data;

        test(`Login Test for ${email} and ${password}`, async ({ page }) => {
            await page.goto("https://demowebshop.tricentis.com/login");
            await page.fill("#Email", email);
            await page.fill("#Password", password);
            await page.click("//input[@value='Log in']");

            if (expected.toLowerCase() === "valid") {
                const logoutLink = page.locator("a[href='/logout']");
                await expect(logoutLink).toBeVisible({ timeout: 5000 });
            } else {
                const errorMessage = page.locator(".validation-summary-errors");
                await expect(errorMessage).toBeVisible({ timeout: 5000 });
                await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
            }
        });
    }
});