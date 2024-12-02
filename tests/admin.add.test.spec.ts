
import test, { expect } from "@playwright/test";
import LoginPage from "../pages/login.page.ts";
import AddAdmin from "../pages/admin.page.ts";
import AddButton from "../pages/admin.add.page.ts";

test.describe("click on admin button on dashboard", () => {
    let loginPage: LoginPage
    let addAdmin: AddAdmin
    let addButton: AddButton


    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page)
        addAdmin = new AddAdmin(page) 
        addButton = new AddButton(page)

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })
    test("click on admin button on dashboard", async ({page}) => {
        await loginPage.login("Admin", "admin123");
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        await addAdmin.clickAdmin();
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers");
        await addAdmin.clickAddButton();
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser");
    })
})

