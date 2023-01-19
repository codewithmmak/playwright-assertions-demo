const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('LambdaTest Playground URL test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io');
    await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io");
    await expect(page).toHaveURL(/ecommerce/);
});