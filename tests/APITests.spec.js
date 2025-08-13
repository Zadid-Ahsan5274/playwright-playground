const {test,expect} = require("@playwright/test");
var productId;
test("Get users",async ({request}) => {
    const response = await request.get("https://api.restful-api.dev/objects");
    console.log(await response.json());
    await expect(response.status()).toBe(200);
});

test("Create a new user",async ({request}) => {
    const response = await request.post("https://api.restful-api.dev/objects",
                         {
                            data:{
                                "name": "Apple MacBook Pro 18 Pro Max",
                                "data": {
                                          "year": 2021,
                                          "price": 1999.99,
                                          "CPU model": "Intel Core i9",
                                          "Hard disk size": "1 TB"
                            }
                         },
                            headers:{
                                "Accept":"application/json",
                         }
                        }
    );
    console.log(await response.json());
    await expect(await response.status()).toBe(201);
    var res = await response.json();
    productId = res.id;
});

test("Update an existing user",async ({request}) => {
    const response = await request.put("https://api.restful-api.dev/objects/"+productId,
                         {
                            data:{
                                "name": "Apple MacBook Pro 18 Pro Max",
                                "data": {
                                          "year": 2023,
                                          "price": 1999.99,
                                          "CPU model": "Intel Core i9",
                                          "Hard disk size": "1 TB"
                            }
                         },
                            headers:{
                                "Accept":"application/json",
                         }
                        }
    );
    console.log(await response.json());
    await expect(await response.status()).toBe(200);
});

test("Delete a user",async ({request}) => {
    const response = await request.delete("https://api.restful-api.dev/objects/"+productId);
    await expect(response.status()).toBe(204);
});