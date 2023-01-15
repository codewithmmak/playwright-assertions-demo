const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('Continue button on Registration page to be enabled test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    const loc = "//input[@id='input-firstname']";
    await page.locator(loc).focus();
    await expect(page.locator(loc)).toBeFocused();
});