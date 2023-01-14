const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('Expect Retry test', async ({ page }) => {
    await expect(async () => {
        const response = await page.request.get('https://api.lambdatest.com/automation/api/v1/platforms');
        expect(response.status()).toBe(201);
    }).toPass();
});