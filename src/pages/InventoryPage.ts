import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {

    // ==============================
    // Locators
    // ==============================

    readonly pageTitle: Locator;
    readonly backpack: Locator;
    readonly bikeLight: Locator;
    readonly cartIcon: Locator;
    readonly cartBadge: Locator;
    readonly menuButton: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        super(page);

        this.pageTitle = page.locator('.title');

        this.backpack = page.locator('#add-to-cart-sauce-labs-backpack');

        this.bikeLight = page.locator('#add-to-cart-sauce-labs-bike-light');

        this.cartIcon = page.locator('.shopping_cart_link');

        this.cartBadge = page.locator('.shopping_cart_badge');

        this.menuButton = page.locator('#react-burger-menu-btn');

        this.logoutLink = page.locator('#logout_sidebar_link');
    }

    // ==============================
    // Business Methods
    // ==============================

    async verifyInventoryPage(): Promise<void> {
        await expect(this.pageTitle).toHaveText('Products');
    }

    async addBackpackToCart(): Promise<void> {
        await this.click(this.backpack);
    }

    async addBikeLightToCart(): Promise<void> {
        await this.click(this.bikeLight);
    }

    async openCart(): Promise<void> {
        await this.click (this.cartIcon);
    }

    async getCartCount(): Promise<string | null> {
        return await this.getText(this.cartBadge);
    }

    async logout(): Promise<void> {
        await this.click(this.menuButton);
        await this.click(this.logoutLink);
    }

}