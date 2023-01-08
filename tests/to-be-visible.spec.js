const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('Continue button is visible on Registration page is visible test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');

    const continueBtn = page.locator("//input[@value='Continue']");
    await expect(continueBtn).toBeVisible();

})