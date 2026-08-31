import {test,expect,Browser,Page, chromium} from '@playwright/test';
import path from 'path';

test("Upload Single File",async({})=>{
    const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    const page:Page = await browser.newPage();
    await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");

    // Single File Upload:
    await page.locator("input[name='upfile']").setInputFiles("C:/Users/zadid.ahsan/Documents/Project_docs/Sample files/sample.pdf");
    await page.waitForTimeout(3000);
});


test("Upload Multiple Files",async({})=>{
    const browser:Browser = await chromium.launch({headless:false,channel:'chrome'});
    const page:Page = await browser.newPage();
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    // Multiple File Upload:
    await page.locator("#filesToUpload").setInputFiles([
        path.join("C:/Users/zadid.ahsan/Documents/Project_docs/Sample files/sample.pdf"),
        path.join("C:/Users/zadid.ahsan/Documents/Project_docs/Sample files/pptexamples.ppt"),
        path.join("C:/Users/zadid.ahsan/Documents/Project_docs/Sample files/file-sample_1MB.docx")
    ]);
    await page.waitForTimeout(3000);

    // Deselect files
    await page.locator("#filesToUpload").setInputFiles([]);

    // Buffer memory - upload file from buffer memory
    await page.locator("#filesToUpload").setInputFiles({
        name:"file.txt",
        mimeType:"text/plain",
        buffer: Buffer.from("Hello, World!") // Buffer memory
    });
    await page.waitForTimeout(3000);
});