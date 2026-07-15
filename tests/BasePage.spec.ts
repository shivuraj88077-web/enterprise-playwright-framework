import { test, expect } from '@playwright/test';
import { BasePage } from '../src/pages/BasePage';

test('Verify BasePage methods', async ({ page }) => {
    const basePage = new BasePage(page);

    await basePage.navigateToUrl('https://www.saucedemo.com');

    const title = await basePage.getTitle();

    console.log('Page Title:', title);

    expect(title).toContain('Swag Labs');
});