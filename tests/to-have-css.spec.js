const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('First name on Registration page to have CSS test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    const firstname = page.locator("#input-firstname");
    await expect(firstname).toHaveCSS("display", "block");
});