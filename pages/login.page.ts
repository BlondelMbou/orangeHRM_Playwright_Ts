import { Page } from '@playwright/test';

class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    elements = {
        usernameLocator: () => this.page.locator('input[name="username"]'),
        passwordLocator: () => this.page.locator('input[name="password"]'),
        submitButtonLocator: () => this.page.locator('button[type="submit"]'),
        errorMessageLocator : ()=> this.page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text')    
    }
   
    async enterUsername(username: string) {
        await this.elements.usernameLocator().fill(username);
    }
    async enterPassword(password: string) {
        await this.elements.passwordLocator().fill(password)
    }
    async submit() {
        await this.elements.submitButtonLocator().click();
    }
    async login(username: string, password: string, url: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.submit();
    }
}

export default LoginPage;
