import { type Page } from "@playwright/test";

export class SearchPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    elements = {
       
        searchButton: () => this.page.locator('input.oxd-input.oxd-input--active[placeholder="Search"]'),
    };

    async clicksearchButton() {
        await this.elements.searchButton().click();
    }

  
}
