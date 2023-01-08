const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('LambdaTest Playground URL test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io');

    // Expect a url "to contain" a substring.
    await expect(page).toHaveURL(/ecommerce/);

})