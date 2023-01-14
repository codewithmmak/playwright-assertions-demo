const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('Soft assertion test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io');
    await expect.soft(page.getByText('Top Category'), 'top category should be visible').toBeVisible();
    await expect(page).toHaveTitle("Your Store");
});