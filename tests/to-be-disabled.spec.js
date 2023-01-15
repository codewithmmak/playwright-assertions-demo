const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('First name field on Registration page to not be disabled test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    const firstNameLoc = page.locator("//input[@id='input-firstname']");
    await expect(firstNameLoc).not.toBeDisabled();
})