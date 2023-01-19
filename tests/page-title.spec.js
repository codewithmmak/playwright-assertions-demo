const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('homepage has title', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io');
    await expect(page).toHaveTitle("Your Store");
    await expect(page).toHaveTitle(/Store/);
});