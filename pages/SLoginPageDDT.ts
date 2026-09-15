import {Page,Locator} from "@playwright/test";

export class SLoginPageDDT{
    readonly page:Page;
    readonly username_text_field:Locator;
    readonly password_text_field:Locator;
    readonly login_button:Locator;
    readonly error_message:Locator; 

    constructor(page:Page){
        this.page = page;
        this.username_text_field = page.locator("#user-name");
        this.password_text_field = page.locator("#password");
        this.login_button = page.locator("#login-button");
        this.error_message = page.locator("[data-test='error']");
    }

    async navigateToApp(){
        await this.page.goto("https://www.saucedemo.com/");
    }

    async setUserName(username:string){
        await this.username_text_field.fill(username);
    }

    async setPassword(password:string){
        await this.password_text_field.fill(password);
    }

    async clickLoginButton(){
        await this.login_button.click();
    } 

    async isLoginSuccessful(){
        await this.page.waitForURL("https://www.saucedemo.com/inventory.html");
    }
}