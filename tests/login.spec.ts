import { test, expect } from "@playwright/test";
import LoginPage from "../pages/login.page";


test.describe("Login Tests",{tag : ['@tc-14','@regression','@smoke','@critical']}, () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  test("correct username && correct password", async ({page}) => {
    await loginPage.login("Admin", "admin123");
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  });

  test("correct username && incorrect password", async () => {
    await loginPage.login("standard_user", "wrong_password");
    const errorMessage = await loginPage.elements.errorMessageLocator().innerText();
    expect(errorMessage).toContain("Invalid credentials");
  });

  test("incorrect username && correct password", async () => {
    await loginPage.login("invalid_user", "secret_sauce");
    const errorMessage = await loginPage.elements.errorMessageLocator().innerText();
    expect(errorMessage).toContain("Invalid credentials");
  });
});