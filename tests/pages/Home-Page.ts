import {type Locator, type Page} from "@playwright/test";

export class Home_Page{
    readonly page:Page;
    // readonly getStartedLink:Locator;
    readonly searchProductInput:Locator;
    readonly searchButton:Locator;

    constructor(page:Page){
        this.page = page;
        // this.getStartedLink = page.locator("a",{hasText:"Get Started"});
        this.searchProductInput = page.locator("input[id='twotabsearchtextbox']");
        this.searchButton = page.locator("input#nav-search-submit-button");  //input[type='submit'] is the button with type submit in the search bar
    }

    async goto(){
        await this.page.goto("https://www.amazon.in/");
    }

    async searchProduct(productName:string){
        await this.searchProductInput.click();
        await this.searchProductInput.fill(productName);
        await this.searchButton.click();
    }

    async clickOnProductLink(productLink:string){
        await this.page.locator("a",{hasText:productLink}).nth(0).click();
    }

}