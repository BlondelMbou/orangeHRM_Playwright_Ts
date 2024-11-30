
import test, { expect } from "@playwright/test";
import LoginPage from "../pages/login.page.ts";
import AdminPage from "../pages/admin.page.ts";
import AddButton from "../pages/admin.add.page.ts";

test.describe("click on admin button on dashboard", () => {
    let loginPage: LoginPage
    let adminPage: AdminPage
    let addButton: AddButton


    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page)
        adminPage = new AdminPage(page) 
        addButton = new AddButton(page)

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })
    test("click on admin button on dashboard", async ({page}) => {
        await loginPage.login("Admin", "admin123");
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        await adminPage.clickAdmin();
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers");
        await addButton.clickAdd();
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser");
    })
})

