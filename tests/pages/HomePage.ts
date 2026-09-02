import { Page, Locator } from "@playwright/test";

export default class HomePage {

    constructor(public page: Page) { }

    async addFirstProductToCart() {
        const productImage = this.page.locator(
            "//a[@id='mz-product-listing-image-39218404-0-0']//div[@class='carousel-item active']//img[@title='Canon EOS 5D']"
        );
        const cartButton = this.page.locator(
            "//button[@class='btn btn-cart cart-30']//i[@class='fas fa-shopping-cart']"
        );

        // Scroll once, up front, so no further scrolling happens between hover and click
        await productImage.scrollIntoViewIfNeeded();
        await productImage.hover();

        // Wait for the hover-revealed button, then force-click to skip Playwright's
        // own actionability re-check (which would otherwise scroll again and break hover)
        await cartButton.waitFor({ state: "visible" });
        await cartButton.click({ force: true });
    }

    async isToastVisible() {
        const toast = this.page.getByRole('link', { name: 'View Cart' })
        await toast.waitFor({ state: "visible" });
        return toast.isVisible(); // returns true or false
    }

}