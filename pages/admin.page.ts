import { type Page } from "@playwright/test";

export class AddAdmin {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    elements = {
        adminButton: () => this.page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a'),
        addBouton: () => this.page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-header-container > button'),
        userRole: () => this.page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div.oxd-select-text-input'),
        userRoleAdmin: () => this.page.locator('div[role="option"]:has-text("Admin")'),
        UserRoleESS: () => this.page.locator('div[role="option"]:has-text("ESS")'),
        employeeName: () => this.page.locator('input[placeholder="Type for hints..."]'),
        status: () => this.page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(3) > div > div:nth-child(2) > div > div > div.oxd-select-text-input'),
        enable: () => this.page.locator('div[role="option"]:has-text("Enabled")'),
        disabled:() => this.page.locator('div[role="option"]:has-text("Disabled")'),
        username: () => this.page.locator("#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(4) > div > div:nth-child(2) > input"),
        password: () => this.page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row.user-password-row > div > div.oxd-grid-item.oxd-grid-item--gutters.user-password-cell > div > div:nth-child(2) > input'),
        confirmPassword: () => this.page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row.user-password-row > div > div:nth-child(2) > div > div:nth-child(2) > input'),
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