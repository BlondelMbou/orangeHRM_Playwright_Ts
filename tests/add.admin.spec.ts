import { test, expect } from "@playwright/test";
import LoginPage from "../pages/login.page";
import AddAdmin  from "../pages/admin.page";

test.describe("Add admin test", () => {
  let loginPage: LoginPage;
  let admin: AddAdmin;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    admin = new AddAdmin(page);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });
  
  test("Add Admin Test", async ({ page }) => {
  const password = "hirabelhocine1";
  const confirmPassword = "hirabelhocine1";

  await loginPage.login("Admin", "admin123");
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await admin.clickAdmin();
  await admin.clickAddButton();
  await admin.clickUserRole();
  await admin.clickUserRoleAdmin();
  await admin.entrerEmployeeName("m");
  await page.waitForTimeout(5000);
  await admin.clickStatus();
  await admin.clickEnable();
  await admin.enterUsername("kkkkkkkk");
  await admin.enterPassword(password);
  await admin.confirmPassword(confirmPassword);
  // const errorMessage = admin.elements.msgErreur()
  // await expect(errorMessage).toHaveText('Passwords do not match');
  // console.log("Passwords do not match");
  await admin.save();
  await expect(page.locator('.oxd-toast')).toContainText('Successfully Saved')    
  });
})

