const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('Custom Polling test', async ({ page }) => {
    await expect.poll(async () => {
        const response = await page.request.get('https://api.lambdatest.com/automation/api/v1/platforms');
        return response.status();
    }, {
        message: 'Response was either not 200 or timeout',
        intervals: [2_000, 4_000, 10_000],
        timeout: 60000,
    }).toBe(200);
});