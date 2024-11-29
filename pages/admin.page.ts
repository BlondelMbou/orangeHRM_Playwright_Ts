import { Page } from "@playwright/test";

 class AdminPage{
    private page:Page;
    constructor(page:Page) {
        this.page = page;
    }
    elements = {
        clickAdminButton: () => this.page.getByText('Admin'),
    }

    async clickAdmin(){
        await this.elements.clickAdminButton().click();
    }
}
export default AdminPage;