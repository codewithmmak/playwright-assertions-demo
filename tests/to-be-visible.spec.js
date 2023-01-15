const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('Login link is visible on right handside of Registration page', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');
    const loginLi = page.locator("aside[id='column-right'] a:nth-child(1)");
    await expect(loginLi).toBeVisible();
});