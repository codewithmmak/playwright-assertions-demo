const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('First name on Registration page to have Id test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    const firstname = page.locator("//input[@name='firstname']");
    await expect(firstname).toHaveId("input-firstname1");
});