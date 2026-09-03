import fs from "fs";
import path from "path";
import { test, expect } from "@playwright/test";
import { parse } from "csv-parse/sync";

type CsvLoginRecord = {
  email: string;
  password: string;
  expected: string;
};

const csvPath = path.resolve(__dirname, "testData/testData.csv");
const fileContent = fs.readFileSync(csvPath, "utf-8");
const records = parse(fileContent, {
  columns: true,
  skip_empty_lines: true,
  trim: true,
}) as CsvLoginRecord[];

test.describe("Demowebshop data-driven login tests", () => {
  for (const record of records) {
    const email = String(record.email ?? "").trim();
    const password = String(record.password ?? "").trim();
    const expected = String(record.expected ?? "").trim().toLowerCase();

    test(`login scenario: ${expected} - ${email || "empty email"}`, async ({ page }) => {
      await page.goto("https://demowebshop.tricentis.com/login");

      await page.locator("#Email").fill(email);
      await page.locator("#Password").fill(password);
      await page.locator("input[value='Log in']").click();

      if (expected === "valid") {
        await expect(page.locator("a[href='/logout']")).toBeVisible({ timeout: 10000 });
      } else {
        await expect(page.locator(".validation-summary-errors")).toBeVisible({ timeout: 10000 });
        await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
      }
    });
  }
});
