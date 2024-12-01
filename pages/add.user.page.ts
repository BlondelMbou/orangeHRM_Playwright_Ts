import { Page } from "@playwright/test";

class AddUser {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    elements = {
        userRoleLocator: () => this.page.locator(""),
        employeeNameLocator: () => this.page.locator(""),
        statusLocator: () => this.page.locator(""),
        userNameLocator: () => this.page.locator(""),
        passwordLocator: () => this.page.locator(""),
        confirmPasswordLocator: () => this.page.locator(""),
        saveLocator: () => this.page.locator(""),
    }
    async enterUserRole() {
        await this.elements.userRoleLocator().click();
    }
    async enterEmployeeName(employeeName: string) {
        await this.elements.employeeNameLocator().fill(employeeName);
    }
    async enterStatus() {
        await this.elements.statusLocator().click();
    }
    async enterUsername(username: string) {
        await this.elements.userNameLocator().fill(username);
    }
    async enterPasswoerd(password: string) {
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