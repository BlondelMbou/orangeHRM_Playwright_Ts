import { Page } from "@playwright/test";

class AddButton {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    elements = {
        clickAddButtonLocator: () => this.page.getByRole('button', { name: '+ Add' }),
    }

    async clickAdd() {
        await this.elements.clickAddButtonLocator().click();
    }
}
export default AddButton;