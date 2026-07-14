import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { InventoryPage } from '../src/pages/InventoryPage';
import { CartPage } from '../src/pages/CartPage';

test('Verify Add and Remove Product from Cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    // Navigate to application
    await loginPage.navigateToUrl('https://www.saucedemo.com');

    // Login
    await loginPage.login('standard_user', 'secret_sauce');

    // Verify Inventory Page
    await inventoryPage.verifyInventoryPage();

    // Add Backpack
    await inventoryPage.addBackpackToCart();

    // Verify Cart Count
    expect(await inventoryPage.getCartCount()).toBe('1');

    // Open Cart
    await inventoryPage.openCart();

    // Verify Cart Page
    await cartPage.verifyCartPage();

    // Verify Backpack
    await cartPage.verifyBackpackPresent();

    // Remove Backpack
    await cartPage.removeBackpack();

    // Verify Cart Empty
    await cartPage.verifyCartEmpty();

});