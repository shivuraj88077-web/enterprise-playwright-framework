import { test } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';

test('@smoke Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('https://www.saucedemo.com');

    await loginPage.login(
        "standard_user",
        "secret_sauce"
    );

});