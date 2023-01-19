const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('Newsletter Yes radio is having value 1', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    const newsletterYesRadio = page.locator("#input-newsletter-yes");
    await expect(newsletterYesRadio).toHaveValue("1");
});