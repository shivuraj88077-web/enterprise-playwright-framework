import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { logger } from '../logger/logger';
export class LoginPage extends BasePage {

    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
   

    constructor(page: Page) {
        super(page);

        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
       
    }

   async login(username: string, password: string): Promise<void> {

    logger.info("========== Login Started ==========");

    logger.info(`Entering Username: ${username}`);
    await this.fill(this.username, username);

    logger.info("Entering Password");
    await this.fill(this.password, password);

    logger.info("Clicking Login Button");
    await this.click(this.loginButton);

    logger.info("Login Completed Successfully");

}}
