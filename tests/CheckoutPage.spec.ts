import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { InventoryPage } from '../src/pages/InventoryPage';
import { CartPage } from '../src/pages/CartPage';

test('@sanity Verify Cart Functionality', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    // Navigate
    await loginPage.navigateToUrl('https://www.saucedemo.com');

    // Login
    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    // Verify Products Page
    await inventoryPage.verifyInventoryPage();

    // Add Backpack
    await inventoryPage.addBackpackToCart();

    // Verify Cart Count
    expect(await inventoryPage.getCartCount()).toBe('1');

    // Open Cart
    await inventoryPage.openCart();

    // Verify Cart Page
    await cartPage.verifyCartPage();

    // Verify Product
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

    // Remove Product
    await cartPage.removeBackpack();

    // Verify Cart Empty
    await cartPage.verifyCartEmpty();

});