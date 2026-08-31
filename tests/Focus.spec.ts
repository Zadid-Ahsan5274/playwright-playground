import {test,expect,Locator,Browser,Page,FrameLocator} from "@playwright/test";
import { chromium } from "playwright";

test("Focus Element Test",async({})=>{
    const browser:Browser = await chromium.launch({headless:false,channel:"chrome"});
    const page:Page = await browser.newPage();

    await page.goto("https://orangehrm.com/30-day-free-trial");
    await page.getByText("Allow all").focus();
    await page.getByText("Allow all").click();
    const fullName = await page.locator("#Form_getForm_Name");
    fullName.focus();
    fullName.fill("Testing Automation");
    await page.waitForTimeout(5000);
});