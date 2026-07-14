import { Page, Locator, expect } from '@playwright/test';
import { logger } from '../logger/logger';
export class BasePage{
    protected page: Page;
    constructor(page: Page){
        this.page = page;
    }
// Navigate to URL
async navigateToUrl(url: string): Promise<void> {
    logger.info(`Navigating to URL: ${url}`);
    await this.page.goto(url);
}

// Click on an element
async click(locator: Locator): Promise<void> {
    logger.info(`Clicking on element: ${locator}`);
    await locator.click();
}


async fill(locator:Locator, value: string): Promise<void>{
    logger.info(`Entering value: ${value}`);
    await locator.fill(value);
}

async getText(locator:Locator):Promise<string | null>{
    return await locator.textContent();
}


async waitFor(locator:Locator):Promise<void>{
    await locator.waitFor();
}

async takeScreenshot(name : string):Promise<void>{
    logger.info(`Taking screenshot: ${name}`);
    await this.page.screenshot({path:`screenshots/${name}.png`, fullPage:true});

}


async getTitle(): Promise<string> {
        return await this.page.title();
    }
async refresh(): Promise<void> {
    logger.info(`Refreshing  page`);
        await this.page.reload();
    }
}