const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('Expect Custom Retry test', async ({ page }) => {
    await expect(async () => {
        const response = await page.request.get('https://api.lambdatest.com/automation/api/v1/platforms');
        expect(response.status()).toBe(200);
    }).toPass({
        intervals: [1_000, 2_000, 10_000],
        timeout: 60_000
    });
});