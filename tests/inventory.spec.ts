import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { InventoryPage } from '../src/pages/InventoryPage';

test('@regression Verify Inventory Page', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await page.goto('https://www.saucedemo.com');

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await inventoryPage.verifyInventoryPage();

    await inventoryPage.addBackpackToCart();

    expect(await inventoryPage.getCartCount()).toBe('1');

});