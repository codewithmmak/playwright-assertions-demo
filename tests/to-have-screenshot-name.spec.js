const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('First name on Registration page to have screenshot name test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    const continueBtn = page.locator("input[value='Continue']");
    await expect(continueBtn).toHaveScreenshot('continue-btn.PNG');
});