import { type Page } from "@playwright/test";

export class AddAdmin {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    elements = {
        adminButton: () => this.page.locator(".oxd-main-menu-item.active"),
        addBouton: () => this.page.locator('button.oxd-button.oxd-button--medium.oxd-button--secondary'),
        userRole: () => this.page.locator('.oxd-select-text-input'),
        userRoleAdmin: () => this.page.locator('div[role="option"]:has-text("Admin")'),
        UserRoleESS: () => this.page.locator('div[role="option"]:has-text("ESS")'),
        employeeName: () => this.page.locator('input[placeholder="Type for hints..."]'),
        status: () => this.page.locator('.oxd-select-text-input'),
        enable: () => this.page.locator('div[role="option"]:has-text("Enabled")'),
        disabled:() => this.page.locator('div[role="option"]:has-text("Disabled")'),
        username: () => this.page.locator(".oxd-input.oxd-input--active"),
        password: () => this.page.locator('input[type="password"][autocomplete="off"]:nth-of-type(1)'),
        confirmPassword: () => this.page.locator('input[type="password"][autocomplete="off"]:nth-of-type(2)'),
        boutonSave: () => this.page.locator('button:has-text("Save")'),
    };
    async navigate(url: string) {
        await this.page.goto(url);
    }
    async clickAdmin() {
        await this.elements.adminButton().click();
    }
    async clickAddButton() {
        await this.elements.addBouton().click();
    }
    async clickUserRole(){
        this.elements.userRole().click();
    }
    async clickUserRoleAdmin(){
        this.elements.userRoleAdmin().click();
    }
    async clickUserRoleESS(){
        this.elements.UserRoleESS().click();
    }
    async clickStatus(){
        await this.elements.status().click();
    }
    async clickEnable(){
        await this.elements.enable().click();
    }
    async clickDisabled(){
        await this.elements.disabled().click();
    }
    async entrerEmployeeName(employee_name: string) {
        await this.elements.employeeName().fill(employee_name);
    }
    async enterUsername(username: string) {
        await this.elements.username().fill(username);
    }
    async enterPassword(password: string) {
        await this.elements.password().fill(password);
    }
    async confirmPassword(confirmPassword: string) {
        await this.elements.password().fill(confirmPassword);
    }
    async save() {
        await this.elements.boutonSave().click();
    }
}