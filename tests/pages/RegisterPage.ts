import { Page } from "@playwright/test";
export default class RegisterPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async enterFirstName(firstName: string) {
        await this.page.locator("#input-firstname").fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.page.locator("#input-lastname").fill(lastName); 
    }

    async enterEmail(email: string) {
        await this.page.locator("#input-email").fill(email);
    }

    async enterPhone(phone: string) {
        await this.page.locator("#input-telephone").fill(phone);
    }

    async enterPWD(password: string) {
        await this.page.locator("#input-password").fill(password);
    }

    async enterConfirmPWD(password: string) {
        await this.page.locator("#input-confirm").fill(password);
    }

    async isSubscribed() {
        return this.page.locator("#input-newsletter-no").isChecked();
    }

    async clickedTermsAndConditions() {
        await this.page.locator("#input-agree").click();
    }

    async clickContinueToRegister() {
        await this.page.click("//input[@type='submit' and @value='Continue']");
    }

}