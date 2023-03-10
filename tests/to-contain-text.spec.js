const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('Registration page validation message to contain text test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    const continueBtn = page.locator("//input[@value='Continue']");
    await continueBtn.click();
    const warningMsg = page.locator("//div[@class='alert alert-danger alert-dismissible']");
    await expect(warningMsg).toContainText("Warning: You must agree to the Privacy Policy!");
    await expect(warningMsg).toContainText("agree to the Privacy");
});