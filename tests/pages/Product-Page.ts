import { type Page, type Locator } from "playwright";

export class Product_Page{
    readonly page:Page;
    readonly addToCartButton:Locator;
    // readonly searchButton:Locator;

    constructor(page:Page){
        this.page = page;
        this.addToCartButton = page.locator("input[id='add-to-cart-button']").nth(0);

    }

    async clickAddToCartButton(){
        await this.addToCartButton.click();
    }
}