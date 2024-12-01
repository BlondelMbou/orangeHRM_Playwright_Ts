
import test, { expect } from "@playwright/test";
import LoginPage from "../pages/login.page.ts";
import AdminPage from "../pages/admin.page.ts";
import AddButton from "../pages/admin.add.page.ts";
import AddUser from "../pages/add.user.page.ts";

test.describe("Add user from admin page", () => {
    let loginPage: LoginPage
    let adminPage: AdminPage
    let addButton: AddButton
    let addUser: AddUser


    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        adminPage = new AdminPage(page)
        addButton = new AddButton(page)
        addUser = new AddUser(page)

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })
    test("Add user from admin page", async ({ page }) => {
        await loginPage.login("Admin", "admin123");
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        await adminPage.clickAdmin();
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers");
        // await addButton.clickAdd();
        // await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser");
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');
        await addUser.enterUserRole('Admin');
        await addUser.enterEmployeeName('Blondel MBOU');
        await addUser.enterStatus('Enabled');
        await addUser.enterUsername('newuser123');
        await addUser.enterPassword('Password@123');
        await addUser.enterConfirmPassword('Password@123');
        await addUser.clickSave();
        await expect(page.locator('.oxd-toast')).toContainText('Successfully Saved')    })
})

