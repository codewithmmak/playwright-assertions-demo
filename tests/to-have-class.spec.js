const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('Registration page h1 element to have class test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    const h1 = page.locator("//h1");
    await expect(h1).toHaveClass("page-title h3");
});