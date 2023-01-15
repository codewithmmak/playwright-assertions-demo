const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('Registration Privacy Policy checkbox is checked test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    const privacyCheckbox = page.locator("//label[@for='input-agree']");
    await privacyCheckbox.click();
    await expect(privacyCheckbox).toBeChecked();
});