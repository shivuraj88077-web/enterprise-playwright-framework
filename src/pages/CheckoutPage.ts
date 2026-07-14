import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {

    // ===========================
    // Locators
    // ===========================

    readonly pageTitle: Locator;
    readonly backpackProduct: Locator;
    readonly bikeLightProduct: Locator;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;
    readonly removeBackpackButton: Locator;
    readonly removeBikeLightButton: Locator;
    readonly cartBadge: Locator;

    constructor(page: Page) {
        super(page);

        this.pageTitle = page.locator('.title');

        this.backpackProduct = page.locator('text=Sauce Labs Backpack');

        this.bikeLightProduct = page.locator('text=Sauce Labs Bike Light');

        this.checkoutButton = page.locator('#checkout');

        this.continueShoppingButton = page.locator('#continue-shopping');

        this.removeBackpackButton = page.locator('#remove-sauce-labs-backpack');

        this.removeBikeLightButton = page.locator('#remove-sauce-labs-bike-light');

        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    // ===========================
    // Verification Methods
    // ===========================

    async verifyCartPage(): Promise<void> {
        await expect(this.pageTitle).toHaveText('Your Cart');
    }

    async verifyBackpackDisplayed(): Promise<void> {
        await expect(this.backpackProduct).toBeVisible();
    }

    async verifyBikeLightDisplayed(): Promise<void> {
        await expect(this.bikeLightProduct).toBeVisible();
    }

    // ===========================
    // Cart Actions
    // ===========================

    async removeBackpack(): Promise<void> {
        await this.click(this.removeBackpackButton);
    }

    async removeBikeLight(): Promise<void> {
        await this.click(this.removeBikeLightButton);
    }

    async clickCheckout(): Promise<void> {
        await this.click(this.checkoutButton);
    }

    async continueShopping(): Promise<void> {
        await this.click(this.continueShoppingButton);
    }

    // ===========================
    // Cart Information
    // ===========================

    async getCartCount(): Promise<string> {

        if (await this.cartBadge.isVisible()) {
            return (await this.cartBadge.textContent()) ?? "0";
        }

        return "0";
    }

    async verifyCartEmpty(): Promise<void> {
        await expect(this.cartBadge).toHaveCount(0);
    }

}