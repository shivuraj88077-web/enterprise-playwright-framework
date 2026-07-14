import { test } from '@playwright/test';
import { logger } from '../logger/logger';

test.beforeAll(async () => {
    logger.info("========== Test Execution Started ==========");
});

test.beforeEach(async ({ page }) => {
    logger.info("Launching Browser");

    await page.goto('https://www.saucedemo.com');
});

test.afterEach(async () => {
    logger.info("Test Completed");
});

test.afterAll(async () => {
    logger.info("========== Test Execution Finished ==========");
});