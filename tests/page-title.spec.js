const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('homepage has title', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Your Store/);

})