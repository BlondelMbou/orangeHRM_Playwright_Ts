import { test, expect } from "@playwright/test";
import LoginPage from "../pages/login.page";
import { AddAdmin } from "../pages/admin.page";

test.describe("Add admin test", () => {
  let loginPage: LoginPage;
  let admin: AddAdmin;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    admin = new AddAdmin(page);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  test("Add Admin Test", async ({ page }) => {
    await loginPage.login("Admin", "admin123");
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await admin.clickAdmin();
    await admin.clickAddButton();
    await admin.clickUserRole();
    await admin.clickUserRoleESS();
    await admin.entrerEmployeeName("Shelby  Berg");
    await admin.clickStatus();
    await admin.clickEnable();
    await admin.enterUsername("userrr");
    await admin.enterPassword("hirabelhocine1");
    await admin.confirmPassword("hirabelhocine");
    await admin.save();
  });
});