const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('Registration page h1 element to have attribute test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    const noNewsLetterSubscribe = page.locator("#input-newsletter-no");
    await expect(noNewsLetterSubscribe).toHaveAttribute("type", "radio");
});