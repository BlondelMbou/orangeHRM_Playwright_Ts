import { expect, type Page } from "@playwright/test";

export class SearchPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    elements = {

        searchButton: () => this.page.locator('input.oxd-input.oxd-input--active[placeholder="Search"]'),
        searchInput: () => this.page.locator('input.oxd-input.oxd-input--focus[placeholder="Search"]'),
        resultsList: () => this.page.locator('ul.oxd-main-menu'),
        listItems: () => this.page.locator('ul.oxd-main-menu li'),
    };

   

    async clickInputAndFill(value: string) {
        const searchButton = this.elements.searchButton();
        await searchButton.click();
        const searchInput = this.elements.searchInput();
        await searchInput.fill(value);
    }


    async validateResultsAreEmpty() {
        const listItems = this.elements.listItems();
        const itemCount = await listItems.count();
        expect(itemCount).toBe(0); 
    }
}
