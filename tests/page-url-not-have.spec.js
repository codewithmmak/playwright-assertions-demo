const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('LambdaTest Playground URL Not To Have test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io');

    // Expect a url " not to contain" a substring.
    await expect(page).not.toHaveURL(/404/);

})