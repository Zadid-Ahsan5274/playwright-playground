import {test,expect} from "@playwright/test";

test("Upload single file",async({page})=> {
    await page.goto("https://practice.expandtesting.com/upload");
    await page.waitForSelector("#fileInput");
    await page.locator("#fileInput").setInputFiles("tests\\UploadFiles\\Get_Started_With_Smallpdf.pdf");
    await page.waitForTimeout(5000); 
});

test.only("Upload multiple file",async({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.locator("#filesToUpload").setInputFiles(["tests\\UploadFiles\\file-example_PDF_1MB.pdf",
                                                          "tests\\UploadFiles\\Get_Started_With_Smallpdf.pdf"  
    ]);
    await page.waitForTimeout(5000);
    await expect(await page.locator("#fileList li:nth-child(1)")).toHaveText("file-example_PDF_1MB.pdf");
    await expect(await page.locator("#fileList li:nth-child(2)")).toHaveText("Get_Started_With_Smallpdf.pdf");
    
    // Removing files
    await page.locator("#filesToUpload").setInputFiles([]);
    await page.waitForTimeout(5000);
    await expect(await page.locator("#fileList li:nth-child(1)")).toHaveText("No Files Selected");
    await page.waitForTimeout(5000);
});