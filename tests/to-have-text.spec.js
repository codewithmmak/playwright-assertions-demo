const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('Registration page is having text First name', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    const firstname = page.locator("label[for='input-firstname']");
    await expect(firstname).toHaveText("First Name");
});