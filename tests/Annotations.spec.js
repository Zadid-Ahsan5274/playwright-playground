import {test,expect} from "@playwright/test";

// only annotation
/*test.only("Test1",async({page})=>{
    console.log("This is my test1...");
});*/

test("Test2",async({page})=>{
    console.log("This is my test2...");
});

// skip annotation
/*test.skip("Test3",async({page})=>{
    console.log("This is my test3...");
});*/

/*test("test4",async({page,browserName})=>{
    console.log("This is my test4...");
    if(browserName === "chromium"){
        test.skip();
    }
});*/

// Fixme annotation
/*test("test5",async({page})=>{
    test.fixme();
    console.log("This is my test5...");
});*/

// Fail annotation
/*test.only("test6",async({page})=>{
    test.fail();  //expected
    console.log("This is my test6...");
    await expect(1).toBe(2);  //passed
    //if both expected and actual failed - then pass otherwise fail
});*/

/*test.only("test7",async({page,browserName})=>{
    console.log("This is my test7...");
    if(browserName == "chromium"){
        test.fail();  //expected
    }
});*/

// Slow annotation
test("test8",async({page,browserName})=>{
    test.slow();
    //test.setTimeout(5000);
    await page.goto("https://demoblaze.com/");
    console.log("This is my test8...");
});
