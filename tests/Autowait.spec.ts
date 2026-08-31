import {test,expect,Locator,Browser,Page,FrameLocator} from "@playwright/test";
import { chromium } from "playwright";

test("Auto Wait Checks 1",async({})=>{
    const browser:Browser = await chromium.launch({headless:false,channel:"chrome"});
    const page:Page = await browser.newPage();
    // page.setDefaultTimeout(15000);

    await page.goto("https://classic.freecrm.com/register/");
    await page.locator("input[name='agreeTerms']").check({timeout:5000});
});

test("Auto Wait Checks 2",async({})=>{
    const browser:Browser = await chromium.launch({headless:false,channel:"chrome"});
    const page:Page = await browser.newPage();
    // page.setDefaultTimeout(15000);

    await page.goto("https://classic.freecrm.com/register/");
    await page.locator("input[name='agreeTerms']").check({timeout:5000});
});

test("Auto Wait Checks 3",async({})=>{
    const browser:Browser = await chromium.launch({headless:false,channel:"chrome"});
    const page:Page = await browser.newPage();
    // page.setDefaultTimeout(15000);

    await page.goto("https://classic.freecrm.com/register/");
    await page.locator("input[name='agreeTerms']").check({timeout:5000});
});