import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {

    // ==========================
    // Locators
    // ==========================

    readonly cartTitle: Locator;
    readonly backpackItem: Locator;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;
    readonly removeBackpackButton: Locator;
    readonly cartBadge: Locator;

    constructor(page: Page) {
        super(page);

        this.cartTitle = page.locator('.title');
        this.backpackItem = page.locator('.inventory_item_name');
        this.checkoutButton = page.locator('#checkout');
        this.continueShoppingButton = page.locator('#continue-shopping');
        this.removeBackpackButton = page.locator('#remove-sauce-labs-backpack');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    // ==========================
    // Business Methods
    // ==========================

    // Verify Cart Page
    async verifyCartPage(): Promise<void> {
        await expect(this.cartTitle).toHaveText('Your Cart');
    }

    // Verify Backpack is present in cart
    async verifyBackpackPresent(): Promise<void> {
        await expect(this.backpackItem).toHaveText('Sauce Labs Backpack');
    }

    // Remove Backpack
    async removeBackpack(): Promise<void> {
        await this.click(this.removeBackpackButton);
    }

    // Click Checkout
    async clickCheckout(): Promise<void> {
        await this.click(this.checkoutButton);
    }

    // Continue Shopping
    async continueShopping(): Promise<void> {
        await this.click(this.continueShoppingButton);
    }

    // Get Cart Count
    async getCartCount(): Promise<string | null> {
        if (await this.cartBadge.isVisible()) {
            return await this.cartBadge.textContent();
        }
        return "0";
    }

    // Verify Cart Empty
    async verifyCartEmpty(): Promise<void> {
        await expect(this.cartBadge).toHaveCount(0);
    }
}