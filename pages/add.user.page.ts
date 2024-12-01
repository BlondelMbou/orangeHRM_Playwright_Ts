import { Page } from "@playwright/test";

class AddUser {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    elements = {
        userRoleLocator: () => this.page.getByLabel("User Role*").nth(0),
        employeeNameLocator: () => this.page.locator('input[placeholder="Type for hints..."]'),
        statusLocator: () =>  this.page.getByLabel('Status*').first(),
        userNameLocator: () => this.page.locator('input[name="username"]'),
        passwordLocator: () => this.page.locator('input[name="password"]'),
        confirmPasswordLocator: () => this.page.locator('input[name="confirmPassword"]'),
        saveLocator: () => this.page.locator('button', { hasText: 'Save' }),
    }

    async enterUserRole(userRole: string) {
        (await this.elements.userRoleLocator().selectOption({ label: userRole }));
    }

    async enterEmployeeName(employeeName: string) {
        await this.elements.employeeNameLocator().fill(employeeName);
    }

    async enterStatus(status: string) {
        await this.elements.statusLocator().selectOption({ label: status });
    }

    async enterUsername(username: string) {
        await this.elements.userNameLocator().fill(username);
    }

    async enterPassword(password: string) {
        await this.elements.passwordLocator().fill(password);
    }

    async enterConfirmPassword(confirmPassword: string) {
        await this.elements.confirmPasswordLocator().fill(confirmPassword);
    }

    async clickSave() {
        await this.elements.saveLocator().click();
    }
}

export default AddUser;

