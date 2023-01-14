const { test } = require("../lambdatest-setup");
const { expect } = require("@playwright/test");

test('Fetch platform along with browsers and version supported using Playwright Expect Poll test', async ({ page }) => {
    await expect.poll(async () => {
        const response = await page.request.get('https://api.lambdatest.com/automation/api/v1/platforms');
        return response.status();
    }, {
        message: 'Response was either not 200 or timeout',
        timeout: 10000,
    }).toBe(200);
});