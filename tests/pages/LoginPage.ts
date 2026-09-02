import {Page} from "@playwright/test";

export default class LoginPage{

    constructor(public page:Page){
        this.page = page;
    }

    async enterEmail(email:string){
        await this.page.locator("#input-email").fill(email);
    }

    async enterPassword(password:string){
        await this.page.locator("#input-password").fill(password);
    }

     async clickLoginButton() {
        await this.page.click("//input[@type='submit' and @value='Login']");
    }


}