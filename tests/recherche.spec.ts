
import { test, expect } from "@playwright/test";
import LoginPage from "../pages/login.page";
import { SearchPage } from "../pages/recherche.page";



test.describe("Recherche Tests", () => {
    let loginPage: LoginPage;
    let recherchePage: SearchPage;
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    test("recherche test", async ({ page }) => {
        recherchePage = new SearchPage(page);
        await loginPage.login("Admin", "admin123");

        await recherchePage.clickInputAndFill("ayman")
        const resultsList = recherchePage.elements.resultsList();
        await resultsList.waitFor({ state: 'attached', });
        const resulitems = recherchePage.elements.listItems()
        const itemCount = await resulitems.count();
        expect(itemCount).toBe(0);
        console.log("Test réussi : Aucun résultat trouvé pour 'ayman'.");
    });

});