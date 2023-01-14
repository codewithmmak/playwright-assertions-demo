const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('Negative matchers test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io');
    await expect(page.getByText('Top Category'), 'top category text should not be visible').not.toBeVisible();
});