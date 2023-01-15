const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('Form Control occurrences on Registration page test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    const formControl = page.locator("//input[@class='form-control']");
    await expect(formControl).toHaveCount(6);
});